export default {
  global: {
    componenteFormativo:
      'Componente Formativo con un nombre extremadamente largo y extenso',
    descripcionCurso:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis vestibulum quam bibendum varius.<br/><br/>Quisque pretium at nulla sit amet placerat. Vestibulum consequat suscipit accumsan. Proin pharetra congue enim et tempus. Sed sodales dui volutpat, placerat tellus accumsan, semper est. Phasellus nec lorem elementum, mattis quam eget, vestibulum nibh. Sed.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo:
          'Desarrollo físico, cognitivo y emocional en las etapas de la infancia y adolescencia',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo:
              'Etapas del desarrollo infantil: motor, cognitivo, social y emocional',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Crecimiento y desarrollo en la niñez',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo:
          'Desarrollo del cerebro y plasticidad neuronal. Cambios físicos y emocionales en la adolescencia',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'La intercomunicación de las neuronas: sinapsis ',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Definición y etapas de la adolescencia',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo:
              'Trastornos del desarrollo: factores de riesgo y estrategias de intervención',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: '¿Es clave la estimulación temprana?',
            hash: 't_2_4',
          },
        ],
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-download',
        titulo: 'Descargar PDF',
        download: 'downloads/Biologia_desarrollo_humano_U2.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Apaza, E. A., Huamán, J. V., Ramírez, G. M., Segovia, D. S. y Suarez, M. A. (2017). Estudio de casos de niños con Trastornos del Neurodesarrollo: Trastorno del espectro autista, discapacidad intelectual y retraso global del desarrollo',
      link:
        'https://www.researchgate.net/profile/Aime-Quispe/publication/341498580_ESTUDIO_DE_CASOS_DE_NINOS_CON_TRASTORNOS_DEL_NEURODESARROLLO_Trastorno_del_Espectro_Autista_Discapacidad_Intelectual_y_Retraso_Global_del_Desarrollo/links/5ec485f592851c11a87781eb/ESTUDIO-DE-CASOS-DE-NINOS-CON-TRASTORNOS-DEL-NEURODESARROLLO-Trastorno-del-Espectro-Autista-Discapacidad-Intelectual-y-Retraso-Global-del-Desarrollo.pdf',
    },
    {
      referencia:
        'MEECE, J. (2000). Desarrollo del niño y del adolescente. Capítulo Teoría del desarrollo cognoscitivo de Piaget. Compendio para educadores',
      link:
        'https://www.guao.org/sites/default/files/portafolio%20docente/Teor%C3%ADa%20del%20desarrollo%20de%20Piaget.pdf',
    },
    {
      referencia:
        'ORTEGA, C. FRANCO, J. (2010). Neurofisiología del aprendizaje y la memoria. Plasticidad Neuronal. Archivos de Medicina Vol. 6 No. 1:2',
      link:
        'https://www.archivosdemedicina.com/medicina-de-familia/neurofisiologa-del-aprendizaje-y-la-memoria-plasticidad-neuronal.pdf',
    },
    {
      referencia:
        'Sierra, B. LEÓN, P. (2019). Plasticidad cerebral, una realidad neuronal. Rev Ciencias Médicas. 2019;23(4):599-609',
      link: 'https://www.medigraphic.com/pdfs/pinar/rcm-2019/rcm194o.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Acomodación',
      significado:
        'Concepto fundamental en la teoría del desarrollo cognitivo de Jean Piaget, que se refiere al proceso mediante el cual un individuo ajusta sus esquemas mentales para integrar nueva información o experiencias',
    },
    {
      termino: 'Adolescencia',
      significado:
        'Periodo del desarrollo humano que se sitúa entre la niñez y la adultez, caracterizado por intensos cambios biológicos, psicológicos y sociales. Inicia con la pubertad, que generalmente comienza entre los 10 y 13 años, y se extiende hasta los 19 o 21 años, dependiendo de diversas fuentes y contextos culturales',
    },
    {
      termino: 'Asimilación',
      significado:
        'Se refiere al proceso mediante el cual un organismo o individuo integra nueva información o elementos en estructuras preexistentes. En el ámbito psicológico, la asimilación fue introducida por Jean Piaget como parte de su teoría del desarrollo cognitivo. Este proceso implica la incorporación de nueva información a esquemas mentales ya existentes sin modificar estos esquemas',
    },
    {
      termino: 'Desarrollo Cognitivo',
      significado:
        'Se refiere a la progresión de las capacidades intelectuales, que incluyen la percepción, el razonamiento, la memoria, el lenguaje y la resolución de problemas. Este proceso es esencial para el aprendizaje y se basa en la interacción entre el individuo y su entorno. A medida que los niños crecen, desarrollan habilidades tanto motoras como cognitivas que les permiten interactuar con su mundo de manera más efectiva',
    },
    {
      termino: 'Desarrollo Emocional',
      significado:
        'Asociado con la capacidad de un niño para reconocer y manejar sus emociones y responder adecuadamente a las emociones de los demás. Es un proceso gradual e integrativo, comenzando desde el nacimiento y continuando a lo largo de la infancia y la adolescencia. A través de interacciones significativas con sus cuidadores y pares, los niños aprenden a identificar sus sentimientos y a desarrollar habilidades como la empatía y la regulación emocional',
    },
    {
      termino: 'Desarrollo Físico',
      significado:
        'Se manifiesta a través de cambios significativos en las habilidades motoras, la fuerza, la resistencia y la salud general. Este desarrollo se puede dividir en diferentes etapas, según la edad y las necesidades específicas',
    },
    {
      termino: 'Determinismo biológico',
      significado:
        'Pensamiento que sostiene que el comportamiento humano y los fenómenos sociales son el resultado directo de factores biológicos, principalmente genéticos. Esta perspectiva se ha utilizado para explicar diversas desigualdades sociales, como la pobreza, la violencia y las diferencias de género, atribuyendo estas condiciones a características innatas de los individuos o grupos',
    },
    {
      termino: 'Estadios',
      significado:
        'Etapas son universales y se caracterizan por cambios cualitativos en la forma de pensar y entender el mundo',
    },
    {
      termino: 'Infancia',
      significado:
        'Abarca desde el nacimiento hasta el inicio de la pubertad, generalmente considerado alrededor de los 11 a 14 años',
    },
    {
      termino: 'Inteligencia',
      significado:
        'Capacidad de comprender, razonar, resolver problemas y adaptarse a nuevas situaciones. Se ha definido de diversas maneras a lo largo de la historia, abarcando desde habilidades cognitivas hasta aspectos emocionales y creativos',
    },
    {
      termino: 'Intervención Educativa',
      significado:
        'Conjunto de acciones planificadas y específicas diseñadas para abordar las necesidades educativas de los estudiantes. Su objetivo es facilitar el aprendizaje y el desarrollo integral del alumnado, especialmente en situaciones donde se identifican dificultades académicas, emocionales o conductuales',
    },
    {
      termino: 'Intervención Psicológica',
      significado:
        'Aplicación de principios y técnicas psicológicas por parte de profesionales acreditados, con el objetivo de ayudar a individuos o grupos a comprender y superar problemas emocionales, conductuales o psicosociales. Esta práctica se basa en una evaluación exhaustiva de las dificultades del paciente y busca mejorar su bienestar general y sus relaciones interpersonales',
    },
    {
      termino: 'Neurogénesis',
      significado:
        'Proceso mediante el cual se generan nuevas neuronas a partir de células madre y progenitoras. Este fenómeno es crucial durante el desarrollo embrionario, pero investigaciones recientes han demostrado que también ocurre en el cerebro adulto, aunque en menor medida',
    },
    {
      termino: 'Neuronas',
      significado:
        'Células altamente especializadas que constituyen la unidad funcional del sistema nervioso. Su principal función es recibir, procesar y transmitir información mediante señales eléctricas y químicas',
    },
    {
      termino: 'Plasticidad Neuronal',
      significado:
        'También conocida como neuroplasticidad, se refiere a la capacidad del sistema nervioso para cambiar su estructura y funcionamiento a lo largo de la vida. Este fenómeno es fundamental para el aprendizaje, la memoria y la recuperación de lesiones, permitiendo que las neuronas forman nuevas conexiones y se adapten a nuevas experiencias',
    },
    {
      termino: 'Poda Sináptica',
      significado:
        'Es un proceso biológico que ocurre en el cerebro, durante las etapas de desarrollo infantil y adolescente. Implica la eliminación de conexiones sinápticas que se consideran innecesarias o débiles, permitiendo así que las conexiones más fuertes se fortalezcan y optimicen la comunicación neuronal',
    },
    {
      termino: 'Psicología evolutiva',
      significado:
        'Rama de la psicología que estudia el desarrollo humano, desde el nacimiento hasta la vejez. Su objetivo es comprender cómo los cambios psicológicos afectan a las personas en diferentes etapas de su vida y cómo estos cambios son influenciados por factores biológicos y ambientales',
    },
    {
      termino: 'Sinapsis',
      significado:
        'Proceso en la comunicación neuronal, que permite la transmisión de impulsos nerviosos entre neuronas o entre una neurona y otra célula, como una célula muscular o glandular',
    },
    {
      termino: 'Teoría cognitiva constructivista',
      significado:
        'Enfoque psicológico y educativo que enfatiza cómo los individuos construyen su conocimiento a través de la interacción con su entorno y la integración de nuevas experiencias con conocimientos previos. Esta teoría se basa en la premisa de que el aprendizaje es un proceso activo y no pasivo',
    },
  ],
  complementario: [
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Maria Camila Garcia Santamaria',
          cargo: 'Líder del equipo',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor metodológico y pedagógico',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Francisco José Lizcano Reyes',
          cargo: 'Responsable del equipo',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Leyson Fabian Castaño Perez',
          cargo: 'Soporte organizacional',
          centro: 'Centro de Comercio y Servicios Regional Tolima',
        },
        {
          nombre: ['Nombre 1', 'Nombre 2'],
          cargo: 'Diseño web',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Desarrollo Front-End',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Validación de diseño y contenido',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
      ],
    },
    {
      titulo: 'GESTORES DE REPOSITORIO',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Centro de Comercio y Servicios Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
