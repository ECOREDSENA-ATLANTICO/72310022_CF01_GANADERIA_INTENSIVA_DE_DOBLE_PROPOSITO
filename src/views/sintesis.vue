<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 A continuación, se ofrece una visión general sobre los aspectos clave de la producción ganadera de doble propósito. Se comienza destacando la importancia de la ganadería bovina para la economía, con énfasis en el sistema de doble propósito, que combina la producción de carne y leche. También se destacan las razas más utilizadas en este modelo: <em>Brahman, Simmental, Simbrah y Normando</em>, las cuales ofrecen versatilidad y eficiencia. En Colombia, además, sobresalen las razas criollas y sintéticas, adaptadas al clima y a las condiciones locales. Para asegurar un rendimiento óptimo, es esencial cumplir con los requerimientos nutricionales de los animales. Por último, se abordan estrategias de conservación de forrajes que mantengan la calidad alimenticia durante todo el año.

    .row.justify-content-center.bgrs.p-4
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="En la síntesis del componente se detalla la ganadería del bovino, las razas de ganado bovino, los requerimientos nutricionales y la conservación de forrajes.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
