export default {
  async fetch(request, env) {
    const origen = env.ORIGEN_PERMITIDO;
    const corsHeaders = {
      "Access-Control-Allow-Origin": origen,
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    };

    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders });
    }

    if (request.method !== "POST") {
      return new Response(JSON.stringify({ error: "Método no permitido" }), {
        status: 405,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    let datos;
    try {
      datos = await request.json();
    } catch {
      return new Response(JSON.stringify({ error: "JSON inválido" }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    const nombre = (datos.nombre || "").toString().trim().slice(0, 200);
    const email = (datos.email || "").toString().trim().slice(0, 200);
    const telefono = (datos.telefono || "").toString().trim().slice(0, 50);
    const servicio = (datos.servicio || "").toString().trim().slice(0, 200);
    const mensaje = (datos.mensaje || "").toString().trim().slice(0, 5000);
    const honeypot = (datos.sitio_web || "").toString().trim();

    // Honeypot anti-spam: si un bot llena este campo oculto, se descarta silenciosamente.
    if (honeypot) {
      return new Response(JSON.stringify({ ok: true }), {
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    if (!nombre || !email || !mensaje) {
      return new Response(JSON.stringify({ error: "Faltan campos requeridos" }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailValido) {
      return new Response(JSON.stringify({ error: "Correo inválido" }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    const escapeHtml = (s) =>
      s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

    const htmlBody = `
      <h2>Nuevo mensaje desde el formulario de contacto de prosercps.org</h2>
      <p><strong>Nombre:</strong> ${escapeHtml(nombre)}</p>
      <p><strong>Correo:</strong> ${escapeHtml(email)}</p>
      <p><strong>Teléfono:</strong> ${escapeHtml(telefono) || "No indicado"}</p>
      <p><strong>Servicio de interés:</strong> ${escapeHtml(servicio) || "No indicado"}</p>
      <p><strong>Mensaje:</strong></p>
      <p>${escapeHtml(mensaje).replace(/\n/g, "<br>")}</p>
    `;

    const resendResp = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: env.REMITENTE,
        to: [env.DESTINO],
        reply_to: email,
        subject: `Nuevo mensaje de contacto: ${nombre}`,
        html: htmlBody,
      }),
    });

    if (!resendResp.ok) {
      const errText = await resendResp.text();
      return new Response(JSON.stringify({ error: "No se pudo enviar el correo", detalle: errText }), {
        status: 502,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    return new Response(JSON.stringify({ ok: true }), {
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  },
};
