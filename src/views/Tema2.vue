<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Razas de ganado bovino
    
    .bloque-texto-g.bgr_1.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los sistemas productivos doble propósito utilizan razas de bovinos adaptadas al trópico las cuales producen leche y carne, esto se logra mediante el cruzamiento entre ambas razas con el fin de incrementar la productividad en el hato. 
    
    p Al cruzar dos razas diferentes las crías son más vigorosas que sus antecesoras y tienen características como: mayor fertilidad, mejor volumen corporal y alta capacidad de producir carne y leche.

    .row.mb-5.justify-content-center
      .col-md-6.col-lg-4.mb-3
        .tarjeta-avatar-b.mb-5.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema2/2.svg' alt='AvatarTop')
          .tarjeta.bgr_3.align-content-center
            .p-4
              h3 Producción de leche
              p La producción de leche bovina depende de una alimentación adecuada, control del estrés y un bienestar óptimo, lo que mejora la calidad, la eficiencia y la salud del ganado lechero.
      .col-md-6.col-lg-4.mb-3
        .tarjeta-avatar-b.mb-5.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema2/3.svg' alt='AvatarTop')
          .tarjeta.bgr_2.align-content-center
            .p-4
              h3 Producción de carne
              p La producción de carne en sistemas de doble propósito, junto con buenas prácticas de higiene, optimiza la calidad, rentabilidad y protege la salud pública mediante controles sanitarios estrictos.
      .col-md-6.col-lg-4.mb-3
        .tarjeta-avatar-b.mb-5.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema2/4.svg' alt='AvatarTop')
          .tarjeta.bgr_4.align-content-center
            .p-4
              h3 Producción de ganado doble propósito
              p El ganado bovino de doble propósito combina la producción de carne y leche, utilizando cruces de razas como <em>Holstein</em> y Cebú, adaptadas eficientemente a climas tropicales.
    
    h3.mb-5.text-center El origen de las razas existentes en Colombia proviene de:

    .tarjeta--container.row.mb-5
      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .col-md.tarjeta.bgr_5.p-5.mb-3
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema2/5.png', alt='Texto que describa la imagen')
          
        h2.text-center <em>Bos Indicus</em> (India)
        p Es originaria de la india y se caracteriza por tener una joroba en la parte superior de su cuerpo; entre las razas más significativas están: <em>Nelore, Gyr, Indubrasil, Brahmán y Guzerat.</em>

      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .col-md.tarjeta.bgr_2.p-5.mb-3
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema2/6.png', alt='Texto que describa la imagen')
        h2.text-center <em>Bos Taurus</em> (Europa)
        p Es originaria de Europa y se caracteriza por la alta producción de carne; entre las razas más importantes de esta especie se encuentran: <em>Jersey, Limousin, Hereford,</em> Pardo Suizo, <em>Aberdeen Angus, Shorthorn,</em> entre otras.

    .bg_img
      .row.mb-5.justify-content-center
        .col-lg-10
          .titulo-sexto.color-acento-contenido.mb-5
            h5 Tabla 1. 
            span <em>Diferencias entre Bos Indicus y Bos Taurus</em>
    
          .tabla-a.color-acento-contenido.mb-5 
            table
              caption Nota. SENA
              thead
                tr.bgr_6
                  th Región
                  th B. <em>Indicus</em>
                  th B. <em>Taurus</em>
                
              tbody.bgr_7
                tr.bgr_2
                  td Cabeza	
                  td Larga
                  td Corta ancha y de cuernos
                tr
                  td Cuello
                  td Cuernos largos
                  td Cortos
                tr.bgr_2
                  td Cruz	
                  td Estrecho y corto
                  td Ancho y corto
                tr
                  td Piel	
                  td Con giba
                  td Sin giba
                tr.bgr_2
                  td Pelo	
                  td Pigmentada y elástica
                  td Piel oscura y pigmentada	
                tr
                  td Pliegues cutáneos
                  td Corto
                  td Largo
                tr.bgr_2
                  td Miembros	
                  td Con pliegues
                  td Sin pliegues
                tr
                  td Ojos	
                  td Largo y prepucio corto
                  td Corto y prepucio largo
                tr.bgr_2
                  td Ombligo	
                  td Alargados o achinados
                  td Redondos
                tr
                  td Papada	
                  td Colgante
                  td No colgante

    .row.mb-5 
      .col-lg-5.mb-5
        figure
          img(src='@/assets/curso/temas/tema2/7.png', alt='Imagen decorativa')
      .col-lg-7.align-content-center
        div.mb-5(data-aos="fade-right")
          h3.bgr.text-white.position-relative Razas bovinas comerciales doble propósito 
            img.pst(src='@/assets/curso/temas/tema2/8.svg', alt='')
        
        h3.bgr_8 <em>Brahman</em>

        p.mt-4 Esta raza se originó en los Estados Unidos mediante el cruce de especies <em>Bos Indicus (Nelore, Gyr, Indubrasil, Brahman y Guzerat)</em> importadas desde la India. A continuación, se presentan algunas de sus características:
    
    .row.mb-5.justify-content-center
      .col-lg-10.col-xl-8.align-content-center.mb-3
        SlyderF(columnas="col-md-6 col-xl-6")
          .tarjeta.bgr_9.p-4.align-content-center.position-relative
            img.pst_1(src='@/assets/curso/temas/tema2/01.svg', alt='')
            p.mb-0.text-center Los primeros ejemplares puros de <em>Brahman</em> llegaron a Colombia en 1913, estos se mestizaron con las razas existentes dando como resultado vacas criollas con 7/8 Cebú, gran rusticidad, resistencia a enfermedades y plagas, y buena adaptación al medio.

          .tarjeta.bgr_9.p-4.align-content-center.position-relative
            img.pst_1(src='@/assets/curso/temas/tema2/02.svg', alt='')
            p.mb-0.text-center Se usa el nombre <em>Brahman</em> para hacer referencia a diversos tipos de ganado cebuíno, este se caracteriza por su color gris-blanco (especialmente en hembras) o rojo, aunque este último es una línea Cebú que se obtuvo a partir del cruce de <em>Gyr</em> con Indubrasil o de <em>Gyr</em> con <em>Guzerat</em>; en Colombia se cuenta aproximadamente con unos 803.043 animales de los cuales 72.998 son <em>Brahman</em> rojo.
          .tarjeta.bgr_9.p-4.align-content-center.position-relative
            img.pst_1(src='@/assets/curso/temas/tema2/03.svg', alt='')
            p.mb-0.text-center El patrón establecido en cuanto al peso de esta raza es de 800 a 1.100 kg en machos y de 450 a 600 kg para hembras.
          .tarjeta.bgr_9.p-4.align-content-center.position-relative
            img.pst_1(src='@/assets/curso/temas/tema2/04.svg', alt='')
            p.mb-0.text-center La raza <em>Brahman</em> se ha catalogado como una excelente productora de carne debido a su ganancia de peso y buena calidad de canal, esto se debe a que se adapta con facilidad a los climas cálidos y a las sequías; además es resistente a parásitos y tiene un buen desarrollo muscular, lo que le permite producir carne en menos tiempo. En ciertos sistemas doble propósito se ha incluido esta raza para cruzarla y así producir leche.
      .col-md-8.col-lg-6.col-xl-4
        figure
          img(src='@/assets/curso/temas/tema2/9.png', alt='Imagen decorativa')
    
    p Los bovinos de raza <em>Brahman</em> tienen gran longevidad, lo cual es una ventaja porque dejan más descendencia y es rentable para el ganadero.

    .bg_img
      .row.mb-5.justify-content-center
        .col-lg-8
          .titulo-sexto.color-acento-contenido.mb-5
            h5 Tabla 2. 
            span <em>Aportes raciales</em>
    
          .tabla-a.color-acento-contenido.mb-5 
            table
              caption Nota. SENA
              thead
                tr.bgr_6
                  th Caracteristica
                  th Descripción
                 
                
              tbody.bgr_7
                tr.bgr_2
                  td Cabeza	
                  td Ancha
                tr
                  td Perfil
                  td Recto
                tr.bgr_2
                  td Cuello
                  td Corto y grueso
                tr
                  td Orejas
                  td Medianas
                tr.bgr_2
                  td Cuernos
                  td Cortos, medianamente gruesos y dirigidos hacia atrás
                tr
                  td Vientre
                  td Luminoso
                
      h3.bgr_8 <em>Simmental</em>
    
    p.mt-4 Es una raza originaria de Suiza <em>(Bos Taurus)</em>, se puede adaptar a varios climas y se encuentra distribuida en países productores de ganado como Australia, Canadá, Estados Unidos y Argentina. Estas son algunas de sus características:
                 
    .row.mb-5.justify-content-center
      .col-md-8.col-lg-4.mb-3
        figure
          img(src='@/assets/curso/temas/tema2/10.png', alt='Imagen decorativa')
      .col-lg-8.align-content-center
        //- LineaTiempoD debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        LineaTiempoD.color-secundario
          p.text-small(numero="1" titulo="Raza <em>simmental</em>") El <em>Simmental</em> se caracteriza por tener buen tamaño, su color es rojo o amarillo con blanco, y su cabeza, patas y vientre es blanco. El peso aproximado para machos es de 1.000 kg y en las hembras es de 750 kg..
          p.text-small(numero="2" titulo="Característica bovina") Estos animales poseen una alta precocidad sexual, son mansos, tienen gran longevidad y se adaptan con facilidad a los potreros.
          p.text-small(numero="3" titulo="Capacidad de adaptación") En Colombia esta especie se encuentra en varias zonas como son: Valle del Cauca, Eje Cafetero, Cundinamarca, Boyacá y Antioquia. Por su gran capacidad de adaptación esta raza es óptima para cualquier tipo de cruzamiento.
          p.text-small(numero="4" titulo="Raza doble propósito") En el país este tipo de ganado bovino se utiliza por ser una raza doble propósito; con respecto a la producción de leche es muy buena porque genera en promedio 6.500 kg por lactancia de 305 días, esta es rica en sólidos totales y por ello es muy apetecida en la industria láctea. Los cruces de <em>Simmental</em> con otras especies de ganado lechero mejoran la calidad de este producto y además genera buena resistencia a la mastitis.
                  
    .cajon.bgr_2.p-4.mb-5
      p.mb-0 En cuanto a la producción de carne, es una raza que tiene alta capacidad de crecimiento y desarrollo muscular, lo cual se ve reflejado en la calidad de la carne, pues tiene bajo contenido de grasa. Esta raza es muy utilizada en el país por la calidad de la carne con relación al sabor y ternura.

    h3.bgr_8 <em>Simbrah</em>

    .row.mb-5.justify-content-center
      .col-lg-12.col-xl-7.mt-4.mb-3
        p La raza <em>Simbrah</em> es el resultado del cruce de <em>Simmental (Bos Taurus)</em> con <em>Brahman (Bos Indicus)</em>, al mezclarse las dos razas esta especie heredó las características de la raza <em>Brahman</em> con su tolerancia a las temperaturas altas y resistencia a parásitos, y adquirió de la raza <em>Simmental</em> su longevidad, calidad lechera y habilidad materna. Los machos <em>Simbrah</em> ganan mayor peso, tienen precocidad sexual, sus carnes son tiernas y magras con excelente calidad, por lo cual, es una buena opción de raza doble propósito en la ganadería. 
        .cajon.color-acento-contenido.p-4
          p.mb-0 En Colombia esta especie se adaptó muy bien y en las regiones que más se cría este ganado es en la Costa Atlántica, Bajo Cauca, Magdalena Medio, Valle del Cauca, Cesar y el Urabá Antioqueño.
      .col-lg-8.col-xl-5
        figure
          img(src='@/assets/curso/temas/tema2/11.png', alt='Imagen decorativa')
    
    h3.bgr_8 <em>Normando</em>

    .bloque-texto-g.bgr_1.mt-4.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/12.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La raza <em>Normando</em> es procedente del norte de Francia y es doble propósito porque produce carne y leche de alta calidad. Este ganado surgió del cruzamiento de bovinos que poblaron Normandía del siglo IX al X con animales introducidos por los vikingos. A Colombia llegó en 1877 y se adaptó muy bien a las condiciones agroecológicas existentes en el país; en la actualidad esta raza se produce en el Eje Cafetero, Valle del Cauca, Santander, Huila y Tolima.
    
    p.mb-5 Estas son algunas de sus características:

    .row.mb-5.justify-content-center
      .col-md-6.col-lg-4.mb-3
        div.tarjeta.text-center.bgr_10.p-4.h-100
          figure.mb-5.d-flex.justify-content-center
            img.pst_2(src='@/assets/curso/temas/tema2/13.png', alt='Imagen decorativa')
          h2 Bovinos <em>Normandos</em>
          p El ganado <em>Normando</em> es una raza bovina originaria de la región de Normandía, al norte de Francia. Es conocida por su doble propósito: producción de carne y producción de leche, aunque también se cría para la obtención de cuero y para trabajos de tracción en algunas zonas rurales.
      .col-md-6.col-lg-4.mb-3
        div.tarjeta.text-center.bgr_6.p-4.h-100
          figure.mb-5.d-flex.justify-content-center
            img.pst_2(src='@/assets/curso/temas/tema2/14.png', alt='Imagen decorativa')
          h2 Produce carne y leche
          p La vaca <em>Normando</em> es valorada por su leche de alta calidad, rica en grasa y proteínas, ideal para la producción de quesos como el <em>Camembert</em>, con un rendimiento de 6,000 a 8,000 litros anuales. Además, es apreciada por su carne, especialmente por su sabor y jugosidad, debido al marmoleo que mejora la textura. La carne de ternera es especialmente tierna y sabrosa, lo que hace a esta raza ideal tanto para la producción láctea como cárnica.
      .col-md-6.col-lg-4.mb-3
        div.tarjeta.text-center.bgr_10.p-4.h-100
          figure.mb-5.d-flex.justify-content-center
            img.pst_2(src='@/assets/curso/temas/tema2/15.png', alt='Imagen decorativa')
          h2 Resistencia a enfermedades
          p Las características más relevantes de los bovinos <em>Normandos</em> son su resistencia a enfermedades, pueden recorrer varias extensiones en busca de comida, las hembras tienen gran fertilidad con una cría por año y dependiendo de la alimentación suministrada y el manejo del animal, en la primera inseminación tienen un 70% de probabilidad de dejar las vacas preñadas y en la segunda inseminación tienen una efectividad de un 95%.

    
    .bg_img
      h3.bgr_8 Razas criollas colombianas
      p.mt-4 Se cree que las razas criollas de ganado bovino colombiano se formaron de especies introducidas por los conquistadores españoles, estas se adaptaron perfectamente a las condiciones del trópico colombiano y en la actualidad existen 7 razas de ganado criollo a las cuales se les dio el nombre por las distintas zonas de origen y las características más sobresalientes que estas tenían.

      .row.mb-5.justify-content-center
        .col-lg-8.col-xl-5.mb-3
          figure
            img(src='@/assets/curso/temas/tema2/16.png', alt='Imagen decorativa')
        .col-lg-12.col-xl-7.align-content-center
          p Dichas razas tienen variedad fenotípica, se producen bien en grandes extensiones con suelos pobres de forrajes, son resistentes a enfermedades (parásitos) y tienen buena capacidad para soportar el estrés ambiental. Las razas criollas colombianas son dóciles, esto es una ventaja porque facilita el manejo de los animales, además presentan buenos parámetros productivos como fertilidad, facilidad de las hembras en los partos y longevidad.
          .cajon.color-acento-contenido.p-4
            p.mb-0 Todas las ventajas mencionadas son destacables en las razas criollas frente a otras especies de ganado bovino introducidas en Colombia, por lo que deben ser valoradas como un recurso económico para cada región del país.
      
      p.mb-5 El alto valor genético de las razas criollas permite formar sistemas productivos de calidad junto con las razas comerciales. Además, estas especies pueden utilizarse como ganado de doble propósito. 

    div.mb-5(data-aos="fade-right")
      h3.bgr.text-white.position-relative Las siete razas criollas colombianas son: 
        img.pst(src='@/assets/curso/temas/tema2/8.svg', alt='')
    
    TabsC.color-primario.mb-5
      .py-3.py-md-4(titulo="Blanco Orejinegro (BON)")
        .row.p-4.justify-content-center
          .col-lg-8.col-xl-5.mb-3
            figure
              img(src='@/assets/curso/temas/tema2/17.png', alt='Texto que describa la imagen')
          .col-xl-7
            h4 Blanco Orejinegro (BON)
            p Esta raza tiene su hábitat en la cordillera central y occidental, se cría entre los 800 y 1800 m.s.n.m. En la actualidad el Blanco Orejinegro (BON) se produce en el Eje Cafetero y Antioquia, además tiene buena capacidad de producir carne y leche.
            P En condiciones hostiles de suelos pobres en forrajes, las hembras de esta especie tienen gran habilidad materna y alta fertilidad.
            P Este ganado es resistente a patógenos tanto bacterianos como a parásitos, es una raza portadora de información genética importante, pero en la actualidad se encuentra en vía de extinción.
      .py-3.py-md-4(titulo="Casanareña o Cacereña")
        .row.p-4.justify-content-center
          .col-lg-8.col-xl-5.mb-3
            figure
              img(src='@/assets/curso/temas/tema2/18.png', alt='Texto que describa la imagen')
          .col-xl-7
            h4 Casanareña o Cacereña
            p Esta raza se le puede llamar Casanareña o Cacereña, se desarrolló en los departamentos de Arauca y Casanare, donde las llanuras son indudables y hay épocas fuertes de sequía, además los pastos son de baja calidad nutritiva; todas estas condiciones agroecológicas y de manejo produjeron que el ganado criollo casanareño tenga carácter nervioso, sea de tamaño pequeño pero muy habilidoso para sobrevivir en las condiciones mencionadas.
            p Las características morfológicas de esta raza son: colores variados de piel que van desde negra hasta amarilla, cuernos grandes, extremidades delgadas y fuertes, línea dorsal recta y angosta.
            p Esta raza según la FAO está en vía de extinción, en el país cuenta con una población pura menor a 421 animales 
      .py-3.py-md-4(titulo="Raza Chino Santandereano")
        .row.p-4.justify-content-center
          .col-lg-8.col-xl-5.mb-3
            figure
              img(src='@/assets/curso/temas/tema2/19.png', alt='Texto que describa la imagen')
          .col-xl-7
            h4 Raza Chino Santandereano
            p La raza Chino Santandereano con cuernos deriva de las estirpes ibéricas gallegas que fueron traídas por los colonizadores españoles, pero no solo estas razas están involucradas en el cruce, también fue obtenido por la mezcla con ganado Casanareño, el Limonero Venezolano y el Costeño con cuernos de la Costa Atlántica.
            p Las principales características zootécnicas de esta raza es que tienen el pelaje colorado, la cabeza es oscura y quemada, y los ojos, orejas y cascos son de color negro.
            p Los animales de esta especie se caracterizan por ser vigorosos y de fácil adaptabilidad a terrenos montañosos, no presentan estrés al calor, son longevos y tolerantes a enfermedades, tienen alta fertilidad y producen tanto leche como carne.
      .py-3.py-md-4(titulo="Costeño con cuernos")
        .row.p-4.justify-content-center
          .col-lg-8.col-xl-5.mb-3
            figure
              img(src='@/assets/curso/temas/tema2/20.png', alt='Texto que describa la imagen')
          .col-xl-7
            h4 Costeño con cuernos
            p Esta raza se formó de los cruces de las especies traídas por los españoles, las cuales ingresaron al país por el Cabo de la Vela, Santa Marta y Cartagena.
            p La raza costeña con cuernos tolera temperaturas altas, variación en la humedad y se adapta muy bien a zonas cienagueras de Magdalena y Córdoba y también a las sabanas secas de Sucre y Bolívar.
            p Los campesinos costeños principalmente utilizaron esta raza para la producción de leche, pero desafortunadamente esta especie fue cruzada en los años 30 con Cebú, lo cual produjo un animal de características productivas y reproductivas de primera generación.            
            p Las características raciales de esta especie son:
        .row.p-4
          .col-md-6
            ul.lista-ul--color
              li.d-flex 
                i.fas.fa-chevron-circle-right.bgr_13 
                | Cabeza fina y mediana.
              li.d-flex 
                i.fas.fa-chevron-circle-right.bgr_13 
                | Color del pelo amarillo con tres tonalidades (bayo, colorado y hosco).
              li.d-flex 
                i.fas.fa-chevron-circle-right.bgr_13   
                | Cuernos delgados.
              li.d-flex 
                i.fas.fa-chevron-circle-right.bgr_13 
                | Orejas pequeñas.
              li.d-flex 
                i.fas.fa-chevron-circle-right.bgr_13 
                | Dorso recto en machos.
          .col-md-6
            ul.lista-ul--color
              li.d-flex 
                i.fas.fa-chevron-circle-right.bgr_13 
                | Dorso débil en hembras.
              li.d-flex 
                i.fas.fa-chevron-circle-right.bgr_13 
                | Pezuñas sólidas y negras.
              li.d-flex 
                i.fas.fa-chevron-circle-right.bgr_13   
                | Toros vigorosos y activos sexualmente.
              li.d-flex 
                i.fas.fa-chevron-circle-right.bgr_13 
                | Los toros tienen giba.
              li.d-flex 
                i.fas.fa-chevron-circle-right.bgr_13 
                | Prepucio colgante.
      .py-3.py-md-4(titulo="Romosinuano")
        .row.p-4.justify-content-center
          .col-lg-8.col-xl-5.mb-3
            figure
              img(src='@/assets/curso/temas/tema2/21.png', alt='Texto que describa la imagen')
          .col-xl-7
            h4 Romosinuano
            p Sobre esta raza hay varias versiones relacionadas con su origen, unos creen que se debe al cruce entre <em>Red Poll</em> y el Costeño con cuernos y otros dicen que surgió del cruce entre <em>Aberdeen Angus</em> y Criollo, pero la realidad es que esta especie proviene de la mutación del Costeño con cuernos.
            p Su nombre Romosinuano es dado porque dicha raza carece de cuernos, este ganado proviene del Valle del Sinú y por haberse criado en praderas fértiles y ser elegido por productores de seba de la misma región tienen un elevado desarrollo, más peso y alto rendimiento de la carne.
            p Las características morfológicas de esta raza son:
        .row.p-4
          .col-md-6
            ul.lista-ul--color
              li.d-flex 
                i.fas.fa-chevron-circle-right.bgr_13.bgr_13
                | Piel pigmentada de negro, gris o amarillo.
              li.d-flex 
                i.fas.fa-chevron-circle-right.bgr_13 
                | Pelo corto y ralo, el color varía entre bayo de tono naranja y rojo o colorado.
              li.d-flex 
                i.fas.fa-chevron-circle-right.bgr_13   
                | Mucosas negras, grises o naranjas.
              li.d-flex 
                i.fas.fa-chevron-circle-right.bgr_13 
                | Cabeza fina y mediana.
              li.d-flex 
                i.fas.fa-chevron-circle-right.bgr_13 
                | Cara corta.
          .col-md-6
            ul.lista-ul--color
              li.d-flex 
                i.fas.fa-chevron-circle-right.bgr_13 
                | No tiene cuernos.
              li.d-flex 
                i.fas.fa-chevron-circle-right.bgr_13 
                | Tupé o testuz es roma.
              li.d-flex 
                i.fas.fa-chevron-circle-right.bgr_13   
                | Orejas pequeñas.
              li.d-flex 
                i.fas.fa-chevron-circle-right.bgr_13 
                | Cuerpo cilíndrico.
              li.d-flex 
                i.fas.fa-chevron-circle-right.bgr_13 
                | Los toros son vigorosos y activos sexualmente.
      .py-3.py-md-4(titulo="Hartón del Valle")
        .row.p-4.justify-content-center
          .col-lg-8.col-xl-5.mb-3
            figure
              img(src='@/assets/curso/temas/tema2/22.png', alt='Texto que describa la imagen')
          .col-xl-7
            h4 Hartón del Valle
            p Esta raza surgió de la combinación de los primeros bovinos ibéricos traídos por los españoles, los cuales se cruzaron con las razas existentes.
            p Las características zootécnicas de esta raza están bien marcadas por el color de la piel, la cual es negra, carmelita u oscura, de pelaje corto y fino que puede ser rojizo (cereza) o amarillo claro (bayo), tiene una cabeza mediana, los cuernos son moderados, las orejas pueden ser pequeñas o medianas.
            p Los machos Hartón son vigorosos y activos sexualmente; además esta raza generalmente es buena productora de leche y de carne.

    .bg_img
      h3.bgr_8 <em>Sanmartinero</em>
      .row.mb-5.mt-5.justify-content-center
        .col-lg-12.col-xl-7.mb-3 
          p El origen de esta raza se le atribuye al ganado ibérico traído por los españoles en la conquista, dicha especie se formó en el piedemonte llanero gracias al esfuerzo de los Jesuitas.
          p El Sanmartinero cuenta con la capacidad para vivir en grandes extensiones con forrajes pobres, resisten altas temperaturas por lo que cuentan con alta rusticidad y resistencia, tienen habilidad para utilizar forrajes fibrosos, soportan a ciertos parásitos y son buenos productores de carne, leche y pieles.
          .cajon.color-acento-contenido.p-4
            p.mb-0 Esta raza antes se utilizaba como doble propósito en la altillanura, pero en la actualidad solo existen 3.166 cabezas de ganado distribuidos en centros de investigación ubicados en Villavicencio, Puerto Gaitán y en bancos de germoplasmas del ICA y CORPOICA.
        .col-lg-8.col-xl-5
          figure
            img(src='@/assets/curso/temas/tema2/23.png', alt='Texto que describa la imagen')
      
      p.text-center.text-bold.mb-5 Las características morfológicas y fisiológicas de esta especie son:
    
      .row.mb-5
        .col-sm-4.col-xl-2.mb-4.mb-xl-0
          //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta--boton.bgr_5.p-4.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure
                  img(src='@/assets/curso/temas/tema2/24.svg', alt='Texto que describa la imagen')

            h3.text-center Cabeza
            p.text-small.text-center Grande y fuerte. Es un bovino robusto y resistente, ideal para la producción de carne en condiciones adversas.

        .col-sm-4.col-xl-2.mb-4.mb-xl-0
          //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta--boton.bgr_6.p-4.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure
                  img(src='@/assets/curso/temas/tema2/25.svg', alt='Texto que describa la imagen')

            h3.text-center Orejas
            p.text-small.text-center Pequeñas y redondeadas. Además, se destaca por su resistencia y adaptación a diferentes climas y condiciones ambientales locales.
        .col-sm-4.col-xl-2.mb-4.mb-xl-0
          //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta--boton.bgr_5.p-4.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure
                  img(src='@/assets/curso/temas/tema2/26.svg', alt='Texto que describa la imagen')

            h3.text-center Pelo
            p.text-small.text-center El pelaje del Sanmartinero es de color rojo cereza intenso y corto, ideal para adaptarse a climas cálidos. También tiene buena cantidad de pelo.

        .col-sm-4.col-xl-2.mb-4.mb-xl-0
          //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta--boton.bgr_6.p-4.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure
                  img(src='@/assets/curso/temas/tema2/27.svg', alt='Texto que describa la imagen')

            h3.text-center Cuernos
            p.text-small.text-center La raza bovina colombiana se destaca por sus cuernos robustos y su fácil adaptación climática. Además, son de color claro en la raíz y oscuro en las puntas. 
        .col-sm-4.col-xl-2.mb-4.mb-xl-0
          //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta--boton.bgr_5.p-4.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure
                  img(src='@/assets/curso/temas/tema2/28.svg', alt='Texto que describa la imagen')

            h3.text-center Piel
            p.text-small.text-center La piel gruesa del Sanmartinero se destaca por su resistencia y adaptabilidad, ideal para condiciones climáticas variadas y exigentes.

        .col-sm-4.col-xl-2.mb-4.mb-xl-0
          //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta--boton.bgr_6.p-4.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure
                  img(src='@/assets/curso/temas/tema2/29.svg', alt='Texto que describa la imagen')

            h3.text-center Machos
            p.text-small.text-center Robustos y con testículos firmes.

    div.mb-5(data-aos="fade-right")
      h3.bgr.text-white.position-relative Las razas sintéticas colombianas son:
        img.pst(src='@/assets/curso/temas/tema2/8.svg', alt='')
    
    
    
    SlyderA(tipo="b").bgr_12
      .row.p-4.justify-content-center
        .col-md-8.col-lg-5.mb-3
          figure
            img(src='@/assets/curso/temas/tema2/31.png', alt='Texto que describa la imagen')
        .col-md-12.col-lg-7.mb-4.mb-md-0.align-content-center
          h4 Lucerna
          p Es una raza sintética que se utiliza en la ganadería doble propósito porque produce carne y leche. Fue desarrollada en el Valle del río Cauca en 1937 por los cruces de las razas como: Hartón, <em>Holstein</em> y <em>Shorthorn</em>.
          p.mb-0 Esta raza tiene gran fertilidad, buena capacidad de reproducirse y de producción de carne y de leche; sus características fisiológicas son parecidas al Hartón del Valle.
      .row.p-4.justify-content-center
        .col-md-8.col-lg-5.mb-3
          figure
            img(src='@/assets/curso/temas/tema2/32.png', alt='Texto que describa la imagen')
        .col-md-12.col-lg-7.mb-4.mb-md-0.align-content-center
          h4 Velásquez
          p Esta raza sintética fue creada por el doctor José Velásquez en el municipio de La Dorada (Caldas), la cual surgió del cruce entre la raza <em>Romosinuano</em> y la <em>Red Poll.</em> 
          p La raza Velásquez es esencial en la ganadería actual gracias a su adaptación a las condiciones climáticas del trópico bajo. Su eficiencia en la conversión alimenticia y su tolerancia a forrajes toscos la convierten en un factor clave para una producción sostenible en Colombia.
          p.mb-0 Estas son algunas de sus características fenotípicas:
      .row.p-4.justify-content-center
        .col-md-8.col-lg-5.mb-3
          figure
            img(src='@/assets/curso/temas/tema2/33.png', alt='Texto que describa la imagen')
        .col-md-12.col-lg-7.mb-4.mb-md-0.align-content-center
          ul.lista-ul--color
            li.d-flex 
              i.fas.fa-chevron-circle-right.bgr_13 
              | Genéticamente topo.
            li.d-flex 
              i.fas.fa-chevron-circle-right.bgr_13 
              | Color que va del amarillo al rojo oscuro.
            li.d-flex 
              i.fas.fa-chevron-circle-right.bgr_13   
              | Pelo corto, brillante y liso.
            li.d-flex 
              i.fas.fa-chevron-circle-right.bgr_13 
              | Piel suelta muy móvil, provista de glándulas   sudoríparas y sebáceas.
            li.d-flex 
              i.fas.fa-chevron-circle-right.bgr_13 
              | Cabeza de perfil recto.
            li.d-flex 
              i.fas.fa-chevron-circle-right.bgr_13 
              | Cuello corto.
            li.d-flex 
              i.fas.fa-chevron-circle-right.bgr_13 
              | Papada de medio tamaño.
            li.d-flex 
              i.fas.fa-chevron-circle-right.bgr_13 
              | Cruz ancha o franja blanca que cruza el pecho del animal de lado a lado.
            li.d-flex 
              i.fas.fa-chevron-circle-right.bgr_13 
              | Pecho ancho y musculado.
      .row.p-4.justify-content-center
        .col-md-8.col-lg-5.mb-3
          figure
            img(src='@/assets/curso/temas/tema2/32.png', alt='Texto que describa la imagen')
        .col-md-12.col-lg-7.mb-4.mb-md-0.align-content-center
          ul.lista-ul--color
            li.d-flex 
              i.fas.fa-chevron-circle-right.bgr_13 
              | Cuerpo largo, ancho y profundo.
            li.d-flex 
              i.fas.fa-chevron-circle-right.bgr_13 
              | Dorso recto y lomos anchos.
            li.d-flex 
              i.fas.fa-chevron-circle-right.bgr_13 
              | Anca ancha, larga y ligeramente inclinada.
            li.d-flex 
              i.fas.fa-chevron-circle-right.bgr_13   
              | Costillas largas y bien arqueadas.
            li.d-flex 
              i.fas.fa-chevron-circle-right.bgr_13 
              | Tren superior ancho, nalgas largas, musculadas y redondeadas.
            li.d-flex 
              i.fas.fa-chevron-circle-right.bgr_13 
              | Prepucio corto.
            li.d-flex 
              i.fas.fa-chevron-circle-right.bgr_13 
              | Miembro corto, finos bien aplomados y de hueso delgado.
            li.d-flex 
              i.fas.fa-chevron-circle-right.bgr_13 
              | Tamaño mediano. (Velásquez, 1999)
           
          


      
        

        
        

</template>

<script>
export default {
  name: 'Tema2',
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
