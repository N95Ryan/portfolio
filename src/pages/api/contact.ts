import { Resend } from "resend";
import type { APIRoute } from "astro";

const resendApiKey = import.meta.env.RESEND_API_KEY;
if (!resendApiKey) {
  console.error("RESEND_API_KEY n'est pas définie dans les variables d'environnement");
}

const resend = new Resend(resendApiKey);

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    // Vérification de la clé API
    if (!resendApiKey) {
      console.error("RESEND_API_KEY manquante");
      return new Response(
        JSON.stringify({ message: "Configuration serveur invalide" }),
        { 
          status: 500,
          headers: { "Content-Type": "application/json" }
        }
      );
    }

    const { name, email, subject, message, lang } = await request.json();

    // Validation
    if (!name || !email || !subject || !message) {
      return new Response(
        JSON.stringify({ message: "Tous les champs sont requis" }),
        { 
          status: 400,
          headers: { "Content-Type": "application/json" }
        }
      );
    }

    // Validation email
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

    // Envoi de l'email via Resend
    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["n95jsryan@gmail.com"],
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
              <p style="margin: 0 0 16px; white-space: pre-wrap;">${message}</p>
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
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return new Response(
        JSON.stringify({ 
          message: "Erreur lors de l'envoi de l'email",
          error: error 
        }),
        { 
          status: 500,
          headers: { "Content-Type": "application/json" }
        }
      );
    }

    return new Response(
      JSON.stringify({ message: "Email envoyé avec succès", data }),
      { 
        status: 200,
        headers: { "Content-Type": "application/json" }
      }
    );
  } catch (error) {
    console.error("API error:", error);
    return new Response(
      JSON.stringify({ 
        message: "Erreur serveur",
        error: error instanceof Error ? error.message : String(error)
      }),
      { 
        status: 500,
        headers: { "Content-Type": "application/json" }
      }
    );
  }
};
