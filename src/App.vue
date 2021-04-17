<template lang="pug">
#app.app
  Header
  .contenedor-principal
    section.seccion-principal
      Inicio
      footer

</template>

<script>
import { global } from './config/global'
import Header from './components/plantilla/Header'
import Inicio from './views/Inicio'
export default {
  name: 'App',
  components: {
    Header,
    Inicio,
  },
  data: () => ({
    menuOpen: false,
    globalData: global,
  }),
  created() {
    document.title = this.globalData.componenteFormativo
  },
}
</script>

<style lang="sass">
.app

.contenedor-principal
  display: flex
  align-items: flex-start

.seccion-principal
  width: 100%

  &--barra-avance-open
    .curso-main-container
      padding-bottom: 80px !important
</style>
