# BACKLOG — prosercps.org

> Lista viva de pendientes del sitio. Se marca `[x]` cuando algo queda resuelto y se agregan ítems nuevos apenas surgen (no hace falta esperar a una "fase" formal para anotarlos aquí). Cuando un pendiente se convierte en una fase de trabajo real, se referencia su archivo en `fases_plan/` junto al ítem.

## 🔴 Corto plazo

- [ ] El formulario de contacto no envía nada (`contacto/index.html`) — el JS solo simula éxito, el mensaje nunca llega. **En pausa:** requiere un Worker propio para enviar el correo sin tocar el DNS de Zoho (donde vive info@prosercps.org); falta decidir el método de envío (ver bitácora de `fases_plan/P-02_formulario-contacto.md` si se abre esa fase).
- [x] YouTube sigue apareciendo en `contacto/index.html` — reemplazado por LinkedIn
- [x] `privacidad/index.html` usaba `<br>` para separar email/teléfono/dirección — ahora son `<p>` individuales
- [ ] Falta el enlace "Blog" en el menú de `index.html` (portada)
- [ ] Borrar la carpeta vacía con nombre raro en la raíz (`{sobre,servicios,...}`), residuo de un comando mal ejecutado

## 🟡 Mediano plazo

- [ ] Comprimir/convertir a WebP las imágenes más pesadas (200–480 KB): `foto-equipo.jpg`, `foto-salud-mental.jpg`, `proser-logo.png`, `logo-buena-esperanza.png`, `logo-san-pedro-claver.jpg`, entre otras
- [ ] Agregar `loading="lazy"` y `width`/`height` a las imágenes de todas las páginas para evitar que la página "salte" al cargar
- [ ] Crear página 404 personalizada
- [ ] Eliminar la duplicación del bloque de 40 logos en `index.html` (hoy se repite dos veces en el HTML para el efecto de carrusel infinito)
- [ ] Corregir la etiqueta de accesibilidad del botón de menú (☰) para que cambie entre "Abrir menú" / "Cerrar menú"
- [ ] Confirmar con Harold: ¿el footer debe mostrar los tres correos en el orden definido, o solo `info@prosercps.org` como hoy?

## 🟢 Largo plazo

- [ ] Agregar datos estructurados (schema.org "Negocio Local") para mejorar aparición en Google
- [ ] Activar Cloudflare Web Analytics (gratis, sin cookies) para medir visitas
- [ ] Evaluar migrar de HTML plano a un generador de sitios simple (ej. Astro) para no tener que repetir cambios de contacto/footer en las 11 páginas a mano
- [ ] Agregar cabeceras de seguridad básicas vía archivo `_headers` de Cloudflare Pages
- [ ] Protección anti-spam en el formulario de contacto (una vez esté funcionando de verdad)

---

*Última actualización: 2026-07-13 — auditoría inicial completa del sitio.*
