export default {
  global: {
    componenteFormativo: 'Producción ganadera de doble propósito',
    descripcionCurso:
      'La ganadería de doble propósito combina la producción rentable de carne y leche mediante cruces estratégicos entre razas especializadas. Este sistema es clave para el sustento de pequeños y medianos productores en Colombia. Es esencial mejorar los hatos nacionales para aumentar la producción y fortalecer la competitividad del sector ganadero.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'La ganadería de bovinos',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Razas de ganado bovino',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Requerimientos nutricionales',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Conservación de forrajes',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CF1_72310022_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '1. La ganadería de bovinos',
      referencia:
        'Componentes BPG. (2022). Ecosistema de Recursos Educativos Digitales. SENA [Video]. YouTube. ',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=QCcIP7JTo-0&list=PLkc5n6npRWkhJbpQMoyMbYK7eg-eTKWo3 ',
    },
    {
      tema: '2.Razas de ganado bovino',
      referencia: 'Contexto Ganaderos (2017)',
      tipo: 'Página <em>web</em>',
      link:
        'https://www.contextoganadero.com/reportaje/asi-se-trabaja-para-promover-la-conservacion-de-razas-criollas ',
    },
  ],
  glosario: [
    {
      termino: 'Ensilaje',
      significado:
        'método de conservación de forraje mediante fermentación en un ambiente anaeróbico, manteniendo los nutrientes durante largos periodos.',
    },
    {
      termino: 'Conservación de forrajes',
      significado:
        'técnicas para almacenar pastos y forrajes, como ensilaje y henificación, para su uso en épocas de escasez.',
    },
    {
      termino: 'Ganadería de bovinos',
      significado:
        'actividad dedicada a la cría y manejo de vacas para la producción de carne, leche o ambos.',
    },
    {
      termino: 'Minerales esenciales',
      significado:
        'elementos como el calcio, fósforo y magnesio, fundamentales para el desarrollo óseo y el metabolismo de los bovinos.',
    },
    {
      termino: 'Razas criollas colombianas',
      significado:
        'bovinos originarios de Colombia, adaptados a las condiciones locales, como la raza Romosinuano.',
    },
    {
      termino: 'Razas sintéticas colombianas',
      significado:
        'razas creadas mediante la mezcla de criollas y extranjeras, como la raza BON (Blanco Orejinegro).',
    },
    {
      termino: 'Rumen',
      significado:
        'primer compartimiento del estómago de los rumiantes, donde se fermenta el alimento con la ayuda de microorganismos.',
    },
    {
      termino: 'Suplementación',
      significado:
        'proceso de agregar nutrientes adicionales a la dieta del ganado, especialmente durante épocas de escasez.',
    },
  ],
  referencias: [
    {
      referencia:
        'FEDEGAN. (2010a). Informe especial 18 Bursagán: nuestra firma en el mercado bursátil. Carta FEDEGAN, 113, 12-103.',
      link: '',
    },
    {
      referencia:
        'FEDEGAN. (2010b). Informe especial 12 censos ganaderos 2009: los indicadores de la leche, la ceba y el doble propósito. Carta FEDEGAN, 116, 12- 104.',
      link: '',
    },
    {
      referencia:
        'FEDEGAN. (2011). Modelos competitivos sostenibles en producción bovina - Las mejores del doble propósito. Carta FEDEGAN, 125, 14-47.',
      link: '',
    },
    {
      referencia:
        'FEDEGAN. (2012). Conozca el biotipo funcional de la raza <em>Brahman</em>.',
      link:
        'https://www.fedegan.org.co/noticias/conozca-el-biotipo-funcional-de-la-raza-brahman ',
    },
    {
      referencia:
        'Franco, L., Calero, D. y Ávila, P. (2007). Alternativas para la conservación de forrajes. Palmira, Colombia: David Calderón.',
      link: '',
    },
    {
      referencia:
        'Martínez, F. (2008). Recomendaciones sobre sistemas intensivos de producción de carne: estabulación, semiestabulación y suplementación estratégica en pastoreo. Santiago de Cali, Colombia: Universidad del Valle.',
      link: '',
    },
    {
      referencia:
        '<em>Oude, S., Driehuis, F., Gottschal, J. y Spoelstra,</em> S. (s.f.). Estudio 2.0 - Los procesos de fermentación del ensilaje y su manipulación.',
      link: 'http://www.fao.org/docrep/005/x8486s/x8486s04.htm ',
    },
    {
      referencia:
        'Pinzón, G. (2007). Diseño de un sistema para mejorar el rendimiento de una ganadería intensiva doble propósito en la finca Sarvipai en el municipio de Yacopí, Cundinamarca. Trabajo de grado de especialización no publicado, Universidad de la Salle, Cundinamarca, Colombia.',
      link: '',
    },
    {
      referencia:
        '<em>Rinehart</em>, L. (2008). Nutrición para rumiante en pastoreo.',
      link: 'https://attra.ncat.org/wp-content/uploads/2019/05/rumiantes.pdf',
    },
    {
      referencia:
        '<em>Ritchie, D. y Cols.</em> (2013). Ganadería de doble propósito: propuesta para pequeños productores colombianos. Lima, Perú: Esan Ediciones.',
      link: '',
    },
    {
      referencia: 'Serrano, J. (s.f.). Bloques multinutricionales.',
      link:
        'https://cgspace.cgiar.org/server/api/core/bitstreams/2d97167c-6a33-422c-a84d-ccee31c3887e/content ',
    },
    {
      referencia:
        'Velásquez. J. (1999). Nueva raza tropical colombiana de ganado vacuno. Bogotá, Colombia: Instituto Colombiano Agropecuario.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre',
          cargo: 'Responsable de la línea de producción',
          centro:
            'Centro para el Desarrollo Agroecológico y Agroindustrial - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Ángela Viviana Páez Perilla',
          cargo: 'Experta temática',
          centro: 'Centro Agroindustrial Regional Quindío.',
        },
        {
          nombre: 'Paola Andrea Bobadilla Gutiérrez',
          cargo: 'Guionista - Línea de producción	',
          centro: 'Centro Agroindustrial Regional Quindío.',
        },
        {
          nombre: 'Gilberto Herrera Delgans',
          cargo: 'Evaluador Instruccional',
          centro:
            'Centro para el Desarrollo Agroecológico y Agroindustrial - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Eulises Orduz Amezquita',
          cargo: 'Diseñador <em>web</em>',
          centro:
            'Centro para el Desarrollo Agroecológico y Agroindustrial - Regional Atlántico',
        },
        {
          nombre: 'Liborio De Jesús Castañeda Valencia ',
          cargo: 'Desarrollador <em>Fullstack junior</em>',
          centro:
            'Centro para el Desarrollo Agroecológico y Agroindustrial - Regional Atlántico',
        },
        {
          nombre: 'Alexander Rafael Acosta Bedoya',
          cargo: 'Animador y Producción audiovisual',
          centro:
            'Centro para el Desarrollo Agroecológico y Agroindustrial - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluador de contenidos inclusivos y accesibles ',
          centro:
            'Centro para el Desarrollo Agroecológico y Agroindustrial - Regional Atlántico',
        },
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador de contenidos inclusivos y accesibles ',
          centro:
            'Centro para el Desarrollo Agroecológico y Agroindustrial - Regional Atlántico',
        },
        {
          nombre: 'Juan Carlos Cardona Acosta',
          cargo: 'Validador y vinculador de recursos digitales',
          centro:
            'Centro para el Desarrollo Agroecológico y Agroindustrial - Regional Atlántico',
        },
        {
          nombre: 'Jairo Luis Valencia Ebratt',
          cargo: 'Validador y vinculador de recursos digitales',
          centro:
            'Centro para el Desarrollo Agroecológico y Agroindustrial - Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
