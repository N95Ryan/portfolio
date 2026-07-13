import { useState } from "react";
import type { Language } from "@types/index";
import ContactTurnstile, {
  resetTurnstileWidget,
} from "@components/contact/ContactTurnstile";

interface ContactFormProps {
  lang: Language;
  turnstileSiteKey: string;
  translations: {
    form: {
      name: string;
      email: string;
      subject: string;
      message: string;
      send: string;
    };
    messages: {
      success: string;
      error_email_send: string;
      error_spam_check: string;
    };
  };
}

export default function ContactForm({
  lang,
  turnstileSiteKey,
  translations,
}: ContactFormProps) {
  const t = translations.form;
  const tMessages = translations.messages;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [company, setCompany] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");
  const [response, setResponse] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setResponse("");
    setError("");

    if (!turnstileSiteKey) {
      setError(tMessages.error_email_send);
      return;
    }

    if (!turnstileToken) {
      setError(tMessages.error_spam_check);
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          subject,
          message,
          lang,
          company,
          turnstileToken,
        }),
      });

      const contentType = res.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        setError(tMessages.error_email_send);
        return;
      }

      let data;
      try {
        const text = await res.text();
        data = JSON.parse(text);
      } catch {
        setError(tMessages.error_email_send);
        return;
      }

      if (res.ok) {
        setResponse(tMessages.success);
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
        setCompany("");
        setTurnstileToken("");
        resetTurnstileWidget();
      } else {
        const errorMsg = data?.message || tMessages.error_email_send;
        setError(errorMsg);
        resetTurnstileWidget();
        setTurnstileToken("");
      }
    } catch {
      setError(tMessages.error_email_send);
      resetTurnstileWidget();
      setTurnstileToken("");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full p-6 bg-gray-900 bg-opacity-50 rounded-lg shadow-lg">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div
          className="absolute left-[-9999px] h-0 w-0 overflow-hidden"
          aria-hidden="true"
        >
          <label htmlFor="company">Company</label>
          <input
            id="company"
            name="company"
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="name" className="text-lg font-medium text-white mb-2">
            {t.name}
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
            minLength={2}
            maxLength={5000}
            disabled={isSubmitting}
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="email"
            className="text-lg font-medium text-white mb-2"
          >
            {t.email}
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
            disabled={isSubmitting}
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="subject"
            className="text-lg font-medium text-white mb-2"
          >
            {t.subject}
          </label>
          <input
            id="subject"
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full p-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
            minLength={3}
            maxLength={5000}
            disabled={isSubmitting}
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="message"
            className="text-lg font-medium text-white mb-2"
          >
            {t.message}
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            rows={5}
            required
            minLength={10}
            maxLength={5000}
            disabled={isSubmitting}
          />
        </div>
        <ContactTurnstile
          siteKey={turnstileSiteKey}
          onTokenChange={setTurnstileToken}
          onError={() => setError(tMessages.error_spam_check)}
        />
        <button
          type="submit"
          disabled={isSubmitting || !turnstileToken}
          className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "..." : t.send}
        </button>
      </form>
      {response && (
        <p className="mt-6 text-center text-green-400 font-medium">
          {response}
        </p>
      )}
      {error && (
        <p className="mt-6 text-center text-red-400 font-medium">{error}</p>
      )}
    </div>
  );
}
