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
          'Desarrollo cognitivo y socioemocional en la adultez temprana, media y tardía',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Autores sobre las etapas y el desarrollo de la adultez',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'La adultez temprana y media',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'El adulto de edad intermedia y tardía ',
            hash: 't_1_3',
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
            titulo: 'Mecanismos del envejecimiento',
            hash: 't_2_1',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo:
          'Salud mental en la adultez y vejez: factores de riesgo y protección',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Factores de riesgo y alertas',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Medidas de protección y prevención ',
            hash: 't_3_2',
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
        download: 'downloads/Biologia del desarrollo humano_U3.zip',
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
        'Arévalo Herrera, D. M. (2014). Estimulación múltiple en adultos mayores: estrategias. Universidad Iberoamericana Puebla.',
      link: '',
    },
    {
      referencia:
        'García Ramírez, J. C. (2012). Envejecimiento mundial y desafío regional: nuevos paradigmas para la investigación, la salud pública y los derechos humanos. Plaza y Valdés (México).',
      link: '',
    },
    {
      referencia:
        'Izquierdo, A. (2007). Psicología del desarrollo de la edad adulta: teorías y contextos. International Journal of Developmental and Educational Psychology, 1(2), 67-86.',
      link: '',
    },
    {
      referencia:
        'Torres González, M. Á. & Perea Unceta, L. (2010). Vivir mejor la jubilación: salud, dinero, amor, sexo y ocio a partir de los 60…, prepárate desde los 40. Marcial Pons Ediciones Jurídicas y Sociales.',
      link: '',
    },
    {
      referencia:
        'Zafon Llopis, C. (2010). Los nietos de Adán y Eva: ¿por qué la naturaleza nos hace envejecer?. Marge Books.',
      link: '',
    },
    {
      referencia:
        'Zijdeman et al. (2015); Riley (2005). Data source: UN WPP (2022); HMD (2023).',
      link: 'https://ourworldindata.org/life-expectancy',
    },
  ],
  glosario: [
    {
      termino: 'Adultez',
      significado:
        'Etapa en el desarrollo humano que sigue a la juventud y precede a la vejez. Se caracteriza por la madurez física, psicológica y social del individuo, y se considera que abarca aproximadamente desde los 21 hasta los 60 años, aunque algunas definiciones amplían el rango hasta los 65 años o más',
    },
    {
      termino: 'Continuidad (desarrollo)',
      significado:
        'Término que indica que la vejez es un proceso que no tiene retorno y que no se detiene una vez que comienza',
    },
    {
      termino: 'Desarrollo adulto positivo',
      significado:
        'Es un enfoque que busca resaltar y potenciar las capacidades y recursos de los adultos, en lugar de centrarse únicamente en los desafíos y limitaciones que pueden enfrentar. Este concepto se ha desarrollado en el contexto de la psicología positiva y se ha aplicado especialmente a la adultez emergente, una etapa que abarca a jóvenes adultos generalmente entre los 18 y 29 años',
    },
    {
      termino: 'Envejecimiento biológico',
      significado:
        'Proceso complejo y multifacético que se refiere a los cambios morfológicos, fisiológicos y funcionales que ocurren en los organismos como resultado del paso del tiempo. Este fenómeno afecta a todos los seres vivos y se caracteriza por una serie de transformaciones que, aunque universales, varían en su manifestación entre individuos y especies',
    },
    {
      termino: 'Estabilidad Emocional',
      significado:
        'Asociada a la gestión adecuada de las decisiones, es decir más responsables, el desarrollo de relaciones interpersonales más sólidas y las respuestas emocionales y comportamentales coherentes con las condiciones del contexto',
    },
    {
      termino: 'Fecundidad',
      significado:
        'Se refiere a la capacidad efectiva de una mujer, pareja o población para producir nacimientos',
    },
    {
      termino: 'Inteligencia cristalizada',
      significado:
        "Concepto psicológico que se refiere al conjunto de conocimientos, habilidades y experiencias que una persona adquiere a lo largo de su vida y que ha 'cristalizado' en su memoria. Se basa en el aprendizaje y la experiencia, y se considera fundamental para afrontar las etapas de crecimiento del adulto hasta la vejez",
    },
    {
      termino: 'Madurez Física e Intelectual',
      significado:
        'Pleno desarrollo físico e intelectual en la edad adulta. Esto incluye la finalización del crecimiento muscular y óseo, así como el desarrollo de capacidades mentales y emocionales',
    },
    {
      termino: 'Progresividad (desarrollo)',
      significado:
        'Hace referencia a que el envejecimiento no tiene pausa y es el resultado de efectos acumulativos. La universalidad, porque incide en todas las poblaciones',
    },
    {
      termino: 'Psicoanálisis',
      significado:
        'Teoría y práctica terapéutica que se centra en la exploración del inconsciente, desarrollada por el neurólogo austriaco Sigmund Freud a finales del siglo XIX. Esta corriente ha influido notablemente en la psicología y ha dado lugar a diversas escuelas de pensamiento en el ámbito de la salud mental',
    },
    {
      termino: 'Radicales libres',
      significado:
        'Se forman en las células a través de la ruptura homolítica de enlaces covalentes en reacciones químicas. También pueden generarse por la exposición a radiaciones o contaminantes ambientales. Se clasifican según el tipo de átomo que contiene el electrón impar: derivadas del oxígeno (ROS), como el radical hidroxilo (·OH) y el superóxido (O2·-). Derivadas del nitrógeno, como el óxido nítrico (NO·) y el dióxido de nitrógeno (NO2·)',
    },
    {
      termino: 'Salud mental',
      significado:
        'Es una dimensión del estado de bienestar en el que el individuo es consciente de sus capacidades y puede afrontar las tensiones de la vida, trabajar de manera productiva y contribuir a su comunidad. Se trata solo de la ausencia de trastornos mentales y un equilibrio emocional y psicológico que permite a las personas funcionar en su vida diaria',
    },
    {
      termino: 'Senescencia celular',
      significado:
        'Detención irreversible del ciclo celular en respuesta a diversos tipos de estrés, como el daño genético o el acortamiento de los telómeros. Este fenómeno tiene implicaciones significativas en el envejecimiento, la generación de tumores y la reparación de tejidos',
    },
    {
      termino: 'Telómeros',
      significado:
        'Son estructuras ubicadas en los extremos de los cromosomas, esenciales para mantener la estabilidad y la integridad del ADN en las células eucariotas',
    },
    {
      termino: 'Tercera edad',
      significado:
        'Es sinónimo de vejez, ancianidad o senectud. Se refiere a las últimas décadas de la vida de una persona. Esta etapa está marcada por un declive en diversas áreas, incluyendo lo físico, cognitivo, emocional y social. Generalmente se considera que la tercera edad comienza alrededor de los 60 años',
    },
    {
      termino: 'Variabilidad (desarrollo)',
      significado:
        'En la vejez, hace referencia a que no todos los individuos de una misma especie envejecen al mismo ritmo, lo que implica una influencia de factores genéticos y ambientales',
    },
    {
      termino: 'Vejez',
      significado:
        'Es sinónimo de tercera edad, ancianidad o senectud. Se refiere a las últimas décadas de la vida de una persona. Esta etapa está marcada por un declive en diversas áreas, incluyendo lo físico, cognitivo, emocional y social. Generalmente se considera que la tercera edad comienza alrededor de los 60 años',
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
