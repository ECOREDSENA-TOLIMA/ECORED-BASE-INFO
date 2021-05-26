<template lang="pug">
#app.app
  header.header
    .container
      .row.align-items-center.justify-content-between
        .col.col-sm-auto.d-flex.align-items-center.justify-content-between.justify-content-sm-star
          img.header__logo.me-sm-5(src="@/assets/template/logo-sena-naranja.svg")
  .contenedor-principal
    section.seccion-principal
      Inicio
</template>

<script>
import Inicio from './views/Inicio'
export default {
  name: 'App',
  components: {
    Inicio,
  },
}
</script>

<style lang="sass">
.header
  position: sticky
  top: 0
  padding-top: 10px
  padding-bottom: 10px
  background-color: $white
  z-index: 10010
  line-height: 1.1em
  &__logo
    width: 50px
</style>
