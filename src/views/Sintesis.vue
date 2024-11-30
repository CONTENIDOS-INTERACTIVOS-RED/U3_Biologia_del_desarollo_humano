<template lang="pug">
.curso-main-container.creditos-vista
  BannerInterno(:titulo="'Unidad 3. Desarrollo integral y contextos de aprendizaje en la adultez y la vejez'" :subTitulo="'SÍNTESIS'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-4.mb-md-5 La Unidad 3: Desarrollo integral y contextos de aprendizaje en la adultez y la vejez, aborda los cambios físicos, cognitivos, socioemocionales y de salud que ocurren en las etapas de adultez y vejez. Esta unidad proporciona los fundamentos necesarios para comprender cómo estas etapas impactan en la calidad de vida y el desarrollo humano. A través de un enfoque integral, se exploran estrategias de aprendizaje para promover un envejecimiento exitoso y hábitos saludables, asegurando que los estudiantes adquieran una visión amplia y práctica de estas fases del ciclo vital. Este conocimiento es esencial para su aplicación en contextos educativos, sociales y personales.
    figure
      img(src='@/assets/componentes/sintesis.png', alt='Texto que describa la imagen')
    

</template>
<script>
import BannerInterno from '../components/plantilla/BannerInterno'
import Footer from '../components/plantilla/Footer'
export default {
  name: 'Creditos',
  components: {
    BannerInterno,
    Footer,
  },
  data: () => ({
    configTitulos: {
      liderEquipo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      contenidoInstruccional: 'CONTENIDO INSTRUCCIONAL',
      desarrolloProducto:
        'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      gestoresRepositorio: 'GESTORES DE REPOSITORIO',
    },
  }),
  computed: {
    creditosData() {
      return this.$config.creditos
    },
    creditosAdicionales() {
      return this.$config.creditosAdicionales
    },
  },
  methods: {
    renderText(textObj) {
      let newText = ''
      if (Array.isArray(textObj)) {
        textObj.forEach((texto, index) => {
          newText += (index ? '<br/>' : '') + texto
        })
      } else {
        newText += textObj
      }
      return newText
    },
  },
}
</script>

<style lang="sass">
.creditos-vista
  .tarjeta.credito
    background-color: $color-sistema-d

.creditos
  color: $color-sistema-b
  overflow-x: auto

  &__item
    min-width: 490px

  p
    line-height: 1.3em
    margin-bottom: 0
    color: $color-sistema-b

  &__titulo
    font-weight: $base-bold-font-weight
    background-color: $color-sistema-d
    padding: 5px 10px
    border-top-radius: $base-border-radius
    border-top-left-radius: $base-border-radius
    border-top-right-radius: $base-border-radius
  table
    td, th
      border-color: $color-sistema-d
</style>
