<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p La ganadería de doble propósito en bovinos maximiza la producción de carne y leche mediante el cruce de razas especializadas. La gestión eficiente de la nutrición y la conservación de forrajes son esenciales para mejorar la productividad y la competitividad en el sector. Bienvenido a este componente formativo:

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/wJMkucbQk-4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      
    
    .cajon.color-acento-contenido.p-4
      p.mb-0 En este componente formativo se tratan aspectos generales de la ganadería bovina y su importancia para la economía nacional, también se describen las razas de ganado doble propósito y los aspectos relacionados con las especies colombianas criollas y sintéticas.

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
