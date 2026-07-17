---
name: ProSer — Consultores Psicosociales
description: Sitio institucional de servicios psicosociales con cinco líneas de trabajo diferenciadas por color, sobre una base cálida y editorial.
colors:
  azul: "#38ace4"
  azul-dark: "#287ca4"
  azul-gradient-end: "#194d67"
  azul-light: "#e7f5fc"
  magenta: "#c02c7c"
  magenta-gradient-end: "#7d1d51"
  magenta-light: "#f9eaf2"
  verde: "#509c44"
  verde-gradient-end: "#34652c"
  verde-light: "#eaf3e9"
  amarillo: "#f8cc2c"
  amarillo-text: "#bc9b21"
  amarillo-light: "#fefbee"
  azul-empresarial: "#385cac"
  azul-empresarial-gradient-end: "#1f335f"
  azul-empresarial-light: "#ebeff7"
  petroleo: "#1a2a3a"
  negro-marca: "#0d1117"
  gris-bg: "#f1f4f9"
  gris-line: "#d8dee7"
  gris-text: "#5b6472"
  negro: "#1a1a1a"
  blanco: "#ffffff"
typography:
  display:
    fontFamily: "Nunito, system-ui, sans-serif"
    fontSize: "clamp(2.6rem, 5vw, 4.2rem)"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Nunito, system-ui, sans-serif"
    fontSize: "clamp(1.9rem, 3.4vw, 3rem)"
    fontWeight: 600
    lineHeight: 1.12
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Nunito, system-ui, sans-serif"
    fontSize: "1.15rem"
    fontWeight: 600
    lineHeight: 1.25
  body:
    fontFamily: "Open Sans, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.75
  label:
    fontFamily: "Nunito, system-ui, sans-serif"
    fontSize: "0.68rem"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "0.18em"
rounded:
  sm: "4px"
  lg: "16px"
  pill: "20px"
  organic: "42% 58% 65% 35% / 45% 40% 60% 55%"
  full: "50%"
spacing:
  sm: "0.9rem"
  md: "2rem"
  lg: "4rem"
components:
  button-primary:
    backgroundColor: "{colors.azul}"
    textColor: "{colors.blanco}"
    rounded: "{rounded.sm}"
    padding: "0.8rem 1.75rem"
  button-primary-hover:
    backgroundColor: "{colors.azul-dark}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.negro}"
    rounded: "{rounded.sm}"
    padding: "0.8rem 1.75rem"
  service-card:
    backgroundColor: "{colors.blanco}"
    rounded: "{rounded.lg}"
    padding: "2rem"
---

# Design System: ProSer — Consultores Psicosociales

## 1. Overview

**Creative North Star: "El Consultorio Luminoso"**

ProSer se siente como un consultorio bañado en luz natural, no como una clínica fría ni un panel de software corporativo: superficies blancas y neutras que dejan respirar el contenido, y cinco colores vivos — uno por cada línea de servicio — que aportan calidez y variedad sin romper la cohesión de marca. La tipografía sigue el manual de identidad de ProSer: Nunito, una sans-serif geométrica de extremos redondeados, para títulos, etiquetas y botones, que da la calidez y accesibilidad que el manual pide; Open Sans para el cuerpo de texto, que aporta la legibilidad en pantalla que el manual exige para formularios y contenido largo. El sistema rechaza explícitamente el azul corporativo plano tipo SaaS y el blanco excesivo de un entorno hospitalario: la calidez humana debe sentirse tanto como la rigurosidad científica.

**Key Characteristics:**
- Superficies blancas/neutras como base, con color introducido de forma deliberada por línea de servicio, nunca de forma genérica.
- Formas orgánicas (iconos, radios asimétricos) que se resuelven en formas precisas al interactuar — orgánico pero preciso.
- Elevación suave: sombras ligeras en reposo, ligero levantamiento (`translateY`) y sombra más marcada al hover.
- Una banda multicolor (`--band`) como firma visual recurrente, usada como divisor de sección y regla decorativa.

## 2. Colors

Blanco y grises neutros como lienzo; cinco colores saturados —cada uno reservado exclusivamente para una línea de servicio— aportan identidad y variedad sin competir entre sí en una misma vista.

