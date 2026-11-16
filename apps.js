/*
 * CATÁLOGO DE NeoCare
 * Para agregar o editar herramientas, modificá los objetos de este archivo.
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
    id: "infusion-calc", title: "Calculadoras de infusiones", category: "calculadoras",
    categoryLabel: "Calculadoras clínicas", icon: "⊕",
    description: "Preparación y dosificación de infusiones continuas en neonatología.",
    detail: "Calculadoras para preparar infusiones continuas a partir del peso, la dosis, la velocidad de flujo y el volumen final. Incluye adrenalina, diamorfina, dinoprostona (PGE2), dobutamina, dopamina, doxapram, epoprostenol, estreptoquinasa, fentanilo, heparina, insulina, isoprenalina, lidocaína, midazolam, morfina, nitroprusiato, noradrenalina, ranitidina, tolazolina y electrolitos. Cada calculadora indica la presentación de referencia y las instrucciones de preparación. Verificá siempre la fórmula, las unidades y la concentración de la presentación disponible antes de su uso clínico.",
    status: "available", statusLabel: "Disponible", url: "calculadoras-infusion.html",
    tags: ["infusión", "bomba de infusión", "dopamina", "dobutamina", "adrenalina", "noradrenalina", "morfina", "fentanilo", "midazolam", "insulina", "heparina", "prostaglandina", "dinoprostona", "nitroprusiato", "estreptoquinasa", "tolazolina", "doxapram", "isoprenalina", "lidocaína", "ranitidina", "diamorfina", "electrolitos", "preparación"],
    version: "1.0", updated: "2026-11-16",
    references: [
      "Fórmulas y concentraciones de referencia basadas en NeoWeb Infusions (neoweb.org.uk/Infusions).",
      "Verificar la presentación y concentración de cada fármaco en el centro asistencial antes de calcular.",
      "Las calculadoras son de apoyo; no reemplazan la validación farmacéutica ni el juicio clínico."
    ]
  },
  {
    id: "npt-calc", title: "Nutrición Parenteral (NPT)", category: "calculadoras",
    categoryLabel: "Nutrición neonatal", icon: "🥣",
    description: "Cálculo de macronutrientes, osmolaridad y relaciones calóricas en NPT.",
    detail: "Herramienta para el cálculo de nutrición parenteral total en neonatos. Permite ingresar peso, aporte hídrico, flujo de glucosa (GIR), aminoácidos, lípidos y sodio. Calcula automáticamente las calorías totales, la distribución de macronutrientes, la concentración de glucosa y la osmolaridad estimada, brindando alertas clínicas sobre la vía de administración (periférica vs. central) y la proporción adecuada de lípidos e hidratos de carbono.",
    status: "available", statusLabel: "Disponible", url: "calculadora-npt.html",
    tags: ["NPT", "nutrición parenteral", "GIR", "aminoácidos", "lípidos", "glucosa", "osmolaridad", "calorías", "macronutrientes"],
    version: "1.0", updated: "2026-11-16",
    references: [
      "Fórmulas y criterios de osmolaridad estándar para nutrición parenteral neonatal.",
      "Verificar el acceso vascular y las concentraciones máximas permitidas según el protocolo institucional."
    ]
  },
  {
    id: "ucinutri", title: "UCINUTRI", category: "calculadoras",
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
    tags: ["calculadora", "dosis", "conversión", "superficie corporal", "fluidos", "laboratorio"],
    version: "Próximamente", updated: "A definir",
    references: ["Agregar bibliografía específica para cada calculadora."]
  },
  {
    id: "neo-clinical", title: "NeoClinical", category: "clinica",
    categoryLabel: "Clínica neonatal", icon: "✚",
    description: "Recursos de apoyo a la evaluación y toma de decisiones clínicas.",
    detail: "Sección para herramientas clínicas, escalas y algoritmos de apoyo. Actualmente incluye la calculadora de Hiperbilirrubinemia basada en las guías de la Academia Americana de Pediatría (AAP) 2022 para el manejo de la ictericia neonatal, con umbrales de fototerapia y exanguinotransfusión. Las herramientas no sustituyen la evaluación individual ni el juicio del profesional tratante.",
    status: "available", statusLabel: "Disponible", url: "neo-clinical.html",
    tags: ["score", "evaluación", "sepsis", "ictericia", "bilirrubina", "fototerapia", "AAP 2022", "dolor", "ventilación", "clínica"],
    version: "1.0", updated: "2026-11-16",
    references: [
      "Kemper AR, et al. Clinical Practice Guideline Revision: Management of Hyperbilirubinemia in the Newborn Infant 35 or More Weeks of Gestation. Pediatrics. 2022;150(3):e2022058859.",
      "Incorporar guías y consensos vigentes."
    ]
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