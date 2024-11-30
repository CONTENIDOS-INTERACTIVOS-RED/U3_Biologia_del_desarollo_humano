<template lang="pug">
.curso-main-container.pb-3
  BannerInterno.text-uppercase(:titulo="'Unidad 2. Desarrollo físico, cognitivo y emocional en las etapas de la infancia y adolescencia'" :subTitulo="'2. Desarrollo del cerebro y plasticidad neuronal. Cambios físicos y emocionales en la adolescencia'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .row.mb-5
      .col-12.col-xl-7.col-xxl-8.d-flex.flex-column
        .bloque-texto-c.bg-gris-claro-2.p-4.mb-4
          i.fas.fa-quote-left.text-morado.mb-4
          h3.mb-2 “La vida sin memoria no es vida, así como inteligencia sin la capacidad de expresarla, no es inteligencia”. 
          span.text-small (Ortega, C. & Franco, J., 2010)
        p El cerebro humano tiene un rápido crecimiento en el individuo, incluso desde el período prenatal. Se promedia que, para los seis meses de nacido, el infante ya tiene cerca del 50 % de desarrollo cerebral y logra el 90 % para los 8 años. A medida que se estudia en detalle el cerebro humano, se logran identificar cualidades inigualables de este órgano. En este apartado, se abordará la <strong>Plasticidad</strong> neuronal o <strong>Neuroplasticidad.</strong>
      .d-none.d-xl-block.col-xl-5.col-xxl-4.mx-auto.mt-4.mt-xl-0(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-19.png', alt='Texto que describa la imagen')  

    .row.mb-5
      .d-flex.align-items-center
        div.d-flex.align-items-center.bg-azul.px-3.py-4
          img.me-4(style="width: 90px" src='@/assets/curso/unidad/img-20.svg', alt='Texto que describa la imagen')
          p.pe-xl-5.mb-0 Esta cualidad permite la reestructuración y recuperación del cerebro, a través de la regeneración anatómica y funcional de las células nerviosas: Neuronas, permitiendo crear nuevas conexiones entre neuronas y reforzar las conexiones ya existentes.

    p.mb-4 Se señala que, cuando se produce algún daño sobre el cerebro, a través de la neuroplasticidad, es posible que otra área asuma las funciones que realizaba el área afectada. La <strong>neuroplasticidad, implica varios procesos:</strong>

    .bg-fondo-3.bg-full-width
      div.px-5.pb-md-3.py-4
        .row.mb-5
          .col-12.col-lg-5.d-none.d-lg-block(data-aos="fade-left")
            img.-mt-18px(src='@/assets/curso/unidad/img-21.png', alt='Texto que describa la imagen')
          .col-12.col-lg-7(data-aos="fade-right")
            AcordionA(tipo="b")
              .div(titulo="Plasticidad sináptica")
                p Cambios en la fuerza de las sinapsis entre neuronas, esenciales para el aprendizaje y la memoria.
              .div(titulo="Neurogénesis")
                p Formación de nuevas neuronas, que ocurre principalmente en el hipocampo, una región clave para la memoria.
              .div(titulo="Plasticidad post-lesión")
                p Cambios que permiten la recuperación después de daños en el sistema nervioso, como lesiones cerebrales o enfermedades neurodegenerativas.

        p.mb-4 Dentro de los tipos de plasticidad, se destacan:

        .row
          .col-10.col-md-6.mb-4.mx-auto(data-aos="fade-right")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-22.png', alt='Texto que describa la imagen')
              div.mb-4.px-4
                p.text-bold.text-center Plasticidad natural
                p.text-small.px-4.text-center.pb-2 Ocurre durante el desarrollo y el aprendizaje, permitiendo la creación de nuevos circuitos neuronales.
          .col-10.col-md-6.mb-4.mx-auto(data-aos="fade-left")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-23.png', alt='Texto que describa la imagen')
              div.mb-4.px-4
                p.text-bold.text-center Plasticidad adaptativa
                p.text-small.px-4.text-center.pb-2 En respuesta a cambios en el entorno o a lesiones; permite al cerebro reorganizarse para mantener su funcionalidad.
    
    .tarjeta.box-shadow.p-3.mb-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/template/video-icon-rounded.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              p.text-bold.mb-3 Neuroplasticidad
              p.text-small Para entender un poco más sobre la neuroplasticidad y posibles acciones para mejorar esta capacidad, lo invitamos a consultar el siguiente video:
            .col-sm-auto
              a.download-btn.boton.bg-morado.text-white(href="https://youtu.be/0z63KdOEh_o?si=L_fseKPubjfIZ4Mq " target="_blank")
                span.text-small Ver video
                i.fas.fa-arrow-right


    p.mb-5 La neuroplasticidad es mayor en las edades tempranas; se deduce que las conexiones neuronales en la infancia, sobrepasan el doble de la etapa adulta:

    .bloque-texto-c.bg-gris-claro-2.p-4.mb-4(data-aos="fade-right")
      i.fas.fa-quote-left.text-morado.mb-4
      h3.mb-2 “…los cambios en el cerebro de los niños, se producen continuamente con cada nueva experiencia. Durante esta etapa tienen lugar varios procesos de crecimiento neuronal que ocurren por ciclos. En estos “periodos críticos” se produce un gran desarrollo de las neuronas y sus conexiones, facilitando al niño la interacción con el entorno y el aprendizaje de este con el menor esfuerzo”
      span.text-small  (Ortega, C. & Franco, J., 2010)

    p.text-bold.mb-4 ¿Cómo se pueden aumentar las conexiones neuronales?

    p.mb-4 A partir de la propiedad de neuroplasticidad, es posible aumentar las conexiones neuronales a lo largo de la vida. Se sugieren los siguientes hábitos o rutinas para que las condiciones sean propicias:

    .row.mb-4
      .col-12.col-xl-8.d-flex.flex-column.justify-content-center.bg-amarillo-oscuro.p-4.px-xxl-5
        div.d-flex
          img.mt-1.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/template/arrow.svg', alt='Texto que describa la imagen')
          p.mb-0  Aprendizaje permanente.
        div.d-flex
          img.mt-1.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/template/arrow.svg', alt='Texto que describa la imagen')
          p.mb-0 Aprender a interpretar algún instrumento musical o artes. 
        div.d-flex
          img.mt-1.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/template/arrow.svg', alt='Texto que describa la imagen')
          p.mb-0  Desarrollar actividades físicas – ejercicio
        div.d-flex
          img.mt-1.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/template/arrow.svg', alt='Texto que describa la imagen')
          p.mb-0  Diseñar o participar en proyectos
        div.d-flex
          img.mt-1.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/template/arrow.svg', alt='Texto que describa la imagen')
          p.mb-0  Descansar y tener buenas rutinas de sueño.
        div.d-flex
          img.mt-1.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/template/arrow.svg', alt='Texto que describa la imagen')
          p.mb-0  Viajar y conocer nuevas culturas o lugares.
        div.d-flex
          img.mt-1.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/template/arrow.svg', alt='Texto que describa la imagen')
          p.mb-0  Hacer juegos mentales.
        div.d-flex
          img.mt-1.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/template/arrow.svg', alt='Texto que describa la imagen')
          p.mb-0  Meditación o prácticas de mindfulness.
        div.d-flex
          img.mt-1.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/template/arrow.svg', alt='Texto que describa la imagen')
          p.mb-0  Romper la rutina.
        div.d-flex
          img.mt-1.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/template/arrow.svg', alt='Texto que describa la imagen')
          p.mb-0  Aprender nuevos idiomas.
        div.d-flex
          img.mt-1.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/template/arrow.svg', alt='Texto que describa la imagen')
          p.mb-0  Lectura y escritura creativa.
        div.d-flex
          img.mt-1.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/template/arrow.svg', alt='Texto que describa la imagen')
          p.mb-0  Tener relaciones sociales sanas.
        div.d-flex
          img.mt-1.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/template/arrow.svg', alt='Texto que describa la imagen')
          p.mb-0  Alimentarse de manera balanceada y con alimentos de alta calidad nutricional.
      .d-none.d-xl-block.col-4.px-0
        img.h-100(src='@/assets/curso/unidad/img-24.png', alt='Texto que describa la imagen')

    p.mb-4 A medida que el infante va creciendo, se genera un proceso denominado Poda sináptica, que consiste en la eliminación de este exceso de sinapsis. Posteriormente, comenzarán a establecerse conexiones y patrones únicos en cada persona. Este proceso se extiende hasta la adolescencia.
    p.mb-4 <strong>Figura 1.</strong> Ilustración sobre la poda neuronal


    .row.mb-4
      .d-none.d-xl-block.col-4.px-0(data-aos="fade-right")
        img.h-100(src='@/assets/curso/unidad/img-25.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8.d-flex.flex-column.justify-content-center.bg-gris-claro-2.p-4.p-xxl-5(data-aos="fade-left")
        p.mb-4 Por este motivo, si un niño/a presenta dificultades atencionales, motoras, de lenguaje o del control inhibitorio, por causas madurativas o por algún tipo de daño, es muy importante comenzar con la estimulación o rehabilitación de dichas funciones, de la forma más temprana posible.

    .row.mb-5
      .d-flex.align-items-center
        div.d-flex.align-items-center.bg-morado-oscuro-2.px-3.py-4
          img.me-4(style="width: 90px" src='@/assets/curso/unidad/img-26.svg', alt='Texto que describa la imagen')
          p.pe-xl-5.mb-0.text-white Por este motivo, si un niño/a presenta dificultades atencionales, motoras, de lenguaje o del control inhibitorio, por causas madurativas o por algún tipo de daño, es muy importante comenzar con la estimulación o rehabilitación de dichas funciones, de la forma más temprana posible.


    #t_2_1.titulo-segundo
      div.d-flex
        span.me-3 2.1  
        h2 La intercomunicación de las neuronas: sinapsis 

    p.mb-4 ¿Sabía que la comunicación entre neuronas y la capacidad de regeneración cerebral son esenciales para el aprendizaje y la memoria? Descubra, a través del siguiente video, cómo la sinapsis y la neurogénesis influyen en el desarrollo neuronal y cómo factores externos pueden afectar la neuroplasticidad a lo largo de la vida.
  
    .tarjeta.box-shadow.p-3.mb-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1(data-aos="zoom-out-right")
          img(src="@/assets/template/video-icon-rounded.svg")
        .col(data-aos="fade-left")
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              p.text-bold.mb-3 Un universo de impulsos: ¿Cómo funciona la electricidad en tu cerebro?
              p.text-small Para conocer el detalle de ese impulso eléctrico, lo invitamos a consultar el siguiente video:
            .col-sm-auto
              a.download-btn.boton.bg-morado.text-white(href="https://www.youtube.com/watch?v=399-w2Z9SdI" target="_blank")
                span.text-small Ver video
                i.fas.fa-arrow-right
    #t_2_2.titulo-segundo
      div.d-flex
        span.me-3 2.2  
        h2 Definición y etapas de la adolescencia

    p.mb-4 De acuerdo con la Organización Mundial de la Salud (OMS), la adolescencia abarca desde los 10 hasta los 19 años; <strong>algunos expertos amplían este rango hasta los 24 años y lo describen en tres etapas:</strong>

    .bg-fondo-3.bg-full-width
      div.px-5.pb-md-3.py-4

        ImagenInfografica.color-secundario.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/unidad/img-27.png', alt='Texto que describa la imagen')

          .tarjeta.bg-white.p-4(x="60%" y="20%" numero="+")
            .h5.mb-2 Adolescencia temprana
            p De los 10 hasta los 13 años, a partir de cambios físicos y emocionales.
          .tarjeta.bg-white.p-4(x="73%" y="70%" numero="+")
            .h5.mb-2 Adolescencia tardía
            p De los 17 hasta los 19 o 21 años, donde se consolida la identidad y se establecen relaciones más profundas.
          .tarjeta.bg-white.p-4(x="26%" y="70%" numero="+")
            .h5.mb-2 Adolescencia media
            p Desde los 14 hasta los 16 años, donde se destaca la búsqueda de identidad y la referencia de algunos conflictos sociales y familiares.
        p.mb-4 En relación con los:
        .row
          .col-10.col-lg-6.mb-4.mx-auto.mb-4(data-aos="fade-right")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-28.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Cambios de orden físico
                p.text-small.px-4.text-center.pb-2 Se experimentan cambios significativos, debido a <strong>las fluctuaciones hormonales.</strong> En los individuos de sexo masculino, incluye el crecimiento del vello facial, cambios en la voz y el desarrollo de características sexuales secundarias. En los individuos de sexo femenino, se inicia la menstruación y se desarrollan las mamas. Estos cambios son parte del proceso de maduración sexual, que prepara al individuo para la reproducción.
          .col-10.col-lg-6.mb-4.mx-auto.mb-4(data-aos="fade-left")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-29.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Cambios psicológicos
                p.text-small.px-4.text-center.pb-2 Se reconoce también la búsqueda de identidad, experimentan emociones intensas y, con frecuencia, contradictorias. En gran parte de la población adolescente, se presentan condiciones de inseguridad y rebeldía, mientras intentan definir su lugar en el mundo. Todos estos cambios inciden en los tipos de relaciones interpersonales más complejas y de mayor independencia de sus padres. 
    p.mb-4 Además, es un momento biológicamente importante en donde se forman relaciones significativas y buscan pertenecer a grupos sociales, lo cual puede influir, tanto positiva como negativamente, en su desarrollo. En la cultura, este tipo de búsqueda de identidad lleva también a la denominada “presión del grupo” que lleva a los sujetos a arriesgarse en situaciones y comportamientos que contradicen normas sociales o familiares. 

    .row.mb-5
      .col-12.col-xl-8.d-flex.flex-column.justify-content-center.bg-rosa.p-4.p-xxl-5(data-aos="fade-right")
        p.mb-0 En la adolescencia hay cambios sustanciales que demandan entornos seguros que promuevan el bienestar físico y mental. En la actualidad, los cambios sociales, la situación de seguridad de nuestra sociedad, el alto acceso a redes sociales y fuentes variadas de información, los entornos violentos e inseguros o de consumo de sustancias psicoactivas, llevan a considerar a los cuidadores, padres, profesores y líderes gubernamentales, a situar decisiones y agendas prioritarias, sobre la población, en estas edades.  
      .d-none.d-xl-block.col-4.px-0(data-aos="fade-left")
        img.h-100(src='@/assets/curso/unidad/img-30.png', alt='Texto que describa la imagen')

    .row.bg-azul-1.bg-full-width.py-4.mb-5
      div.px-5.pb-md-3.py-4.d-flex
        .col-12.col-xl-7.col-xxl-8.d-flex.pe-4.pe-xl-5.align-items-center.flex-column(data-aos="fade-right")
          h2.mb-4.pb-2 ¿Cómo funciona el cerebro de un adolescente? 
          p.mb-4 Al respecto se tienen varias interpretaciones que pueden ser explicadas desde el desarrollo de las emociones, la plasticidad neuronal, las expresiones y comportamientos. Para conocer más sobre el tema, lo invitamos a ver el siguiente video:
          a.d-flex.me-auto.bg-white.box-shadow.cursor-pointer(data-aos="zoom-in" href="https://youtu.be/WxTn5ABTBAM?si=D3vGQgKMf3-QXoLx " target="_blank")
            img.h-100(style="width: 48px" src='@/assets/componentes/video-icon-square.svg', alt='Texto que describa la imagen')
            p.text-small.fs-14px.my-auto.px-2 <strong>Video.</strong>  ¿Cómo funciona el cerebro de un adolescente?
             
        .d-none.d-xl-block.col-xl-5.col-xxl-4.mx-auto.mt-4.mt-xl-0(data-aos="fade-left")
          img.h-100(src='@/assets/curso/unidad/img-31.png', alt='Texto que describa la imagen')

    #t_2_3.titulo-segundo
      div.d-flex
        span.me-3 2.3  
        h2 Trastornos del desarrollo: factores de riesgo y estrategias de ntervención

    .row.mb-5.mx-0
      .d-none.d-xl-block.col-4.px-0(data-aos="fade-right")
        img.h-100(src='@/assets/curso/unidad/img-32.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8.d-flex.align-items-center.bg-amarillo-oscuro.p-4(data-aos="fade-left")
        p.mb-0(data-aos="fade-up") Los trastornos del neurodesarrollo infantil, se manifiestan desde edades tempranas y se caracterizan por déficits cognitivos, comportamentales, psicosociales y neurológicos. Estos trastornos infantiles se vinculan al funcionamiento del sistema nervioso y aparecen durante la maduración del cerebro y, durante el período infantil, aparecen las dificultades para alcanzar el desarrollo y se producen deficiencias del funcionamiento personal, social y académico.

    p.mb-5 Dentro de los trastornos están los que corresponden al <strong>aprendizaje</strong> y al <strong>desarrollo</strong>, como veremos a continuación:

    p.mb-4 <strong>Tabla 1.</strong> Tipos de alelos

    .tabla-a.mb-5
      table
        thead
          tr.bg-morado-oscuro
            th.text-center Trastornos del aprendizaje
            th.text-center Trastornos asociados al desarrollo
        tbody
          tr
            td <strong>Dislexia.</strong> Problemas para la lectura y la escritura (trastorno de la lecto-escritura).
            td.p-0
              p.p-4.mb-0 Afectación en el desarrollo psicomotor, cognitivo, lingüístico y emocional. <br><br>Se relaciona con una alteración que afecta la función neurológica y ejecución de diferentes habilidades.
              p.p-4.mb-0.border-top-gris Disfasias: dificultades en la adquisición y desarrollo del lenguaje.
          tr
            td <strong>Discalculia.</strong> Problemas para la adquisición de conceptos numéricos (trastorno de las matemáticas) y la aritmética.
            td.p-0
              p.p-4.mb-0 Afasias: dificultad para leer, hablar, comprender o repetir el lenguaje, debido a una lesión en las áreas del cerebro.
              p.p-4.mb-0.border-top-gris Dislalias: alteraciones en la articulación de los fonemas.
          tr
            td <strong>Disgrafías.</strong> Deficiencias en las habilidades para escribir, debido a dificultades para recordar y automatizar los movimientos motores para formar letras o números.
            td.p-0
              p.p-4.mb-0 Disglosias: trastorno de las articulaciones o malformación de los órganos periféricos del habla. 
              p.p-4.mb-0.border-top-gris Disartrias: alteración de la articulación que conlleva una lesión subyacente en el SNC.
          tr
            td <strong>Disortografía.</strong> Alteración del lenguaje escrito, hay dificultades en la ortografía y la escritura, se presentan problemas para reconocer, comprender y asociar los sonidos y los símbolos escritos.
            td.p-0
              p.p-4.mb-0 Disfemias: afecta a la fluidez del habla. 
              p.p-4.mb-0.border-top-gris Disfonías y afonías: problemas en la voz.
    p.mb-4 Los <strong>trastornos del neurodesarrollo</strong> son de base neurológica y pueden incidir en la adquisición, retención o aplicación de habilidades específicas o conjuntos de información. Son alteraciones en la atención, la memoria, la percepción, el lenguaje, la resolución de problemas o la interacción social. 


    .row.mb-5
      .col-12.col-xl-8.d-flex.flex-column.justify-content-center(data-aos="fade-right")
        .d-flex.flex-column.justify-content-center.bg-amarillo-oscuro.p-4.px-xxl-5.h-100
          p.mb-4 Estos trastornos pueden ser leves y fácilmente abordables con intervenciones conductuales y educativas o más graves, de modo que los niños afectados requieran un apoyo educativo particular. Algunos ejemplos son:
          div.d-flex
            img.mt-1.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/template/arrow.svg', alt='Texto que describa la imagen')
            p.mb-0 Trastorno de déficit de atención/hiperactividad.
          div.d-flex
            img.mt-1.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/template/arrow.svg', alt='Texto que describa la imagen')
            p.mb-0 Trastorno del espectro autista.
          div.d-flex
            img.mt-1.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/template/arrow.svg', alt='Texto que describa la imagen')
            p.mb-0 Dificultades del aprendizaje, como la dislexia y las deficiencias en otras áreas académicas.
          div.d-flex
            img.mt-1.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/template/arrow.svg', alt='Texto que describa la imagen')
            p.mb-0 Discapacidad intelectual.
          div.d-flex
            img.mt-1.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/template/arrow.svg', alt='Texto que describa la imagen')
            p.mb-0 Impulsividad.
          div.d-flex
            img.mt-1.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/template/arrow.svg', alt='Texto que describa la imagen')
            p.mb-0 Síndrome de Rett.
      .d-none.d-xl-block.col-4.px-0(data-aos="fade-left")
        img.h-100(src='@/assets/curso/unidad/img-33.png', alt='Texto que describa la imagen')


    #t_2_4.titulo-segundo
      div.d-flex
        span.me-3 2.4  
        h2 ¿Es clave la estimulación temprana?

    .row.mb-5.mx-0
      .d-none.d-xl-block.col-4.px-0(data-aos="fade-right")
        img.h-100(src='@/assets/curso/unidad/img-34.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8.d-flex.align-items-center.bg-rosa.p-4(data-aos="fade-left")
        p.mb-0(data-aos="fade-up") La estimulación temprana se refiere al conjunto de actividades, acciones y dinámicas de atención que se le da al infante en las primeras etapas de su vida, con el propósito de potenciar y desarrollar, al máximo, sus habilidades físicas, intelectuales y psicosociales, mediante programas sistemáticos y secuenciados, que abarcan todas las áreas del desarrollo.

    p.mb-4 La estimulación temprana se refiere al conjunto de actividades, acciones y dinámicas de atención que se le da al infante en las primeras etapas de su vida, con el propósito de potenciar y desarrollar, al máximo, sus habilidades físicas, intelectuales y psicosociales, mediante programas sistemáticos y secuenciados, que abarcan todas las áreas del desarrollo.

    .row.mb-4
      .col-12.col-xl-8.d-flex.flex-column.justify-content-center(data-aos="fade-right")
        .d-flex.flex-column.justify-content-center.bg-gris-claro-2.p-4.px-xxl-5.h-100
          p.mb-4.text-bold Prácticas más sobresalientes de estimulación temprana:
          div.d-flex
            img.mt-1.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/template/arrow.svg', alt='Texto que describa la imagen')
            p.mb-0 El vínculo de confianza y seguridad de los padres-hijos.
          div.d-flex
            img.mt-1.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/template/arrow.svg', alt='Texto que describa la imagen')
            p.mb-0 El involucramiento de los padres en la crianza de los hijos.
          div.d-flex
            img.mt-1.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/template/arrow.svg', alt='Texto que describa la imagen')
            p.mb-0 Exposición a estímulos sensoriales y contextos diferentes; por ejemplo, aprender a tocar un instrumento musical o disfrutar de parques, bosques y ecosistemas naturales.
          div.d-flex
            img.mt-1.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/template/arrow.svg', alt='Texto que describa la imagen')
            p.mb-0 El ejercicio físico. 
          div.d-flex
            img.mt-1.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/template/arrow.svg', alt='Texto que describa la imagen')
            p.mb-0 La alimentación saludable. 
          div.d-flex
            img.mt-1.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/template/arrow.svg', alt='Texto que describa la imagen')
            p.mb-0 El descanso adecuado.
          div.d-flex
            img.mt-1.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/template/arrow.svg', alt='Texto que describa la imagen')
            p.mb-0 La comprensión, el apoyo y la adecuada gestión emocional.
          div.d-flex
            img.mt-1.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/template/arrow.svg', alt='Texto que describa la imagen')
            p.mb-0 El cuidado en el lenguaje usado con los infantes y el establecimiento de límites.
          div.d-flex
            img.mt-1.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/template/arrow.svg', alt='Texto que describa la imagen')
            p.mb-0 La promoción de la autonomía en la realización de tareas y el reforzamiento de sus logros.
          div.d-flex
            img.mt-1.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/template/arrow.svg', alt='Texto que describa la imagen')
            p.mb-0 La dedicación de tiempo al juego.
          div.d-flex
            img.mt-1.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/template/arrow.svg', alt='Texto que describa la imagen')
            p.mb-0 El fomento de relaciones saludables con otros infantes. 
      .d-none.d-xl-block.col-4.px-0(data-aos="fade-left")
        img.h-100(src='@/assets/curso/unidad/img-35.png', alt='Texto que describa la imagen')

    p.mb-4 Por el contrario, someter a los niños y adolescentes a <strong>situaciones de estrés o ansiedad</strong>, puede dar lugar a una neuroplasticidad desadaptativa, aumentando el riesgo de trastornos emocionales, de conducta, mentales o déficits cognitivos.

    .row.mb-4
      .d-none.d-xl-block.col-4.px-0(data-aos="fade-right")
        img.h-100(src='@/assets/curso/unidad/img-36.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8.d-flex.flex-column.justify-content-center(data-aos="fade-left")
        .d-flex.flex-column.justify-content-center.bg-gris-claro-2.p-4.px-xxl-5.h-100
          p.mb-4.text-bold Signos que aparecen en niños y jóvenes expuestos a situaciones de estrés y que pueden variar en función de la edad:
          div.d-flex
            img.mt-1.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/template/arrow.svg', alt='Texto que describa la imagen')
            p.mb-0 Baja autonomía.
          div.d-flex
            img.mt-1.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/template/arrow.svg', alt='Texto que describa la imagen')
            p.mb-0 Dependencia del adulto.
          div.d-flex
            img.mt-1.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/template/arrow.svg', alt='Texto que describa la imagen')
            p.mb-0 Regresión a conductas más infantiles.
          div.d-flex
            img.mt-1.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/template/arrow.svg', alt='Texto que describa la imagen')
            p.mb-0 Temores, pesadillas, rabietas, llantos, irritabilidad.
          div.d-flex
            img.mt-1.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/template/arrow.svg', alt='Texto que describa la imagen')
            p.mb-0 Cambios en los patrones de sueño y/o alimentación.
          div.d-flex
            img.mt-1.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/template/arrow.svg', alt='Texto que describa la imagen')
            p.mb-0 Sentimientos de tristeza, apatía, frustración o culpa.
          div.d-flex
            img.mt-1.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/template/arrow.svg', alt='Texto que describa la imagen')
            p.mb-0 Hiperactividad o hipoactividad.
          div.d-flex
            img.mt-1.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/template/arrow.svg', alt='Texto que describa la imagen')
            p.mb-0 Dificultades atencionales y para concentrarse, impulsividad, conductas desafiantes,
          div.d-flex
            img.mt-1.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/template/arrow.svg', alt='Texto que describa la imagen')
            p.mb-0 Somatizaciones, ansiedad.

    p.mb-4 Al momento de prevenir, es clave situarse sobre las posibles causas de situaciones de estrés en niños y jóvenes:

    .row
      .col-12.col-xl-8.d-flex.flex-column.justify-content-center(data-aos="fade-right")
        .d-flex.flex-column.justify-content-center.bg-amarillo-oscuro.p-4.px-xxl-5.h-100
          p.mb-4.text-bold Signos que aparecen en niños y jóvenes expuestos a situaciones de estrés y que pueden variar en función de la edad:
          div.d-flex
            img.mt-1.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/template/arrow.svg', alt='Texto que describa la imagen')
            p.mb-0 Relación conflictiva con alguno de sus padres o cuidadores.
          div.d-flex
            img.mt-1.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/template/arrow.svg', alt='Texto que describa la imagen')
            p.mb-0 Carencias afectivas.
          div.d-flex
            img.mt-1.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/template/arrow.svg', alt='Texto que describa la imagen')
            p.mb-0 Ausencia de una rutina: tareas, descanso, alimentación.
          div.d-flex
            img.mt-1.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/template/arrow.svg', alt='Texto que describa la imagen')
            p.mb-0 Reducción o ausencia del tiempo de ocio.
          div.d-flex
            img.mt-1.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/template/arrow.svg', alt='Texto que describa la imagen')
            p.mb-0 Exigencias o altas expectativas en el ámbito académico.
          div.d-flex
            img.mt-1.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/template/arrow.svg', alt='Texto que describa la imagen')
            p.mb-0 Acoso escolar.
          div.d-flex
            img.mt-1.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/template/arrow.svg', alt='Texto que describa la imagen')
            p.mb-0 Inadecuada gestión emocional (capacidad para tolerar la frustración, controlar los impulsos, ansiedad y tristeza).
      .d-none.d-xl-block.col-4.px-0(data-aos="fade-left")
        img.h-100(src='@/assets/curso/unidad/img-37.png', alt='Texto que describa la imagen')

</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema2',
  components: {
    BannerInterno,
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
