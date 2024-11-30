<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:titulo="'unidad 1. Bases genéticas del desarrollo humano'" :subTitulo="'1. Bases genéticas del desarrollo humano'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-4 De acuerdo con las denominaciones en los estudios de embriología humana, la fase o etapa prenatal se describe como: aquella que ocurre en el vientre materno, en la que el embrión comienza su proceso de desarrollo hasta convertirse en un bebé completamente formado. Esta etapa incluye:
    .bg-fondo-1.bg-full-width
      div.px-5.pb-md-3.py-4
      
        TabsC.mb-5
          .tabs-content.bg-gris-claro-2.border.px-4.p-md-5.py-3(titulo="Período germinal", :iconUrl="require('@/assets/curso/unidad/img-38.svg')")
            .row
              .d-none.d-lg-block.col-md-12.col-lg-5.col-xl-4(data-aos="fade-right")
                figure
                  img(src='@/assets/curso/unidad/img-2.png', alt='Texto que describa la imagen')
              .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0(data-aos="fade-left")
                h4 Período germinal
                p(data-aos="fade-up") Desde el momento de la fecundación, cuando un óvulo es fecundado por un espermatozoide y comienza a desplazarse hacia el útero, donde se implantará.
          .tabs-content.bg-gris-claro-2.border.px-4.p-md-5.py-3(titulo="Período embrionario", :iconUrl="require('@/assets/curso/unidad/img-38.svg')")
            .row
              .d-none.d-lg-block.col-md-12.col-lg-5.col-xl-4(data-aos="fade-right")
                figure
                  img(src='@/assets/curso/unidad/img-3.png', alt='Texto que describa la imagen')
              .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0(data-aos="fade-left")
                h4 Período embrionario
                p(data-aos="fade-up") Etapa en la que comienza la división de las células, según sus funciones, y que luego dará lugar a la estructura ósea, muscular y los diferentes órganos del bebé.
          .tabs-content.bg-gris-claro-2.border.px-4.p-md-5.py-3(titulo="Período fetal", :iconUrl="require('@/assets/curso/unidad/img-38.svg')")
            .row
              .d-none.d-lg-block.col-md-12.col-lg-5.col-xl-4(data-aos="fade-right")
                figure
                  img(src='@/assets/curso/unidad/img-4.png', alt='Texto que describa la imagen')
              .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0(data-aos="fade-left")
                h4 Período fetal
                p(data-aos="fade-up") En la que los órganos se forman y maduran. Esta etapa de desarrollo comienza aproximadamente a las 12 semanas de gestación y termina con el nacimiento del bebé.

        .row.mb-5
          .col-10.col-md-6.col-lg-4.col-xl-3.mb-4.mx-auto(data-aos="fade-right")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-5.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Infancia y niñez
                p.text-small.px-4.text-center.pb-2 Recién nacido y bebé, desde los 0 a los 2 años.
          .col-10.col-md-6.col-lg-4.col-xl-3.mb-4.mx-auto(data-aos="fade-up")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-6.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Primera infancia
                p.text-small.px-4.text-center.pb-2 Niño pequeño en edad preescolar, desde los 3 a los 5 años.
          .col-10.col-md-6.col-lg-4.col-xl-3.mb-4.mx-auto(data-aos="fade-down")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-7.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Segunda infancia
                p.text-small.px-4.text-center.pb-2 Niño en edad escolar, desde los 6 a los 11 años.
          .col-10.col-md-6.col-lg-4.col-xl-3.mb-4.mx-auto(data-aos="fade-left")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-8.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Adolescencia
                p.text-small.px-4.text-center.pb-2 Etapa de la adolescencia, desde los 12 años en adelante.

    #t_1_1.titulo-segundo
      div.d-flex
        span.me-3 1.1  
        h2 Etapas del desarrollo infantil: motor, cognitivo, social y emocional

    p.mb-4 El psicólogo y biólogo Suizo Jean Piaget (1896- 1980), ha sido estimado como pionero en los estudios de la psicología evolutiva y considerado el Padre de la epistemología genética; dentro de los aportes a la psicología del desarrollo están los estadíos de la infancia, la teoría cognitiva constructivista y la explicación sobre el desarrollo de la inteligencia humana.     


    .row.mb-4
      .col-12.col-xl-7.col-xxl-8.d-flex.flex-column
        div.d-flex.align-items-start.bg-amarillo-oscuro.p-4.mb-4(data-aos="fade-left")
          p.pe-xl-3.mb-0(data-aos="fade-up") Sus investigaciones dan cuenta sobre los “patrones” de pensamiento, según la etapa de crecimiento; por tanto, la concepción de cada etapa y la determinación de las cualidades generales o genéricas, son esenciales para comprender dichos patrones y también para identificar los diferenciales. Esta clasificación ha sido útil para determinar las cualidades elementales por rango de edad, teniendo presente, que los cambios o modificaciones pueden ser alertas sobre el individuo. En la medicina, la psicología y la educación, estos patrones han sido relevantes para identificar algunas condiciones que deben ser atendidas. 
        p(data-aos="fade-up") Dentro de los grandes aportes de Piaget, se encuentra que, durante los primeros años de vida, las capacidades mentales se modifican por fases distintas y que se van “modelando” en el transcurso de la vida hasta la adultez, lo que se denomina Fases de Desarrollo. Posteriormente, otros autores e investigadores generaron nuevas posturas frente a esta teoría que refutan, en parte, las explicaciones, porque están sustentadas en el determinismo biológico; sin embargo, esta teoría sigue siendo una base importante en la comprensión de la psicología evolutiva. 
      .d-none.d-xl-block.col-xl-5.col-xxl-4.mx-auto.mt-4.mt-xl-0(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-9.png', alt='Texto que describa la imagen')

    p.mb-4 Piaget, dividió el desarrollo cognoscitivo en 4 fases o etapas, <strong>en las que el pensamiento del infante resulta siendo una secuencia diferencial en las habilidades y formas cómo se organiza el conocimiento:</strong> 

    .row.mb-5
      .col-12.col-lg-5.d-none.d-lg-block(data-aos="fade-left")
        img.-mt-18px(src='@/assets/curso/unidad/img-10.png', alt='Texto que describa la imagen')
      .col-12.col-lg-7(data-aos="fade-right")
        AcordionA(tipo="b")
          .div(titulo="Fase sensoriomotora (0-2 años)")
            p Los bebés aprenden a través de sus sentidos y movimientos. Desarrollan la comprensión de la permanencia del objeto, es decir, que los objetos existen incluso cuando no están visibles.
          .div(titulo="Etapa preoperacional (2-7 años)")
            p En esta etapa, los niños comienzan a usar el lenguaje y el pensamiento simbólico. Su razonamiento es egocéntrico y tienen dificultades para entender conceptos abstractos.
          .div(titulo="Etapa de operaciones concretas (7-11 años)")
            p Los niños empiezan a pensar lógicamente sobre eventos concretos. Pueden clasificar y ordenar objetos, su pensamiento aún está limitado a situaciones tangibles.
          .div(titulo="Etapa de operaciones formales (12 años en adelante)")
            p En esta fase, se desarrolla el pensamiento abstracto, permitiendo a los adolescentes razonar sobre situaciones hipotéticas y resolver problemas complejos.

    .row.mb-5.mx-0
      .col-12.col-xl-8.d-flex.align-items-center.bg-gris-claro-2.p-4(data-aos="fade-left")
        p.mb-0(data-aos="fade-up")  Las etapas se relacionan generalmente con ciertos niveles de edad, pero el tiempo que dura una etapa muestra gran variación individual y cultural. De acuerdo con sus explicaciones, los niños organizan el conocimiento sobre el mundo por esquemas, que son acciones, operaciones mentales, conceptos y demás información sobre su mundo. 
      .d-none.d-xl-block.col-4.px-0(data-aos="fade-right")
        img.h-100(src='@/assets/curso/unidad/img-11.png', alt='Texto que describa la imagen')

    p.mb-5 A medida que va creciendo, el infante empieza a usar símbolos, como en el caso del lenguaje, mejora su forma de organizar el conocimiento, reorganiza y es capaz de diferenciar. <strong>En esa misma vía, Piaget señala dos principios:</strong>


    .row.position-relative.mb-4.py-4.bg-fondo-2.bg-full-width
      div.px-4.px-md-5.py-md-3
        SlyderA(tipo="b").bg-white
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-right")
              p.text-bold La organización
              p Corresponde a esa función que se va modificando con el crecimiento, en la que integra patrones físicos o esquemas mentales hacia sistemas completos.
            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in-left")
              figure
                img(src='@/assets/curso/unidad/img-12.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.text-bold La adaptación
              p Se relaciona con la capacidad de ajustar las estructuras mentales o conductas a las exigencias del entorno, contexto o ambiente.
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/unidad/img-13.png', alt='Texto que describa la imagen')

    p.mb-4 Piaget utilizó el modelo constructivista para explicar la adquisición del conocimiento bajo los siguientes conceptos:

    .row.mb-5
      .col-12.col-lg-5.d-none.d-lg-block(data-aos="fade-left")
        img.-mt-18px(src='@/assets/curso/unidad/img-14.png', alt='Texto que describa la imagen')
      .col-12.col-lg-7(data-aos="fade-right")
        AcordionA(tipo="b")
          .div(titulo="Asimilación")
            p Integración de información <strong>nueva</strong> adquirida desde la experiencia, se interpreta con esquemas mentales, dependiendo de la etapa o fase. Se incorporan elementos externos a estructuras preexistentes, permitiendo responder a un evento desconocido, desde experiencias previas, como referencia, para poder dotar de un sentido.
          .div(titulo="Acomodación")
            p Es la modificación de esquemas preexistentes debido a información o experiencia recién adquirida. Nuevos elementos hacen que los esquemas previos se reorganicen porque ya no resultan útiles.

    .row.mb-4.mx-0
      .col-12.col-xl-8.d-flex.align-items-center.bg-amarillo.p-4(data-aos="fade-left")
        p.mb-0(data-aos="fade-up") Como resultado de los procesos de asimilación y acomodación, se logra una mayor adaptación del conocimiento y la información del medio; esa adaptación es la que Piaget concluye como inteligencia. Por tanto, <strong>el aprendizaje es un proceso activo y dinámico, que implica cambiar constantemente, para lograr un equilibrio.</strong>
      .d-none.d-xl-block.col-4.px-0(data-aos="fade-right")
        img.h-100(src='@/assets/curso/unidad/img-15.png', alt='Texto que describa la imagen')
    p.mb-4.text-bold A continuación, se presentan algunos ejemplos donde observamos las diferencias entre la asimilación de la acomodación: 

    p.mb-3 <strong>Tabla 1</strong>. Tipos de alelos

    .tabla-a.mb-5
      table
        thead
          tr.bg-morado-oscuro
            th.text-center ASIMILACIÓN
            th.text-center ACOMODACIÓN
        tbody
          tr
            td.px-lg-5.bg-morado-claro.border-bottom-gris Un niño que tiene un perro de raza grande y ve en la calle un perro de raza pequeña y con coloración distinta, afirma que eso no es un perro. 
            td.px-lg-5.bg-gris-claro-3.border-bottom-gris El padre le explica que los perros pueden ser más grandes o pequeños y de diferentes colores. El niño modifica su concepto de perro.
          tr
            td.px-lg-5.bg-morado-claro Un bebé recibe por primera vez un biberón e intenta chuparlo, pues la experiencia con el pezón materno en la etapa de lactancia, lo ha preparado para usar objetos de esa manera. 
            td.px-lg-5.bg-gris-claro-3 Con el uso a diario y reiterado, el bebé aprende a sostener el biberón para poder chuparlo, acción que no era necesaria con el seno materno, teniendo así una diferencia entre los dos objetos.

    #t_1_2.titulo-segundo
      div.d-flex
        span.me-3 1.2
        h2 Crecimiento y desarrollo en la niñez
    p.mb-4 El psicólogo y biólogo Suizo Jean Piaget (1896- 1980), ha sido estimado como pionero en los estudios de la psicología evolutiva y considerado el Padre de la epistemología genética; dentro de los aportes a la psicología del desarrollo están los estadíos de la infancia, la teoría cognitiva constructivista y la explicación sobre el desarrollo de la inteligencia humana.     


    .row.bg-azul-1.bg-full-width.py-4.mb-5
      div.px-5.pb-md-3.py-4.d-flex
        .col-12.col-xl-7.col-xxl-8.d-flex.pe-4.pe-xl-5.align-items-center.flex-column(data-aos="fade-right")
          h2.mb-4.pb-2 Crecimiento y desarrollo en la niñez
          p.mb-1 El crecimiento y desarrollo en la niñez abarca diversos patrones, entre los que destacan los físicos, cognitivos, sociales y emocionales. Cada etapa presenta avances significativos que permiten a los niños comprender su entorno, establecer vínculos afectivos y desarrollar habilidades cognitivas y sociales. A continuación, en el PDF <strong>Crecimiento y desarrollo en la niñez</strong>, se exploran estos patrones por rangos de edad, destacando los hitos y capacidades clave que caracterizan el desarrollo infantil. 
          a.mt-4.d-flex.me-auto.bg-white.box-shadow.cursor-pointer(data-aos="zoom-in" :href="obtenerLink('/downloads/Anexo_Crecimiento y desarrollo en la niñez.pdf')" target="_blank")
            img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
            p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong> Crecimiento y desarrollo en la niñez
             
        .d-none.d-xl-block.col-xl-5.col-xxl-4.mx-auto.mt-4.mt-xl-0(data-aos="fade-left")
          img.h-100(src='@/assets/curso/unidad/img-16.png', alt='Texto que describa la imagen')

    p.mb-5 Ahora, reflexione sobre las siguientes preguntas:

    .row.mb-5.mx-0
      .d-none.d-xl-block.col-3.px-0(data-aos="fade-right")
        img.h-100(src='@/assets/curso/unidad/img-17.png', alt='Texto que describa la imagen')
      .col-12.col-xl-9.p-0.d-flex.flex-column.justify-content-center.align-items-center.bg-amarillo(data-aos="fade-left")
        p.p-4.mb-0.text-bold.text-center.border-bottom-gris-2(data-aos="fade-up") ¿Qué sucede si a determinada edad, el niño o niña no desarrolla las capacidades o cualidades, según su etapa? <br> ¿Cómo actuar si presentan modificaciones evidentes de estos patrones? 
        p.p-4.mb-0(data-aos="fade-up") Al respecto, la respuesta más común es acudir a un especialista que, a través de diagnósticos médicos, psicológicos o educativos, pueda determinar si existe alguna situación que comprometa al infante, desde cualquier dimensión de su desarrollo. 


    .row.bg-azul-1.bg-full-width.py-4.mb-5
      div.px-5.pb-md-3.py-4.d-flex
        .col-12.col-xl-7.col-xxl-8.d-flex.pe-4.pe-xl-5.align-items-center.flex-column(data-aos="fade-right")
          h2.mb-4.pb-2 Desarrollo de la niñez
          p.mb-1 ¿Cómo influyen las distintas teorías y enfoques de autores como Montessori, Vygotski y Bronfenbrenner en el desarrollo cognitivo, social y emocional de los niños, y de qué manera pueden aplicarse estos principios en el entorno educativo actual para potenciar el aprendizaje y bienestar infantil? A continuación, en el PDF <strong>Desarrollo de la niñez</strong>, podrá conocer cada uno de los aportes de estos autores. 
          a.mt-4.d-flex.me-auto.bg-white.box-shadow.cursor-pointer(data-aos="zoom-in" :href="obtenerLink('/downloads/Anexo_Desarrollo de la niñez.pdf')" target="_blank")
            img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
            p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong> Desarrollo de la niñez
             
        .d-none.d-xl-block.col-xl-5.col-xxl-4.mx-auto.mt-4.mt-xl-0(data-aos="fade-left")
          img.h-100(src='@/assets/curso/unidad/img-18.png', alt='Texto que describa la imagen')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-img-1
  position: absolute
  max-width: none
  width: calc( 100% + 96px  )
  height: calc( 100% + 96px )
  left: -48px
  top: -48px
  inline-size: auto
.tabs-content
  background-color: $color-sistema-h
.img-infografica
  background-color: $color-adicional-1
</style>
