# prosercps.org — CLAUDE.md

> **Regla de oro:** este archivo solo contiene identidad, axiomas y arquitectura — cosas que casi nunca cambian.
> El avance del día a día, las decisiones de cada tarea y las bitácoras de implementación van en [`fases_plan/`](fases_plan/), nunca aquí.
> Si algo que ibas a escribir aquí describe "lo que se hizo esta semana" en vez de "lo que el proyecto es", va en `fases_plan/`, no en este archivo.

## Identidad

- **Proyecto:** ProSer — sitio web institucional en prosercps.org
- **Propietario:** Harold Pérez
- **Cómo explicar cosas técnicas:** Harold no es programador. Explicaciones en español claro, sin tecnicismos innecesarios y sin condescendencia — se le habla como a un adulto capaz que simplemente no ha necesitado aprender jerga de desarrollo, no como a alguien que no entiende.

## Stack

HTML/CSS puro (sin frameworks, sin build tools, sin package.json) · GitHub (`Harold86perez/proser`, rama `main`) · Cloudflare Pages (auto-deploy desde GitHub) · DNS en Cloudflare

## Axiomas irrompibles (seguridad/negocio)

1. **Confirmación antes de push solo para propuestas propias.** Si Harold pidió explícitamente la tarea, se hace commit y push directo al terminarla, sin pedir confirmación adicional. Si la propuesta de cambio surge por iniciativa propia (ej. una mejora, un ajuste no solicitado), se muestra el cambio y se espera un "sí" claro de Harold antes de hacer `git push`, porque cualquier commit a `main` se publica automáticamente en el sitio real vía Cloudflare Pages.
2. **Los datos de contacto deben estar sincronizados en todas las páginas, sin excepción.** Este sitio no tiene una fuente centralizada de datos (es HTML puro, cada página es un archivo independiente), así que cada vez que cambie un email, el WhatsApp o el teléfono, hay que buscarlo y reemplazarlo en TODAS las páginas — no puede quedar ninguna con el dato viejo.
3. **El CSS de marca no se toca sin aprobación explícita.** Colores, tipografías (Cormorant Garamond + Inter) y la banda multicolor como divisor de secciones son fijos. Cualquier cambio de identidad visual requiere que Harold lo apruebe primero.
4. **Cada línea de servicio tiene un color oficial fijo, y la franja superior (hero) de cada página debe usar el mismo color que su CTA final.** Colores oficiales de marca (confirmados por Harold):
   - `--azul` **#38ace4** = Acompañamiento Terapéutico (clínico)
   - `--magenta` **#c02c7c** = Acompañamiento Pedagógico (educativo)
   - `--verde` **#509c44** = Consultoría Social Comunitaria
   - `--azul-empresarial` **#385cac** = Consultoría Empresarial
   - `--amarillo` **#f8cc2c** = Proyección Social / proyectos hacia la comunidad
   - `--negro-marca` **#0D1117** = Kliné y Recursos/Ebooks (no son una línea de servicio)
   - `--petroleo` **#1A2A3A** = Sobre y Blog (contenido general, no de una sola línea)
   - Membresía combina dos colores (`--azul-empresarial` + `--magenta`) en degradado, porque aplica tanto a empresas como a instituciones educativas.
5. **El sitio se posiciona en 3 niveles geográficos, y esa cobertura debe mencionarse de forma consistente.** Nivel local: Pereira, Dosquebradas, Santa Rosa de Cabal y Risaralda en general. Nivel regional: Colombia. Nivel internacional: hispanohablantes en cualquier parte del mundo (servicio virtual). Cada vez que se mencione la cobertura geográfica del sitio (meta descriptions, footer, hero, contacto), debe incluir los 3 niveles — no solo Pereira, y no solo "cualquier parte del mundo" sin mencionar lo local/regional primero.

## Axiomas de ingeniería (convenciones de código)

- El footer siempre debe ser blanco, nunca oscuro.
- El logo siempre va sobre fondo blanco/claro.
- YouTube reemplazado por LinkedIn en todos los footers.
- Nunca usar "corporación" — siempre solo "ProSer" (ProSer es una marca, no una entidad legal, no tiene NIT).
- No emojis en ninguna parte del sitio.
- WhatsApp: mensajes pre-llenados nunca incluyen "Harold" por nombre.
- Reemplazar "24 horas" → "lo antes posible".
- Reemplazar "toda Colombia" → "cualquier parte del mundo".
- Reemplazar "Con base en Pereira" → "Ubicado en Pereira, Risaralda".
- No usar "conversación de 20 minutos" en CTAs.
- Reemplazar "triple perfil profesional" → "tres líneas de trabajo especializadas".
- Emails en tags `<p>` individuales, nunca separados por `<br>`.
- Orden de correos donde aparezcan: info@haroldperez.com, harold@haroldperez.com, info@prosercps.org.
- Un solo número de WhatsApp/teléfono: 3054303746, sin excepciones.
- En español: siempre usar ambos signos de interrogación (¿...?), sin excepción.

## Contacto

info@prosercps.org · info@haroldperez.com · harold@haroldperez.com
WhatsApp: +57 305 430 3746
Instagram: @prosercps
LinkedIn: linkedin.com/in/harold86perez

## Mapa de arquitectura de carpetas

