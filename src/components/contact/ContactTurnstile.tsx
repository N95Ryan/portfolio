import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: HTMLElement,
        options: {
          sitekey: string;
          theme?: "light" | "dark" | "auto";
          callback?: (token: string) => void;
          "expired-callback"?: () => void;
          "error-callback"?: () => void;
        },
      ) => string;
      reset: (widgetId?: string) => void;
      remove: (widgetId: string) => void;
    };
    onTurnstileLoad?: () => void;
  }
}

interface ContactTurnstileProps {
  siteKey: string;
  onTokenChange: (token: string) => void;
  onError?: () => void;
}

const TURNSTILE_SCRIPT_ID = "cf-turnstile-script";

export default function ContactTurnstile({
  siteKey,
  onTokenChange,
  onError,
}: ContactTurnstileProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const [scriptReady, setScriptReady] = useState(false);

  useEffect(() => {
    onTokenChange("");

    if (window.turnstile) {
      setScriptReady(true);
      return;
    }

    const existingScript = document.getElementById(TURNSTILE_SCRIPT_ID);
    if (existingScript) {
      window.onTurnstileLoad = () => setScriptReady(true);
      return;
    }

    window.onTurnstileLoad = () => setScriptReady(true);

    const script = document.createElement("script");
    script.id = TURNSTILE_SCRIPT_ID;
    script.src =
      "https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onTurnstileLoad";
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
  }, [onTokenChange]);

  useEffect(() => {
    if (!scriptReady || !containerRef.current || !window.turnstile || !siteKey) {
      return;
    }

    if (widgetIdRef.current) {
      window.turnstile.remove(widgetIdRef.current);
      widgetIdRef.current = null;
    }

    widgetIdRef.current = window.turnstile.render(containerRef.current, {
      sitekey: siteKey,
      theme: "dark",
      callback: (token) => onTokenChange(token),
      "expired-callback": () => onTokenChange(""),
      "error-callback": () => {
        onTokenChange("");
        onError?.();
      },
    });

    return () => {
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      }
    };
  }, [scriptReady, siteKey, onTokenChange, onError]);

  if (!siteKey) {
    return null;
  }

  return <div ref={containerRef} className="flex justify-center" />;
}

export function resetTurnstileWidget() {
  window.turnstile?.reset();
}
