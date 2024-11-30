<template lang="pug">
.curso-main-container.introduccion
  BannerInterno(:titulo="'Unidad 3. Desarrollo integral y contextos de aprendizaje en la adultez y la vejez'" :subTitulo="'INTRODUCCIÓN'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    
    .row.mb-4
      .col-12.col-xl-8(data-aos="fade-right")
        p.mb-4 Según la Organización para la Cooperación y el Desarrollo Económico (OCDE), en la actualidad, la <strong>expectativa de vida</strong> es de 81 años en la población humana, la cual es una de las mayores expectativas de vida a lo largo de la historia de la humanidad. Por situaciones contextuales, culturales, económicas, de salud pública o de acceso a recursos básicos, de guerras y conflictos, la expectativa de vida ha tenido distintos referentes en el orden histórico. 
        .row.mb-4
          .d-flex.align-items-center
            div.d-flex.align-items-center.bg-rosa.px-3.py-4
              img.me-4(style="width: 90px" src='@/assets/curso/unidad/img-1.svg', alt='Texto que describa la imagen')
              p.pe-xl-5.mb-0  Para el año 2024, la expectativa de vida en la población latinoamericana, se estimó en 77 y el diferencial con otras latitudes, se debe al desarrollo social y económico de las naciones, así como a la consecuente desigualdad social y los estilos de vida. 
        p.mb-0 En ese orden de ideas, la adultez y la vejez, son el rango más amplio de tiempo que abarca la vida humana, pues como se evidenció en la unidad anterior, la finalización de la adolescencia se asocia a la edad de 15-17 años; eso quiere decir que, en entre la adultez y la vejez, una persona transita cerca de 60 años. 
      .col-4.d-none.d-xl-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-2.png', alt='Texto que describa la imagen')

    p.mb-4 Llevar a cabo la exploración sobre los cambios físicos, biológicos, sociales y cognitivos de la adultez y la vejez, requiere una atención por rangos, de forma que sea posible evidenciar las modificaciones funcionales y estructurales. De manera especial, en la educación, es una oportunidad para focalizar sobre el aprendizaje, las estrategias pedagógicas y didácticas, pertinentes y coherentes. 
    .row.mb-4
      .col-4.d-none.d-xl-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-3.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8(data-aos="fade-left")
        p.mb-4 También significa la oportunidad de promover la educación y el aprendizaje para toda la vida e incidir con propósito, los entornos de vida, el desarrollo de las dimensiones humanas en sus proyectos de vida, el relacionamiento laboral, familiar, social, educativo y cultural.
        .bg-azul.p-4
          p.mb-4 En qué se diferencia un adulto de un adulto mayor (vejez)? ¿De qué manera se puede avanzar en la vida de las personas, para un envejecimiento exitoso que promueva la calidad de vida? 
          p.mb-0 Estas son algunas de las preguntas que se abordarán a lo largo de la unidad; es de esta manera que, a partir de un ejercicio práctico y dinámico, se aplicará lo aprendido en todo el curso.

    .row.mb-4
      .d-flex.align-items-center
        div.d-flex.align-items-center.bg-rosa.px-3.py-4
          img.me-4(style="width: 90px" src='@/assets/curso/unidad/img-4.svg', alt='Texto que describa la imagen')
          p.pe-xl-5.mb-0 Por lo tanto, se formulará un <strong>reto educativo</strong> para que el estudiante explique, de manera diferencial, las cualidades cognitivas, sociales, acondicionamiento físico, entre otros factores, con personas ubicadas en las distintas etapas del desarrollo: niñez, adolescencia, adultez y vejez.




</template>

<script>
import BannerInterno from '../components/plantilla/BannerInterno'
import Muestras from '../components/muestras/Muestras.vue'

export default {
  name: 'Introduccion',
  components: {
    BannerInterno,
    Muestras,
  },
  data: () => ({
    globalData: global,
  }),
}
</script>

<style lang="sass"></style>