Cada carpeta es una página del sitio, con su propio `index.html` (no hay routing ni plantillas compartidas — cada archivo es independiente):

| Carpeta/archivo | Página |
|---|---|
| `index.html` | Inicio |
| `sobre/` | Sobre ProSer |
| `servicios/` | Servicios |
| `proyectos/` | Proyectos |
| `blog/` | Blog |
| `ebooks/` | Ebooks |
| `membresia/` | Membresía |
| `kline/` | Kline (página específica de proyecto/cliente) |
| `links/` | Página de enlaces |
| `contacto/` | Contacto |
| `privacidad/` | Política de privacidad |
| `style.css` | Hoja de estilos global, compartida por todas las páginas |
| `scroll-reveal.js` | Script compartido (cargado con `<script defer>` en las 11 páginas) que anima la aparición de tarjetas/bloques al hacer scroll |
| `logo-*.jpg/png`, `foto-*.jpg` | Imágenes de marca, equipo y logos de clientes/aliados |
| `favicon*.png/svg` | Íconos del sitio |
| `robots.txt`, `sitemap.xml` | SEO técnico |
| `worker-formularios/` | Cloudflare Worker (`prosercps-formulario`) que recibe el POST del formulario de `contacto/` y lo envía por correo a info@prosercps.org vía Resend (cuenta separada de la de haroldperez.com). Se despliega con `npx wrangler deploy` desde esa carpeta — no se auto-despliega con el push del sitio. |
| `_headers` | Configuración de cabeceras HTTP de Cloudflare Pages — baja el caché de `style.css`/`scroll-reveal.js` a 60s para que los cambios se vean rápido en el navegador de los visitantes mientras se itera sobre el diseño. |

## Protocolo de trabajo con `fases_plan/`

- **Pendientes sueltos:** [`fases_plan/BACKLOG.md`](fases_plan/BACKLOG.md) es el checklist vivo de todo lo que falta por hacer (corto/mediano/largo plazo). Se actualiza apenas surge un pendiente nuevo, y se marca `[x]` apenas se resuelve — no hace falta abrir una fase formal solo para anotar algo ahí.
- **Abrir una fase:** antes de empezar algo nuevo (una función, una página, un cambio grande), se crea un archivo `fases_plan/P-XX_nombre-corto.md` copiando la plantilla de [`fases_plan/P-01_ejemplo.md`](fases_plan/P-01_ejemplo.md). Se llena "Origen/contexto" y "Decisiones de diseño" antes de tocar código.
- **Reportar avance:** a medida que se construye, se va llenando la "Bitácora de implementación" de esa fase con fecha y qué se hizo — no hace falta esperar a terminar para escribir ahí.
- **Cerrar una fase:** se marca su checklist de testing manual, se actualiza su estado en la tabla de roadmap de este archivo (✅/🟡/⏳) y en `BACKLOG.md` si aplicaba a algún pendiente, y solo entonces se hace commit/push (con confirmación de Harold, según el axioma de arriba).

## Roadmap

| Fase | Página/función | Estado |
|---|---|---|
| P-00 | Inicio (`index.html`) | ✅ hecho |
| P-00 | Sobre ProSer (`sobre/`) | ✅ hecho |
| P-00 | Servicios (`servicios/`) | ✅ hecho |
| P-00 | Proyectos (`proyectos/`) | ✅ hecho |
| P-00 | Blog (`blog/`) | ✅ hecho |
| P-00 | Ebooks (`ebooks/`) | ✅ hecho |
| P-00 | Membresía (`membresia/`) | ✅ hecho |
| P-00 | Kline (`kline/`) | ✅ hecho |
| P-00 | Links (`links/`) | ✅ hecho |
| P-00 | Contacto (`contacto/`) | ✅ hecho |
| P-00 | Privacidad (`privacidad/`) | ✅ hecho |
| P-01 | Documentación del proyecto (CLAUDE.md + fases_plan/) | ✅ hecho |
| P-02 | Auditoría técnica completa del sitio (SEO, accesibilidad, rendimiento, cumplimiento de reglas de marca) | ✅ hecho |
| P-03 | Formulario de contacto funcional (Cloudflare Worker + Resend, con anti-spam) | ✅ hecho |
| P-04 | Conexión de Cloudflare Pages a GitHub (despliegue automático real) | ✅ hecho |
| P-05 | Rediseño visual: tarjetas diferenciadas, tipografía de marca protagonista, franja multicolor con más presencia, layouts asimétricos, hero reforzado, micro-interacciones (scroll-reveal + spotlight), secciones con corte diagonal y textura | ✅ hecho |
| P-06 | Corrección de colores oficiales de marca (hex exactos por línea de servicio) en todo el sitio | ✅ hecho |
| P-07 | Optimización de vista móvil (scroll horizontal en varias páginas, foto de hero oculta) | ✅ hecho |
| P-08 | SEO local/regional/internacional: datos estructurados schema.org, meta descriptions, textos visibles con las 3 capas geográficas, sitemap enviado a Search Console | ✅ hecho |
| P-09 | Google Business Profile optimizado (categorías, área de servicio) | ✅ hecho (por Harold) |

## Deploy

Cualquier commit a la rama `main` despliega automáticamente en Cloudflare Pages. Siempre hacer commit y push después de confirmar los cambios con Harold.
