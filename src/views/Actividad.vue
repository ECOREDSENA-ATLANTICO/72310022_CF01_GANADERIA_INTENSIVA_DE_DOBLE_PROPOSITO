<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    #Actividad                
      <Actividad :cuestionario="cuestionario" />

</template>

<script>
import Actividad from '@/components/actividad/Actividad'
export default {
  name: 'ActividadDidactica',
  components: { Actividad },
  data: () => ({
    cuestionario: {
      tema: 'Nombre del componente formativo',
      titulo: 'Cuestionario',
      introduccion:
        'Lea cada enunciado referente a los temas desarrollados en el componente formativo y elija entre verdadero y falso según corresponda.',
      barajarPreguntas: false,
      preguntas: [
        {
          id: 1,
          texto: '¿Qué es la ganadería de doble propósito?',
          imagen: require('@/assets/actividad/1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Producción exclusiva de carne.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Producción exclusiva de leche.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Producción simultánea de carne y leche.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Producción de lana y cuero.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué característica es fundamental en las razas de doble propósito?',
          imagen: require('@/assets/actividad/2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Producción exclusivamente lechera.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Adaptabilidad a distintos climas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Producción de lana de alta calidad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Crecimiento rápido en condiciones de pastoreo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué tipo de alimentación es ideal para la ganadería de doble propósito?',
          imagen: require('@/assets/actividad/3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Exclusivamente concentrados.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Alimentos naturales sin balancear.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Alimentación equilibrada con forrajes y suplementos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Pasto seco.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Cuál de las siguientes es una raza de ganado bovino especializada en la producción de carne?',
          imagen: require('@/assets/actividad/4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Holstein',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Brahman',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Jersey',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Angus',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué raza de ganado bovino es conocida por su alta producción de leche?',
          imagen: require('@/assets/actividad/5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Angus',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Hereford',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Holstein',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Brahman',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué práctica es importante en la conservación de forrajes para el ganado bovino?',
          imagen: require('@/assets/actividad/6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Deshidratación',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ensilaje',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Refrigeración',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Inyección de vitaminas',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: '¿Cuál de las siguientes opciones describe el ensilaje?',
          imagen: require('@/assets/actividad/1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Un método para conservar forraje utilizando la fermentación.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Un proceso de deshidratación de las semillas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Un tipo de alimentación líquida para bovinos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La producción de forrajes sin tierra.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Qué raza bovina es más comúnmente usada en climas tropicales debido a su resistencia?',
          imagen: require('@/assets/actividad/2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Angus',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Holstein',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Brahman',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Jersey',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto: '¿Qué es el forraje?',
          imagen: require('@/assets/actividad/3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Suplemento proteico industrial.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Planta cultivada para la alimentación de animales.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Un tipo de alimento balanceado para bovinos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Residuo de cultivos agrícolas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto: '¿Qué función tiene la conservación de forrajes?',
          imagen: require('@/assets/actividad/4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reducir el costo de producción.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Mantener los nutrientes durante todo el año.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Evitar la compra de suplementos alimenticios.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Solo para mejorar el sabor del alimento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado:
        '¡Excelente! Lo felicito, ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
  computed: {},
  methods: {},
}
</script>
