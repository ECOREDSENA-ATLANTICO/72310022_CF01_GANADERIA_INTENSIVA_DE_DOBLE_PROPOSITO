<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 La ganadería de bovinos

    .row.mb-5.justify-content-center
      .col-md-8.col-lg-6.col-xl-5.mb-3
        figure
          img(src='@/assets/curso/temas/tema1/1.png', alt='Imagen decorativa') 
      .col-xl-7.align-content-center
        p La ganadería de los bovinos consiste en la domesticación de los animales, es una actividad que realizan los seres humanos hace más diez mil años y tiene sus inicios en Asia, Europa, América y Oceanía, esta actividad económica se introdujo en la época de la colonización europea.
        .cajon.color-acento-contenido.p-4
          p.mb-0 La ganadería como tal, se desarrolló bajo el esquema del nomadismo, el cual consistía en desplazar el ganado de un territorio a otro y de esta manera ser aprovechado como fuente de alimento y para transportar productos agrícolas.
    
    .bg_img
      .row.mb-5.justify-content-center
        .col-lg-10
          .titulo-sexto.color-acento-contenido.mb-5
            h5 Figura 1. 
            span <em>Razas criollas y sintéticas</em>
          figure
            img.mb-3(src='@/assets/curso/temas/tema1/2.svg', alt='En las razas criollas y sintéticas se aprecia las generalidades de la ganadería y las razas. Así mismo se obtiene dos productos de la producción del ganado: leche y carne.') 
            figcaption Nota: Sena.
          
      div.mb-5(data-aos="fade-right")
        h3.bgr.text-white.position-relative Importancia económica de la ganadería bovina
          img.pst(src='@/assets/curso/temas/tema1/3.svg', alt='')
    
    .bloque-texto-g.bgr_1.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/4.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La ganadería es una actividad muy importante desde el punto de vista económico, ya que genera ingresos por la producción de leche, carne y subproductos, como cueros y cuernos. Además, está relacionada con la agricultura, ya que ambas actividades pueden complementarse en una finca y generar mayores beneficios económicos.
    
    .row.mb-5.justify-content-center
      .col-lg-9.align-content-center.mb-3
        p El sector agropecuario, de alguna manera, contribuye a la alimentación mundial, promueve el desarrollo sostenible en áreas rurales y ayuda a reducir la pobreza.
        .cajon.bgr_2.p-4
          p.mb-0 Según la Oficina del Censo de los Estados Unidos la población mundial era de 7.041 millones hasta septiembre de 2012 y se estima que crezca en 2.300 millones en el 2050; con las proyecciones realizadas en cuanto a la población, la Organización de las Naciones Unidas para la Agricultura y la Alimentación (FAO) llegó a la conclusión que, para alimentar 9.341 millones de personas en el 2050, es necesario que la producción de alimentos aumente en un 70 %, lo cual quiere decir que los países en desarrollo deberán aumentar la producción alimentaria.
      .col-md-8.col-lg-3.align-content-center
        figure.d-flex
          img(src='@/assets/curso/temas/tema1/5.png', alt='Imagen decorativa')
    
    p Los productos alimentarios más consumidos en el mundo son los agrícolas, pecuarios y pesqueros, por lo que el desarrollo del sector agropecuario es de suma importancia para reducir la pobreza y la desigualdad. América Latina es uno de los mayores exportadores de productos alimentarios a nivel mundial. Entre estos se encuentran el maíz, con un 33 %; la soya, con un 52 %; la carne de bovino, con un 44 %; y la carne de pollo, con un 42 %.

    .bg_img_1
      .row.mb-5.justify-content-center
        .col-auto.col-md-2
          figure
            img(src='@/assets/curso/temas/tema1/7.png', alt='Imagen decorativa')
        .col-10.align-content-center
          p.mb-0 El sector agropecuario en Colombia es muy importante en la economía nacional, puesto que aportó en el año 2011 el 9% del Producto Interno Bruto (PIB).
    
    div.mb-5(data-aos="fade-right")
      h3.bgr.text-white.position-relative Conceptualización sobre ganadería doble propósito
        img.pst(src='@/assets/curso/temas/tema1/3.svg', alt='')
    
    p Se conoce como ganadería de doble propósito a la producción de ganado para la obtención de carne y leche, esta ha sido desde siempre una alternativa económica para los pequeños productores ya que les permite no solo obtener ganancias con la venta de la leche que equivale al 50 % de los ingresos, sino que adicional a esto, pueden mejorar la calidad de la carne para incrementar la sostenibilidad y rentabilidad con este sistema productivo.

    .row.justify-content-center
      .col-md-8.col-lg-3.mb-3 
        figure
          img(src='@/assets/curso/temas/tema1/9.png', alt='Imagen decorativa')
      .col-lg-9.align-content-center
        p En Colombia este tipo de ganadería se lleva a cabo entre 0 a 1.000 metros sobre el nivel del mar (m.s.n.m.); las zonas del territorio colombiano que se encuentran a esta altura son el trópico bajo (piedemonte amazónico y el piedemonte llanero), la costa norte, la zona central, el Valle del Magdalena y al occidente el Valle del Cauca.
        .cajon.bgr_2.p-4
          p.mb-0 En la zona cafetera el ganado doble propósito se cría entre los 1.000 a 2.000 m.s.n.m. y las razas más comunes que se utilizan en esta zona son el ganado criollo Blanco Orejinegro (BON), mientras que en las zonas del trópico bajo se usan cruces de razas como la <em>Bos Indicus</em> con <em>Bos Taurus</em>.


</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
