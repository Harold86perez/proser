# P-11 — Pulido de interacciones, accesibilidad y motion en style.css

## Origen/contexto

Harold pidió revisar y mejorar el diseño del sitio aplicando los principios de Emil Kowalski, Impeccable y el taste-skill anti-slop, manteniendo la paleta oficial, la tipografía vigente en ese momento (Cormorant Garamond + Inter) y sin frameworks. El sitio ya tenía un sistema visual maduro (P-05/P-06) pero nunca había pasado por un pulido explícito de estados de interacción, accesibilidad de foco/contraste y soporte de `prefers-reduced-motion`.

## Decisiones de diseño (con el porqué)

- **Decisión:** agregar curvas de easing de marca (`--ease-out`, `--ease-in-out`) y usarlas en todas las transiciones de botones y tarjetas, reemplazando el `ease` por defecto del navegador.
  **Por qué:** el `ease` genérico se siente plano; una curva `ease-out` fuerte da sensación de respuesta inmediata (principio de Emil Kowalski).
- **Decisión:** agregar estado `:active` con `scale(0.97)` a todos los botones y al CTA del nav.
  **Por qué:** ningún botón tenía retroalimentación táctil al presionar; es la corrección más citada en la guía de Emil para que la interfaz se sienta "escuchada".
- **Decisión:** anillo de foco visible (`:focus-visible`) en enlaces, botones y controles, y reemplazo del `outline: none` sin sustituto en los inputs de formulario por un `box-shadow` de foco.
  **Por qué:** accesibilidad de teclado — quitar el outline sin reemplazo es una violación de WCAG 2.4.7 detectada durante el pulido.
- **Decisión:** oscurecer `--gris-text` de `#6B7280` a `#5B6472`.
  **Por qué:** el tono original no alcanzaba contraste AA (4.5:1) sobre `--gris-bg`, usado en stat-cards y footer.
- **Decisión:** ampliar objetivos táctiles a 44×44px (botón de menú móvil, flechas del carrusel de testimonios) y los puntos de paginación a un área de 32px con el punto visual de 8px centrado.
  **Por qué:** varios controles estaban por debajo del mínimo recomendado de accesibilidad táctil.
- **Decisión:** extender `prefers-reduced-motion: reduce` a todo el sitio (antes solo cubría `.reveal`), incluyendo el carrusel de logos y el carrusel de testimonios.
  **Por qué:** el marquee infinito y la transición del track de testimonios no respetaban la preferencia de movimiento reducido del usuario.
- **Decisión:** reemplazar el bullet `—` (em dash) de la lista de beneficios de Kliné por un punto sólido.
  **Por qué:** el em dash como viñeta es una convención tipográfica ajena al sistema visual; un punto sólido es coherente con el lenguaje visual de íconos orgánico→círculo del sitio.
- **Decisión:** no tocar paleta, tipografía ni copy en esta fase.
  **Por qué:** axioma 3 del CLAUDE.md — el CSS de marca no se toca sin aprobación explícita, y el alcance pedido era solo interacción/accesibilidad/motion.

## Entregables

- [x] Curvas de easing de marca (`--ease-out`, `--ease-in-out`) aplicadas a botones y tarjetas
- [x] Estados `:active` en todos los botones y el CTA del nav
- [x] Foco visible (`:focus-visible`) en enlaces, botones y formularios
- [x] Contraste AA corregido en `--gris-text`
- [x] Objetivos táctiles de 44px en controles de navegación y carrusel de testimonios
- [x] `prefers-reduced-motion` cubriendo todo el sitio (marquee de logos, track de testimonios)
- [x] Bullet de lista de Kliné reemplazado

## Checklist de testing manual

- [x] Se ve bien en escritorio
- [x] Se ve bien en móvil (objetivos táctiles verificados a 44px)
- [x] Los enlaces y botones funcionan, con foco de teclado visible verificado en navegador
- [x] Los datos de contacto coinciden con el axioma de sincronización del CLAUDE.md (no se tocaron)
- [x] No quedaron emojis, "corporación", u otro texto prohibido por las reglas de contenido

## Bitácora de implementación

- **2026-07-16** — Auditoría con las guías de Emil Kowalski, Impeccable (polish.md) y design-taste-frontend. Aplicados todos los cambios listados arriba en `style.css`. Verificado en navegador (servidor estático local): easing, contraste, foco por teclado y tamaños táctiles. Commit y push a `main` con confirmación de Harold.
