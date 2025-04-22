export const Servicios = [
  // {
  //   id: "eventos",
  //   h1: "Cobertura Profesional para Eventos en Panamá",
  //   subtitulo: "Captura cada momento con videos y fotos de calidad, entrega en 48 horas.",
  //   paquetes: [
  //     { nombre: "Paquete Básico", precio: 350, detalles: ["Video Highlight (1-2 min horizontal)", "Reel para Redes (30-40 seg en vertical)", "Entrega en 48 horas"] },
  //     { nombre: "Paquete Estándar", precio: 600, detalles: ["Video Highlight (3-5 min)", "2 Reel para Redes (30-40 seg)", "Entrega en 72 horas"] },
  //   ],
  //   porQueElegirnos: [
  //     { titulo: "Entrega Rápida", descripcion: "Recibe tu video y fotos en 48-72 horas." },
  //     { titulo: "Precios Accesibles", descripcion: "Calidad profesional desde solo $350." },
  //     { titulo: "Calidad Cinematográfica", descripcion: "Elegiremos planos, movimientos de cámaras y todos los elementos que nos ayuden a resaltar tu evento." },
  //   ],
  //   proceso: [
  //     { paso: "Reserva tu Fecha", descripcion: "Contáctanos y asegura tu evento." },
  //     { paso: "Grabamos tu Evento", descripcion: "Capturamos cada momento clave." },
  //     { paso: "Recibe tu Material", descripcion: "Entrega rápida en 48-72 horas." },
  //   ],
  //   muestras: [
  //     { tipo: "video", src: "video-boda.mp4", descripcion: "Boda en Casco Antiguo – Video Highlight" },
  //     { tipo: "imagen", src: "https://source.unsplash.com/random/600x400/?event", descripcion: "Conferencia Corporativa – Fotos" },
  //   ],
  //   testimonios: [
  //     { texto: "El video de mi boda fue perfecto y llegó en 2 días. ¡Superaron mis expectativas!", autor: "Ana G., Organizadora de Bodas" },
  //     { texto: "Contraté la cobertura para un lanzamiento y el Reel fue un éxito en redes.", autor: "Carlos M., Emprendedor" },
  //   ],
  //   upsell: {
  //     h2: "Captura Fotografías para tu evento",
  //     texto: "Añade cobertura fotográfica con nuestros paquetes de fotografía.",
  //     cta: "Explora Opciones",
  //   },
  //   meta: {
  //     title: "Cobertura de Eventos en Panamá | Video desde $350",
  //     metaDescription: "Cobertura profesional para eventos en Panamá:  conferencias y más. Videos y fotos de calidad, entrega en 48 horas. ¡Cotiza ahora!",
  //   },
  //   Categorías: ['empresas', 'artistas', 'fundaciones'],
  //   Genero: 'Cobertura'
  // },
  {
    id: "video-musical",
    h1: "Producción de Videos Musicales en Panamá",
    subtitulo: "Resalta tu música y comunica tu visión artística a tus seguidores con un video musical impactante.",
    paquetes: [
      { nombre: "Performance", precio: 1875, detalles: ['Video del Artista Interpretando su Canción', "Conceptualización y planificación que asegure un buen resultado", "Equipo de Trabajo que acompañará al Artista en todo el proceso"] },
      { nombre: "Storyline", precio: 4500, detalles: ["Video Narrativo que apoya el contenido de la Canción", "Servicios especializados como scouting de locaciones, casting de modelos y actores", "Imágen cinematográfica que hará brillar la marca del Artista"] },
    ],
    porQueElegirnos: [
      { titulo: "Conocimiento Musical", descripcion: "Más de 35 años de experiencia en la industria de la música." },
      { titulo: "Enfasis en el artista", descripcion: "Creamos historias que resalten la visión del artista." },
      { titulo: "Producción Completa", descripcion: "Desde la idea hasta el video final." },
    ],
    proceso: [
      { paso: "Planeación", descripcion: "Definimos el concepto contigo." },
      { paso: "Grabación", descripcion: "Filmamos en locaciones seleccionadas." },
      { paso: "Entrega", descripcion: "Editamos y entregamos tu video." },
    ],
    muestras: [
      { tipo: "video", src: "https://www.youtube.com/watch?v=6HQWtQnxuQg&pp=ygUQanVhbiBEaWVnbyBBcmF1etIHCQl-CQGHKiGM7w%3D%3D", descripcion: "En Algún Lugar - Juan Diego Arauz" },
      { tipo: "video", src: "https://www.youtube.com/watch?v=bxvPlSN5LRk&pp=ygUNUGllcnJlIEJvdXRldA%3D%3D", descripcion: "Quizás - Pierre Boutet" },
      { tipo: "video", src: "https://www.youtube.com/watch?v=bxvPlSN5LRk&pp=ygUNUGllcnJlIEJvdXRldA%3D%3D", descripcion: "Quizás - Pierre Boutet" }
    ],
    testimonios: [
      { texto: "Mi video musical quedó increíble, captaron mi estilo perfectamente.", autor: "Luis R., Músico" },
    ],
    upsell: {
      h2: "¿Más Visibilidad?",
      texto: "Añade una sesión de fotos promocionales por $250 o edición avanzada por $200.",
      cta: "Explora Opciones",
    },
    meta: {
      title: "Producción de Videos Musicales en Panamá",
      metaDescription: "Creación de videos Musicales con calidad cinematográfica. Nuestra misión es resaltar tu imágen, valores y visión como artista, usando el video para contar historias impactantes o creando experiencias que enaltescan tus canciones",
    },
    Categorías: [ 'artistas'],
    Genero: 'Video Musical'
  },
  {
    id: "comercial",
    h1: "Publicidad Audiovisual para tu Negocio",
    subtitulo: "Comerciales que venden, diseñados para redes sociales y TV.",
    paquetes: [
      { nombre: "Comercial Básico", precio: 600, detalles: ["Comercial de 30 seg", "Edición básica", "1 día de grabación"] },
      { nombre: "Comercial Premium", precio: 1500, detalles: ["Comercial de 60 seg", "Guion incluido", "Edición avanzada"] },
    ],
    porQueElegirnos: [
      { titulo: "Impacto Visual", descripcion: "Videos que captan la atención." },
      { titulo: "Versatilidad", descripcion: "Para redes, TV o campañas locales." },
      { titulo: "Resultados", descripcion: "Diseñados para aumentar tus ventas." },
    ],
    proceso: [
      { paso: "Brief", descripcion: "Entendemos tu mensaje y objetivos." },
      { paso: "Producción", descripcion: "Grabamos y editamos tu comercial." },
      { paso: "Lanzamiento", descripcion: "Entregamos listo para publicar." },
    ],
    muestras: [
      { tipo: "video", src: "comercial.mp4", descripcion: "Comercial – Restaurante Local" },
    ],
    testimonios: [
      { texto: "El comercial triplicó mis ventas en redes.", autor: "Sofía P., Dueña de Tienda" },
    ],
    upsell: {
      h2: "¿Más Alcance?",
      texto: "Añade edición avanzada por $200 o fotos promocionales por $250.",
      cta: "Explora Opciones",
    },
    meta: {
      title: "Publicidad Audiovisual en Panamá | Comerciales desde $600",
      metaDescription: "Comerciales profesionales para redes y TV en Panamá desde $600. Aumenta tus ventas con videos impactantes. ¡Cotiza hoy!",
    },
    Categorías: ['empresas', 'artistas', 'fundaciones']
  },
  {
    id: "corporativos",
    h1: "Videos Corporativos y Cortos Documentales",
    subtitulo: "Fortalece tu marca con videos institucionales o cortos documentales impactantes.",
    paquetes: [
      { nombre: "Video Corporativo Básico", precio: 500, detalles: ["Video de 2-3 min", "Edición básica", "1 día de grabación"] },
      { nombre: "Corto Documental Corporativo", precio: 1200, detalles: ["Video de 5-7 min", "Entrevistas y narrativa", "Edición avanzada"] },
    ],
    porQueElegirnos: [
      { titulo: "Profesionalismo", descripcion: "Videos que reflejan tu identidad." },
      { titulo: "Flexibilidad", descripcion: "Desde institucionales hasta documentales." },
      { titulo: "Impacto Duradero", descripcion: "Perfectos para eventos o branding." },
    ],
    proceso: [
      { paso: "Consulta", descripcion: "Definimos tus objetivos y mensaje." },
      { paso: "Grabación", descripcion: "Capturamos el material necesario." },
      { paso: "Entrega", descripcion: "Editamos y entregamos tu video final." },
    ],
    muestras: [
      { tipo: "video", src: "video-corporativo.mp4", descripcion: "Video Institucional – Empresa Local" },
      { tipo: "video", src: "docu-corto.mp4", descripcion: "Corto Documental – Fundación Cultural" },
    ],
    testimonios: [
      { texto: "El documental de nuestra fundación fue un éxito en nuestra gala.", autor: "María T., Directora de Fundación" },
    ],
    upsell: {
      h2: "¿Más Detalles?",
      texto: "Añade edición avanzada por $200 o fotos corporativas por $250.",
      cta: "Explora Opciones",
    },
    meta: {
      title: "Videos Corporativos en Panamá | Desde $500",
      metaDescription: "Videos corporativos y cortos documentales en Panamá desde $500. Fortalece tu marca con contenido profesional. ¡Contáctanos!",
    },
    Categorías: ['empresas', 'artistas', 'fundaciones']
  },
  // {
  //   id: "redes",
  //   h1: "Producción de Contenido para Redes Sociales",
  //   subtitulo: "Destaca en Instagram, TikTok y Facebook con contenido visual profesional.",
  //   paquetes: [
  //     { nombre: "Paquete Básico Redes", precio: 300, detalles: ["4 publicaciones mensuales", "2 imágenes", "2 videos cortos (15-30 seg)"] },
  //     { nombre: "Paquete Premium Redes", precio: 1000, detalles: ["12 publicaciones mensuales", "6 imágenes", "6 videos (30-90 seg)", "8 historias"] },
  //   ],
  //   porQueElegirnos: [
  //     { titulo: "Consistencia", descripcion: "Contenido regular para tus redes." },
  //     { titulo: "Engagement", descripcion: "Videos e imágenes que conectan." },
  //     { titulo: "Personalización", descripcion: "Adaptado a tu marca." },
  //   ],
  //   proceso: [
  //     { paso: "Planificación", descripcion: "Creamos un calendario mensual." },
  //     { paso: "Producción", descripcion: "Grabamos y diseñamos tu contenido." },
  //     { paso: "Entrega", descripcion: "Recibes todo listo para publicar." },
  //   ],
  //   muestras: [
  //     { tipo: "video", src: "reel-redes.mp4", descripcion: "Reel – Tienda Online" },
  //     { tipo: "imagen", src: "https://source.unsplash.com/random/600x400/?socialmedia", descripcion: "Post – Marca Local" },
  //   ],
  //   testimonios: [
  //     { texto: "Mis redes crecieron un 50% con sus videos.", autor: "Juan P., Emprendedor" },
  //   ],
  //   upsell: {
  //     h2: "¿Más Visibilidad?",
  //     texto: "Añade edición avanzada por $200 o fotos profesionales por $250.",
  //     cta: "Explora Opciones",
  //   },
  //   meta: {
  //     title: "Contenido para Redes Sociales en Panamá | Desde $300",
  //     metaDescription: "Producción de contenido para redes sociales en Panamá desde $300. Videos y fotos para Instagram, TikTok y más. ¡Cotiza ahora!",
  //   },
  //   Categorías: ['empresas', 'artistas', 'fundaciones']
  // },
  // {
  //   id: "podcast",
  //   h1: "Producción de Podcasts y Contenido Auditivo",
  //   subtitulo: "Lleva tu voz al siguiente nivel con podcasts profesionales.",
  //   paquetes: [
  //     { nombre: "Podcast Básico", precio: 300, detalles: ["Grabación y edición de 1 episodio (30 min)", "Diseño de audio básico"] },
  //     { nombre: "Podcast Premium", precio: 600, detalles: ["Producción completa de 1 episodio", "Video incluido", "Diseño de audio avanzado"] },
  //   ],
  //   porQueElegirnos: [
  //     { titulo: "Calidad de Sonido", descripcion: "Audio limpio y profesional." },
  //     { titulo: "Versatilidad", descripcion: "Con o sin video, según tus necesidades." },
  //     { titulo: "Fácil Proceso", descripcion: "Grabamos y editamos por ti." },
  //   ],
  //   proceso: [
  //     { paso: "Consulta", descripcion: "Definimos el formato y contenido." },
  //     { paso: "Grabación", descripcion: "Capturamos tu episodio." },
  //     { paso: "Entrega", descripcion: "Editamos y entregamos listo para publicar." },
  //   ],
  //   muestras: [
  //     { tipo: "video", src: "podcast.mp4", descripcion: "Episodio – Podcast Local" },
  //   ],
  //   testimonios: [
  //     { texto: "El audio de mi podcast es impecable y el video sumó mucho.", autor: "Laura S., Creadora de Contenido" },
  //   ],
  //   upsell: {
  //     h2: "¿Más Impacto?",
  //     texto: "Añade edición avanzada por $200 o fotos promocionales por $250.",
  //     cta: "Explora Opciones",
  //   },
  //   meta: {
  //     title: "Producción de Podcasts en Panamá | Desde $300",
  //     metaDescription: "Producción de podcasts profesionales en Panamá desde $300. Audio y video de calidad para tu contenido. ¡Contáctanos hoy!",
  //   },
  //   Categorías: ['empresas', 'artistas', 'fundaciones']
  // },
];

export const serviciosCategorias = [
  {
    id: 'empresas',
    titulo: 'Servicios Audiovisuales Para Empresas',
    subtitulo: 'Eleva tu marca con un video cinematográfico que conecte con tus clientes'
  },
  {
    id: 'artistas',
    titulo: 'Servicios Audiovisuales Para Artistas',
    subtitulo: 'Conecta con tus fanáticos a traves de videos que expresen tu visión artística'
  },
  {
    id: 'fundaciones',
    titulo: 'Servicios Audiovisuales para Fundaciones',
    subtitulo: 'Muestra la visión de tu proyecto e impacta con un video cinematográfico'
  }
]