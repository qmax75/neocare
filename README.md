# NeoCare — Neonatal Digital Health

Portal web estático para centralizar aplicaciones, utilidades y recursos digitales orientados a la neonatología.

## Características

- Diseño responsive para desktop, tablet y móvil.
- Catálogo de aplicaciones administrado desde `apps.js`.
- Búsqueda por nombre, descripción y palabras clave.
- Filtros por categoría.
- Favoritos guardados localmente en el navegador.
- Fichas informativas en ventana modal.
- Sin backend ni dependencias de JavaScript externas.
- Preparado para GitHub Pages.

## Herramientas publicadas

| Herramienta | Estado | Ruta |
|---|---|---|
| **Calculadoras de infusiones** | Disponible | `calculadoras-infusion.html` |
| Resto del catálogo | En desarrollo | — |

Las calculadoras de infusiones incluyen 20 fármacos y soluciones (adrenalina, diamorfina, dinoprostona, dobutamina, dopamina, doxapram, electrolitos, epoprostenol, estreptoquinasa, fentanilo, heparina, insulina, isoprenalina, lidocaína, midazolam, morfina, nitroprusiato, noradrenalina, ranitidina, tolazolina). Las fórmulas y concentraciones están basadas en NeoWeb Infusions. **Verificar la presentación comercial disponible en cada centro antes de su uso clínico.**

## Estructura

```text
neocare/
├── index.html
├── styles.css
├── script.js
├── apps.js
├── calculadoras-infusion.html
├── README.md
└── assets/
    └── favicon.svg