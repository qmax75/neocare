# NeoCare — Neonatal Digital Health

Portal web estático para centralizar aplicaciones, utilidades y recursos digitales orientados a la neonatología.

## Características

- Portada renovada con encabezado, hero, accesos rápidos y navegación responsive.
- Exploración por categorías alineadas con las categorías reales del catálogo.
- Herramientas destacadas con acceso directo a las tres aplicaciones publicadas.
- Catálogo administrado desde `apps.js`, con búsqueda, filtros y fichas informativas.
- Favoritos guardados localmente en el navegador.
- Recursos científicos vinculados con la documentación de las herramientas disponibles.
- Ventana modal con descripción, estado, versión, etiquetas y referencias.
- Sin backend ni dependencias JavaScript externas.
- Preparado para GitHub Pages.

## Herramientas publicadas

| Herramienta | Estado | Ruta |
|---|---|---|
| **Calculadoras de infusiones** | Disponible | `calculadoras-infusion.html` |
| **Nutrición Parenteral (NPT)** | Disponible | `calculadora-npt.html` |
| **NeoClinical** | Disponible | `neo-clinical.html` |
| Resto del catálogo | En desarrollo | — |

El catálogo y sus estados se administran en `apps.js`. No se deben marcar herramientas como disponibles hasta que su aplicación esté publicada y validada.

## Recursos y referencias

- NeoClinical: Kemper AR, et al. *Clinical Practice Guideline Revision: Management of Hyperbilirubinemia in the Newborn Infant 35 or More Weeks of Gestation*. Pediatrics. 2022;150(3):e2022058859. https://doi.org/10.1542/peds.2022-058859
- Calculadoras de infusiones: NeoWeb Infusions (https://www.neoweb.org.uk/Infusions), identificada como fuente de referencia en la ficha de la herramienta.

Las referencias visibles no sustituyen la revisión de vigencia, la validación institucional ni el juicio clínico profesional.

## Estructura principal

```text
neocare/
├── index.html
├── styles.css
├── script.js
├── apps.js
├── calculadoras-infusion.html
├── calculadora-npt.html
├── neo-clinical.html
├── README.md
└── assets/
    └── favicon.svg
```

## Desarrollo

El sitio es estático. Para incorporar una herramienta nueva, agregá su ficha en `apps.js`, asignale una categoría existente, indicá su estado real y completá descripción, ruta, etiquetas y referencias. No alteres fórmulas ni criterios clínicos sin revisión profesional y documentación verificable.
