# Documentación Técnica de Migración a Astro

## Arquitectura del proyecto

- `src/layouts/BaseLayout.astro` — layout principal que encapsula la carga de fuentes, FontAwesome, la estructura de fondo y el script de comportamiento.
- `src/components` — componentes reutilizables para secciones, tarjetas de proyecto y el pie de página.
- `src/pages/index.astro` — página de inicio que compone las secciones del portafolio.
- `src/data/portfolio.ts` — contenido estático modelado como datos, separado de la presentación.
- `src/styles/global.css` — estilos globales de la plantilla, animaciones y comportamiento responsive.
- `src/scripts/site.ts` — script organizado que reproduce el comportamiento original de carga, orientación y toque.
- `src/utils/site.ts` — utilitario mínimo para mantener valores compartidos.
- `public/.gitkeep` — placeholder para futura migración de activos de `docs` a `public`.

## Clasificación de componentes

- Componentes únicos:
  - `HeroSection.astro`
  - `SkillsSection.astro`
  - `ProjectsSection.astro`
  - `AboutSection.astro`
  - `ContactSection.astro`
  - `Footer.astro`
- Componentes reutilizables:
  - `SectionHeader.astro`
  - `ProjectCard.astro`
- Layout principal:
  - `BaseLayout.astro`

## Dependencias y librerías usadas

- `astro` — motor de renderizado y compilación.
- `typescript` — para tipado y configuración moderna de Astro.
- `Font Awesome` — icons de redes sociales y documentos, cargado desde CDN.
- `Google Fonts` — tipografía `Source Sans Pro`.

## Patrón de reutilización detectado

- `project-card` — patrón card repetido para proyectos secundarios.
- `section-header` — patrón de encabezado uniforme para todas las secciones.
- `panel` — contenedor de sección con fondo translúcido y bordes, reutilizado en todas las secciones.
- `social-nav` — colección de enlaces de navegación social con iconos.

## Decisiones técnicas clave

- Se adoptó una estructura modular `layouts/components/pages/data/styles/scripts/utils`.
- El CSS global se centralizó en `src/styles/global.css` para desacoplar la presentación del HTML original.
- El `header` y las animaciones de iconos se conservaron con desacoplamiento visual mediante clases y keyframes reutilizables.

## Troubleshooting notes

- Si la página no muestra imágenes, verificar que `astro.config.mjs` usa `publicDir: './docs'` y que las rutas de imagen comienzan con `/assets/images/projects/...`.
- Si el icono de FontAwesome no carga, revisa el enlace CDN en `BaseLayout.astro`.
- Si el proyecto no compila, instala dependencias con `npm install` desde la raíz del proyecto.

## Comandos del proyecto

- `npm install`
- `npm run dev`
- `npm run build`
- `npm run preview`
