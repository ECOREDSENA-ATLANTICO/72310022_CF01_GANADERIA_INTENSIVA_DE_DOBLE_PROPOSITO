<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Conservación de forrajes

    .bg_img
      .bloque-texto-g.bgr_1.mt-4.p-3.p-sm-4.p-md-5.mb-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/1.jpg')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 La conservación de forrajes es el proceso mediante el cual se almacenan pastos y plantas forrajeras para su uso en épocas de escasez, como las sequías. Este proceso garantiza una fuente constante de alimento para el ganado, manteniendo su calidad nutricional. Se realiza mediante técnicas como el ensilaje o la henificación, que permiten preservar los nutrientes y evitar la descomposición del forraje.
      
      div.mb-5(data-aos="fade-right")
        h3.bgr_23.text-white.position-relative Ensilaje
          img.pst(src='@/assets/curso/temas/tema3/20.svg', alt='')

      p.mb-5 El ensilaje es un proceso de fermentación anaeróbica que conservan los forrajes verdes, esta técnica incrementa el valor nutritivo y la palatabilidad del forraje para el animal. Los pastos más apropiados para ensilar son los que tienen buena relación hoja- tallo, es decir, especies que desarrollan buen follaje. Las plantas que suelen utilizarse para ensilar son el sorgo, el maíz y los residuos de cosecha.
      
      h3.bgr_8 Tipos de silos
      .row.mb-5.mt-5.justify-content-center
        .col-md-8.col-lg-3.mb-3
          figure
            img(src='@/assets/curso/temas/tema4/3.png', alt='Texto que describa la imagen')
        .col-lg-9
          ol.lista-ol--cuadro.lista-ol--separador
            li.d-flex
              .lista-ol--cuadro__vineta
                span.text-bold.bgr_21 01
              p #[strong Silo de montón o de trinchera: ] esta técnica consiste en realizar una zanja con una leve inclinación, la cual puede ser cubierta con cemento o ladrillo. La capacidad de este tipo de silo depende de la necesidad del productor.
            li.d-flex
              .lista-ol--cuadro__vineta
                span.text-bold.bgr_21 02
              p #[strong Silo de bolsa: ] esta técnica consiste en introducir de 30 a 40 kg de material vegetal bien picado y en capas dentro de una bolsa, que puede ser de calibre 6 a 8. Cada vez que se introduce una capa, se agrega melaza y se compacta bien haciendo presión para que no quede aire. Después, el silo se almacena en un lugar libre de humedad y de roedores durante un mes.
            li.d-flex
              .lista-ol--cuadro__vineta
                span.text-bold.bgr_21 03
              p #[strong Silo de cincho o formaleta: ] dicha técnica consiste en introducir el material a ensilar en una formaleta cilíndrica que tiene una ranura en la mitad. En esta formaleta ubica y compacta el material a ensilar, después la abre para sacar el material macizo y finalmente este se forra con un plástico o lona y se amarra bien para que no le entre nada de aire.

    .bg_img     
      ul.lista-ul--color.mb-5
        li.d-flex 
          i.fas.fa-caret-right.fa-lg.bgr_14
          h3 Materias primas utilizadas en el ensilaje
      
      p Las materias primas más utilizadas en la elaboración de ensilajes son los pastos de corte, los cereales y las leguminosas forrajeras.

      .row.mb-5.justify-content-center
        .col-md-6.col-lg-4.mb-3
          div.tarjeta.bgr_10.p-4.h-100
            figure.mb-5.d-flex.justify-content-center
              img.pst_2(src='@/assets/curso/temas/tema4/4.png', alt='Imagen decorativa')
            h2.text-center Pastos de corte
            ul.lista-ul--color
              li 
                i.fas.fa-check-circle.bgr_13 
                | <em>King Grass.</em>
              li
                i.fas.fa-check-circle.bgr_13
                | Camerún.
              li
                i.fas.fa-check-circle.bgr_13
                | Guinea.
              li
                i.fas.fa-check-circle.bgr_13
                | Caña forrajera.
        .col-md-6.col-lg-4.mb-3
          div.tarjeta.bgr_6.p-4.h-100
            figure.mb-5.d-flex.justify-content-center
              img.pst_2(src='@/assets/curso/temas/tema4/5.png', alt='Imagen decorativa')
            h2.text-center Cereales
            ul.lista-ul--color
              li 
                i.fas.fa-check-circle.bgr_14 
                | Maíz.
              li
                i.fas.fa-check-circle.bgr_14
                | Sorgo. 
        .col-md-6.col-lg-4.mb-3
          div.tarjeta.bgr_10.p-4.h-100
            figure.mb-5.d-flex.justify-content-center
              img.pst_2(src='@/assets/curso/temas/tema4/6.png', alt='Imagen decorativa')
            h2.text-center Leguminosas forrajeras
            ul.lista-ul--color
              li 
                i.fas.fa-check-circle.bgr_13 
                | Frijol.
              li
                i.fas.fa-check-circle.bgr_13
                | Alfalfa.
              li
                i.fas.fa-check-circle.bgr_13
                | <em>Kudzú</em>.
              li
                i.fas.fa-check-circle.bgr_13
                | <em>Gandul</em>.
              li
                i.fas.fa-check-circle.bgr_13
                | Crotaria.
    
    p.mb-5 Aditivos utilizados en la elaboración de ensilaje:

    .row.mb-5.justify-content-center
      .col-md-8.col-xl-4.mb-3
        figure
          img(src='@/assets/curso/temas/tema4/7.png', alt='Texto que describa la imagen')
      .col-lg-10.col-xl-8
        SlyderF(columnas="col-md-6 col-xl-6")
          .tarjeta.bgr_9.p-4
            figure.mb-3.d-flex.justify-content-center
              img.pst_4(src='@/assets/curso/temas/tema4/8.png', alt='Texto que describa la imagen')
            p.text-bold.text-center Melaza
            p.mb-0.text-center Es muy utilizado en la elaboración de ensilaje por su bajo costo y su alto contenido de carbohidratos, además mejora la calidad del ensilaje.
          .tarjeta.bgr_9.p-4
            figure.mb-3.d-flex.justify-content-center
              img.pst_4(src='@/assets/curso/temas/tema4/9.png', alt='Texto que describa la imagen')
            p.text-bold.text-center Metabisulfito de sodio
            p.mb-0.text-center Este producto es utilizado para controlar el pH del material ensilado. Se añade de 3 a 4 kg por tonelada de pasto y no debe excederse al agregar este compuesto porque puede generar que el animal rechace el forraje ensilado.
          .tarjeta.bgr_9.p-4
            figure.mb-3.d-flex.justify-content-center
              img.pst_4(src='@/assets/curso/temas/tema4/10.png', alt='Texto que describa la imagen')
            p.text-bold.text-center Inoculantes microbiales
            p.mb-0.text-center Las bacterias que se adicionan al material a ensilar ayudan a dominar la fermentación de los cultivos microbiales en el silo. Las categorías más usadas son las homofermentadoras que solo producen ácido láctico (<em>Lactobacillus plantarum, Enterococcus, Pediococcus spp</em>).
    
    .cajon.color-acento-contenido.p-4.mb-5
      p.mb-0 También se usan las heterofermentadoras (<em>Lactobacillus buchneri</em>) y otras bacterias fermentadoras como <em>Leuconostoc, Lactococcus y Streptococcus</em>. De igual manera se puede utilizar el ácido acético.

    ul.lista-ul--color.mb-5
      li.d-flex 
        i.fas.fa-caret-right.fa-lg.bgr_14
        h3 Fases de un ensilaje
    
    .bg_img
      p Las fases de un ensilaje son los procesos mediante los cuales se conserva forraje en un ambiente anaeróbico. Sirven para preservar los nutrientes del forraje, asegurando alimento de calidad en épocas de escasez. Funcionan en cuatro etapas: fase aeróbica, fase de fermentación, fase estable y fase de deterioro, donde los microorganismos ayudan a conservar el alimento adecuadamente. A continuación, se explica las funciones de cada fase:

      .row.mb-5.justify-content-center
        .col-md-8.col-lg-4.mb-3
          figure
            img(src='@/assets/curso/temas/tema4/11.png', alt='Texto que describa la imagen')
        .col-lg-8.align-content-center
          //- LineaTiempoD debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          LineaTiempoD.color-secundario
            p.text-small(numero="1" titulo="Fase aeróbica") En esta fase - que dura sólo pocas horas- el oxígeno atmosférico presente en la masa vegetal disminuye rápidamente debido a la respiración de los materiales vegetales y a los microorganismos aeróbicos y aeróbicos facultativos como las levaduras y las enterobacterias. Además, hay una actividad importante de varias enzimas vegetales, como las proteasas y las carbohidrasas, siempre que el pH se mantenga en el rango normal para el jugo del forraje fresco (pH 6,5 - 6,0).
            p.text-small(numero="2" titulo="Fase de fermentación") Esta fase comienza al producirse un ambiente anaeróbico. Dura de varios días hasta varias semanas, dependiendo de las características del material ensilado y de las condiciones en el momento del ensilaje. Si la fermentación se desarrolla con éxito, la actividad BAC proliferará y se convertirá en la población predominante. A causa de la producción de ácido láctico y otros ácidos, el pH bajará a valores entre 3,8 a 5,0.
            p.text-small(numero="3" titulo="Fase estable") Mientras se mantenga el ambiente sin aire, ocurren pocos cambios. La mayoría de los microorganismos de la Fase 2 lentamente reducen su presencia. Algunos microorganismos acidófilos sobreviven este periodo en estado inactivo; otros, como clostridios y bacilos, sobreviven como esporas. Sólo algunas proteasas y carbohidrasas, y microorganismos especializados, como Lactobacillus buchneri que toleran ambientes ácidos, continúan activos, pero a menor ritmo.
            p.text-small(numero="4" titulo="Fase de deterioro aeróbico") Esta fase comienza con la apertura del silo y la exposición del ensilaje al aire. Esto es inevitable cuando se requiere extraer y distribuir el ensilaje, pero puede ocurrir antes de iniciar la explotación por daño de la cobertura del silo (p. ej. roedores o pájaros). El periodo de deterioro puede dividirse en dos etapas. La primera se debe al inicio de la degradación de los ácidos orgánicos que conservan el ensilaje, por acción de levaduras y ocasionalmente por bacterias que producen ácido acético. Esto induce un aumento en el valor del pH, lo que permite el inicio de la segunda etapa de deterioro; en ella se constata un aumento de la temperatura y la actividad de microorganismos que deterioran el ensilaje, como algunos bacilos. La última etapa también incluye la actividad de otros microorganismos aeróbicos -también facultativos- como mohos y enterobacterias. El deterioro aeróbico ocurre en casi todos los ensilajes al ser abiertos y expuestos al aire. Sin embargo, la tasa de deterioro depende de la concentración y de la actividad de los organismos que causan este deterioro en el ensilaje. (Oude, Driehuis, Gottschal y Spoelstra, s.f.) 
    
    ul.lista-ul--color.mb-5
      li.d-flex 
        i.fas.fa-caret-right.fa-lg.bgr_14
        h3 Ventajas del ensilaje
    
    .row.mb-5.justify-content-center
      .col-xl-8.mb-3
        ul.lista-ul--color.lista-ul--separador
          li 
            i.fas.fa-check-circle.bgr_14 
            | Mediante el ensilaje se conserva el valor nutritivo y el sabor del forraje.
          li
            i.fas.fa-check-circle.bgr_14
            | Es una buena fuente de vitaminas para el bovino.
          li
            i.fas.fa-check-circle.bgr_14
            | Se aprovecha el forraje.
          li
            i.fas.fa-check-circle.bgr_14
            | Con el ensilaje el productor bovino economiza en concentrados porque reduce su compra.
          li
            i.fas.fa-check-circle.bgr_14
            | El ensilaje aumenta la capacidad de carga del animal.
          li
            i.fas.fa-check-circle.bgr_14
            | Se aprovecha el buen forraje que se produjo en épocas de lluvias y se conserva.
          li
            i.fas.fa-check-circle.bgr_14
            | Es un alimento económico para ganaderías doble propósito y de ceba.
          li
            i.fas.fa-check-circle.bgr_14
            | El ensilaje es un alimento de buena calidad.
          li
            i.fas.fa-check-circle.bgr_14
            | Al ser suministrado se puede mezclar con otros productos como forrajes, granos, sales, aditivos y melazas.
      .col-md-8.col-lg-6.col-xl-4
        figure
          img(src='@/assets/curso/temas/tema4/12.png', alt='Texto que describa la imagen')
    
    ul.lista-ul--color.mb-5
      li.d-flex 
        i.fas.fa-caret-right.fa-lg.bgr_14
        h3 Problemas que se puede presentar en un ensilaje
    
    .bg_img
      .row.mb-5.justify-content-center
        .col-lg-6.col-xl-5.mb-3
          figure
            img(src='@/assets/curso/temas/tema4/13.png', alt='Texto que describa la imagen')
        .col-xl-7
          ul.lista-ul--color.lista-ul--separador
            li 
              i.fas.fa-check-circle.bgr_14 
              | Hay mucha humedad cuando se está ensilando.
            li
              i.fas.fa-check-circle.bgr_14
              | Queda aire dentro del silo que no fue expulsado.
            li
              i.fas.fa-check-circle.bgr_14
              | Cuando el forraje se pica mal o queda muy largo, no se puede compactar bien.
            li
              i.fas.fa-check-circle.bgr_14
              | Se sella mal el ensilado dejando entrar aire y agua.
            li
              i.fas.fa-check-circle.bgr_14
              | El proceso de llenado se demora más de cinco días.
            li
              i.fas.fa-check-circle.bgr_14
              | Mala compactación.
            li
              i.fas.fa-check-circle.bgr_14
              | Se manejan de manera inadecuada los aditivos y conservantes.
   
      ul.lista-ul--color.mb-5
        li.d-flex 
          i.fas.fa-caret-right.fa-lg.bgr_14
          h3 Proceso de elaboración de ensilaje

      p A continuación, se describen las etapas y sus características para realizar un ensilaje: 

    SlyderF(columnas="col-md-6 col-xl-3")
      .tarjeta--boton.bgr_5.p-4.h-100
        .row.justify-content-center.mb-3
          .col-7
            figure
              img(src='@/assets/curso/temas/tema4/14.svg', alt='Texto que describa la imagen')
        h3.text-center Forraje
        p.text-small.text-center El forraje para ensilar debe tener el tiempo de cosecha requerido para que esté en el punto óptimo de nutrientes.
      .tarjeta--boton.bgr_6.p-4.h-100
        .row.justify-content-center.mb-3
          .col-7
            figure
              img(src='@/assets/curso/temas/tema4/15.svg', alt='Texto que describa la imagen')
        h3.text-center Material
        p.text-small.text-center Picar el material en trozos bien pequeños de 1 a 3 cms.
      .tarjeta--boton.bgr_5.p-4.h-100
        .row.justify-content-center.mb-3
          .col-7
            figure
              img(src='@/assets/curso/temas/tema4/16.svg', alt='Texto que describa la imagen')
        h3.text-center Ensilaje
        p.text-small.text-center El material se esparce con la finalidad de eliminar humedad, la cual debe estar en un 70 %, si es mayor no se va a obtener un buen ensilaje.
      .tarjeta--boton.bgr_6.p-4.h-100
        .row.justify-content-center.mb-3
          .col-7
            figure
              img(src='@/assets/curso/temas/tema4/17.svg', alt='Texto que describa la imagen')
        h3.text-center Silo
        p.text-small.text-center Realizar el llenado del silo: esto se hace del centro hacia fuera y compactando muy bien en las orillas para impedir la entrada de aire.
      .tarjeta--boton.bgr_5.p-4.h-100
        .row.justify-content-center.mb-3
          .col-7
            figure
              img(src='@/assets/curso/temas/tema4/18.svg', alt='Texto que describa la imagen')
        h3.text-center Adictivos
        p.text-small.text-center Adicionar los aditivos y la melaza, pero si es ensilaje de maíz, sorgo o caña no es necesario agregarlos.
      .tarjeta--boton.bgr_6.p-4.h-100
        .row.justify-content-center.mb-3
          .col-7
            figure
              img(src='@/assets/curso/temas/tema4/19.svg', alt='Texto que describa la imagen')
        h3.text-center Plásticos
        p.text-small.text-center Después de que se llenó se sella herméticamente con plástico y se cubre de bolsas con tierra; pero si el silo es de cilindro se debe amarrar con una banda de caucho para evitar la entrada de aire.
      .tarjeta--boton.bgr_5.p-4.h-100
        .row.justify-content-center.mb-3
          .col-7
            figure
              img(src='@/assets/curso/temas/tema4/20.svg', alt='Texto que describa la imagen')
        h3.text-center Producto
        p.text-small.text-center Después de trascurrido el tiempo de ensilado el producto se debe utilizar lo más rápido posible para evitar su deterioro.
    
    .bg_img_1
      .row.mb-4.justify-content-center
        .col-auto.col-md-2
          figure
            img(src='@/assets/curso/temas/tema4/21.png', alt='Imagen decorativa')
        .col-10.align-content-center
          p.mb-0 #[strong Nota:] el tiempo de ensilado varía dependiendo del tipo de silo: dura tres meses en silos de montón o de trinchera, dos meses en silos de cincho o de formaleta, y un mes en silos de bolsa. Diariamente se debe suministrar 3 kg de ensilaje por cada 100 kg de peso vivo del bovino.
    
    .row.mb-5.justify-content-center
      .col-xl-7.mb-3
        p.mb-5 Es importante tener en cuenta que la ingesta de ensilaje en vacas aumenta su producción diaria en un 20% y en animales jóvenes ayuda a mejorar el crecimiento de un 10% a un 30%.
        ul.lista-ul--color.mb-3
          li.d-flex 
            i.fas.fa-caret-right.fa-lg.bgr_14
            h3 Balance de dietas o raciones
        p.mb-5 Las dietas que se les suministran a los bovinos son balanceadas por personal técnico que para prepararlas requiere de lo siguiente:
        ul.lista-ul--color.lista-ul--separador
          li 
            i.fas.fa-check-circle.bgr_14 
            | Conocer los requerimientos nutricionales del bovino.
          li
            i.fas.fa-check-circle.bgr_14
            | Contar con la disponibilidad de las materias primas a usar.
      .col-md-8.col-lg-6.col-xl-5
        figure
          img(src='@/assets/curso/temas/tema4/22.png', alt='Texto que describa la imagen')
    
    ul.lista-ul--color.mb-5
      li.d-flex 
        i.fas.fa-caret-right.fa-lg.bgr_14
        h3 Subproductos utilizados en alimentación bovina urea
    
    .bg_img
      .bloque-texto-g.bgr_1.mt-4.p-3.p-sm-4.p-md-5.mb-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/23.jpg')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Los bovinos en el rumen desdoblan la urea convirtiéndola en proteína. Para que el animal se adapte al consumo de este elemento se debe suministrar por niveles que van en la primera semana 25 %, en la segunda semana 50 %, en la tercera semana 75 % y en la cuarta semana se suministra un 100 %; si en este proceso de adaptación de la urea se deja de dar al animal por varios días, se debe empezar de nuevo el suministro.
      
      p La urea que se usa para la alimentación bovina se debe disolver en agua tibia y luego se adiciona al pasto picado. La urea siempre se debe usar con una fuente de energía, por eso se puede mezclar con la miel o con el forraje de corte, lo importante es distribuirla bien y que los animales reciban la cantidad adecuada sin que exista peligro de intoxicación. Si esto llegara a pasar se recomienda utilizar vinagre.

      .row.justify-content-center
        .col-lg-8
          p Un buen nivel de urea debe estar entre 60 y 100 g/animal/día, el nivel máximo de suministro de urea es 135 g/animal/día, este abastecimiento debe tener en cuenta el tamaño del novillo y los demás componentes de la dieta.
          ul.lista-ul--color
            li 
              i.fas.fa-check-circle.bgr_13 
              | Melaza
          p La melaza es una fuente importante de energía para los sistemas de producción bovina. En la alimentación de los bovinos la mayor limitante es la energía, por tal razón, la melaza es muy utilizada pues aporta este componente, pero se debe tener cuidado al suministrársela al animal porque la ingesta excesiva puede provocarles diarreas. El nivel a utilizar es de 3 kg/día/animal, pero si se está suplementando con caña azucarera se debe utilizar 0,25 kg de melaza por animal/día.
          .cajon.color-acento-contenido.p-4.mb-3
            p.mb-0 Se recomienda proporcionar la melaza diluida con agua o roseada sobre el forraje para asegurar que todos los animales reciban su ración.
          ul.lista-ul--color
            li 
              i.fas.fa-check-circle.bgr_13 
              | Banano
          p El banano es un alimento barato, tiene un alto contenido de humedad y aumenta la energía en la dieta del bovino; este se puede suministrar al animal picado, pero en altas cantidades produce diarreas, por esto se recomienda usar 8 kg/animal/día.
        .col-md-8.col-lg-4.align-content-center
          figure.d-flex
            img(src='@/assets/curso/temas/tema4/24.png', alt='Texto que describa la imagen')
      
    
  

        

</template>

<script>
export default {
  name: 'Tema3',
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
