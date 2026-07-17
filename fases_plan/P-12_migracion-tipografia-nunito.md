# P-12 — Migración de tipografía a Nunito + Open Sans (manual de identidad)

## Origen/contexto

Tras el pulido de P-11, Harold preguntó si la tipografía había cambiado (no había cambiado). A partir de esa pregunta, Harold compartió el manual de identidad oficial de ProSer (sección 8, Tipografía Corporativa), que especifica **Nunito** como tipografía principal y **Open Sans** (con Arial de reserva) como secundaria — en conflicto directo con lo que el sitio y el CLAUDE.md tenían documentado hasta ese momento (Cormorant Garamond + Inter). Se le presentó el conflicto explícitamente a Harold antes de tocar nada, dado el axioma 3 del CLAUDE.md (el CSS de marca no se toca sin aprobación explícita). Harold confirmó migrar el sitio al manual oficial.

## Decisiones de diseño (con el porqué)

- **Decisión:** reemplazar el import de Google Fonts (Cormorant Garamond + Inter) por Nunito + Open Sans en las 11 páginas.
  **Por qué:** el manual de identidad manda; el sitio estaba desviado del manual, no al revés.
- **Decisión:** alinear la jerarquía de pesos a la tabla 8.5 del manual — Display/hero en ExtraBold (800), H1 en Bold (700), H2/H3 en SemiBold (600, sin cambio), etiquetas/botones/nav en Nunito Bold (700), testimonios en Nunito Light Italic (300).
  **Por qué:** el manual define un rol tipográfico específico por nivel (Display, H1, H2, H3, Body, Etiqueta/Tag, Cita/Testimonio); replicar los pesos exactos mantiene la jerarquía visual pretendida por el diseñador original del manual.
- **Decisión:** subir el `line-height` de titulares con cursiva (hero-title, cta-title) a un mínimo de 1.1–1.15.
  **Por qué:** la itálica de Nunito en pesos bajos puede recortar descendentes (y, g, j, p, q) si el `line-height` es demasiado ajustado.
- **Decisión:** reemplazar el bullet `—` de la lista de Kliné (ya cambiado en P-11) se mantiene; no se reintrodujo el em dash.
- **Decisión:** mantener `--gris-text` en `#5B6472` (fijado en P-11) en vez de bajarlo al gris `#9B9B9B` que el manual especifica para captions.
  **Por qué:** `#9B9B9B` no alcanza contraste WCAG AA; se priorizó accesibilidad ya corregida sobre el valor exacto del manual para ese uso específico. Comunicado explícitamente a Harold como una desviación deliberada, pendiente de confirmación si prefiere lo contrario.
- **Decisión:** actualizar `CLAUDE.md` (axioma 3), `DESIGN.md` y el sidecar `.impeccable/design.json` para que documenten Nunito + Open Sans en vez de Cormorant Garamond + Inter.
  **Por qué:** evitar que la documentación del proyecto quede desincronizada con lo que el sitio realmente usa (regla general de estos archivos: reflejar el estado real, no el histórico).

## Entregables

- [x] Google Fonts actualizado en las 11 páginas HTML
- [x] Variables `--font-display` / `--font-body` actualizadas en `style.css`
- [x] Jerarquía de pesos alineada a la tabla 8.5 del manual (hero, H1, eyebrows, botones, nav, testimonios)
- [x] `CLAUDE.md` (axioma 3), `DESIGN.md` y `.impeccable/design.json` sincronizados con la nueva tipografía
- [x] Verificación en navegador de fuentes, pesos, itálicas y ausencia de overflow

## Checklist de testing manual

- [x] Se ve bien en escritorio (Inicio, Kliné, testimonios verificados)
- [x] Se ve bien en móvil
- [x] Los enlaces y botones funcionan
- [x] Los datos de contacto coinciden con el axioma de sincronización del CLAUDE.md (no se tocaron)
- [x] No quedaron emojis, "corporación", u otro texto prohibido por las reglas de contenido

## Bitácora de implementación

- **2026-07-16** — Conflicto de tipografía detectado y presentado a Harold tras su pregunta sobre si la fuente había cambiado en P-11. Harold compartió el manual de identidad y confirmó migrar a Nunito + Open Sans.
- **2026-07-16** — Reemplazado el link de Google Fonts en las 11 páginas, actualizadas las variables y pesos en `style.css`, verificado en navegador. `CLAUDE.md`, `DESIGN.md` y el sidecar de diseño sincronizados. Commit y push a `main` con confirmación de Harold.