### Primary
- **Azul Clínico** (#38ace4): color de marca general y CTA por defecto en Inicio; también identifica en exclusiva Acompañamiento Terapéutico.

### Secondary
- **Magenta Pedagógico** (#c02c7c): identifica en exclusiva Acompañamiento Pedagógico; aparece en variantes de tarjetas (testimonios, stats) como acento secundario rotativo.
- **Verde Comunitario** (#509c44): identifica en exclusiva Consultoría Social Comunitaria; mismo uso rotativo en tarjetas.
- **Azul Empresarial** (#385cac): identifica en exclusiva Consultoría Empresarial.
- **Amarillo Proyección** (#f8cc2c): identifica en exclusiva Proyección Social; su variante de texto (#bc9b21) se usa donde el amarillo puro no cumple contraste.

### Tertiary
- **Petróleo** (#1a2a3a) y **Negro de Marca** (#0d1117): páginas o secciones generales que no pertenecen a una sola línea de servicio (Sobre, Blog, Kliné, Membresía).

### Neutral
- **Blanco** (#ffffff): fondo base de casi toda la interfaz, incluyendo el footer (regla fija: el footer nunca es oscuro).
- **Gris Fondo** (#f1f4f9): fondo de bloques secundarios (stat cards, franjas alternas).
- **Gris Línea** (#d8dee7): bordes y separadores sutiles.
- **Gris Texto** (#5b6472): texto secundario / de apoyo, nunca el cuerpo principal de lectura. Ajustado desde el tono más claro original para cumplir contraste WCAG AA sobre `--gris-bg`.
- **Negro** (#1a1a1a): texto principal.

### Named Rules
**The One Line, One Color Rule.** Cada línea de servicio tiene su color oficial fijo (azul=terapéutico, magenta=pedagógico, verde=social comunitaria, azul-empresarial=empresarial, amarillo=proyección social) y ese color no se reutiliza para otra línea en ningún contexto. La franja superior (hero) de cada página de servicio usa el mismo color que su CTA final.

**The White Footer Rule.** El footer siempre es blanco, nunca oscuro, sin excepción — es la única superficie que no varía por contexto.

## 3. Typography

**Display Font:** Nunito (con fallback system-ui, sans-serif) — tipografía principal de ProSer según el manual de identidad, sección 8.2.
**Body Font:** Open Sans (con fallback Arial, sans-serif) — tipografía secundaria del manual, sección 8.3, con Arial como reserva universal (sección 8.4).

**Character:** Una sans-serif geométrica de extremos redondeados para títulos, etiquetas y botones, que comunica calidez y accesibilidad; una sans-serif de alta legibilidad para el cuerpo de texto. La misma tensión que sostiene toda la marca entre calidez humana y rigor profesional, ahora expresada en pesos de una sola familia en vez de una mezcla serif/sans.

### Hierarchy
- **Display** (ExtraBold 800, `clamp(2.6rem, 5vw, 4.2rem)`, 1.1): titulares de hero; combina peso 800 en romano con cursiva Light (300) en la segunda línea para dar calidez sin perder impacto.
- **Headline** (SemiBold 600, `clamp(1.9rem, 3.4vw, 3rem)`, 1.12): títulos de sección (`.section-title`), H2 según el manual.
- **Title** (SemiBold 600, 1.15rem, 1.25): títulos de tarjeta (servicio, proyecto), H3 según el manual.
- **Body** (Regular 400, 1rem, 1.75): párrafos generales en Open Sans; cuerpo de tarjeta a 0.86rem con el mismo line-height generoso. Máximo recomendado 65–75ch.
- **Label** (Bold 700, 0.68rem, mayúsculas, `letter-spacing: 0.18em`): eyebrows, botones y micro-etiquetas en Nunito Bold (`text-transform: uppercase`) — el rol "Etiqueta/Tag" del manual.
- **Quote** (Light 300 Italic, 1.15rem, 1.6): testimonios (`.test-texto`) en Nunito Light Italic, tal como especifica el manual para citas.

### Named Rules
**The Roman-Italic Pairing Rule.** Los titulares de hero alternan peso 800 romano y cursiva 300 dentro del mismo `<h1>`, nunca dos pesos romanos — la cursiva Light es lo que introduce calidez sin perder jerarquía. Todo italic de titular reserva `line-height` ≥1.1 para no recortar descendentes (y, g, j, p, q).

## 4. Elevation

Sistema de elevación suave y sutil: superficies en reposo llevan una sombra ligera y difusa (`--shadow`), y responden al hover con un levantamiento físico (`translateY(-3px` a `-4px)`) combinado con una sombra más amplia (`--shadow-md` / `--shadow-lg`). Nunca sombras duras ni contornos marcados; la profundidad se siente como respuesta a la interacción, no como decoración permanente.

### Shadow Vocabulary
- **shadow** (`0 2px 12px rgba(0,0,0,0.07)`): estado de reposo de tarjetas de servicio, testimonio y proyecto.
- **shadow-md** (`0 4px 24px rgba(0,0,0,0.10)`): hover de testimonios, navbar al hacer scroll, menú móvil abierto.
- **shadow-lg** (`0 12px 40px rgba(20,120,180,0.14)`): hover de tarjetas de servicio, proyecto y ebook — la sombra lleva un tinte azulado propio de marca, no gris neutro.

### Named Rules
**The Lift-on-Hover Rule.** Toda tarjeta interactiva se eleva físicamente al hover (`translateY` negativo + sombra ampliada); una tarjeta sin esta respuesta se siente incompleta en este sistema.

## 5. Components

Componentes orgánicos pero precisos: las formas de reposo son suaves y asimétricas, y se resuelven en geometría exacta (círculo perfecto, borde recto) en el momento de la interacción — el gesto mismo comunica atención y cuidado.

### Buttons
- **Shape:** esquinas casi rectas (4px, `--radius`).
- **Primary:** fondo `--azul` (#38ace4), texto blanco, label en mayúsculas con `letter-spacing: 0.06em`, padding `.8rem 1.75rem`.
- **Hover / Focus:** el fondo oscurece a `--azul-dark` (#287ca4) y el botón sube 1px (`translateY(-1px)`), transición de 0.2s / 0.15s.
- **Outline (dark/blue):** fondo transparente, borde de 1.5px del color de acento; al hover se invierte a fondo sólido + texto blanco.

### Cards / Containers
- **Corner Style:** `--radius-lg` (16px) en tarjetas de servicio, testimonio y ebook; `--radius` (4px, casi recto) en tarjetas de proyecto, misión/visión y stats.
- **Background:** blanco sobre fondo de sección blanco o gris claro (`--gris-bg`).
- **Shadow Strategy:** ver Elevation — reposo en `--shadow`, hover en `--shadow-md`/`--shadow-lg`.
- **Border:** las tarjetas de proyecto llevan `border-top` de 4px en el color de su categoría (única excepción documentada al principio general de "sin bordes de acento laterales/decorativos": es un borde superior grueso, no una franja lateral).
- **Internal Padding:** 2rem estándar; 1.75–2.25rem en variantes con más contenido (testimonios).

### Icons (Signature Component)
Los íconos de servicio y de línea usan un contenedor con `border-radius: var(--radius-organic)` (una forma tipo blob, `42% 58% 65% 35% / 45% 40% 60% 55%`) que se transforma a `border-radius: 50%` (círculo perfecto) más una leve rotación (`rotate(-6deg)` o `6deg`) al hacer hover. Esta transformación orgánico→circular es la firma visual más distintiva del sistema y debe reservarse para contenedores de ícono, no generalizarse a otros componentes.

### Navigation
- **Style:** navbar transparente que gana `--shadow-md` y borde inferior al hacer scroll (`nav.scrolled`).
- **Typography:** enlaces en Nunito Bold (rol de etiqueta), color heredado, `:hover` pasa a `--azul`.
- **CTA:** el último enlace del nav (`Contáctanos`) es un botón sólido (`--azul` / `--azul-dark` al hover), diferenciado del resto de enlaces de texto.
- **Mobile:** por debajo de 768px los enlaces colapsan en un panel `.nav-links.open` con `--shadow-md`, alineado a un menú hamburguesa de tres líneas.

## 6. Do's and Don'ts

### Do:
- **Do** usar el color oficial de cada línea de servicio (azul, magenta, verde, azul-empresarial, amarillo) de forma exclusiva para esa línea — nunca intercambiarlos ni usarlos como decoración libre.
- **Do** mantener el footer blanco siempre, sin excepción.
- **Do** aplicar la transformación orgánico→círculo únicamente a contenedores de ícono, como firma de marca reconocible.
- **Do** elevar (`translateY` + sombra) toda tarjeta interactiva al hover; una tarjeta estática se siente incompleta en este sistema.
- **Do** combinar romano 600 y cursiva 400 en titulares de hero para introducir calidez sin perder jerarquía.
- **Do** usar la banda multicolor (`--band`) como firma recurrente de divisor de sección, no como decoración aislada de una sola vista.

### Don't:
- **Don't** usar azul corporativo plano ni estética tipo SaaS genérico — ProSer no es una herramienta de software.
- **Don't** llevar el blanco a un extremo clínico/hospitalario impersonal; el blanco es lienzo, no ausencia de calidez.
- **Don't** usar `border-left` o `border-right` como franja de acento decorativa; el único borde de acento permitido es el `border-top` de 4px en tarjetas de proyecto.
- **Don't** usar gradientes en texto (`background-clip: text`) ni glassmorphism decorativo — no forman parte del sistema.
- **Don't** poner emojis en ninguna parte del sitio.
- **Don't** usar un color de línea de servicio para representar otra línea o para decoración genérica fuera de su contexto.
