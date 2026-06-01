# Portafolio Astro

Migración del portafolio HTML original a Astro con arquitectura modular, componentes reutilizables y estilos desacoplados.

## Estructura principal

- `src/pages/index.astro` — página principal
- `src/layouts/BaseLayout.astro` — layout global
- `src/components/` — secciones y componentes reutilizables
- `src/data/portfolio.ts` — contenido del portafolio
- `src/styles/global.css` — estilos globales y animaciones
- `src/scripts/site.ts` — comportamiento de carga y móvil
- `src/utils/site.ts` — utilidades compartidas
- `docs/` — assets legacy y archivos públicos existentes

## Instalación

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Notas clave

- El proyecto conserva el estilo visual original y la experiencia responsive.
- Se mantuvieron las animaciones de carga y la estructura de secciones.
- Los assets existentes se sirven desde `docs/` mediante `astro.config.mjs`.
- La documentación técnica se encuentra en `Documentacion-Tecnica.md`.
- Los prompts usados para la migración están en `PROMPTS_USADOS.md`.
