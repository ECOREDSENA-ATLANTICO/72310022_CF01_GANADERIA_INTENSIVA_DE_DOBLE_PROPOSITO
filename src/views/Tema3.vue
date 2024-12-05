<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Requerimientos nutricionales

    .row.mb-5.justify-content-center
      .col-lg-8.col-xl-5.mb-3
        figure
          img(src='@/assets/curso/temas/tema3/1.png', alt='Texto que describa la imagen')
      .col-xl-7
        p Los nutrientes en los rumiantes sirven para dar energía metabólica al animal, ayudan en su desarrollo y crecimiento, contribuye a la reparación de los tejidos corporales y favorece la reproducción.
        .cajon.color-acento-contenido.p-4.mb-5
          p.mb-0 Los bovinos tienen necesidades nutricionales específicas dependiendo de la composición genética, corporal, talla y estado sexual (hembra o macho).
    
    .bg_img
      .row.mb-5.justify-content-center
        .col-lg-10
          .titulo-sexto.color-acento-contenido.mb-5
            h5 Figura 2. 
            span <em>Requerimientos nutricionales de los bovinos</em>
          figure
            img.mb-3(src='@/assets/curso/temas/tema3/2.svg', alt='A continuación se explican los requerimientos nutricionales de los bovinos.') 
            
    p.mb-5 Para que un animal tenga un estado nutricional equilibrado, se debe tener en cuenta:

    .row.mb-5
      .col-md-6.col-lg-3.mb-3
        div.tarjeta.text-center.bgr_10.p-4.h-100
          figure.mb-5.d-flex.justify-content-center
            img.pst_3(src='@/assets/curso/temas/tema3/3.png', alt='Imagen decorativa')
          h2 Energía
          p Suministrar la energía suficiente para que todas las funciones metabólicas y corporales actúen correctamente.
      .col-md-6.col-lg-3.mb-3
        div.tarjeta.text-center.bgr_6.p-4.h-100
          figure.mb-5.d-flex.justify-content-center
            img.pst_3(src='@/assets/curso/temas/tema3/4.png', alt='Imagen decorativa')
          h2 Proteínas
          p Proveer la cantidad de proteínas suficientes para evitar que el animal tenga deficiencias corporales.
      .col-md-6.col-lg-3.mb-3
        div.tarjeta.text-center.bgr_10.p-4.h-100
          figure.mb-5.d-flex.justify-content-center
            img.pst_3(src='@/assets/curso/temas/tema3/5.png', alt='Imagen decorativa')
          h2 Agua
          p Abastecer agua y minerales en una cantidad adecuada para que el animal compense las pérdidas por el trabajo realizado en el desplazamiento de un potrero a otro.
      .col-md-6.col-lg-3.mb-3
        div.tarjeta.text-center.bgr_6.p-4.h-100
          figure.mb-5.d-flex.justify-content-center
            img.pst_3(src='@/assets/curso/temas/tema3/6.png', alt='Imagen decorativa')
          h2 Vitaminas
          p Proporcionar las vitaminas esenciales para los bovinos, puesto que estas no son producidas por el animal.
    
    .bg_img_1
      .row.mb-5.justify-content-center
        .col-auto.col-md-2
          figure
            img(src='@/assets/curso/temas/tema3/7.png', alt='Imagen decorativa')
        .col-10.align-content-center
          p.mb-0 Los requerimientos nutricionales de los bovinos varían según su etapa de crecimiento, producción y ambiente. A continuación, se explican los requerimientos nutricionales:
    
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bgr_2")
      div(titulo="Ingesta")
        .row.mb-3.justify-content-center
          .col-md-6.col-lg-3.mb-3
            figure
              img(src='@/assets/curso/temas/tema3/8.png', alt='Texto que describa la imagen')
          .col-lg-9.mb-4.mb-lg-0
            p La ingesta es el consumo de alimentos por el animal y es muy importante porque incluye los nutrientes que contribuyen en el desarrollo del rumiante y en todas las etapas de crecimiento.
            p En el suministro de alimentos a los bovinos se deben tener en cuenta los siguientes factores:
            ul.lista-ul--color.lista-ul--separador
              li 
                i.fas.fa-check-circle.bgr_14 
                | Características nutricionales del alimento.
              li
                i.fas.fa-check-circle.bgr_14
                | Disponibilidad y cantidad de forraje a proporcionar.
              li 
                i.fas.fa-check-circle.bgr_14
                | Cantidad de energía y fibra que contiene el alimento.
              li 
                i.fas.fa-check-circle.bgr_14
                | Estado fisiológico del bovino.
              li 
                i.fas.fa-check-circle.bgr_14
                | Palatabilidad.
        .row.justify-content-center
          .col-lg-9.mb-3
            p Es importante que cuando le suministre al ganado bovino el alimento sea agradable a su paladar, porque el animal evita los sabores amargos y prefiere los dulces.
            p Cuando se provee una ingesta adecuada se garantiza una buena nutrición para el rumiante y se ve reflejada en alta producción tanto de carne como de leche, por lo tanto, es importante que verifique un elevado consumo de forraje teniendo en cuenta los siguientes aspectos:
            ul.lista-ul--color.lista-ul--separador
              li 
                i.fas.fa-check-circle.bgr_14 
                | Forraje: mantener el forraje en estado vegetativo por medio del pastoreo.
              li
                i.fas.fa-check-circle.bgr_14
                | Diversificar: diversificar la pradera incluyendo diferentes especies de pastos y un 30 % de leguminosas.
              li 
                i.fas.fa-check-circle.bgr_14
                | Conservar: conservar la pradera densa para que los animales tengan mayor disponibilidad de alimento.
          .col-md-6.col-lg-3
            figure
              img(src='@/assets/curso/temas/tema3/10.png', alt='Texto que describa la imagen')
      .row.mb-3(titulo="Materia seca").justify-content-center
        .col-md-6.col-lg-2.mb-3
          figure
            img(src='@/assets/curso/temas/tema3/9.png', alt='Texto que describa la imagen')
        .col-lg-10.mb-4.mb-lg-0
          p Los bovinos deben consumir entre el 2 % y el 3 % de materia seca en relación con su peso vivo, de la cual dos tercios se suministran en forma de forraje.
          p El ganado crecerá más dependiendo de la cantidad y calidad de los nutrientes que se le suministre, es decir, que, si se le proporcionan alimentos ricos en energía y fibra, pero pobres en proteína, el animal no crecerá de la misma manera que cuando se le dan todos los nutrientes necesarios para su óptimo desarrollo. El ganado bovino necesita de seis nutrientes o componentes esenciales en su ración diaria:
          .row
            .col-lg-3
              ul.lista-ul--color.lista-ul--separador
                li 
                  i.fas.fa-check-circle.bgr_14 
                  | Agua.
                li
                  i.fas.fa-check-circle.bgr_14
                  | Energía.
            .col-lg-3
              ul.lista-ul--color.lista-ul--separador
                li 
                  i.fas.fa-check-circle.bgr_14 
                  | Proteínas.
                li
                  i.fas.fa-check-circle.bgr_14
                  | Fibra.
            .col-lg-3
              ul.lista-ul--color.lista-ul--separador
                li 
                  i.fas.fa-check-circle.bgr_14 
                  | Vitaminas.
                li
                  i.fas.fa-check-circle.bgr_14
                  | Minerales.

    p.mb-5 A continuación, se describe cada uno de estos nutrientes:

    h3.bgr_8 Agua          

    .row.mb-5.mt-4.justify-content-center
      .col-lg-8.col-xl-5.mb-3
        figure
          img(src='@/assets/curso/temas/tema3/11.png', alt='Texto que describa la imagen')
      .col-lg-12.col-xl-7
        p La cantidad de agua que necesita un bovino obedece a factores tales como: edad, tamaño corporal, clima, consumo de materia seca y estado fisiológico; también depende de la temperatura en la cual se encuentre el animal.
        p Por ejemplo, en épocas de invierno van a consumir alrededor de un galón por cada 50 kg de peso corporal, mientras que en climas cálidos pueden ingerir cerca de dos galones por cada 50 kg. Para los bovinos que están en lactancia se aconseja suministrar agua limpia y fresca.
        .cajon.color-acento-contenido.p-4.mb-5
          p.mb-0 En la siguiente tabla se muestra la cantidad de agua que necesitan los bovinos dependiendo de su periodo de producción y edad:
    
    .bg_img
      .row.mb-5.justify-content-center
        .col-lg-8
          .titulo-sexto.color-acento-contenido.mb-5
            h5 Tabla 3. 
            span <em>Requerimientos de agua bovina</em>
    
          .tabla-a.color-acento-contenido.mb-5 
            table
              caption Nota. SENA.
              thead
                tr.bgr_6
                  th Clase del animal
                  th Agua que necesita
              tbody.bgr_7
                tr.bgr_2
                  td Terneros.
                  td 5 a 15 L/día
                tr
                  td Bovinos de 1 a 2 años.
                  td 15 a 35 L/día
                tr.bgr_2
                  td Vacas secas.
                  td 30 a 60 L/día
                tr
                  td Vacas con producción de 10 litros de leche.
                  td 50 a 80 L/día
                tr.bgr_2
                  td Vacas con producción de 20 litros de leche. 
                  td 70 a 100 L/día
                tr
                  td Vacas con producción de 30 litros de leche.
                  td 90 a 150 L/día
                tr.bgr_2
                  td Terneros.
                  td 5 a 15 L/día
        
      h3.bgr_8 Energía
      .row.mb-5.mt-4
        .col-lg-7
          p La energía es importante en la nutrición de los bovinos porque facilita el desarrollo y crecimiento del animal, esta proviene de los carbohidratos, las proteínas y las grasas.
          p En la ración suministrada al rumiante, es importante asegurarse de que sea adecuada. Si es insuficiente, las bacterias del rumen no podrán desempeñar correctamente su función en la asimilación de proteínas, lo que provocará una disminución en la producción de leche y carne.
        .col-lg-5.align-content-center
          figure.d-flex
            img(src='@/assets/curso/temas/tema3/12.png', alt='Texto que describa la imagen')

    h3.bgr_8 Proteínas
    p.mt-4 Las proteínas son indispensables para los bovinos cuando el animal se encuentra en periodo de crecimiento y producción, además aportan los aminoácidos esenciales tanto para el animal como para los microorganismos del rumen.

    .row.mb-5.justify-content-center
      .col-lg-8.col-xl-5.mb-3
        figure
          img(src='@/assets/curso/temas/tema3/13.png', alt='Texto que describa la imagen')
      .col-lg-12.col-xl-7
        .cajon.color-acento-contenido.p-4
          p.mb-0 La proteína suministrada se calcula en función del contenido de nitrógeno presente en los forrajes y se conoce como proteína cruda, la cual es de gran importancia para la nutrición del animal.
        .bloque-texto-b.color-secundario.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            h4.mb-0 El ganado requiere dos tipos de proteína en su dieta. Un tipo es degradado en el rumen y es usado para cumplir con los requerimientos de la población microbiana, y el otro se salta el rumen y es usado principalmente para cumplir con los requerimientos nutritivos del animal. 
            span - (Rinehart, 2008)
            i.fas.fa-quote-right
    
    h3.bgr_8 Fibra
    .bloque-texto-g.bgr_1.mt-4.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/14.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La fibra en bovinos aporta celulosa, hemicelulosa y lignina; este último compuesto ayuda al buen funcionamiento ruminal, por tal razón, los bovinos deben consumir una cantidad mínima por día para que haya estimulación de la saliva y la rumia. Los niveles de fibra que se le deben suministrar a las vacas lecheras están entre 17 a 22 % de materia seca; si este es superior de un 22 % la capacidad de asimilación por parte del animal se ve perjudicada y si es inferior a un 17 %, se reduce el nivel de producción de leche y de grasa.

    .bg_img
      h3.bgr_8 Vitaminas
      p.mt-4 En la dieta de los bovinos las vitaminas son importantes pues ayudan a que se formen catalizadores biológicos que intervienen en el crecimiento y desarrollo corporal del animal.

      .row.mb-5.justify-content-center
        .col-md-6.col-lg-4.mb-3
          div.tarjeta.text-center.bgr_10.p-4.h-100
            figure.mb-5.d-flex.justify-content-center
              img.pst_2(src='@/assets/curso/temas/tema3/15.png', alt='Imagen decorativa')
            h2 Vitaminas
            p Las vitaminas de mayor importancia que necesitan los rumiantes son las A, D y E; mientras que las vitaminas B y K son sintetizadas por las bacterias del rumen, por lo tanto, no es necesario suplementarlas.	
        .col-md-6.col-lg-4.mb-3
          div.tarjeta.text-center.bgr_6.p-4.h-100
            figure.mb-5.d-flex.justify-content-center
              img.pst_2(src='@/assets/curso/temas/tema3/16.png', alt='Imagen decorativa')
            h2 Vitamina A
            p Es necesaria en vacas preñadas para que las crías nazcan en buen estado, porque cuando hay deficiencia de este compuesto se reduce el apetito del rumiante. Los forrajes ricos en caroteno son precursores de la vitamina A. 
        .col-md-6.col-lg-4.mb-3
          div.tarjeta.text-center.bgr_10.p-4.h-100
            figure.mb-5.d-flex.justify-content-center
              img.pst_2(src='@/assets/curso/temas/tema3/17.png', alt='Imagen decorativa')
            h2 Vitamina D
            p La carencia de esta vitamina en la dieta de los bovinos en crecimiento puede producir raquitismo.
    
    .cajon.color-acento-contenido.p-4.mb-5
      p.mb-0 La vitamina D se puede sintetizar en la piel del animal cuando es expuesto al sol, de manera que para las vacas que producen leche y son criadas en condiciones donde no se recibe casi luz solar, se les debe suministrar entre 5000 a 6000 UI (Unidad Internacional).

    h3.bgr_8 Minerales
    p.mt-4 Los principales minerales que requieren los bovinos son: fósforo, calcio, magnesio, potasio, azufre, hierro, manganeso, cobre, zinc y cobalto. 

    .row.mb-5.justify-content-center
      .col-lg-8.col-xl-5.mb-3
        figure
          img(src='@/assets/curso/temas/tema3/18.png', alt='Texto que describa la imagen')
      .col-lg-12.col-xl-7
        p Los minerales presentes en el animal constituyen del 4 a 6 % de su cuerpo y son muy importantes para los bovinos, ya que cumplen diversas funciones en el organismo y contribuyen en los procesos metabólicos.
        .cajon.color-acento-contenido.p-4.mb-5
          p.mb-0 Los minerales tienen muchas funciones estructurales en la formación de huesos y tejidos, además son indispensables en el rumen para que las bacterias se desarrollen y así puedan degradar el alimento.

    .bg_img_2
      .row.justify-content-center.mb-5
        .col-lg-4
          p.text-bold.bgr_15 Funciones de los minerales en los bovinos:

      .row.justify-content-center
        .col-md-10.col-lg-6
          ImagenInfografica.color-acento-contenido.mb-5
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/temas/tema3/19.png', alt='Texto que describa la imagen')
                

            .bgr_16.p-3(x="14%" y="23%" numero="+")
              .h3.mb-2 Calcio 
              ul.lista-ul--color
                li.d-flex.mb-0 
                  i.fas.fa-circle.fa-xs.bgr_17
                  | Ayuda a la formación de huesos y dientes.
                li.d-flex.mb-0 
                  i.fas.fa-circle.fa-xs.bgr_17
                  | Contribuye en	la producción de leche.
                li.d-flex.mb-0 
                  i.fas.fa-circle.fa-xs.bgr_17
                  | Interviene en la permeabilidad de la pared de las células.
            .bgr_16.p-3(x="8%" y="33%" numero="+")
              .h3.mb-2 Fósforo  
              ul.lista-ul--color
                li.d-flex.mb-0 
                  i.fas.fa-circle.fa-xs.bgr_17
                  | Participa en la obtención de energía.
                li.d-flex.mb-0 
                  i.fas.fa-circle.fa-xs.bgr_17
                  | Ayuda a la formación de dientes y huesos.
              p.text-bold Deficiencias:
              ul.lista-ul--color
                li.d-flex.mb-0 
                  i.fas.fa-circle.fa-xs.bgr_17
                  | Bajo crecimiento del animal.
                li.d-flex.mb-0 
                  i.fas.fa-circle.fa-xs.bgr_17
                  | Disminución de la producción y reproducción.
                li.d-flex.mb-0 
                  i.fas.fa-circle.fa-xs.bgr_17
                  | Retraso de la pubertad.
                li.d-flex.mb-0 
                  i.fas.fa-circle.fa-xs.bgr_17
                  | Quistes foliculares y bajo libido.
            .bgr_16.p-3(x="3%" y="45%" numero="+")
              .h3.mb-2 Magnesio
              ul.lista-ul--color
                li.d-flex.mb-0 
                  i.fas.fa-circle.fa-xs.bgr_17
                  | Ayuda al desarrollo esquelético.
                li.d-flex.mb-0 
                  i.fas.fa-circle.fa-xs.bgr_17
                  | Cumple la función como activador enzimático.
              p.text-bold Deficiencias:
              ul.lista-ul--color
                li.d-flex.mb-0 
                  i.fas.fa-circle.fa-xs.bgr_17
                  | Causa tetania hipomagnesemia.
                li.d-flex.mb-0 
                  i.fas.fa-circle.fa-xs.bgr_17
                  | Baja producción láctea.
                li.d-flex.mb-0 
                  i.fas.fa-circle.fa-xs.bgr_17
                  | Retención de la placenta en partos.
                li.d-flex.mb-0 
                  i.fas.fa-circle.fa-xs.bgr_17
                  | Disminución de la calidad del semen.
            .bgr_16.p-3(x="1%" y="57%" numero="+")
              .h3.mb-2 Azufre 
              ul.lista-ul--color
                li.d-flex.mb-0 
                  i.fas.fa-circle.fa-xs.bgr_17
                  | Hace parte de los aminoácidos azufrados.
                li.d-flex.mb-0 
                  i.fas.fa-circle.fa-xs.bgr_17
                  | Ayuda a la síntesis de proteínas microbianas.
                li.d-flex.mb-0 
                  i.fas.fa-circle.fa-xs.bgr_17
                  | Interviene en la respiración y los tejidos.
              p.text-bold Deficiencias:
              ul.lista-ul--color
                li.d-flex.mb-0 
                  i.fas.fa-circle.fa-xs.bgr_17
                  | Acumulación de ácido láctico.
                li.d-flex.mb-0 
                  i.fas.fa-circle.fa-xs.bgr_17
                  | Baja producción láctea.
            .bgr_16.p-3(x="3%" y="70%" numero="+")
              .h3.mb-2 Zinc 
              ul.lista-ul--color
                li.d-flex.mb-0 
                  i.fas.fa-circle.fa-xs.bgr_17
                  | Hace parte del funcionamiento del sistema inmune (producción de linfocitos).
                li.d-flex.mb-0 
                  i.fas.fa-circle.fa-xs.bgr_17
                  | Cofactor enzimático.
              p.text-bold Deficiencias:
              ul.lista-ul--color
                li.d-flex.mb-0 
                  i.fas.fa-circle.fa-xs.bgr_17
                  | Alopecia y dermatitis.
                li.d-flex.mb-0 
                  i.fas.fa-circle.fa-xs.bgr_17
                  | Disminución del crecimiento.
                li.d-flex.mb-0 
                  i.fas.fa-circle.fa-xs.bgr_17
                  | Problemas podales.
                li.d-flex.mb-0 
                  i.fas.fa-circle.fa-xs.bgr_17
                  | Bajo porcentaje de gestación.
                li.d-flex.mb-0 
                  i.fas.fa-circle.fa-xs.bgr_17
                  | Retraso de la pubertad.
                li.d-flex.mb-0 
                  i.fas.fa-circle.fa-xs.bgr_17
                  | Desarrollo deficiente en los testículos.
                li.d-flex.mb-0 
                  i.fas.fa-circle.fa-xs.bgr_17
                  | Bajo libido.
                
            .bgr_16.p-3(x="14%" y="79%" numero="+")
              .h3.mb-2 Cobre 
              ul.lista-ul--color
                li.d-flex.mb-0 
                  i.fas.fa-circle.fa-xs.bgr_17
                  | Cofactor enzimático.
                li.d-flex.mb-0 
                  i.fas.fa-circle.fa-xs.bgr_17
                  | Síntesis de hemoglobina.
              p.text-bold Deficiencias:
              ul.lista-ul--color
                li.d-flex.mb-0 
                  i.fas.fa-circle.fa-xs.bgr_17
                  | Bajo porcentaje de gestación.
                li.d-flex.mb-0 
                  i.fas.fa-circle.fa-xs.bgr_17
                  | Abortos y mortalidad embrionaria.
                li.d-flex.mb-0 
                  i.fas.fa-circle.fa-xs.bgr_17
                  | Bajo libido.
                li.d-flex.mb-0 
                  i.fas.fa-circle.fa-xs.bgr_17
                  | Retraso en la pubertad.
                li.d-flex.mb-0 
                  i.fas.fa-circle.fa-xs.bgr_17
                  | Retención de la placenta.
                li.d-flex.mb-0 
                  i.fas.fa-circle.fa-xs.bgr_17
                  | Anemia
                li.d-flex.mb-0 
                  i.fas.fa-circle.fa-xs.bgr_17
                  | Pérdida del color en el pelo.
                li.d-flex.mb-0 
                  i.fas.fa-circle.fa-xs.bgr_17
                  | Fragilidad ósea.
                li.d-flex.mb-0 
                  i.fas.fa-circle.fa-xs.bgr_17
                  | Problemas podales.
                
            .bgr_16.p-3(x="58%" y="27%" numero="+")
              .h3.mb-2 Yodo 
              ul.lista-ul--color
                li.d-flex.mb-0 
                  i.fas.fa-circle.fa-xs.bgr_17
                  | Es esencial para la tiroides.
              p.text-bold Deficiencias:
              ul.lista-ul--color
                li.d-flex.mb-0 
                  i.fas.fa-circle.fa-xs.bgr_17
                  | Coto.
                li.d-flex.mb-0 
                  i.fas.fa-circle.fa-xs.bgr_17
                  | Abortos.
                li.d-flex.mb-0 
                  i.fas.fa-circle.fa-xs.bgr_17
                  | Reabsorción fetal.
                li.d-flex.mb-0 
                  i.fas.fa-circle.fa-xs.bgr_17
                  | Bajo libido.
                li.d-flex.mb-0 
                  i.fas.fa-circle.fa-xs.bgr_17
                  | Disminución de la calidad seminal.
                li.d-flex.mb-0 
                  i.fas.fa-circle.fa-xs.bgr_17
                  | Mortalidad embrionaria.
                li.d-flex.mb-0 
                  i.fas.fa-circle.fa-xs.bgr_17
                  | Retención de la placenta.
                
            .bgr_16.p-3(x="74%" y="80%" numero="+")
              .h3.mb-2 Cobalto  
              ul.lista-ul--color
                li.d-flex.mb-0 
                  i.fas.fa-circle.fa-xs.bgr_17
                  | Ayuda en la síntesis de la vitamina B12.
                li.d-flex.mb-0 
                  i.fas.fa-circle.fa-xs.bgr_17
                  | Favorece el crecimiento de bacterias en el rumen.
              p.text-bold Deficiencias:
              ul.lista-ul--color
                li.d-flex.mb-0 
                  i.fas.fa-circle.fa-xs.bgr_17
                  | Anemia.
                li.d-flex.mb-0 
                  i.fas.fa-circle.fa-xs.bgr_17
                  | Pérdida del apetito.
                li.d-flex.mb-0 
                  i.fas.fa-circle.fa-xs.bgr_17
                  | Disminución en la producción de leche.
                li.d-flex.mb-0 
                  i.fas.fa-circle.fa-xs.bgr_17
                  | Bajo crecimiento.
                li.d-flex.mb-0 
                  i.fas.fa-circle.fa-xs.bgr_17
                  | Involución uterina.
                li.d-flex.mb-0 
                  i.fas.fa-circle.fa-xs.bgr_17
                  | Bajo porcentaje de gestación.
              
           
            .bgr_16.p-3(x="88%" y="72%" numero="+")
              .h3.mb-2 Selenio  
              ul.lista-ul--color
                li.d-flex.mb-0 
                  i.fas.fa-circle.fa-xs.bgr_17
                  | Asociado a la vitamina E.
                li.d-flex.mb-0 
                  i.fas.fa-circle.fa-xs.bgr_17
                  | Protección de los tejidos a procesos oxidativos.
              p.text-bold Deficiencias:
              ul.lista-ul--color
                li.d-flex.mb-0 
                  i.fas.fa-circle.fa-xs.bgr_17
                  | Enfermedad de músculos blandos.
                li.d-flex.mb-0 
                  i.fas.fa-circle.fa-xs.bgr_17
                  | Retención de placenta.
                li.d-flex.mb-0 
                  i.fas.fa-circle.fa-xs.bgr_17
                  | Abortos.
                li.d-flex.mb-0 
                  i.fas.fa-circle.fa-xs.bgr_17
                  | Mortalidad embrionaria.
                li.d-flex.mb-0 
                  i.fas.fa-circle.fa-xs.bgr_17
                  | Bajo porcentaje de gestación.
               
                
            .bgr_16.p-3(x="99%" y="62%" numero="+")
              .h3.mb-2 Hierro  
              ul.lista-ul--color
                li.d-flex.mb-0 
                  i.fas.fa-circle.fa-xs.bgr_17
                  | Respiración celular.
                li.d-flex.mb-0 
                  i.fas.fa-circle.fa-xs.bgr_17
                  | Hemoglobina.
                li.d-flex.mb-0 
                  i.fas.fa-circle.fa-xs.bgr_17
                  | Mioglobina.
              p.text-bold Deficiencias:
              ul.lista-ul--color
                li.d-flex.mb-0 
                  i.fas.fa-circle.fa-xs.bgr_17
                  | Anemia.
                li.d-flex.mb-0 
                  i.fas.fa-circle.fa-xs.bgr_17
                  | Quistes foliculares.
                li.d-flex.mb-0 
                  i.fas.fa-circle.fa-xs.bgr_17
                  | Alteraciones estrales.
                li.d-flex.mb-0 
                  i.fas.fa-circle.fa-xs.bgr_17
                  | Bajo porcentaje de gestación.
                li.d-flex.mb-0 
                  i.fas.fa-circle.fa-xs.bgr_17
                  | Diarrea y acidosis metabólica.
            .bgr_16.p-3(x="99%" y="50%" numero="+")
              .h3.mb-2 Potasio  
              ul.lista-ul--color
                li.d-flex.mb-0 
                  i.fas.fa-circle.fa-xs.bgr_17
                  | Balance del ácido base.
                li.d-flex.mb-0 
                  i.fas.fa-circle.fa-xs.bgr_17
                  | Equilibrio hídrico.
                li.d-flex.mb-0 
                  i.fas.fa-circle.fa-xs.bgr_17
                  | Trasmisión de impulsos nerviosos.
              p.text-bold Deficiencias:
              ul.lista-ul--color
                li.d-flex.mb-0 
                  i.fas.fa-circle.fa-xs.bgr_17
                  | Pérdida de peso.
                li.d-flex.mb-0 
                  i.fas.fa-circle.fa-xs.bgr_17
                  | Crecimiento retardado.
                li.d-flex.mb-0 
                  i.fas.fa-circle.fa-xs.bgr_17
                  | Debilidad muscular.
                li.d-flex.mb-0 
                  i.fas.fa-circle.fa-xs.bgr_17
                  | Desorden nervioso.
             
            .bgr_16.p-3(x="95%" y="39%" numero="+")
              .h3.mb-2 Manganeso  
              ul.lista-ul--color
                li.d-flex.mb-0 
                  i.fas.fa-circle.fa-xs.bgr_17
                  | Metabolismo de los carbohidratos.
              p.text-bold Deficiencias:
              ul.lista-ul--color
                li.d-flex.mb-0 
                  i.fas.fa-circle.fa-xs.bgr_17
                  | Quistes.
                li.d-flex.mb-0 
                  i.fas.fa-circle.fa-xs.bgr_17
                  | Bajo porcentaje de la gestación.
                li.d-flex.mb-0 
                  i.fas.fa-circle.fa-xs.bgr_17
                  | Abortos.
                li.d-flex.mb-0 
                  i.fas.fa-circle.fa-xs.bgr_17
                  | Descendencia defectuosa al nacer.
            .bgr_16.p-3(x="84%" y="31%" numero="+")
              .h3.mb-2 Sodio  
              ul.lista-ul--color
                li.d-flex.mb-0 
                  i.fas.fa-circle.fa-xs.bgr_17
                  | Principal catión extracelular.
                li.d-flex.mb-0 
                  i.fas.fa-circle.fa-xs.bgr_17
                  | Balance ácido base.
                li.d-flex.mb-0 
                  i.fas.fa-circle.fa-xs.bgr_17
                  | Permeabilidad celular.
              p.text-bold Deficiencias:
              ul.lista-ul--color
                li.d-flex.mb-0 
                  i.fas.fa-circle.fa-xs.bgr_17
                  | Apetito insaciable por la sal.
                li.d-flex.mb-0 
                  i.fas.fa-circle.fa-xs.bgr_17
                  | Consumo excesivo del suelo.
                li.d-flex.mb-0 
                  i.fas.fa-circle.fa-xs.bgr_17
                  | Retención de líquidos de la canal.
                li.d-flex.mb-0 
                  i.fas.fa-circle.fa-xs.bgr_17
                  | Baja calidad del semen.

      div.mb-5(data-aos="fade-right")
        h3.bgr.text-white.position-relative Alimentación bovina
          img.pst(src='@/assets/curso/temas/tema3/20.svg', alt='')
    
    h3.bgr_8 Manejo de praderas
    p.mt-4 Si desea tener una ganadería productiva es necesario que los pastos que utilice en la alimentación bovina cuenten con un alto contenido de proteínas y de energía para que el animal tenga un buen desarrollo y potencial genético; por lo tanto, se recomienda hacer una asociación de gramíneas con leguminosas, porque estas aportan los nutrientes necesarios en el pastoreo.
  
    .row.mb-5.justify-content-center
      .col-lg-8.col-xl-5.mb-3
        figure
          img(src='@/assets/curso/temas/tema3/21.png', alt='Texto que describa la imagen')
      .col-lg-12.col-xl-7
        p Las leguminosas aportan las proteínas que el animal necesita para mantener una buena producción de leche y carne. Por esta razón, es necesario asociar gramíneas con leguminosas, ya que contribuyen al mejoramiento de las praderas mediante el nitrógeno que aportan. Sin embargo, una vez que en la pradera se tienen estas dos especies, es importante evitar la pérdida de forraje debido al sobrepastoreo.
        .cajon.color-acento-contenido.p-4.mb-5
          p.mb-0 Cuando los animales se llevan a pastoreo, en la pradera se debe garantizar que el forraje esté en el punto máximo de proteína y se logra cuando se encuentra en época de cosecha, dicho periodo varía dependiendo del tipo de forraje que tenga cada predio; por ejemplo, una gramínea como la Brachiaria aproximadamente está en época de cosecha entre los 35 a 40 días, lo cual indica que cuenta con un contenido de proteínas apropiado.
    
    p En la ganadería existen diferentes tipos de pastoreo:

    .row.mb-5.justify-content-center
      .col-md-6.col-lg-3.mb-3
        div.tarjeta.text-center.bgr_10.p-4.h-100
          figure.mb-5.d-flex.justify-content-center
            img.pst_3(src='@/assets/curso/temas/tema3/22.png', alt='Imagen decorativa')
          h2 Pastoreo selectivo
          p El manejo de praderas mediante pastoreo selectivo optimiza la alimentación del ganado, promoviendo el crecimiento sostenible y la salud animal.
      .col-md-6.col-lg-3.mb-3
        div.tarjeta.text-center.bgr_6.p-4.h-100
          figure.mb-5.d-flex.justify-content-center
            img.pst_3(src='@/assets/curso/temas/tema3/23.png', alt='Imagen decorativa')
          h2 Pastoreo continuo
          p El manejo de praderas en pastoreo continuo, busca optimizar la calidad del forraje y mantener la salud del ganado.
      .col-md-6.col-lg-3.mb-3
        div.tarjeta.text-center.bgr_10.p-4.h-100
          figure.mb-5.d-flex.justify-content-center
            img.pst_3(src='@/assets/curso/temas/tema3/24.png', alt='Imagen decorativa')
          h2 Pastoreo alterno
          p Mejora la salud del suelo y la calidad del forraje, optimizando la producción ganadera sostenible.
      .col-md-6.col-lg-3.mb-3
        div.tarjeta.text-center.bgr_6.p-4.h-100
          figure.mb-5.d-flex.justify-content-center
            img.pst_3(src='@/assets/curso/temas/tema3/25.png', alt='Imagen decorativa')
          h2 Pastoreo rotacional
          p Mejora la salud de las praderas al distribuir estratégicamente el ganado para evitar la sobreexplotación.
      
    p.mb-5 El pastoreo más conveniente es el rotacional, el cual consiste en dividir el área en potreros y el animal se va cambiando de uno a otro, esto ayuda a conservar los forrajes de la pradera y el animal va contar con más alimento.
    
    h3.bgr_8 Forrajes

    .bloque-texto-g.bgr_1.mt-4.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/26.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los forrajes son una alimentación muy importante en la dieta del bovino, tanto en volumen como en nutrientes, pues son una fuente importante de fibra que cumple un papel importante para la digestión del rumiante, además aportan proteínas, energía, agua, vitaminas y minerales.

    .row.justify-content-center.mb-5
      .col-lg-12.col-xl-7.mb-3
        p Es importante en el sistema ganadero bovino al momento de iniciar un programa de confinamiento, disponer de buena cantidad y calidad de forrajes. Para tal fin, se usan especies de gramíneas como pasto elefante, <em>King grass</em>, Guatemala o <em>Maralfalfa</em>, también se puede usar la caña azucarera, el pasto de piso y las leguminosas tales como: <em>Leucaena, Kudzú, Crotalarias, Frijolillos, Morera, Nacedero, Estilosantes</em>, entre otros.
        .cajon.color-acento-contenido.p-4.mb-5
          p.mb-0 El consumo de pasto de corte por parte de los bovinos depende del sistema de pastoreo y de los alimentos que se les proporcionen, por ejemplo, un novillo necesita de 7 a 10 % de su peso en pasto verde, mientras que un toro de 350 kg requiere de 22 a 35 kg de forraje al día.
      .col-lg-8.col-xl-5
        figure
          img(src='@/assets/curso/temas/tema3/27.png', alt='Texto que describa la imagen')
    
    p Aunque los forrajes contienen los componentes esenciales que cada bovino necesita para su desarrollo, aportan poca ganancia de peso al animal. Es decir, este tipo de alimentación presenta ciertas limitaciones. Por ello, es necesario utilizar otros alimentos que cubran todas las necesidades del ganado. Se pueden suministrar mezclas de elementos que proporcionen los nutrientes necesarios para su desarrollo.
    .bloque-texto-g.bgr_1.mt-4.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/28.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En épocas de sequía, los campos no producen los forrajes suficientes para la alimentación del ganado, lo que ocasiona pérdida de peso y afecta el sistema de producción. En estos casos, es fundamental proporcionar un buen suministro de alimentos ricos en los componentes que el animal requiere. Tipos de pastos más utilizados en Colombia:

    SlyderA(tipo="b").bgr_18.mb-5
      .row.p-4.justify-content-center  
        .col-lg-7.mb-4.mb-lg-0.align-content-center
          h4 Pará
          ul.lista-ul--color
            li.d-flex 
              i.fas.fa-check-circle.bgr_14
              p.mb-0 #[strong Nombre vulgar: ] Admirable, Laguna, Egipto o Yerba del parral.
            li.d-flex 
              i.fas.fa-check-circle.bgr_14
              p.mb-0 #[strong Suelos y climas a los que se adapta: ] se adapta bien a suelos de alta y mediana fertilidad, húmedos e inundables. Crece bien entre 0 a 1500 m.s.n.m.
            li.d-flex 
              i.fas.fa-check-circle.bgr_14
              p.mb-0 #[strong Material de reproducción: ] tallos y cepas, sembrado con distancias de 50 a 80 cm entre los surcos.
            li.d-flex 
              i.fas.fa-check-circle.bgr_14
              p.mb-0 #[strong Aprovechamiento: ] heno, henolaje, ensilaje y pastoreo rotacional en prefloración, se puede asociar con leguminosas como <em>Kudzú</em> y Centrocemas.
        .col-md-8.col-lg-5
          figure
            img(src='@/assets/curso/temas/tema3/30.png', alt='Texto que describa la imagen')
      .row.p-4.justify-content-center
        .col-lg-7.mb-4.mb-lg-0.align-content-center
          h4 Alemán
          ul.lista-ul--color
            li.d-flex 
              i.fas.fa-check-circle.bgr_14
              p.mb-0 #[strong Nombre vulgar: ] Hierba de cayena o Zacate.
            li.d-flex 
              i.fas.fa-check-circle.bgr_14
              p.mb-0 #[strong Suelos y climas a los que se adapta: ] se adapta bien a suelos de alta y mediana fertilidad, húmedos e inundables. Crece entre los 0 a 1200 m.s.n.m.
            li.d-flex 
              i.fas.fa-check-circle.bgr_14
              p.mb-0 #[strong Material de reproducción: ] tallos y cepas, sembrado con distancias de 50 a 80 cm entre surcos.
            li.d-flex 
              i.fas.fa-check-circle.bgr_14
              p.mb-0 #[strong Aprovechamiento: ] pastoreo rotacional.
        .col-md-8.col-lg-5
          figure
            img(src='@/assets/curso/temas/tema3/31.png', alt='Texto que describa la imagen')
      .row.p-4.justify-content-center
        .col-lg-7.mb-4.mb-lg-0.align-content-center
          h4 Janeiro
          ul.lista-ul--color
            li.d-flex 
              i.fas.fa-check-circle.bgr_14
              p.mb-0 #[strong Nombre vulgar: ] Pasto Salto. 
            li.d-flex 
              i.fas.fa-check-circle.bgr_14
              p.mb-0 #[strong Suelos y climas a los que se adapta: ] se adapta a suelos con mediana y alta fertilidad, húmedos o inundables. Crece entre los 0 a 1200 metros m.s.n.m.
            li.d-flex 
              i.fas.fa-check-circle.bgr_14
              p.mb-0 #[strong Material de reproducción: ] tallos y cepas, sembrado con distancias de 50 a 80 cm entre surcos.
            li.d-flex 
              i.fas.fa-check-circle.bgr_14
              p.mb-0 #[strong Aprovechamiento: ] pastoreo rotacional.
        .col-md-8.col-lg-5
          figure
            img(src='@/assets/curso/temas/tema3/32.png', alt='Texto que describa la imagen')
      .row.p-4.justify-content-center
        .col-lg-7.mb-4.mb-lg-0.align-content-center
          h4 Angleton
          ul.lista-ul--color
            li.d-flex 
              i.fas.fa-check-circle.bgr_14
              p.mb-0 #[strong Nombre vulgar: ] Mono. 
            li.d-flex 
              i.fas.fa-check-circle.bgr_14
              p.mb-0 #[strong Suelos y climas a los que se adapta: ] se desarrolla en suelos fértiles y de textura franco arenosa, esta especie requiere de buena humedad en el suelo. Crece bien entre los 0 a 1000 m.s.n.m.
            li.d-flex 
              i.fas.fa-check-circle.bgr_14
              p.mb-0 #[strong Material de reproducción: ] 5 kg de semilla certificada por hectárea, sembrado al voleo o en surcos con distancias de 50 cm entre surcos.
            li.d-flex 
              i.fas.fa-check-circle.bgr_14
              p.mb-0 #[strong Aprovechamiento: ] heno, henolaje, ensilaje y pastoreo rotacional en prefloración.
        .col-md-8.col-lg-5
          figure
            img(src='@/assets/curso/temas/tema3/33.png', alt='Texto que describa la imagen')
      .row.p-4.justify-content-center
        .col-lg-7.mb-4.mb-lg-0.align-content-center
          h4 Bahía
          ul.lista-ul--color
            li.d-flex 
              i.fas.fa-check-circle.bgr_14
              p.mb-0 #[strong Nombre vulgar: ] Grama trenza.
            li.d-flex 
              i.fas.fa-check-circle.bgr_14
              p.mb-0 #[strong Suelos y climas a los que se adapta: ] se desarrolla en suelos neutro y ácidos bien drenados, es común en laderas de la zona andina. Crece entre 0 y 2300 m.s.n.m.
            li.d-flex 
              i.fas.fa-check-circle.bgr_14
              p.mb-0 #[strong Material de reproducción: ] 12 a 14 kg de semilla por hectárea de semilla sexual o tallos, cepas y rizomas, sembrado con distancias de 50 cm entre surcos.
            li.d-flex 
              i.fas.fa-check-circle.bgr_14
              p.mb-0 #[strong Aprovechamiento: ] pastoreo rotacional en prefloración.
        .col-md-8.col-lg-5
          figure
            img(src='@/assets/curso/temas/tema3/34.png', alt='Texto que describa la imagen')
      .row.p-4.justify-content-center
        .col-lg-7.mb-4.mb-lg-0.align-content-center
          h4 Braquiaria de Cumbens
          ul.lista-ul--color
            li.d-flex 
              i.fas.fa-check-circle.bgr_14
              p.mb-0 #[strong Nombre vulgar: ] Pasto peludo, Pasto alambre o Pasto de las orillas.
            li.d-flex 
              i.fas.fa-check-circle.bgr_14
              p.mb-0 #[strong Suelos y climas a los que se adapta: ] se adapta a suelos ácidos y de baja fertilidad y drenados. Crece entre 0 y 1800 m.s.n.m.
            li.d-flex 
              i.fas.fa-check-circle.bgr_14
              p.mb-0 #[strong Material de reproducción: ] se utilizan 3 kg de semilla por hectárea o material vegetativo (tallos, cepas y estolones), sembrado con distancias de 60 a 80 cm entre surcos.
            li.d-flex 
              i.fas.fa-check-circle.bgr_14
              p.mb-0 #[strong Aprovechamiento: ] heno, henolaje, ensilaje y pastoreo rotacional en prefloración, se puede asociar con leguminosas como maní forrajero, <em>kudzú</em> y centrocemas.
        .col-md-8.col-lg-5
          figure
            img(src='@/assets/curso/temas/tema3/35.png', alt='Texto que describa la imagen')
      .row.p-4.justify-content-center
        .col-lg-7.mb-4.mb-lg-0.align-content-center
          h4 Guinea
          ul.lista-ul--color
            li.d-flex 
              i.fas.fa-check-circle.bgr_14
              p.mb-0 #[strong Nombre vulgar: ] paja o India.
            li.d-flex 
              i.fas.fa-check-circle.bgr_14
              p.mb-0 #[strong Suelos y climas a los que se adapta: ] crece en suelos de alta fertilidad entre los 0 y 1800 m.s.n.m. 
            li.d-flex 
              i.fas.fa-check-circle.bgr_14
              p.mb-0 #[strong Material de reproducción: ] 3 kg de semilla por hectárea o por cepas, sembrado con distancia de 60 a 80 cm entre surcos.
            li.d-flex 
              i.fas.fa-check-circle.bgr_14
              p.mb-0 #[strong Aprovechamiento: ] heno, henolaje, ensilaje y pastoreo rotacional en prefloración, se puede asociar con leguminosas como <em>kudzú</em> y centrocemas.
        .col-md-8.col-lg-5
          figure
            img(src='@/assets/curso/temas/tema3/36.png', alt='Texto que describa la imagen')
      .row.p-4.justify-content-center
        .col-lg-7.mb-4.mb-lg-0.align-content-center
          h4 brachiaria  brizantha
          ul.lista-ul--color
            li.d-flex 
              i.fas.fa-check-circle.bgr_14
              p.mb-0 #[strong Nombre vulgar: ] Marandú.
            li.d-flex 
              i.fas.fa-check-circle.bgr_14
              p.mb-0 #[strong Suelos y climas a los que se adapta: ] crece en suelos de mediana a alta fertilidad entre los 0 y 1800 m.s.n.m.
            li.d-flex 
              i.fas.fa-check-circle.bgr_14
              p.mb-0 #[strong Material de reproducción: ] 3 kg de semilla por hectárea o por cepas, sembrado con distancias de 60 a 80 cm entre surcos.
            li.d-flex 
              i.fas.fa-check-circle.bgr_14
              p.mb-0 #[strong Aprovechamiento: ] heno, henolaje, ensilaje y pastoreo rotacional en prefloración, se puede asociar con leguminosas como <em>kudzú</em> y centrocemas.
        .col-md-8.col-lg-5
          figure
            img(src='@/assets/curso/temas/tema3/37.png', alt='Texto que describa la imagen')
      .row.p-4.justify-content-center
        .col-lg-7.mb-4.mb-lg-0.align-content-center
          h4 Gordura
          ul.lista-ul--color
            li.d-flex 
              i.fas.fa-check-circle.bgr_14
              p.mb-0 #[strong Nombre vulgar: ] Yararagua  peludo Chopin o pasto melaza.
            li.d-flex 
              i.fas.fa-check-circle.bgr_14
              p.mb-0 #[strong Suelos y climas a los que se adapta: ] crece en suelos fértiles y poco fértiles, entre los 200 y los 230 m.s.n.m.	
            li.d-flex 
              i.fas.fa-check-circle.bgr_14
              p.mb-0 #[strong Material de reproducción: ] semilla o por cepas, sembrado con distancias de 60 a 80 cm entre surcos.
            li.d-flex 
              i.fas.fa-check-circle.bgr_14
              p.mb-0 #[strong Aprovechamiento: ] heno, henolaje, ensilaje y pastoreo rotacional en prefloración, se puede asociar con leguminosas como <em>kudzú</em> y centrocemas.
        .col-md-8.col-lg-5
          figure
            img(src='@/assets/curso/temas/tema3/38.png', alt='Texto que describa la imagen')
      .row.p-4.justify-content-center
        .col-lg-7.mb-4.mb-lg-0.align-content-center
          h4 Estrella
          ul.lista-ul--color
            li.d-flex 
              i.fas.fa-check-circle.bgr_14
              p.mb-0 #[strong Nombre vulgar: ] Estrella africana.
            li.d-flex 
              i.fas.fa-check-circle.bgr_14
              p.mb-0 #[strong Suelos y climas a los que se adapta: ] crece en suelos de mediana a alta fertilidad, entre los 0 y los 2200 m.s.n.m.
            li.d-flex 
              i.fas.fa-check-circle.bgr_14
              p.mb-0 #[strong Material de reproducción: ] estolones, tallos y cepas.
            li.d-flex 
              i.fas.fa-check-circle.bgr_14
              p.mb-0 #[strong Aprovechamiento: ] heno, henolaje, ensilaje y pastoreo rotacional en prefloración, se puede asociar con leguminosas como maní forrajero, <em>kudzú</em> y centrocemas.
        .col-md-8.col-lg-5
          figure
            img(src='@/assets/curso/temas/tema3/39.png', alt='Texto que describa la imagen')
      .row.p-4.justify-content-center
        .col-lg-7.mb-4.mb-lg-0.align-content-center
          h4 Carimagua
          ul.lista-ul--color
            li.d-flex 
              i.fas.fa-check-circle.bgr_14
              p.mb-0 #[strong Nombre vulgar: ] Andropogon, Veranero o San Martín.
            li.d-flex 
              i.fas.fa-check-circle.bgr_14
              p.mb-0 #[strong Suelos y climas a los que se adapta: ] tolera suelos ácidos y de baja fertilidad, pero que no sean inundables.
            li.d-flex 
              i.fas.fa-check-circle.bgr_14
              p.mb-0 #[strong Material de reproducción: ] semilla cariópsis de 5 kilos por hectárea, sembrado al voleo o por cepas en siembra rala.
            li.d-flex 
              i.fas.fa-check-circle.bgr_14
              p.mb-0 #[strong Aprovechamiento: ] heno, henolaje, ensilaje y pastoreo rotacional en prefloración.
        .col-md-8.col-lg-5
          figure
            img(src='@/assets/curso/temas/tema3/40.png', alt='Texto que describa la imagen')

    div.mb-5(data-aos="fade-right")
      h3.bgr.text-white.position-relative Suplementación
        img.pst(src='@/assets/curso/temas/tema3/20.svg', alt='')
    
    .row.mb-5.justify-content-center
      .col-lg-8.col-xl-4.mb-3
        figure
          img(src='@/assets/curso/temas/tema3/41.png', alt='Texto que describa la imagen')
      .col-xl-8 
        p La suplementación animal tiene como objetivo principal aportar todos los nutrientes que el animal necesita para su alimentación, tales como agua, energía, vitaminas y minerales. Esto asegura un adecuado desarrollo celular y un buen funcionamiento de todo el organismo.
        .cajon.color-acento-contenido.p-4.mb-5
          p.mb-0 Al momento de complementar la nutrición, se utilizan suplementos que aportan los nutrientes necesarios para alcanzar el nivel de producción requerido en los bovinos.
    
    .row.mb-5.justify-content-center
      .col-lg-8
        h3.bgr_8 Tipos de suplementos
        p.mt-4 Existen diferentes suplementos que se pueden utilizar dependiendo del tipo de producción ganadera y del propósito que se tenga en la alimentación del animal; dependiendo de esto el suplemento seleccionado hará una diferencia en la eficiencia de la nutrición del ganado bovino.
        ul.lista-ul--color
            li.d-flex 
              i.fas.fa-caret-right.fa-lg.bgr_14
              h3 Suplementos fibrosos
        p En este grupo se encuentran los forrajes, como pastos, leguminosas y árboles; estas especies se utilizan enteras o en cortes. En el caso de las leguminosas, árboles y arbustos, es necesario cortarlos para reducir su tamaño y, de esta manera, facilitar su suministro al animal.
        .cajon.color-acento-contenido.p-4.mb-5
          p.mb-0 Este tipo de alimentos se utilizan en épocas de escases de forrajes por disminución de las lluvias, y es una suplementación que se proporciona para sustituir la deficiencia de fibra.
      .col-md-8.col-lg-4.align-content-center
        figure.d-flex
          img(src='@/assets/curso/temas/tema3/42.png', alt='Texto que describa la imagen')
    
    .row.justify-content-center.mb-5
      .col-lg-4
        p.text-bold.bgr_15 Los principales suplementos fibrosos son:
    
    .row.mb-5
      .col-md-6.col-lg-3.mb-3
        div.tarjeta.text-center.bgr_10.p-4.h-100
          figure.mb-5.d-flex.justify-content-center
            img.pst_3(src='@/assets/curso/temas/tema3/43.png', alt='Imagen decorativa')
          h2 Pastos de corte
          p La suplementación animal mejora la alimentación con pastos de corte, esencial para la salud y rendimiento de los animales.
      .col-md-6.col-lg-3.mb-3
        div.tarjeta.text-center.bgr_6.p-4.h-100
          figure.mb-5.d-flex.justify-content-center
            img.pst_3(src='@/assets/curso/temas/tema3/44.png', alt='Imagen decorativa')
          h2 Leguminosas
          p La suplementación animal con leguminosas arbustivas mejora la calidad nutricional del forraje, proporcionando proteínas y nutrientes esenciales para el ganado, optimizando su alimentación y rendimiento.
      .col-md-6.col-lg-3.mb-3
        div.tarjeta.text-center.bgr_10.p-4.h-100
          figure.mb-5.d-flex.justify-content-center
            img.pst_3(src='@/assets/curso/temas/tema3/45.png', alt='Imagen decorativa')
          h2 Residuos
          p La suplementación animal con residuos de cosecha (tamos, pajas y socas), mejora la dieta animal de manera sostenible, aprovechando recursos agrícolas para optimizar la alimentación y reducir el desperdicio agroindustrial.
      .col-md-6.col-lg-3.mb-3
        div.tarjeta.text-center.bgr_6.p-4.h-100
          figure.mb-5.d-flex.justify-content-center
            img.pst_3(src='@/assets/curso/temas/tema3/46.png', alt='Imagen decorativa')
          h2 Ensilajes y henos
          p La suplementación animal con ensilajes y henos optimiza la alimentación, asegurando nutrientes esenciales para la salud y producción ganadera eficiente en todas las etapas del ciclo productivo.
      
    .row.mb-5.justify-content-center
      .col-lg-8.col-xl-4.mb-3
        figure
          img(src='@/assets/curso/temas/tema3/47.png', alt='Texto que describa la imagen')
      .col-xl-8 
        ul.lista-ul--color.mb-0
          li.d-flex.mb-0 
            i.fas.fa-caret-right.fa-lg.bgr_14
            h3 Suplementos proteicos
        p.mb-5 Este tipo de suplemento es proporcionado a los bovinos para sustituir las deficiencias de proteínas que tengan los forrajes, estos pueden ser vegetales o animales (se encuentra en la harina de pescado y la carne).
        ul.lista-ul--color.mb-0
          li.d-flex.mb-0 
            i.fas.fa-check-circle.bgr_13
            h3 Generalidades de los suplementos proteicos
        p Las especies vegetales utilizadas como suplementos proteicos son las tortas de algodón, de cascarilla y de soya, y los residuos de especies arbóreas, leguminosas, entre otros.  Estas son algunas de sus funciones:

    .row.mb-5.justify-content-center
      .col-lg-10.col-xl-8.align-content-center.mb-3
        SlyderF(columnas="col-md-6 col-xl-6")
          .tarjeta.bgr_9.p-4
            figure.mb-3.d-flex.justify-content-center
              img.pst_4(src='@/assets/curso/temas/tema3/49.png', alt='Texto que describa la imagen')
            p.text-bold.text-center Suplementos
            p.mb-0.text-center Los suplementos proteicos más comunes son los concentrados que tienen un 16 % de proteína y entre sus componentes principales están las especies vegetales que ayudan a la digestión del animal.
          .tarjeta.bgr_9.p-4
            figure.mb-3.d-flex.justify-content-center
              img.pst_4(src='@/assets/curso/temas/tema3/50.png', alt='Texto que describa la imagen')
            p.text-bold.text-center Las leguminosas
            p.mb-0.text-center Otras especies usadas como suplementos son las leguminosas que aportan un 20 % de proteína.
          .tarjeta.bgr_9.p-4
            figure.mb-3.d-flex.justify-content-center
              img.pst_4(src='@/assets/curso/temas/tema3/51.png', alt='Texto que describa la imagen')
            p.text-bold.text-center Rumen
            p.mb-0.text-center Para un buen funcionamiento del rumen se necesita un 7 % de proteínas que equivalen al requerimiento de las bacterias ruminales en los bovinos.
          .tarjeta.bgr_9.p-4
            figure.mb-3.d-flex.justify-content-center
              img.pst_4(src='@/assets/curso/temas/tema3/52.png', alt='Texto que describa la imagen')
            p.text-bold.text-center Bacterias
            p.mb-0.text-center La fuente de nitrógeno soluble en rumen es el nitrógeno no proteico, el cual aumenta las bacterias ruminales, esto beneficia el aprovechamiento de la materia seca consumida por el bovino.
      .col-lg-8.col-xl-4
        figure
          img(src='@/assets/curso/temas/tema3/48.png', alt='Imagen decorativa')
    
    ul.lista-ul--color.mb-0
      li.d-flex.mb-0 
        i.fas.fa-caret-right.fa-lg.bgr_14
        h3 Suplementos energéticos
    p Estos suplementos aportan energía al bovino y se obtienen de fuentes tales como: lípidos (grasas) y carbohidratos.

    .tarjeta--container.row.mb-5
      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .col-md.tarjeta.bgr_5.p-5.mb-3
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema3/53.png', alt='Texto que describa la imagen')
          
        h2.text-center Fuentes de carbohidratos:
        ul.lista-ul--color
          li 
            i.fas.fa-check-circle.bgr_13 
            | Melaza.
          li
            i.fas.fa-check-circle.bgr_13
            | Raíces o tubérculos como la yuca.
          li
            i.fas.fa-check-circle.bgr_13
            | Cereales como el sorgo, arroz, maíz, salvados de trigo y de maíz.

      .col-md.tarjeta.bgr_2.p-5.mb-3
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema3/54.png', alt='Texto que describa la imagen')
          
        h2.text-center Fuentes de lípidos:
        ul.lista-ul--color
          li 
            i.fas.fa-check-circle.bgr_14 
            | Grasas vegetales y animales.  
          li
            i.fas.fa-check-circle.bgr_14
            | Semilla de algodón.
          li
            i.fas.fa-check-circle.bgr_14
            | Suplementos vitamínicos.

    p Las vitaminas no tienen ningún aporte calórico para el animal, pero si son indispensables para regular la fisiología de su organismo, además es importante proporcionarlas en los suplementos alimenticios porque el organismo del animal no las produce.

    ul.lista-ul--color.mb-0
      li.d-flex.mb-0 
        i.fas.fa-caret-right.fa-lg.bgr_14
        h3 Bloques nutricionales

    .bloque-texto-g.bgr_1.mt-4.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/55.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Es un tipo de suplemento que aporta a los bovinos nutrientes como proteínas, carbohidratos y minerales de forma lenta y segura.  Estos mejoran el ambiente ruminal porque incrementan los microorganismos presentes en el rumen.
    
    .bg_img
      .row.mb-5
        .col-lg-8.align-content-center
          p Ventajas de los bloques nutricionales:
          ul.lista-ul--color
            li.d-flex 
              i.fas.fa-check-circle.bgr_13 
              | Permite que se disminuya la pérdida de peso del animal en épocas secas y de baja disponibilidad de forrajes.
            li.d-flex
              i.fas.fa-check-circle.bgr_13
              | Mejora la relación proteína- energía en el animal.
            li.d-flex
              i.fas.fa-check-circle.bgr_13
              | Aumenta la producción láctea en hembras productoras de leche y también mejora la ganancia de peso vivo del animal en unos 420 g/día.
        .col-lg-4
          figure
            img(src='@/assets/curso/temas/tema3/56.png', alt='Texto que describa la imagen')
      
      p Ingredientes utilizados en la elaboración del bloque nutricional:

      .row.mb-5.justify-content-center
        .col-md-8.col-lg-4.mb-3
          figure
            img(src='@/assets/curso/temas/tema3/57.png', alt='Texto que describa la imagen')
        .col-lg-8.align-content-center
          //- LineaTiempoD debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          LineaTiempoD.color-secundario
            p.text-small(numero="1" titulo="Proteína") Las proteínas en el ganado doble propósito son fundamentales para el crecimiento y la producción láctea y cárnica. Una dieta balanceada en urea, algodón, soya y ajonjolí, asegura su desarrollo óptimo y saludable.
            p.text-small(numero="2" titulo="Minerales") La sal mineralizada es crucial para el ganado doble propósito, mejorando su salud y productividad. Aporta nutrientes esenciales que fortalecen el desarrollo y la calidad de la producción láctea y cárnica. potreros.
            p.text-small(numero="3" titulo="Fibra") En el ganado doble propósito la fibra es crucial para una digestión eficiente que beneficie la salud ruminal, asegurando una nutrición adecuada en melaza, miel de purga. tusa de maíz, cascarillas, residuos de cosecha y bagazo.
            p.text-small(numero="4" titulo="Energía") En el ganado de doble propósito es crucial para su productividad y salud. Una dieta equilibrada en miel de purga y melaza, sirve para gestionar el estrés. Además, optimiza el rendimiento y bienestar general del animal. 
            p.text-small(numero="5" titulo="Aglomerante") La cal y el cemento, es fundamental en la alimentación del ganado doble propósito, optimizando la digestibilidad de los alimentos y favoreciendo la salud ruminal para mejorar la producción lechera y cárnica. 
    
    P.mb-5 Las formulaciones que existen también son muy diversas y una de ellas puede ser:

    .row.justify-content-center
      .col-lg-6.col-xl-4
        p.bgr_19 #[strong.bgr_20 30 %] de melaza o miel de purga.
      .col-lg-6.col-xl-3
        p.bgr_19 #[strong.bgr_20 33 %] de harinas y polvos.
      .col-lg-6.col-xl-3
        p.bgr_19 #[strong.bgr_20 3 % - 4 %] de fibra.
        
    .row.mb-5.justify-content-center
      .col-lg-6.col-xl-4
        p.bgr_19 #[strong.bgr_20 5 % - 10 %] de NNP (urea).
      .col-lg-6.col-xl-4
        p.bgr_19 #[strong.bgr_20 14 %] de minerales (cenizas). (Serrano, s.f.)
    
    .row.justify-content-center
      .col-lg-9
        p Elaboración artesanal del bloque nutricional:
        ol.lista-ol--cuadro.lista-ol--separador
          li.d-flex
            .lista-ol--cuadro__vineta
              span.text-bold.bgr_21 01
            p #[strong El bloque nutricional ] en el ganado doble propósito optimiza la alimentación para producción de leche y carne. Además, se deben pesar los ingredientes: melaza, urea, sales minerales, cal y fuente de fibra, para un equilibrado nutriente, clave para un desarrollo saludable y eficiente de los animales.
          li.d-flex
            .lista-ol--cuadro__vineta
              span.text-bold.bgr_21 02
            p #[strong Incorporar en un recipiente ] (canoa o caneca) uno a uno los ingredientes en el orden que los pesó.
          li.d-flex
            .lista-ol--cuadro__vineta
              span.text-bold.bgr_21 03
            p #[strong El bloque nutricional optimiza ] la dieta del ganado de doble propósito al mezclar cuidadosamente ingredientes clave, asegurando un desarrollo saludable y productivo. Cada vez que se agregue un ingrediente, debe mezclarse bien.
          li.d-flex
  
      .col-md-8.col-lg-3
        figure
          img(src='@/assets/curso/temas/tema3/58.png', alt='Texto que describa la imagen')
    
      ol.lista-ol--cuadro.lista-ol--separador
        li.d-flex
          .lista-ol--cuadro__vineta
            span.text-bold.bgr_21 04
          p #[strong Coger una muestra de la mezcla ] y realizarle la prueba de puño, cuando lo haga no debe salir líquido entre los dedos y debe quedar una masa.
        li.d-flex
          .lista-ol--cuadro__vineta
            span.text-bold.bgr_21 05
          p #[strong Una vez la mezcla sea homogénea, ]  coloque la masa dentro de un balde, un recipiente de plástico o en cubos.
        li.d-flex
          .lista-ol--cuadro__vineta
            span.text-bold.bgr_21 06
          p #[strong El bloque nutricional compacto y prensado ] mejora la alimentación del ganado de doble propósito, proporcionando nutrientes balanceados y facilitando su consumo diario de manera eficiente, gracias a su prensado con un objeto de metal o madera.
        li.d-flex
          .lista-ol--cuadro__vineta
            span.text-bold.bgr_21 07
          p #[strong El bloque nutricional, ] esencial para el ganado doble propósito, requiere un proceso de secado de 10 días para asegurar su calidad y efectividad en la alimentación del ganado.
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
