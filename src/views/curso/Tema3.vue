<template lang="pug">
.curso-main-container.pb-3
  BannerInterno.text-uppercase(:titulo="'Unidad 3. Desarrollo integral y contextos de aprendizaje en la adultez y la vejez'" :subTitulo="'3. Salud mental en la adultez y vejez: factores de riesgo y protección'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .row.mb-4.mx-0
      .d-none.d-xl-block.col-4.px-0(data-aos="fade-right")
        img.h-100(src='@/assets/curso/unidad/img-33.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8.d-flex.align-items-center.bg-gris-2.p-4(data-aos="fade-left")
        p.mb-0(data-aos="fade-up") La población humana de todo el mundo está envejeciendo, las cifras demográficas muestran  que hacia el año 2030, una de cada seis personas tendrá más de 60 años; sumado a esto, la natalidad está decreciendo, asunto que pone en alerta a los gobiernos de todo el mundo, por razones asociadas con el capital humano y económico, la capacidad de productividad, la generación de soportes económicos pensionales, el abordaje de situaciones de salud en la población adulta mayor y los retos sociales, y culturales.

    p.mb-4 <strong>Tabla 1.</strong> Proyectiva de la cantidad de personas en el mundo que en 2020-2050, estarán demográficamente en el rango de edad +60 (OMS, 2024).

    .row.mb-4
      .col-10.col-xl-6.mx-auto.px-0(data-aos="fade-right")
      
        .tabla-a.mb-5
          table
            thead
              tr
                th.text-center Año
                th.pe-0(width="55%") Personas con más de 60 años
            tbody
              tr
                td.text-center 2020
                td 1000 millones
              tr
                td.text-center 2030 
                td 1400 millones
              tr
                td.text-center 2050
                td 2100 millones

      .col-6.d-none.d-xl-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-34.png', alt='Texto que describa la imagen')

    .row.mb-4
      .col-4.d-none.d-xl-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-35.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8.d-flex.align-items-center.p-4.flex-column(data-aos="fade-left")
        .bg-amarillo.p-4.mb-4
          p.mb-0 En gran parte de las culturas, los adultos mayores son sinónimo de experiencia, respeto, tradiciones e identidad; son soporte de conocimiento y de sabiduría que, como legado, se convierten en referente para los más jóvenes. Sin embargo, en naciones que han reducido su capital cultural o identidad, los adultos dejan de tener este rol protagónico y empiezan a darse situaciones contrarias como el abandono, la soledad, el maltrato, incluso, la vulnerabilidad. Sumado a lo anterior, un adulto mayor desprotegido, es más propenso de presentar afecciones de salud mental, dolores crónicos, fragilidad en sus funciones básicas, depresión, ansiedad, entre otros.  
        p.mb-0 Eso implica que el adulto mayor pierde se autonomía y ante eso, viene en crecimiento una crisis de atención integral sobre el adulto mayor. Actualmente, se ve en aumento la atención por parte de centros especializados de cuidados gerontológicos, la demanda de cuidadores especializados o la atención por parte de algún miembro de la familia (con o sin experiencia en cuidado y atención de personas). Sumado a lo anterior, la crisis se agudiza cuando se monetiza este tipo de atenciones especiales, porque ante la alta demanda y la baja disponibilidad, el acceso a estos cuidados, resulta siendo un lujo.

    #t_3_1.titulo-segundo
      div.d-flex
        span.me-3 3.1  
        h2 Factores de riesgo y alertas 
    
    p.mb-4 Algunas de las <strong>alertas más comunes</strong> sobre la condición de salud mental en los adultos mayores, son:

    .row.mb-5
      .col-12.col-xl-7(data-aos="fade-right")
        AcordionA(tipo="b")
          .div(titulo="Los cambios abruptos ")
            p Los cambios abruptos o también mediáticos, en el estado de ánimo, sin justificación alguna, o bajo circunstancias o contextos que no ameritan tal nivel de respuesta.
          .div(titulo="Los niveles cambiantes de energía")
            p Pueden deberse a un efecto de un deterioro físico o de un empobrecimiento en la alimentación o el descanso. Las variaciones en los hábitos alimenticios, de vigilia y de sueño, que en conjunto influyen en efectos de irritabilidad y cansancio.
          .div(titulo="El aislamiento social")
            p De los familiares, vecinos, amigos y pareja, es una de las causas más relevantes, bien sea porque de manera autónoma, el adulto mayor vaya alejándose de las personas o que sean las personas que se vayan alejando del adulto mayor. En ambos casos, la situación de aislamiento es un detonante para su salud mental, la calidad de las interacciones sociales y su sentido de vida.
          .div(titulo="El cambio de interés")
            p En el desarrollo de sus actividades favoritas, pues estas resultan siendo en gran parte, las motivaciones para mantenerse activo y dispuesto; así como demostrar desinterés por situaciones o cosas, que normalmente llamaban su atención.
          .div(titulo="Tener pensamientos y recuerdos ")
            p Que sean reiterativos y recurrentes (que no puede sacar de su cabeza) y escuchar voces o creer cosas que no son ciertas o al menos que claramente están por fuera de contexto.
          .div(titulo="Sentimientos inusuales")
            p Son una prioridad, sobre todo cuando están asociados con la confusión, el olvido, el enojo excesivo o recurrente, la molestia constante la preocupación y el susto, sobre todo cuando es una respuesta sobredimensionada al contexto. También es un indicio importante, cuando el adulto mayor manifiesta reacciones de tristeza o desesperanza sin que el contexto se lo genere.
      .col-12.col-xl-5.d-none.d-xl-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-36.png', alt='Texto que describa la imagen')

    .row.mb-5
      .d-none.d-xl-block.col-xl-5.col-xxl-4.mx-auto.mt-4.mt-xl-0(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-37.png', alt='Texto que describa la imagen')  
      .col-12.col-xl-7.col-xxl-8.d-flex.flex-column
        p En lo físico, las alertas están asociadas a dolores y molestias inexplicables y recurrentes. El fumar, beber o usar drogas por primera vez o más de lo habitual y finalmente, las acciones o comportamientos que lo lleven a lastimarse o lastimar a otros.
        .d-flex.align-items-start.bg-gris-claro-2.p-4.mb-4(data-aos="fade-left")
          img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-38.svg', alt='Texto que describa la imagen')
          .d-flex.flex-column
            p.pe-xl-3.mb-0(data-aos="fade-up") Según datos de la Organización Mundial de la Salud, el 14 % de los adultos de 60 años o más viven con un trastorno mental. Cerca del 27 % de las muertes por suicidio se producen en personas de 60 años o más.

    p.mb-4 <strong>Figura 3.</strong> Algunos factores de riesgo sobre la salud mental del adulto mayor, generando principalmente depresión y ansiedad

    img.mb-4(src='@/assets/curso/unidad/img-39.png', alt='Texto que describa la imagen')

    #t_3_2.titulo-segundo
      div.d-flex
        span.me-3 3.2  
        h2 Medidas de protección y prevención 
    
    .row.mb-4
      .col-4.d-none.d-xl-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-40.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8.ps-4(data-aos="fade-left")
        p.mb-4 Lo más importante en la etapa de la vejez, es recorrerla en condiciones saludables, tanto en lo físico, como en lo social y emocional, de tal manera que el bienestar y la calidad de vida de las personas adultas mayores, puedan mitigar el deterioro de sus facultades y la pérdida de su autonomía.
        .bg-amarillo.p-4.mb-4
          div.d-flex
            img.mt-2.me-2.d-flex.align-self-base.h-100(style="width: 15px" src='@/assets/curso/arrow.png', alt='Texto que describa la imagen')
            p.mb-0 Su entorno nuclear, puede  estar conformado por su pareja, familia, amigos o vecinos. 
          div.d-flex
            img.mt-2.me-2.d-flex.align-self-base.h-100(style="width: 15px" src='@/assets/curso/arrow.png', alt='Texto que describa la imagen')
            p.mb-0 El gobierno local, que permita garantizar unas condiciones básicas e idóneas. 
          div.d-flex
            img.mt-2.me-2.d-flex.align-self-base.h-100(style="width: 15px" src='@/assets/curso/arrow.png', alt='Texto que describa la imagen')
            p.mb-0 La promoción de oportunidades por distintos actores sociales, fundacionales o empresariales.
        p.mb-0 En concreto, se pueden clasificar de la siguiente manera:

    .row.mb-5
      .col-12.col-xl-7(data-aos="fade-right")
        AcordionA(tipo="b")
          .div(titulo="Necesidades básicas de atención ciudadana")
            div.d-flex
              img.mt-2.me-2.d-flex.align-self-base.h-100(style="width: 15px" src='@/assets/curso/arrow.png', alt='Texto que describa la imagen')
              p.mb-0 Las intervenciones esenciales incluyen políticas y leyes contra la discriminación, intervenciones educativas y actividades intergeneracionales
            div.d-flex
              img.mt-2.me-2.d-flex.align-self-base.h-100(style="width: 15px" src='@/assets/curso/arrow.png', alt='Texto que describa la imagen')
              p.mb-0 Atención especial a los adultos mayores en condición de inseguridad financiera y la desigualdad de ingresos
            div.d-flex
              img.mt-2.me-2.d-flex.align-self-base.h-100(style="width: 15px" src='@/assets/curso/arrow.png', alt='Texto que describa la imagen')
              p.mb-0 Programas para garantizar viviendas, edificios públicos y transportes seguros y accesibles
            div.d-flex
              img.mt-2.me-2.d-flex.align-self-base.h-100(style="width: 15px" src='@/assets/curso/arrow.png', alt='Texto que describa la imagen')
              p.mb-0 Apoyo social a los adultos mayores y a sus cuidadores en caso de no contar con lo básico de atención
            div.d-flex
              img.mt-2.me-2.d-flex.align-self-base.h-100(style="width: 15px" src='@/assets/curso/arrow.png', alt='Texto que describa la imagen')
              p.mb-0 Atención inmediata en casos identificados de psicosis, depresión, aislamiento y maltrato.
          .div(titulo="Necesidades relacionadas con la salud")
            div.d-flex
              img.mt-2.me-2.d-flex.align-self-base.h-100(style="width: 15px" src='@/assets/curso/arrow.png', alt='Texto que describa la imagen')
              p.mb-0 Apoyo a los comportamientos saludables: hábitos alimentarios y saludables, actividad física y ocupacional
            div.d-flex
              img.mt-2.me-2.d-flex.align-self-base.h-100(style="width: 15px" src='@/assets/curso/arrow.png', alt='Texto que describa la imagen')
              p.mb-0 Abstención o reducción del tabaco y disminución en el consumo de alcohol. Programas especiales de salud y sociales dirigidos a grupos vulnerables
            div.d-flex
              img.mt-2.me-2.d-flex.align-self-base.h-100(style="width: 15px" src='@/assets/curso/arrow.png', alt='Texto que describa la imagen')
              p.mb-0 Atención prioritaria a los adultos mayores que padecen afecciones crónicas.
          .div(titulo="Necesidades sociales")
            div.d-flex
              img.mt-2.me-2.d-flex.align-self-base.h-100(style="width: 15px" src='@/assets/curso/arrow.png', alt='Texto que describa la imagen')
              p.mb-0 Actividades sociales fructíferas pueden mejorar considerablemente la salud mental positiva a través de grupos comunitarios y de apoyo.
            div.d-flex
              img.mt-2.me-2.d-flex.align-self-base.h-100(style="width: 15px" src='@/assets/curso/arrow.png', alt='Texto que describa la imagen')
              p.mb-0 Formación en habilidades sociales, los grupos de artes creativas, servicios de ocio y educación y los programas de voluntariado.
            div.d-flex
              img.mt-2.me-2.d-flex.align-self-base.h-100(style="width: 15px" src='@/assets/curso/arrow.png', alt='Texto que describa la imagen')
              p.mb-0 Formación a cuidadores de los adultos mayores, con herramientas de atención especial y de primer respondiente.
      .col-12.col-xl-5.d-none.d-xl-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-41.png', alt='Texto que describa la imagen')

    .row.bg-azul-1.bg-full-width.py-4.mb-4
      .px-5.pb-md-3.py-4.d-flex
        .d-none.d-xl-block.col-xl-5.col-xxl-4.mx-auto.mt-4.mt-xl-0(data-aos="fade-right")
          img.h-100(src='@/assets/curso/unidad/img-42.png', alt='Texto que describa la imagen')
             
        .col-12.col-xl-7.col-xxl-8.d-flex.ps-4.ps-xl-5.align-items-center.flex-column(data-aos="fade-left")
          h2.mb-4.pb-2.me-auto Estimulación múltiple en adultos mayores
          p.mb-5 Lo invitamos a leer el texto de Arévalo Herrera, D. M. (2014). Estimulación múltiple en adultos mayores: estrategias; se aborda una propuesta de Programa de estimulación múltiple en personas adultas mayores, así como los Elementos que debe contemplar un programa de estimulación múltiple en adultos mayores (Capítulo III y IV p.40).
          a.d-flex.me-auto.bg-white.box-shadow.cursor-pointer(data-aos="zoom-in" href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/41932" target="_blank")
            img.h-100(style="width: 48px" src='@/assets/componentes/link-icon-square.png', alt='Texto que describa la imagen')
            p.text-small.fs-14px.my-auto.px-2 <strong>Sitio web.</strong> Arévalo Herrera, D. M. (2014)

    .row.mb-5
      .col-12.col-xl-7.col-xxl-8.d-flex.flex-column
        p En este texto se plantea la premisa que la estimulación múltiple es fundamental para promover y favorecer cambios positivos en los adultos mayores, a través de actividades que ejerciten diversas áreas del desarrollo.
        .d-flex.align-items-start.bg-rosa.p-4.mb-4(data-aos="fade-right")
          img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-43.svg', alt='Texto que describa la imagen')
          .d-flex.flex-column
            p.pe-xl-3.mb-0(data-aos="fade-up") Las áreas asociadas al programa abordan las dimensiones: social, cognitiva, lenguaje y la coordinación motriz, y el autorreconocimiento con la correspondiente gestión de su autoestima. Estimular estas dimensiones implica fortalecer las habilidades o capacidades del adulto mayor a través de ejercicios y actividades diseñadas para la población específica, según el contexto.  
      .d-none.d-xl-block.col-xl-5.col-xxl-4.mx-auto.mt-4.mt-xl-0(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-44.png', alt='Texto que describa la imagen')  

</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema3',
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
