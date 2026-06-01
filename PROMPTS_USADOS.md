# Prompts utilizados durante la migración

## Diseño de estructura Astro
```
Estoy construyendo un portafolio web basado en un template HTML existente.
Stack: Astro, CSS, HTML estático.
Escala esperada: sitio personal reutilizable.
¿Qué estructura de carpetas recomiendas para separarlo?
```

## Refactorización a componentes
```
Convierte un bloque HTML monolítico de la sección de proyectos en componentes reutilizables.
CÓDIGO ACTUAL: una sección con proyecto destacado y tarjetas de proyecto secundarias.
TECNOLOGÍA: Astro
```

## Componente de sección
```
Necesito diseñar el componente SectionHeader.
RESPONSABILIDAD: renderizar título y subtítulo de cada sección.
ENTRADAS (props): title, subtitle.
SALIDA: estructura HTML con clases de estilo reutilizables.
```

## Auditoría de arquitectura
```
Estoy auditando la conversión de un template HTML a Astro.
Necesito definir: layouts principales, componentes reutilizables, secciones independientes, scripts críticos y assets necesarios.
```

## Notas de decisión
```
¿Debo usar `publicDir` para servir activos legacy desde `docs` o copiar todos los archivos estáticos a `public` ahora?
Mi prioridad es: mantener los assets actuales sin duplicar, pero permitir una migración futura limpia.
```
