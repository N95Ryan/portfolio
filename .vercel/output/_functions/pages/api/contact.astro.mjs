import { Resend } from 'resend';
export { renderers } from '../../renderers.mjs';

const resendApiKey = "re_VAUbdh8M_3ha9czReHvUX6i1pMMTeTgH2";
const resendToEmail = "n95jsryan@gmail.com";
const resendFromEmail = "Portfolio Contact <contact@ryan-pina.dev>";
const resend = new Resend(resendApiKey);
const prerender = false;
const POST = async ({ request }) => {
  try {
    if (!resendApiKey) ;
    const contentType = request.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      console.error("Content-Type invalide:", contentType);
      return new Response(
        JSON.stringify({ message: "Content-Type doit être application/json" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    let body;
    try {
      body = await request.json();
    } catch (jsonError) {
      console.error("Erreur lors du parsing JSON:", jsonError);
      return new Response(
        JSON.stringify({ message: "Format de données invalide" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    const { name, email, subject, message, lang } = body;
    if (!name || !email || !subject || !message) {
      return new Response(
        JSON.stringify({ message: "Tous les champs sont requis" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ message: "Adresse email invalide" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    console.log("=== Début de l'envoi d'email ===");
    console.log("RESEND_API_KEY présente:", !!resendApiKey);
    console.log("RESEND_FROM_EMAIL:", resendFromEmail);
    console.log("RESEND_TO_EMAIL:", resendToEmail);
    console.log("From:", resendFromEmail);
    console.log("To:", [resendToEmail]);
    console.log("Subject:", subject);
    console.log("Données reçues:", { name, email, subject, messageLength: message?.length, lang });
    const { data, error } = await resend.emails.send({
      from: resendFromEmail,
      to: [resendToEmail],
      replyTo: email,
      subject: `${subject}`,
      html: `
        <!DOCTYPE html>
        <html lang="fr">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Nouveau message</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Google Sans', Roboto, Arial, sans-serif; background-color: #ffffff;">
          <div style="max-width: 100%; margin: 0; padding: 0;">
            
            <!-- Message Content -->
            <div style="padding: 20px; font-size: 14px; line-height: 1.6; color: #202124;">
              <p style="margin: 0 0 8px;"><strong>De:</strong> ${name} (${email})</p>
              <p style="margin: 0 0 16px;"><strong>Sujet:</strong> ${subject}</p>
              <div style="margin-top: 16px; padding-top: 16px; border-top: 1px solid #e8eaed;">
                <p style="margin: 0 0 16px; white-space: pre-wrap;">${message}</p>
              </div>
            </div>
            
            <!-- Separator -->
            <div style="margin: 32px 20px; border-top: 1px solid #e8eaed;"></div>
            
            <!-- Footer Info -->
            <div style="padding: 0 20px 20px; font-size: 12px; color: #5f6368;">
              <p style="margin: 0 0 8px;">
                <strong style="color: #202124;">Message envoyé depuis le portfolio</strong>
              </p>
              <p style="margin: 0;">
                Langue: ${lang === "fr" ? "Français" : "English"}
              </p>
            </div>
            
          </div>
        </body>
        </html>
      `,
      text: `
Nouveau message depuis le portfolio

Nom: ${name}
Email: ${email}
Sujet: ${subject}
Langue: ${lang === "fr" ? "Français" : "English"}

Message:
${message}
      `
    });
    if (error) {
      console.error("Resend error details:", JSON.stringify(error, null, 2));
      console.error("Resend error type:", typeof error);
      console.error("Resend error:", error);
      let errorMessage = "Erreur lors de l'envoi de l'email";
      let errorCode = null;
      if (error && typeof error === "object") {
        if ("message" in error) {
          errorMessage = String(error.message);
        }
        if ("name" in error) {
          errorCode = String(error.name);
        }
      }
      if (errorMessage.includes("only send testing emails to your own email address") || errorCode === "validation_error" || errorMessage.includes("domain") || errorMessage.includes("not verified")) {
        errorMessage = "Le domaine n'est pas encore vérifié. Veuillez vérifier le domaine dans Resend et attendre la propagation DNS.";
      }
      return new Response(
        JSON.stringify({
          message: errorMessage,
          error,
          errorCode,
          details: process.env.NODE_ENV === "development" ? error : void 0
        }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    console.log("Email envoyé avec succès:", data);
    return new Response(
      JSON.stringify({ message: "Email envoyé avec succès", data }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" }
      }
    );
  } catch (error) {
    console.error("=== Erreur API ===");
    console.error("Type d'erreur:", error instanceof Error ? error.constructor.name : typeof error);
    console.error("Message:", error instanceof Error ? error.message : String(error));
    console.error("Stack:", error instanceof Error ? error.stack : "N/A");
    console.error("Erreur complète:", error);
    return new Response(
      JSON.stringify({
        message: "Erreur serveur",
        error: error instanceof Error ? error.message : String(error),
        type: error instanceof Error ? error.constructor.name : typeof error
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" }
      }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
