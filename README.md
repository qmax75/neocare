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

1. Creá un repositorio en GitHub, por ejemplo `neocare`.
2. Subí todos los archivos y carpetas de este proyecto a la raíz del repositorio.
3. En GitHub, ingresá a **Settings → Pages**.
4. En **Build and deployment**, elegí **Deploy from a branch**.
5. Seleccioná la rama `main` y la carpeta `/ (root)`.
6. Guardá los cambios. GitHub Pages publicará el sitio y mostrará la URL.

No hace falta ejecutar un proceso de compilación ni instalar paquetes.

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

Antes de publicar:

- Reemplazar `contacto@neocare.com.ar` por una dirección real.
- Verificar disponibilidad y titularidad del dominio y de la marca NeoCare.
- Actualizar el catálogo para que solo incluya aplicaciones y estados reales.
- Sustituir los textos de ejemplo por descripciones, referencias y versiones verificadas.
- Agregar enlaces reales a las aplicaciones publicadas.
- Revisar los avisos de privacidad y uso según el funcionamiento efectivo de cada herramienta.

## Seguridad y uso clínico

Este portal es estático y no incorpora autenticación, backend ni almacenamiento de información clínica en servidor. Los favoritos se guardan en el almacenamiento local del navegador.

No ingresar datos identificatorios ni información clínica de pacientes en este sitio. Antes de publicar herramientas que procesen datos de salud, evaluar privacidad, seguridad, validación clínica, trazabilidad y requisitos regulatorios aplicables.

El contenido informativo no reemplaza el juicio clínico profesional. Cada herramienta debe documentar su finalidad, población objetivo, fórmulas, unidades, fuentes, limitaciones y validación.

## Licencia

Definir la licencia del proyecto antes de habilitar reutilización o redistribución por terceros.
