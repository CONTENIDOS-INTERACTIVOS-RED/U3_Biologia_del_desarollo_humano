<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:titulo="'Unidad 3. Desarrollo integral y contextos de aprendizaje en la adultez y la vejez'" :subTitulo="'1. Desarrollo cognitivo y socioemocional en la adultez temprana, media y tardía'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .row.mb-4.mx-0
      .col-12.col-xl-8.d-flex.align-items-center.bg-gris-claro-2.p-4(data-aos="fade-right")
        p.mb-0(data-aos="fade-up") El desarrollo cognitivo y socioemocional en la adultez, comienza desde los 17 años aproximadamente y no guarda relación con la “mayoría de edad” que es un cambio de rol en el ejercicio ciudadano que comienza, en la mayoría de los países del mundo, entre los 18 y los 21 años.
      .d-none.d-xl-block.col-4.px-0(data-aos="fade-left")
        img.h-100(src='@/assets/curso/unidad/img-5.png', alt='Texto que describa la imagen')

    p.mb-4 La adultez se caracteriza por cambios en diferentes etapas, como son:

    ImagenInfografica.color-secundario.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/unidad/img-6.png', alt='Texto que describa la imagen')

      .tarjeta.bg-white.p-4(x="21.2%" y="81%" numero="+")
        .h5.mb-2 Temprana
        p La 1 temprana se caracteriza por un aumento en la complejidad de las habilidades cognitivas y un pensamiento formal más estructurado y complejo, que integra el pensamiento lógico con la intuición y la emoción. En el desarrollo socioemocional, el adulto joven supera el egocentrismo y de acuerdo con su identidad, cultura y educación, se comporta de manera altruista, lo que le permite establecer relaciones sociales de interacción colaborativa, cooperativa, de pareja y asumir la paternidad.
      .tarjeta.bg-white.p-4(x="46.6%" y="81%" numero="+")
        .h5.mb-2 Media
        p La adultez media empieza a presentar cambios relacionados con el envejecimiento, aunque es diferencial por contexto y por género; existen cualidades físicas que empiezan a modificarse como la textura de la piel, la tonalidad del cabello, la disminución de la capacidad visual y auditiva, incluso algunas capacidades de orden cognitivo. En cuanto al desarrollo afectivo, el adulto medio vive en permanente reflexión personal, replanteando sucesos vividos y reconsiderando la manera de relacionarse con sus parientes, en el entorno laboral, con sus círculos de amistad y demás personas cercanas.
      .tarjeta.bg-white.p-4(x="71.4%" y="81%" numero="+")
        .h5.mb-2 Tardía
        p La adultez tardía puede estar asociada con cambios fisiológicos y hormonales que reflejan cambios profundos en lo físico y lo biológico; en esta adultez tardía, las hormonas sexuales bajan su producción y con ello se manifiestan cambios significativos en la fecundidad y la reproducción, Así mismo, la producción de algunas proteínas baja y empiezan a verse cambios más significativos en lo corporal. Los cambios cognitivos normales son: una mayor lentitud para pensar, una capacidad de aprendizaje más reducida y una disminución de la memoria de trabajo.

    .row.mb-4
      .col-4.d-none.d-xl-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-7.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8(data-aos="fade-left")
        p.mb-0 En términos generales, la adultez es la etapa perfecta para promocionar hábitos y estilos de vida saludables y así evitar que la adultez tardía y vejez, sean etapas de alto deterioro en las condiciones y el bienestar. Claramente, las malas decisiones en todas las dimensiones de la vida, verán sus efectos en el futuro de la salud física, mental y social; por tanto, focalizar la adultez como un momento “cima” de salud, es un excelente mensaje educativo para todo ser humano. 

    #t_1_1.titulo-segundo
      div.d-flex
        span.me-3 1.1  
        h2 Autores sobre las etapas y el desarrollo de la adultez
    
    .row.mb-4
      .col-12.col-xl-8(data-aos="fade-right")
        p.mb-4 El desarrollo humano es un proceso complejo y multidimensional que ha sido explorado desde diversas perspectivas psicológicas. A través del PDF Autores , lo invitamos a adentrarse en las teorías de destacados autores que han marcado hitos en la comprensión de este fenómeno. Desde los fundamentos del Psicoanálisis de Sigmund Freud, que destaca las fuerzas inconscientes y las etapas psicosexuales, hasta las aportaciones psicosociales de Erik Erikson, que integran aspectos culturales y sociales en el desarrollo de la personalidad. Además, se analizan las transiciones de la vida adulta según Daniel J. Levinson y las etapas del desarrollo cognitivo propuestas por Warner Schaie, enfocadas en el uso del intelecto en contextos sociales. Este contenido ofrece una visión integral y enriquecedora que será clave para entender las dinámicas del crecimiento humano desde la niñez hasta la vejez.
        a.d-flex.me-auto.bg-white.box-shadow.cursor-pointer.w-fit.pe-xl-5(data-aos="zoom-in" :href="obtenerLink('/downloads/Anexo_Autores.pdf')" target="_blank")
          img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
          p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong> Autores
      .col-4.d-none.d-xl-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-8.png', alt='Texto que describa la imagen')
    
    #t_1_2.titulo-segundo
      div.d-flex
        span.me-3 1.2  
        h2 La adultez temprana y media

    p.mb-4 Lo invitamos a escuchar el siguiente podcast  para conocer sobre la adultez temprana y media.

    .row.mb-4.bg-amarillo.bg-full-width.py-4
      .px-5.pb-md-3.py-4.d-flex

        .row
          .col-6.d-none.d-xl-block(data-aos="fade-right")
            img(src='@/assets/curso/unidad/img-9.png', alt='Texto que describa la imagen')
          .col-12.col-xl-6(data-aos="fade-left")
            TarjetaAudio.color-primario.bg-white.mb-3(
                texto="Proceso de descarga de MySQL Server Community y MySQL Workbench"
                tiempo
                :audio="require('../../assets/componentes/audios/audio-ej.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
            p.mb-4 Esta etapa también presenta cifras de mortalidad que, según la Organización Mundial de la Salud (OMS, 2024), están asociadas principalmente a la violencia, las situaciones de carácter médico y las lesiones o traumatismos, así como otras causas multicausales, tal y como se plantea en la siguiente imagen:

    p.mb-4 Principales causas de muerte en el adulto joven:
    p.mb-0 <strong>Figura 1.</strong> Principales causas de muerte en el adulto joven.

    .row.bg-fondo-1.bg-full-width.py-4
      .px-5.pb-md-3.py-4.d-flex.flex-column

        img.mb-4(src='@/assets/curso/unidad/img-10.png', alt='Texto que describa la imagen')

        p.mb-4 En relación con el óptimo estado de salud, las principales causas de muerte prematura (la que ocurre antes del promedio de muerte de la población), son:
    
        .row.mb-4
          .col-10.col-md-6.col-lg-4.col-xl-3.mb-4.mx-auto(data-aos="fade-right")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-11.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Enfermedades <br>cardiovasculares
          .col-10.col-md-6.col-lg-4.col-xl-3.mb-4.mx-auto(data-aos="fade-up")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-12.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Diabetes mellitus
          .col-10.col-md-6.col-lg-4.col-xl-3.mb-4.mx-auto(data-aos="fade-down")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-13.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Cáncer
          .col-10.col-md-6.col-lg-4.col-xl-3.mb-4.mx-auto(data-aos="fade-left")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-14.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Enfermedades respiratorias crónicas

    #t_1_3.titulo-segundo
      div.d-flex
        span.me-3 1.3  
        h2 El adulto de edad intermedia y tardía 
    
    .row.mb-4
      .col-12.col-xl-8(data-aos="fade-right")
        p.mb-4 El rango de esta adultez oscila entre los 40 y 65 años, etapa que contiene varios hitos y cambios. En el caso de las características físicas, empiezan a presentarse signos de envejecimiento y la necesidad de ayudas visuales y auditivas. Por otro lado, la textura, grosor y regeneración de la piel, demuestran signos de la edad con manchas, primeras arrugas y despigmentación en el cabello (canas); en hombres y algunas mujeres, se presentan síntomas de alopecia.
        .d-flex.align-items-start.bg-morado-claro.p-4.mb-4(data-aos="fade-left")
          img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-15.svg', alt='Texto que describa la imagen')
          .d-flex.flex-column
            p.pe-xl-3.mb-0(data-aos="fade-up")  A medida que pasan los años y, de acuerdo con el estilo de vida, se evidencian reducciones en ciertas capacidades como la atención, orientación y memoria. De manera alternativa, algunos autores mencionan el término <strong>inteligencia cristalizada</strong>, que es la capacidad de adquisición de conocimientos a lo largo de la vida y de experticia a la hora de aplicarlos. Es un sinónimo de  experiencia y sabiduría, a partir de los 40 años, siempre y cuando no haya alteraciones neurológicas.
      .col-4.d-none.d-xl-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-16.png', alt='Texto que describa la imagen')


    .row.mb-4
      .col-4.d-none.d-xl-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-17.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8(data-aos="fade-left")
        .bg-amarillo.p-4.mb-4
          p.mb-0 Otro fenómeno social acuñado a la “crisis de los 40”, se asocia con los adultos que experimentan los deseos de situarse en sus mejores años de juventud, ajustando un cambio de estilo y de comportamiento en general, llevando nuevas prendas de vestir, apuntarse a actividades de riesgo o tratar de congeniar con personas más jóvenes, incluso, intentar hacerse amigo de las amistades de sus hijos y la búsqueda de pareja de mucho menor edad que la propia. 
        p.mb-0 Si bien estos comportamientos no son una enfermedad o dificultad en el desarrollo, se interpretan como señales asociadas a la búsqueda de identidad “midescencia” o “middlescence”. 

    .row.bg-azul-1.bg-full-width.py-4.mb-4
      .px-5.pb-md-3.py-4.d-flex
        .col-12.col-xl-7.col-xxl-8.d-flex.pe-4.pe-xl-5.align-items-center.flex-column(data-aos="fade-right")
          h2.mb-4.pb-2.me-auto Los nietos de Adán y Eva
          p.mb-5 En el siguiente libro, Zafon Llopis, C. (2010). Los nietos de Adán y Eva: ¿por qué la naturaleza nos hace envejecer?: (ed.). Marge Books; es posible ahondar sobre los interrogantes del envejecimiento desde una postura asociada a la teoría de la evolución biológica. Revisar inicialmente los capítulos 1, 2 y 3 permitirá avanzar sobre explicaciones sobre el envejecimiento y el rol de los genes, la selección natural y el oxígeno, en los procesos de envejecimiento. 
          a.d-flex.me-auto.bg-white.box-shadow.cursor-pointer(data-aos="zoom-in" href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/41932" target="_blank")
            img.h-100(style="width: 48px" src='@/assets/componentes/link-icon-square.png', alt='Texto que describa la imagen')
            p.text-small.fs-14px.my-auto.px-2 <strong>Sitio web.</strong> Los nietos de Adán y Eva
             
        .d-none.d-xl-block.col-xl-5.col-xxl-4.mx-auto.mt-4.mt-xl-0(data-aos="fade-left")
          img.h-100(src='@/assets/curso/unidad/img-18.png', alt='Texto que describa la imagen')
    p.mb-4 Sobre el desarrollo de la edad adulta, Peck (1959, 1968) plantea los <strong>retos o conflictos especiales de la vida adulta</strong>, los cuales relata por etapas, de la siguiente manera: 

    .row.mb-4
      .col-12.col-lg-5.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-19.png', alt='Texto que describa la imagen')
      .col-12.col-lg-7(data-aos="fade-left")
        AcordionA(tipo="b")
          .div(titulo="Aprecio de la sabiduría ")
            p Cambios en la fuerza de las sinapsis entre neuronas, esenciales para el aprendizaje y la memoria.
          .div(titulo="Aprecio de la sabiduría ")
            p Socialización frente a la sexualización en las relaciones humanas. Los cambios físicos pueden obligar a redefinir las relaciones con miembros de ambos sexos, a dar prioridad a la camaradería sobre la intimidad sexual o la competitividad.
          .div(titulo="Aprecio de la sabiduría ")
            p Flexibilidad emotiva frente a empobrecimiento emotivo. La flexibilidad emotiva es el origen de varios ajustes que se hacen en la madurez, cuando las familias se separan, cuando los amigos se marchan y los antiguos intereses dejan de ser el centro de la vida.
          .div(titulo="Flexibilidad frente a rigidez mental")
            p Flexibilidad frente a rigidez mental. El individuo debe luchar contra la tendencia a obstinarse en sus hábitos o a desconfiar demasiado de las nuevas ideas. La rigidez mental es la tendencia a dejarse dominar por las experiencias y los juicios anteriores a decidir.

    .bg-full-width.border-top-9-azul
      .px-4.px-md-5.pt-md-5.pb-0
        .row
          .col-12.col-md-6.col-lg-8
            h2 Material complementario
            p.text-small Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
            a.d-flex.my-4(href="https://youtu.be/OVDr31_rWqw?si=UDVq3nZgA9Ejs2pu" target="_blank")
              img.me-3.mb-auto.mt-2(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              span.text-small Las 5 etapas del desarrollo psicosexual de Freud 
            a.d-flex.my-4(href="https://youtu.be/C8TBqpu4T2I?si=3d_clPbSoSlRyQ93" target="_blank")
              img.me-3.mb-auto.mt-2(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              span.text-small 8 Etapas del Desarrollo de Erik Erikson 
            a.d-flex.my-4(href="https://youtu.be/Ah1fPTbQhlc?si=mXVbPg7IlPxVWhdT" target="_blank")
              img.me-3.mb-auto.mt-2(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              span.text-small Desarrollo durante la adultez: temprana, intermedia y tardía. 
          .col-12.col-md-6.col-lg-3
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='Texto que describa la imagen')

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
