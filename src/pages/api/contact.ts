import { Resend } from "resend";
import type { APIRoute } from "astro";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  // Fonction helper pour garantir une réponse JSON
  const jsonResponse = (message: string, status: number = 500, details?: any) => {
    return new Response(
      JSON.stringify({ 
        message,
        ...(details && { details })
      }),
      { 
        status,
        headers: { 
          "Content-Type": "application/json",
          "Cache-Control": "no-cache"
        }
      }
    );
  };

  try {
    // Récupération des variables d'environnement
    const resendApiKey = import.meta.env.RESEND_API_KEY;
    const resendToEmail = import.meta.env.RESEND_TO_EMAIL || "n95jsryan@gmail.com";
    const resendFromEmail = import.meta.env.RESEND_FROM_EMAIL || "Portfolio Contact <contact@ryan-pina.dev>";

    // Vérification de la clé API
    if (!resendApiKey) {
      console.error("RESEND_API_KEY manquante");
      return jsonResponse("Configuration serveur invalide - RESEND_API_KEY manquante", 500);
    }

    if (!resendApiKey.startsWith("re_")) {
      console.error("RESEND_API_KEY format invalide (doit commencer par 're_')");
      return jsonResponse("Configuration serveur invalide - Format de clé API invalide", 500);
    }

    // Initialisation de Resend
    const resend = new Resend(resendApiKey);

    // Vérification du Content-Type
    const contentType = request.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      console.error("Content-Type invalide:", contentType);
      return jsonResponse("Content-Type doit être application/json", 400);
    }

    let body;
    try {
      body = await request.json();
    } catch (jsonError) {
      console.error("Erreur lors du parsing JSON:", jsonError);
      return jsonResponse("Format de données invalide", 400);
    }

    const { name, email, subject, message, lang } = body;

    // Validation
    if (!name || !email || !subject || !message) {
      return jsonResponse("Tous les champs sont requis", 400);
    }

    // Validation email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return jsonResponse("Adresse email invalide", 400);
    }

    // Envoi de l'email via Resend
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
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      
      // Extraire le message d'erreur de manière plus détaillée
      let errorMessage = "Erreur lors de l'envoi de l'email";
      let errorCode = null;
      
      if (error && typeof error === 'object') {
        if ('message' in error) {
          errorMessage = String(error.message);
        }
        if ('name' in error) {
          errorCode = String(error.name);
        }
      }
      
      // Message spécifique pour l'erreur de domaine non vérifié
      if (errorMessage.includes("only send testing emails to your own email address") || 
          errorCode === 'validation_error' ||
          errorMessage.includes("domain") ||
          errorMessage.includes("not verified")) {
        errorMessage = "Le domaine n'est pas encore vérifié. Veuillez vérifier le domaine dans Resend et attendre la propagation DNS.";
      }
      
      return jsonResponse(errorMessage, 500, {
        errorCode,
        ...(import.meta.env.DEV && { error })
      });
    }

    return jsonResponse("Email envoyé avec succès", 200, { data });
  } catch (error) {
    console.error("Erreur API:", error);
    
    return jsonResponse(
      "Erreur serveur",
      500,
      {
        error: error instanceof Error ? error.message : String(error),
        type: error instanceof Error ? error.constructor.name : typeof error,
        ...(import.meta.env.DEV && { stack: error instanceof Error ? error.stack : undefined })
      }
    );
  }
};
