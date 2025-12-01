const servicios = [
  {
    id: "cobertura-eventos",
    nombre: "Cobertura en Video de Eventos",
    promesa: {
      titulo: "Transforma tus eventos en contenido que construye marca y genera acción",
      descripcion: "Cada evento es una inversión. Nosotros nos aseguramos de que esa inversión siga trabajando para ti mucho después de que las luces se apaguen. Creamos videos que no solo documentan lo que pasó, sino que cumplen objetivos estratégicos: fortalecer tu marca, atraer audiencia y generar expectativa para lo que viene."
    },
    ventajas: [
      {
        numero: 1,
        titulo: "Cada frame fortalece tu marca",
        descripcion: "No hacemos videos 'bonitos' por hacerlos. Cada decisión creativa —desde el encuadre hasta la música— está pensada para comunicar los valores de tu marca. Nuestro estilo cinematográfico no es decoración; es una herramienta estratégica que eleva la percepción de tu evento y, por consecuencia, de tu marca. Cuando tu audiencia ve contenido de alto nivel visual, asocia ese nivel de calidad directamente con tu empresa."
      },
      {
        numero: 2,
        titulo: "Entendemos qué necesita comunicar cada evento",
        descripcion: "No todos los eventos necesitan el mismo tipo de video. Nosotros analizamos tus objetivos antes de encender la cámara: ¿quieres demostrar éxito y momentum? ¿O necesitas convertir curiosos en asistentes? Te guiamos para elegir el formato correcto y creamos contenido que cumple metas específicas, no solo material genérico para 'tener algo'."
      },
      {
        numero: 3,
        titulo: "Contenido listo para trabajar en tus canales",
        descripcion: "Entregamos videos optimizados para el uso que les darás: formatos para Instagram, LinkedIn, tu web, o presentaciones internas. No tendrás que pensar en ediciones adicionales o adaptaciones. Desde el primer día, tienes material profesional que puedes publicar con confianza y que representa fielmente el nivel de tu marca."
      }
    ],
    paquetes: [
      {
        id: "highlight",
        nombre: "Highlight",
        icono: "📸",
        subtitulo: "Para demostrar que tu marca está activa y en movimiento",
        objetivos: [
          "Mostrar que tu evento fue un éxito rotundo",
          "Generar interés y conversación en redes sociales",
          "Fortalecer la percepción de tu marca como activa y relevante",
          "Crear FOMO en tu audiencia para futuros eventos"
        ],
        incluye: [
          "1 video principal de 60-90 segundos (formato horizontal)",
          "2 versiones adaptadas para redes sociales (1:1 para Instagram/Facebook feed y 9:16 para Stories/Reels)",
          "Música licenciada libre de derechos",
          "Color grading cinematográfico que refuerza la identidad visual de tu marca",
          "Entrega en 7-10 días hábiles"
        ],
        precio: {
          minimo: 800,
          maximo: 1200,
          moneda: "USD"
        }
      },
      {
        id: "event-journey",
        nombre: "Event Journey",
        icono: "🎬",
        subtitulo: "Para convertir espectadores en futuros asistentes",
        objetivos: [
          "Atraer público comprometido a futuras ediciones",
          "Generar credibilidad mediante testimonios auténticos",
          "Comunicar el valor real de asistir a tu evento",
          "Documentar contenido clave que puede reutilizarse en marketing"
        ],
        incluye: [
          "1 video narrativo de 3-5 minutos con estructura editorial completa",
          "Entrevistas a organizadores (2-3 personas)",
          "Entrevistas a asistentes (4-6 testimonios)",
          "Cobertura de momentos clave y contenido del evento",
          "Subtítulos en español",
          "3 versiones de formato (16:9 para web/YouTube, 1:1 y 9:16 para redes)",
          "2-3 clips cortos adicionales (30-45 seg) extraídos del video principal para promoción",
          "Música licenciada y diseño de audio profesional",
          "Color grading cinematográfico alineado con tu marca",
          "Entrega en 14-18 días hábiles"
        ],
        precio: {
          minimo: 2200,
          maximo: 3500,
          moneda: "USD"
        }
      }
    ]
  },
  {
    id: "video-corporativo",
    nombre: "Video Corporativo",
    promesa: {
      titulo: "Dale a tu marca la historia visual que merece",
      descripcion: "Tu empresa es más que un logotipo y una misión en la pared. Es la pasión de las personas que la construyen, los procesos que la hacen única y los valores que la definen. Creamos videos corporativos cinematográficos que no solo muestran lo que haces, sino que comunican por qué tu marca importa. Contenido que inspira a tu equipo, convence a inversionistas y conecta con clientes de verdad."
    },
    ventajas: [
      {
        numero: 1,
        titulo: "Traducimos tu esencia en lenguaje visual",
        descripcion: "Tu marca tiene una personalidad, valores y una historia única. Nosotros no hacemos videos corporativos genéricos con música de stock y planos aburridos. Creamos piezas cinematográficas que capturan la autenticidad de tu empresa y la comunican de forma que resuena emocionalmente. Cada proyecto refleja quién eres realmente, no una versión corporativa plástica."
      },
      {
        numero: 2,
        titulo: "Video que genera orgullo y compromiso",
        descripcion: "Un buen video corporativo no solo informa: inspira. Ya sea para mostrar tu cultura a futuros clientes, comprometer a tu equipo interno o convencer inversionistas, creamos contenido que las personas quieren ver y compartir. El resultado es que tu marca no solo se ve profesional, se siente real y aspiracional."
      },
      {
        numero: 3,
        titulo: "Contenido estratégico con múltiples usos",
        descripcion: "No creamos videos de un solo uso. Cada producción está pensada para vivir en tu página web, presentaciones comerciales, redes sociales, eventos y comunicación interna. Entregamos formatos listos para cada canal, maximizando el retorno de tu inversión en producción audiovisual."
      }
    ],
    paquetes: [
      {
        id: "the-spark",
        nombre: "The Spark",
        icono: "⚡",
        subtitulo: "Para mostrar la energía y pasión detrás de tu marca",
        objetivos: [
          "Capturar la atención en segundos con contenido visualmente impactante",
          "Mostrar la personalidad vibrante de tu marca",
          "Conectar emocionalmente con tu audiencia",
          "Contenido perfecto para redes sociales, sitio web y presentaciones"
        ],
        incluye: [
          "1 video dinámico de 60-90 segundos",
          "Cobertura visual de tu equipo, producto, servicios o espacio",
          "Música seleccionada estratégicamente que refuerza la energía de tu marca",
          "Color grading cinematográfico alineado con tu identidad visual",
          "3 versiones de formato (16:9, 1:1, 9:16)",
          "Entrega en 10-12 días hábiles"
        ],
        precio: {
          minimo: 1200,
          maximo: 1800,
          moneda: "USD"
        }
      },
      {
        id: "inside-the-brand",
        nombre: "Inside the Brand",
        icono: "🎥",
        subtitulo: "Para contar tu historia de forma profunda y memorable",
        objetivos: [
          "Conectar con colaboradores, inversionistas o clientes a nivel emocional",
          "Documentar tu historia, procesos o valores de forma cinematográfica",
          "Generar orgullo de marca interno y externo",
          "Contenido evergreen ideal para aniversarios, onboarding o comunicación estratégica"
        ],
        incluye: [
          "1 video documental de 4-7 minutos con narrativa estructurada",
          "Entrevistas a fundadores/directivos (2-4 personas)",
          "Entrevistas a colaboradores clave (3-5 testimonios)",
          "Cobertura de procesos, espacios y momentos significativos de la marca",
          "Subtítulos en español",
          "Diseño de audio profesional (música, mezcla de voces)",
          "Color grading cinematográfico que refleja la personalidad de tu marca",
          "3 versiones de formato (16:9, 1:1, 9:16)",
          "3-4 clips cortos (30-60 seg) extraídos para uso en redes y presentaciones",
          "Entrega en 18-25 días hábiles"
        ],
        precio: {
          minimo: 3500,
          maximo: 5500,
          moneda: "USD"
        }
      }
    ]
  },
  {
    id: "redes-sociales",
    nombre: "Redes Sociales",
    promesa: {
      titulo: "Construye una presencia digital que refleja el nivel de tu marca",
      descripcion: "En redes sociales no basta con estar presente: hay que destacar. Creamos contenido visual cinematográfico que hace que tu marca se vea y se sienta diferente en el feed. No hacemos posts genéricos que se pierden entre miles; producimos piezas que generan pausas, engagement y fortalecen tu identidad digital. Cada video trabaja para construir comunidad y posicionar tu marca como referente en tu industria."
    },
    ventajas: [
      {
        numero: 1,
        titulo: "Calidad cinematográfica adaptada a redes sociales",
        descripcion: "Tu contenido en Instagram o LinkedIn no tiene por qué verse amateur. Aplicamos las mismas técnicas de iluminación, composición y color grading de producciones cinematográficas, pero optimizadas para el consumo rápido de redes. El resultado: tu marca se destaca visualmente y transmite profesionalismo en cada publicación."
      },
      {
        numero: 2,
        titulo: "Contenido que construye marca, no solo llena el feed",
        descripcion: "Cada pieza de contenido está diseñada para reforzar tu identidad visual y comunicar tus valores. No creamos videos aleatorios para 'subir algo'; desarrollamos contenido coherente que, publicación tras publicación, solidifica la percepción de tu marca como líder en tu sector."
      },
      {
        numero: 3,
        titulo: "Estrategia visual que genera resultados",
        descripcion: "Entendemos el lenguaje de cada plataforma y creamos contenido que funciona algorítmicamente: formatos nativos, duración óptima, hooks visuales en los primeros segundos. Tu inversión en producción se traduce en mayor alcance, engagement y construcción de comunidad real."
      }
    ],
    paquetes: [
      {
        id: "digital-presence",
        nombre: "Digital Presence",
        icono: "📱",
        subtitulo: "Para mantener tu marca visible con consistencia",
        objetivos: [
          "Presencia visual profesional y constante en tus canales",
          "Mantener a tu audiencia comprometida semana a semana",
          "Reforzar tu identidad de marca con contenido coherente",
          "Diferenciarte de competidores con producción de alto nivel"
        ],
        incluye: [
          "8-12 videos cortos por mes (15-60 segundos cada uno)",
          "Formatos optimizados para cada plataforma (Reels, Stories, Feed)",
          "Concepto visual alineado con tu marca",
          "Color grading cinematográfico consistente",
          "Música licenciada",
          "1 sesión de filmación mensual (medio día)",
          "Revisiones y ajustes incluidos",
          "Entrega escalonada durante el mes"
        ],
        precio: {
          minimo: 1800,
          maximo: 2800,
          moneda: "USD",
          frecuencia: "mensual"
        }
      },
      {
        id: "social-boost",
        nombre: "Social Boost",
        icono: "🚀",
        subtitulo: "Para crear comunidad y dominar tu categoría digitalmente",
        objetivos: [
          "Presencia dominante que posiciona tu marca como líder",
          "Construcción acelerada de comunidad comprometida",
          "Mayor alcance y engagement sostenido",
          "Contenido suficiente para estrategias multicanal y campañas"
        ],
        incluye: [
          "20-28 videos cortos por mes (15-90 segundos cada uno)",
          "Mix de formatos: Reels, Stories, videos de feed, contenido educativo",
          "Estrategia de contenido visual mensual",
          "2-3 sesiones de filmación por mes",
          "Color grading cinematográfico y edición avanzada",
          "Música licenciada y diseño de audio",
          "Subtítulos en español",
          "Gráficos y motion graphics básicos (según necesidad)",
          "Revisiones y ajustes incluidos",
          "Entrega semanal programada",
          "Consultoría mensual sobre desempeño del contenido"
        ],
        precio: {
          minimo: 3800,
          maximo: 5500,
          moneda: "USD",
          frecuencia: "mensual"
        }
      }
    ]
  },
  {
    id: "video-musical",
    nombre: "Video Musical / Videoclip",
    promesa: {
      titulo: "Convierte tu música en una experiencia visual inolvidable",
      descripcion: "Tu canción merece más que una cámara fija y buena intención. Creamos videoclips cinematográficos que amplifican el mensaje de tu música y elevan tu imagen como artista. No importa si eres una banda independiente o un solista emergente: cada proyecto recibe el mismo nivel de producción visual que fortalece tu identidad artística y te hace destacar en plataformas digitales. Tu música ya tiene calidad; nosotros nos aseguramos de que tu imagen también."
    },
    ventajas: [
      {
        numero: 1,
        titulo: "Estética cinematográfica al alcance de artistas independientes",
        descripcion: "No necesitas un presupuesto de disquera para tener un videoclip que se vea profesional. Aplicamos técnicas de iluminación, composición y color grading de alto nivel para que tu video compita visualmente con producciones de mayor presupuesto. Tu marca como artista se fortalece cuando tu contenido visual refleja la calidad de tu música."
      },
      {
        numero: 2,
        titulo: "Entendemos tu propuesta artística",
        descripcion: "Antes de grabar, escuchamos. Analizamos tu música, tu estética, tu mensaje. No imponemos un estilo genérico; creamos un concepto visual que es auténtico a tu identidad como artista. El resultado es un videoclip que se siente genuino, no forzado, y que tu audiencia reconoce como tuyo."
      },
      {
        numero: 3,
        titulo: "Producción adaptable sin sacrificar calidad",
        descripcion: "Cada proyecto musical es diferente: algunas canciones piden locaciones múltiples, otras necesitan actores, algunas funcionan con minimalismo creativo. Nos adaptamos a tu presupuesto y visión sin comprometer la calidad cinematográfica. Te asesoramos sobre qué decisiones creativas maximizan el impacto visual dentro de tus posibilidades."
      }
    ],
    paquetes: [
      {
        id: "performance",
        nombre: "Performance",
        icono: "🎸",
        subtitulo: "Para capturar la energía pura de tu música",
        objetivos: [
          "Un videoclip visualmente potente centrado en tu presencia como artista",
          "Fortalecer tu imagen de marca musical",
          "Contenido perfecto para lanzamientos, redes y plataformas de streaming",
          "Video que funciona con presupuesto independiente"
        ],
        incluye: [
          "Videoclip completo de 3-4 minutos",
          "1 locación (interior o exterior)",
          "Concepto creativo desarrollado en conjunto",
          "Dirección de fotografía cinematográfica",
          "Color grading que define el mood de tu canción",
          "1 día de rodaje",
          "Edición sincronizada con la música",
          "2 rondas de revisiones",
          "Versiones en diferentes formatos (16:9, 1:1, 9:16)",
          "2-3 teasers cortos para promoción en redes",
          "Entrega en 15-20 días hábiles"
        ],
        noIncluye: [
          "Locaciones adicionales",
          "Extras o figurantes",
          "Utilería o escenografía especializada",
          "Efectos visuales complejos",
          "Maquillaje/vestuarista profesional"
        ],
        precio: {
          minimo: 2500,
          maximo: 4000,
          moneda: "USD",
          nota: "El precio final depende de la locación, número de integrantes, complejidad técnica y necesidades específicas del concepto"
        }
      },
      {
        id: "storyline",
        nombre: "Storyline",
        icono: "🎬",
        subtitulo: "Para contar una historia que amplifique tu canción",
        objetivos: [
          "Un videoclip narrativo que conecta emocionalmente con tu audiencia",
          "Expandir el universo de tu canción más allá de la letra",
          "Contenido memorable que genera conversación y shares",
          "Video que posiciona tu propuesta artística como seria y profesional"
        ],
        incluye: [
          "Videoclip narrativo completo de 3-4 minutos",
          "Desarrollo de concepto y storyboard",
          "Mezcla de performance + historia narrativa",
          "Hasta 2 locaciones",
          "Dirección de actores/protagonistas de la historia",
          "Dirección de fotografía cinematográfica",
          "Color grading cinematográfico completo",
          "1-2 días de rodaje (según complejidad)",
          "Edición narrativa sincronizada con la música",
          "3 rondas de revisiones",
          "Versiones en diferentes formatos (16:9, 1:1, 9:16)",
          "3-4 teasers/clips para promoción en redes",
          "Making of básico (fotos BTS)",
          "Entrega en 20-30 días hábiles"
        ],
        noIncluye: [
          "Actores profesionales (depende del casting necesario)",
          "Locaciones adicionales (más de 2)",
          "Utilería especializada, vestuario de época, escenografía compleja",
          "Efectos visuales avanzados o CGI",
          "Equipo técnico adicional (drones, grúas, steadicam)",
          "Maquillaje/vestuarista profesional"
        ],
        precio: {
          minimo: 4500,
          maximo: 8000,
          moneda: "USD",
          nota: "El precio varía significativamente según: número de actores, locaciones, complejidad narrativa, días de rodaje necesarios y nivel de producción requerido"
        }
      }
    ],
    notaPresupuestos: {
      titulo: "Nota importante sobre presupuestos",
      descripcion: "Cada videoclip es único. Los rangos de inversión son puntos de partida, pero el costo final depende de tu visión creativa. Después de una primera conversación sobre tu canción y lo que imaginas, te entregamos una cotización detallada que desglosa todos los elementos de producción.",
      factoresQueAfectan: [
        "Número de locaciones y permisos necesarios",
        "Cantidad de personas en cámara (banda completa, actores, extras)",
        "Necesidad de utilería, vestuario o escenografía específica",
        "Complejidad técnica (efectos especiales, iluminación avanzada)",
        "Días de rodaje requeridos"
      ],
      compromiso: "Sin importar el presupuesto, la calidad cinematográfica es la misma. Adaptamos el concepto, no bajamos el estándar visual."
    }
  }
];


export default servicios;
