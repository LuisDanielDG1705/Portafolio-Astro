# Prompts

## Prompt 1
Actúa como arquitecto de software especializado en desarrollo web moderno.

Estoy trabajando en el siguiente proyecto:

- Nombre del proyecto: portafolio-astro
- Objetivo general: transformar la plantilla aerial ubicada en html5up-aerial a un proyecto de astro totalmente funcional, escalable y fiel a la plantilla original (puedes descargar cosas desde html5up aerial si no encuentras o faltan cosas en la carpeta local).
- Framework principal: Astro
- Tecnologías relacionadas: JavaScript, HTML5, CSS3
- Tipo de proyecto: Portafolio personal
- Estado actual: Proyecto de Astro creado con dependencias básicas.

Necesito una propuesta de arquitectura que incluya:

1. Estructura de carpetas recomendada.
2. Responsabilidad de cada carpeta.
3. Separación entre componentes, layouts, páginas, estilos y datos.
4. Recomendaciones de escalabilidad.
5. Riesgos o decisiones que debo considerar.
6. Justificación técnica de la propuesta.

No propongas una arquitectura excesivamente compleja para el tamaño del proyecto.

## Prompt 2
Ignora completamente lo de portafolio y céntrate en convertir la plantilla a Astro con todo lo que conlleva y que ya te dije.

Necesito que el proyecto sea una conversión fiel de la plantilla HTML5 UP Aerial, incluyendo:

- estructura de carpetas adecuada para Astro,
- migración de assets y CSS a `public/`,
- página principal en `src/pages/index.astro`,
- layout base en `src/layouts/BaseLayout.astro`,
- compatibilidad con el estilo y la animación original.

Mantén el proyecto simple y funcional.

## Prompt 3
Sigue refinando en componentes Astro reutilizables.

Quiero que la plantilla convertida use componentes separados para:

- fondo y overlay,
- hero/header,
- redes sociales,
- footer.

Asegúrate de que los componentes estén bien organizados en `src/components/` y que el contenido se cargue desde datos estructurados si es posible.

## Prompt 4
Crea un componente `Background.astro` y verifica la responsividad.

Necesito:

- un componente para el wrapper de fondo animado,
- actualización del layout para usar ese componente,
- una explicación breve de las pruebas básicas de responsividad en el navegador.

No agregues complejidad innecesaria.

## Prompt 5
Ya hay un componente `SocialLinks` pero no `Hero`.

Crea `Hero.astro` con el título, subtítulo y redes sociales, y reemplaza al header directo en la página principal.

Después, elimina cualquier componente que quede sin uso.
