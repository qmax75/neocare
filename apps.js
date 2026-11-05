/*
 * CATÁLOGO DE NEocare
 * Para agregar o editar herramientas, modificá los objetos de este archivo.
 *
 * Campos:
 * id: identificador único
 * title: nombre visible
 * category: crecimiento | calculadoras | clinica | gestion | tecnologia
 * description: resumen breve
 * detail: descripción ampliada para la ficha
 * status: available | beta | development
 * url: dirección de la aplicación. Usá "" si todavía no está publicada.
 * tags: palabras clave para el buscador
 * icon: símbolo breve
 * version / updated: información de versión (opcional)
 * references: referencias bibliográficas (opcional)
 */
window.NEOCARE_APPS = [
  {
    id: "neogrowth", title: "NeoGrowth", category: "crecimiento",
    categoryLabel: "Crecimiento neonatal", icon: "↗",
    description: "Evaluación antropométrica y seguimiento del crecimiento neonatal.",
    detail: "Espacio para integrar herramientas de evaluación del crecimiento, curvas de referencia y seguimiento antropométrico. Definí aquí las referencias utilizadas, los criterios de cálculo y la población objetivo.",
    status: "development", statusLabel: "En desarrollo", url: "",
    tags: ["Fenton", "INTERGROWTH-21st", "OMS", "percentilos", "peso", "talla", "perímetro cefálico", "edad gestacional"],
    version: "Próximamente", updated: "A definir",
    references: ["Incorporar referencias y documentación metodológica antes de publicar."]
  },
  {
    id: "ucin utri".replace(" ", ""), title: "UCINUTRI", category: "calculadoras",
    categoryLabel: "Nutrición neonatal", icon: "＋",
    description: "Herramientas de apoyo para cálculos y seguimiento nutricional neonatal.",
    detail: "Módulo destinado a reunir utilidades relacionadas con nutrición neonatal. Completar fórmulas, unidades, rangos, validaciones y referencias antes de habilitar el uso clínico.",
    status: "development", statusLabel: "En desarrollo", url: "",
    tags: ["nutrición", "nutrición parenteral", "aporte", "calorías", "proteínas", "lípidos", "glucosa"],
    version: "Próximamente", updated: "A definir",
    references: ["Documentar las guías y referencias utilizadas."]
  },
  {
    id: "neo-calc", title: "NeoCalc", category: "calculadoras",
    categoryLabel: "Calculadoras clínicas", icon: "∑",
    description: "Calculadoras y conversores para situaciones frecuentes en neonatología.",
    detail: "Catálogo de calculadoras clínicas. Cada cálculo deberá especificar fórmula, unidades, límites de uso, validación y fuente bibliográfica.",
    status: "development", statusLabel: "En desarrollo", url: "",
    tags: ["calculadora", "dosis", "conversión", "superficie corporal", "fluídos", "laboratorio"],
    version: "Próximamente", updated: "A definir",
    references: ["Agregar bibliografía específica para cada calculadora."]
  },
  {
    id: "neo-clinical", title: "NeoClinical", category: "clinica",
    categoryLabel: "Clínica neonatal", icon: "✚",
    description: "Recursos de apoyo a la evaluación y toma de decisiones clínicas.",
    detail: "Sección para herramientas clínicas, escalas y algoritmos de apoyo. Las herramientas no sustituyen la evaluación individual ni el juicio del profesional tratante.",
    status: "development", statusLabel: "En desarrollo", url: "",
    tags: ["score", "evaluación", "sepsis", "ictericia", "dolor", "ventilación", "clínica"],
    version: "Próximamente", updated: "A definir",
    references: ["Incorporar guías y consensos vigentes."]
  },
  {
    id: "neo-dashboard", title: "NeoDashboard", category: "gestion",
    categoryLabel: "Gestión y datos", icon: "▥",
    description: "Indicadores, visualización y análisis de información de unidades neonatales.",
    detail: "Panel para explorar indicadores de actividad, ocupación, procedencia, resultados y calidad asistencial. Definir diccionario de datos, denominadores y reglas de cálculo.",
    status: "development", statusLabel: "En desarrollo", url: "",
    tags: ["dashboard", "indicadores", "UCIN", "ocupación", "epicrisis", "epidemiología", "calidad"],
    version: "Próximamente", updated: "A definir",
    references: ["Documentar definiciones operativas y fuentes de datos."]
  },
  {
    id: "neo-referral", title: "NeoReferral", category: "clinica",
    categoryLabel: "Derivaciones", icon: "⇄",
    description: "Organización de derivaciones, referencias y contrarreferencias neonatales.",
    detail: "Proyecto para estructurar información clínica y administrativa de derivaciones, incluyendo procedencia, antecedentes perinatales, motivo, prioridad y retorno al hospital de origen.",
    status: "development", statusLabel: "En desarrollo", url: "",
    tags: ["derivación", "referencia", "contrarreferencia", "hospital", "procedencia", "red perinatal"],
    version: "Próximamente", updated: "A definir",
    references: ["Definir circuito asistencial y requisitos de privacidad."]
  },
  {
    id: "neo-epicrisis", title: "NeoEpicrisis", category: "tecnologia",
    categoryLabel: "IA e informática clínica", icon: "✧",
    description: "Exploración de herramientas inteligentes para resumir y estructurar epicrisis.",
    detail: "Proyecto de apoyo a la documentación clínica mediante IA. Requiere evaluación de calidad, trazabilidad, privacidad, supervisión profesional y validación antes de cualquier uso asistencial.",
    status: "development", statusLabel: "En desarrollo", url: "",
    tags: ["inteligencia artificial", "IA", "epicrisis", "resumen", "historia clínica", "NLP"],
    version: "Próximamente", updated: "A definir",
    references: ["Documentar modelo, evaluación, riesgos y supervisión humana."]
  },
  {
    id: "neo-fhir", title: "NeoFHIR", category: "tecnologia",
    categoryLabel: "Interoperabilidad", icon: "{ }",
    description: "Recursos y ejemplos para interoperabilidad clínica con estándares FHIR.",
    detail: "Espacio de referencia para modelos de información, recursos FHIR y terminologías aplicadas a escenarios neonatales. No incluir datos reales de pacientes.",
    status: "development", statusLabel: "En desarrollo", url: "",
    tags: ["FHIR", "HL7", "interoperabilidad", "CarePlan", "Condition", "Encounter", "API"],
    version: "Próximamente", updated: "A definir",
    references: ["Agregar perfiles, guías de implementación y versiones de estándar."]
  },
  {
    id: "neo-research", title: "NeoResearch", category: "gestion",
    categoryLabel: "Investigación", icon: "⌁",
    description: "Recursos digitales para investigación clínica y análisis de datos.",
    detail: "Herramientas y recursos para organización de estudios, diccionarios de variables, calidad de datos y análisis. Considerar los requisitos éticos y regulatorios aplicables.",
    status: "development", statusLabel: "En desarrollo", url: "",
    tags: ["investigación", "estudios clínicos", "datos", "calidad", "GCP", "ANMAT"],
    version: "Próximamente", updated: "A definir",
    references: ["Incorporar normativa y bibliografía aplicables."]
  },
  {
    id: "neo-library", title: "NeoLibrary", category: "tecnologia",
    categoryLabel: "Biblioteca científica", icon: "▤",
    description: "Bibliografía, guías, protocolos y documentos de referencia.",
    detail: "Biblioteca temática para organizar fuentes científicas y documentos de referencia. Verificar licencias y permisos antes de publicar documentos completos.",
    status: "development", statusLabel: "En desarrollo", url: "",
    tags: ["bibliografía", "protocolos", "guías", "consensos", "evidencia", "recursos"],
    version: "Próximamente", updated: "A definir",
    references: ["Agregar enlaces a fuentes originales y fecha de consulta."]
  }
];
