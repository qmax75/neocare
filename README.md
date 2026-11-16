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

## Estructura

```text
neocare/
├── index.html
├── styles.css
├── script.js
├── apps.js
├── README.md
└── assets/
    └── favicon.svg
```

## Publicar en GitHub Pages

-



## Cómo agregar una aplicación

Editá `apps.js` y agregá un objeto dentro del array `window.NEOCARE_APPS`.

Ejemplo:

```javascript
{
  id: "mi-herramienta",
  title: "Mi herramienta",
  category: "calculadoras",
  categoryLabel: "Calculadoras clínicas",
  icon: "∑",
  description: "Descripción breve de la herramienta.",
  detail: "Descripción ampliada, alcance y limitaciones.",
  status: "available",
  statusLabel: "Disponible",
  url: "https://tu-aplicacion.example.com",
  tags: ["neonatología", "cálculo", "clínica"],
  version: "1.0",
  updated: "2026-11-05",
  references: ["Referencia bibliográfica o documentación."]
}
```

Categorías admitidas:

- `crecimiento`
- `calculadoras`
- `clinica`
- `gestion`
- `tecnologia`

Estados admitidos:

- `available` — Disponible.
- `beta` — Beta.
- `development` — En desarrollo.

Si `url` está vacío, la ficha mostrará que la aplicación todavía no está publicada. Usá siempre enlaces HTTPS cuando sea posible.

## Personalización inicial recomendada

.

## Seguridad y uso clínico

-
## Licencia

-
