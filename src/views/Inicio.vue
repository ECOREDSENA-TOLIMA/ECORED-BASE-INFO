<template lang="pug">
section
  BannerPrincipal.mb-5


  .container.tarjeta.tarjeta__template--azul-claro.px-3.py-4.px-sm-5.pb-sm-5.mb-5
    .titulo__template--a.mb-4
      span.h6 1. Presentación

    p En Colombia, los ataques mediante agentes químicos son un delito y una de las formas en las que se manifiesta en el país las violencias de género. A pesar de los esfuerzos estatales, esta violencia sigue presentándose y con frecuencia, las víctimas son atendidas de forma inadecuada en las diferentes instituciones responsables del restablecimiento de sus derechos (sectores salud, justicia y protección)
      br
      br
      | Por tal motivo, el presente curso hace parte de las acciones que el Ministerio de Salud y Protección Social está realizando para garantizar que todas las víctimas de las diferentes manifestaciones de las violencias de género reciban una atención integral, oportuna y de calidad que permita su recuperación. Su principal objetivo es brindar a los equipos de salud información clara sobre las particularidades de las agresiones por agentes químicos, así como las acciones que deben implementarse en diferentes momentos para reducir el daño y tratar las afectaciones a la salud.

  .container.tarjeta.tarjeta__template--azul-claro.px-3.py-4.px-sm-5.pb-sm-5.mb-5
    .titulo__template--a.mb-4
      span.h6 2. Justificación<br>del programa

    p Con el propósito de garantizar que las víctimas de agresiones por agentes químicos reciban en cualquier institución de salud una atención oportuna, pertinente y con racionalidad científica, de manera que se logre reducir el daño físico y mental, así como, que se desarrollen las acciones que les garantice el acceso a la justicia, a la protección y al restablecimiento de los derechos afectados, se dispone del Protocolo de Atención Integral en Urgencias a Víctimas de Ataque con Agentes Químicos, el cual debe ser observado y aplicado por los prestadores de servicios de salud y demás agentes que tengan contacto primario con las víctimas. El Gobierno Nacional se encargará de garantizar la capacitación del personal estatal que pueda tener contacto primario con una víctima de ataque con sustancias o agentes químicos corrosivos, a fin de darle la atención correspondiente.

  .container.tarjeta.tarjeta__template--azul-claro.px-3.py-4.px-sm-5.pb-sm-5.mb-5
    .titulo__template--a.mb-4
      span.h6 3. Población<br>objetivo

    p El curso está dirigido a profesionales, tecnólogos y técnicos en salud que requieren conocer elementos conceptuales y normativos para implementar procesos y procedimientos operativos básicos que garanticen una atención en salud integral, oportuna y de calidad a las víctimas de ataque con agentes químicos.

  .container.tarjeta.tarjeta__template--azul-claro.px-3.py-4.px-sm-5.pb-sm-5.mb-5
    .titulo__template--a.mb-4
      span.h6 3. Estrategia<br>metodológica

    p Centrada en la construcción de la autonomía para garantizar la calidad de la formación en el marco de la formación por competencias, el aprendizaje por proyectos y el uso de técnicas didácticas activas que estimulan el pensamiento para la resolución de problemas simulados y reales; soportadas en la utilización de las tecnologías de la información y la comunicación, integradas en ambientes virtuales de aprendizaje, que en todo caso recrean el contexto productivo y vinculan al aprendiz con la realidad cotidiana y el desarrollo de las competencias.
      br
      br
      | Las estrategias didácticas integradoras están basadas en situaciones reales que le permitirán poner en marcha los contenidos conceptuales y procedimentales, aplicando sus conocimientos y habilidades para resolver un problema, frente a la atención integral de urgencias a víctimas de ataque con agentes químicos.
      br
      br
      | Igualmente, debe estimular de manera permanente la autocrítica y la reflexión del aprendiz sobre el quehacer y los resultados de aprendizaje que logra a través de la vinculación activa de las cuatro fuentes de información para la construcción de conocimiento:


  //- Créditos
  .container.tarjeta.tarjeta__template--azul-claro.px-3.py-4.px-sm-5.mb-5
    .titulo__template--a.mb-4
      span.h6 Créditos

    CreditosComp

  Footer
  

</template>
<script>
import { menuPrincipal } from '../config/global'
import BannerPrincipal from '../components/plantilla/BannerPrincipal'
import CreditosComp from '../components/plantilla/CreditosComp'
import Footer from '../components/plantilla/Footer'
export default {
  name: 'Inicio',
  components: {
    BannerPrincipal,
    CreditosComp,
    Footer,
  },
  data: () => ({
    menuPrincipalData: menuPrincipal,
  }),
  computed: {
    desarrolloContenidosData() {
      const allMenuData = [
        ...this.menuPrincipalData.menu,
        ...this.menuPrincipalData.subMenu,
      ]
      return allMenuData.filter(item => item.desarrolloContenidos)
    },
  },
}
</script>

<style lang="sass" scoped>
.resultados-aprendizaje
  &__item
    margin-bottom: 20px
    &:last-child
      margin-bottom: 0

.desarrollo-contenidos
  &__item
    display: flex
    align-items: center
    justify-content: space-between
    margin-bottom: 25px
    padding: 5px
    border-radius: $base-border-radius

    &__texto
      display: flex
      align-items: center

    &__icono
      display: block
      background-color: $color-sistema-g
      font-size: 20px
      font-weight: $base-black-font-weight
      text-align: center
      padding: 10px
      line-height: 1em
      width: 40px
      margin-right: 15px

    &:last-child
      margin-bottom: 0

    &:hover
      background-color: $color-sistema-g
      font-weight: $base-black-font-weight
      color: $color-sistema-a
</style>
