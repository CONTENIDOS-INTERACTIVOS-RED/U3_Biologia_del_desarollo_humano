<template lang="pug">
.curso-main-container.pb-3
  BannerInterno.text-uppercase(:titulo="'Unidad 3. Desarrollo integral y contextos de aprendizaje en la adultez y la vejez'" :subTitulo="'2. Envejecimiento biológico: cambios fisiológicos y adaptaciones'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .bg-fondo-4.bg-full-width
      div.px-5.pb-md-3.py-4

        .row.mb-5
          .col-12.col-xl-7.col-xxl-8.d-flex.flex-column
            p.mb-4 <strong>¿Los humanos tenemos un reloj biológico?</strong> Todo parece indicar que sí. 
            p.mb-4 Algunos autores denominan reloj biológico a la sincronización del organismo frente a unos estímulos ambientales como la luz y la oscuridad; los tiempos de vigilia y de descanso reparador; las alertas de hambre y de saciedad; lo que quiere decir que es un mecanismo que “controla” tiempo frente a los requerimientos fisiológicos. Algunos afirman, que el reloj biológico también hace referencia al tiempo para la fertilidad y el momento en que ya no es posible la procreación. 
            .d-flex.align-items-start.bg-rosa.p-4.mb-4(data-aos="fade-left")
              img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-20.svg', alt='Texto que describa la imagen')
              .d-flex.flex-column
                p.pe-xl-3.mb-0(data-aos="fade-up") En el caso del envejecimiento, también existen señales del organismo y alertas que se manifiestan en cambios fisiológicos y posibles adaptaciones a esas transformaciones con el paso de los años. Sin embargo, el reloj biológico hace referencia a la regulación cerebral y su incidencia fisiológica a través de señales químicas (hormonas) frente a la realidad exterior del organismo y la <strong>homeóstasis</strong>, vinculando el sistema interno (órganos y sistemas).  
          .d-none.d-xl-block.col-xl-5.col-xxl-4.mx-auto.mt-4.mt-xl-0(data-aos="fade-right")
            img(src='@/assets/curso/unidad/img-21.png', alt='Texto que describa la imagen')

        #t_2_1.titulo-segundo
          div.d-flex
            span.me-3 2.1  
            h2 Características del envejecimiento

        p.mb-4 Dentro de las características del envejecimiento, se encuentran:

        .row.mb-4
          .col-10.col-md-6.col-lg-4.col-xl-3.mb-4.mx-auto(data-aos="fade-right")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-22.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Continuidad
                p.text-small.px-4.text-center.pb-2 Señala que es un proceso que no tiene retorno y que no se detiene una vez que comienza.
          .col-10.col-md-6.col-lg-4.col-xl-3.mb-4.mx-auto(data-aos="fade-up")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-23.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Progresividad
                p.text-small.px-4.text-center.pb-2 Hace referencia a que el envejecimiento no tiene pausa y es el resultado de efectos acumulativos.
          .col-10.col-md-6.col-lg-4.col-xl-3.mb-4.mx-auto(data-aos="fade-down")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-24.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Universalidad
                p.text-small.px-4.text-center.pb-2 Incide en todas las poblaciones, aunque la intensidad y el ritmo pueden diferir significativamente.
          .col-10.col-md-6.col-lg-4.col-xl-3.mb-4.mx-auto(data-aos="fade-left")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-25.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Variabilidad
                p.text-small.px-4.text-center.pb-2 Indica que no todos los individuos de una misma especie envejecen al mismo ritmo, lo que implica una influencia de factores genéticos y ambientales.
    p.mb-4 El envejecimiento de una persona es entonces el conjunto de cambios morfológicos y fisiológicos, que se dan como efecto del paso del tiempo. Esas modificaciones implican efectos sobre las funciones básicas y complejas, la capacidad de respuesta a los estímulos del ambiente y la funcionalidad de cada uno de sus órganos y sistemas. En el caso de la humanidad, con los cambios en la expectativa de vida, se ve un  considerable aumento de población adulta mayor y en etapa de vejez, que la que podría encontrarse en los siglos anteriores. 
    p.text-bold Algunas enfermedades o padecimientos asociados a la vejez, son:

    .bg-fondo-5.bg-full-width
      div.px-5.pb-md-3.py-4

        .row.justify-content-center.mb-0
          .col-11.col-md-4.col-xl-5.pe-xl-8.d-none.d-xl-block
            figure.mb-4.mb-md-0
              img(src='@/assets/curso/unidad/img-26.png', alt='Texto que describa la imagen')
          .col-11.col-xl-7
            SlyderF(columnas="col-12 col-lg-6")
              .row.py-4.px-3.h-100
                .col-12.mx-auto(data-aos="fade-left")
                  div.custom-image-card.rounded-8px
                    img.mb-4(src='@/assets/curso/unidad/img-27.png', alt='Texto que describa la imagen')
                    div.mb-0
                      p.text-bold.text-center.mb-0 Ciertos tipos de demencia
              .row.py-4.px-3.h-100
                .col-12.mx-auto(data-aos="fade-left")
                  div.custom-image-card.rounded-8px
                    img.mb-4(src='@/assets/curso/unidad/img-28.png', alt='Texto que describa la imagen')
                    div.mb-0
                      p.text-bold.text-center.mb-0 Enfermedades articulares
              .row.py-4.px-3.h-100
                .col-12.mx-auto(data-aos="fade-left")
                  div.custom-image-card.rounded-8px
                    img.mb-4(src='@/assets/curso/unidad/img-45.png', alt='Texto que describa la imagen')
                    div.mb-0
                      p.text-bold.text-center.mb-0 Enfermedades cardíacas 
              .row.py-4.px-3.h-100
                .col-12.mx-auto(data-aos="fade-left")
                  div.custom-image-card.rounded-8px
                    img.mb-4(src='@/assets/curso/unidad/img-46.png', alt='Texto que describa la imagen')
                    div.mb-0
                      p.text-bold.text-center.mb-0 Algunos tipos de cáncer
              .row.py-4.px-3.h-100
                .col-12.mx-auto(data-aos="fade-left")
                  div.custom-image-card.rounded-8px
                    img.mb-4(src='@/assets/curso/unidad/img-47.png', alt='Texto que describa la imagen')
                    div.mb-0
                      p.text-bold.text-center.mb-4 Alteración del ritmo de <br>sueño-vigilia

    p.mb-4 De acuerdo con Our World in Data (https://ourworldindata.org/life-expectancy), en el año 1900, la esperanza de vida media de un recién nacido era de 32 años. En el 2021, esta cifra se había aumentado hasta alcanzar los 71 años. Un término clave en este apartado, es la longevidad, que corresponde a la probabilidad de muerte a una edad determinada, la brecha de sexo en la esperanza de vida, la desigualdad en la expectativa de vida, en los diferentes países.

    p.mb-4 <strong>Figura 2.</strong> Expectativa de vida por momento histórico y continente

    img.mb-2(src='@/assets/curso/unidad/img-29.png', alt='Texto que describa la imagen')
    .bg-gris-claro-2.px-xl-0.ps-xl-4.py-3.mb-4 <strong>Nota.</strong> Tomado de Data source: UN WPP (2022); HMD (2023); Zijdeman et al. (2015); Riley (2005) en https://ourworldindata.org/life-expectancy 

    .row.bg-amarillo.bg-full-width.py-4.mb-4
      div.px-5.pb-md-3.py-4.d-flex

        .col-5.d-none.d-xl-block(data-aos="fade-right")
          img(src='@/assets/curso/unidad/img-30.png', alt='Texto que describa la imagen')
        .col-12.col-xl-7.ps-4(data-aos="fade-left")
          p.mb-4.text-bold Dentro de los factores que ha permitido aumentar la longevidad en los humanos, se destacan:
          div.d-flex
            img.mt-2.me-2.d-flex.align-self-base.h-100(style="width: 15px" src='@/assets/curso/arrow.png', alt='Texto que describa la imagen')
            p.mb-0 La reducción de la mortalidad infantil.  
          div.d-flex
            img.mt-2.me-2.d-flex.align-self-base.h-100(style="width: 15px" src='@/assets/curso/arrow.png', alt='Texto que describa la imagen')
            p.mb-0  La presencia o mejoramiento en los sistemas de salud (medicamentos y salud pública) ha permitido la reducción de la mortalidad en todas las edades.
          div.d-flex
            img.mt-2.me-2.d-flex.align-self-base.h-100(style="width: 15px" src='@/assets/curso/arrow.png', alt='Texto que describa la imagen')
            p.mb-0 El acceso a condiciones básicas de potabilidad del agua.  
          div.d-flex
            img.mt-2.me-2.d-flex.align-self-base.h-100(style="width: 15px" src='@/assets/curso/arrow.png', alt='Texto que describa la imagen')
            p.mb-0  El manejo y la inocuidad en la industria alimenticia. 
          div.d-flex
            img.mt-2.me-2.d-flex.align-self-base.h-100(style="width: 15px" src='@/assets/curso/arrow.png', alt='Texto que describa la imagen')
            p.mb-0  El desarrollo tecnológico asociado al sector salud.
          div.d-flex
            img.mt-2.me-2.d-flex.align-self-base.h-100(style="width: 15px" src='@/assets/curso/arrow.png', alt='Texto que describa la imagen')
            p.mb-0  La mitigación de guerras y pandemias en gran parte del mundo (aunque esto puede ser debatido de acuerdo con lo ocurrido con el COVID 19 en el año 2020 y las tragedias humanitarias en Iraq, Siria, Yemen y Libia junto a los conflictos no resueltos en Palestina y Afganistán).

    p.mb-5 Estudios recientes desarrollan un término denominado <strong>“Zonas Azules”</strong>, que corresponden a puntos del planeta Tierra que tienen cualidades especiales, en donde los niveles de longevidad son superiores al del resto del planeta. 

    #t_2_2.titulo-segundo
      div.d-flex
        span.me-3 2.2
        h2 Mecanismos del envejecimiento 
    .row.mb-5
      .col-12.col-xl-7.col-xxl-8.d-flex.flex-column
        p  La razón biológica del envejecimiento está asociado a los fenómenos de acortamiento de los telómeros en los cromosomas celular y la producción paulatina de radicales libres en las células. En detalle, los telómeros son estructuras en los extremos de los cromosomas, que protegen el ADN durante la división celular. Con cada división (mitosis), los telómeros se acortan, lo que eventualmente lleva a la senescencia celular y muerte. Este proceso se ha asociado con la duración de vida celular y se considera un "reloj biológico" porque reduce la cantidad de veces en que una célula puede continuar los procesos de mitosis (replicación celular) 
        .d-flex.align-items-start.bg-rosa.p-4.mb-4(data-aos="fade-right")
          img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-31.svg', alt='Texto que describa la imagen')
          .d-flex.flex-column
            p.pe-xl-3.mb-0(data-aos="fade-up") Por otro lado, la producción excesiva de radicales libres durante el metabolismo celular, causa daño oxidativo a las macromoléculas (proteínas, lípidos y ADN), contribuyendo al deterioro funcional de las células. Este daño acumulado, puede resultar en diversas patologías asociadas al envejecimiento, como enfermedades cardiovasculares y neurodegenerativas.
      .d-none.d-xl-block.col-xl-5.col-xxl-4.mx-auto.mt-4.mt-xl-0(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-32.png', alt='Texto que describa la imagen')  

    .bg-full-width.border-top-9-azul
      .px-4.px-md-5.pt-5.pb-0
        h2 Material complementario
        .row
          .col-12.col-md-6.col-lg-8
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://elibro.net/es/ereader/tecnologicadeloriente/115616") Freire C. (2016). Calidad de vida y bienestar en la vejez. Ediciones Pirámide.
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://youtu.be/0roSFFDSZaQ") Escuela de salud integrativa. (2022). ¿Cuáles son los FACTORES biológicos del ENVEJECIMIENTO? [Vídeo]
          .col-12.col-md-6.col-lg-3
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='Imagen de material complementario')


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
