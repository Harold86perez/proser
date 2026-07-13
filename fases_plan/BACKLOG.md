# BACKLOG — prosercps.org

> Lista viva de pendientes del sitio. Se marca `[x]` cuando algo queda resuelto y se agregan ítems nuevos apenas surgen (no hace falta esperar a una "fase" formal para anotarlos aquí). Cuando un pendiente se convierte en una fase de trabajo real, se referencia su archivo en `fases_plan/` junto al ítem.

## 🔴 Corto plazo

- [x] El formulario de contacto no envía nada — resuelto con un Cloudflare Worker (`worker-formularios/`) que envía por Resend (cuenta nueva y separada de haroldperez.com) a info@prosercps.org, sin tocar el DNS de Zoho. Incluye honeypot anti-spam.
- [x] YouTube sigue apareciendo en `contacto/index.html` — reemplazado por LinkedIn
- [x] `privacidad/index.html` usaba `<br>` para separar email/teléfono/dirección — ahora son `<p>` individuales
- [x] El proyecto de Cloudflare Pages no estaba conectado a GitHub (era de "carga directa", último deploy manual del 7 de julio) — ningún commit se publicaba solo. Se conectó a `Harold86perez/proser` rama `main` con implementaciones automáticas habilitadas.
- [ ] Falta el enlace "Blog" en el menú de `index.html` (portada)
- [ ] Borrar la carpeta vacía con nombre raro en la raíz (`{sobre,servicios,...}`), residuo de un comando mal ejecutado

## 🟡 Mediano plazo

- [ ] Comprimir/convertir a WebP las imágenes más pesadas (200–480 KB): `foto-equipo.jpg`, `foto-salud-mental.jpg`, `proser-logo.png`, `logo-buena-esperanza.png`, `logo-san-pedro-claver.jpg`, entre otras
- [ ] Agregar `loading="lazy"` y `width`/`height` a las imágenes de todas las páginas para evitar que la página "salte" al cargar
- [ ] Crear página 404 personalizada
- [ ] Eliminar la duplicación del bloque de 40 logos en `index.html` (hoy se repite dos veces en el HTML para el efecto de carrusel infinito)
- [ ] Corregir la etiqueta de accesibilidad del botón de menú (☰) para que cambie entre "Abrir menú" / "Cerrar menú"
- [ ] Confirmar con Harold: ¿el footer debe mostrar los tres correos en el orden definido, o solo `info@prosercps.org` como hoy?

## 🎨 Diseño / estética (de la revisión "la web se ve demasiado simple")

- [x] Todo tenía el mismo radio de esquina y sombra en toda la web — ahora cada familia de tarjetas (servicios, testimonios, ebooks, proyectos, blog) tiene su propia forma y sombra
- [x] La tipografía Cormorant Garamond estaba subutilizada — ahora protagoniza las citas de testimonios (más grande, itálica) y los números destacados
- [x] Casi todo el sitio era azul — se agregó ciclo de color (azul/magenta/verde) en testimonios, estadísticas, beneficios de membresía, y CTA final de Servicios (magenta) y Recursos (verde)
- [x] Las tarjetas eran idénticas entre secciones — variadas: proyectos y blog con esquinas más rectas (editorial), servicios y ebooks con esquinas más suaves
- [x] Poco contraste de tamaño entre textos — títulos de sección y del CTA final agrandados
- [ ] Las fotos reales (equipo, testimonios) no tienen tratamiento de color de marca
- [x] No había iconografía propia — los íconos de servicios/Kliné ahora tienen forma orgánica (no círculo genérico) con animación sutil al pasar el mouse
- [ ] La franja multicolor de marca se usa poco, solo como línea divisoria delgada
- [ ] Layouts muy simétricos y predecibles (todo en grid de 2-3 columnas iguales)
- [ ] El hero de la portada es solo texto + botones, sin imagen o elemento visual fuerte
- [ ] Casi no hay micro-interacciones (animaciones de entrada al hacer scroll, etc.)

## 🟢 Largo plazo

- [ ] Agregar datos estructurados (schema.org "Negocio Local") para mejorar aparición en Google
- [ ] Activar Cloudflare Web Analytics (gratis, sin cookies) para medir visitas
- [ ] Evaluar migrar de HTML plano a un generador de sitios simple (ej. Astro) para no tener que repetir cambios de contacto/footer en las 11 páginas a mano
- [ ] Agregar cabeceras de seguridad básicas vía archivo `_headers` de Cloudflare Pages
- [x] Protección anti-spam en el formulario de contacto — se agregó un campo honeypot oculto en el Worker

---

*Última actualización: 2026-07-13 — auditoría inicial completa del sitio.*
