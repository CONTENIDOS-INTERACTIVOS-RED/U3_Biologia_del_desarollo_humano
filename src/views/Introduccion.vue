<template lang="pug">
.curso-main-container.introduccion
  BannerInterno(:titulo="'Unidad 2. Desarrollo físico, cognitivo y emocional en las etapas de la infancia y adolescencia'" :subTitulo="'INTRODUCCIÓN'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    p.mb-5 Desde el desarrollo embrionario y para toda la vida, los seres humanos experimentan cambios físicos, cognitivos, emocionales, sociales, culturales que, en conjunto, reflejan el cambio dinámico del individuo y la interacción entre los factores biológicos, fisiológicos, cerebrales, ambientales, entre otros.

    .row.mb-4
      .col-12.col-lg-6.col-xl-4.mb-4.p-4.mb-lg-0.bg-amarillo-oscuro
        p.mb-0 Aunque este tipo de clasificación puede ser subjetiva, está validada por cientos de estudios e investigaciones desde los campos psicológicos, médicos, biológicos y educativos. Por eso, la presente unidad: Desarrollo físico, cognitivo y emocional en las etapas de la infancia y adolescencia, se situará el aprendizaje sobre las características del desarrollo físico, cognitivo y emocional, durante esas etapas de vida, reconociendo los hitos del desarrollo y aplicando estrategias de intervención educativa y psicológica, basadas en el análisis de casos prácticos.
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-1.png', alt='Texto que describa la imagen')
      .col-12.col-lg-6.col-xl-4.mb-4.p-4.mb-lg-0.bg-gris
        p.mb-0 Lo anterior implica que, para aprovechar al máximo la unidad, se abordan las lecturas y demás recursos educativos asociados y de manera argumentativa, se espera que, a partir del reconocimiento de los hitos del desarrollo físico, cognitivo y emocional en la infancia y adolescencia, se puedan diferenciar 	algunas estrategias de intervención psicológica o educativa que promuevan el desarrollo infantil y adolescente. 
    
    p Así las cosas, el análisis de caso facilitará que de manera práctica se pueda reconocer la efectividad de las estrategias de intervención psicológica y educativa en un contexto determinado.

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
