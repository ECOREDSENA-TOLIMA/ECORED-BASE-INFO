<template lang="pug">
.banner-principal
  .container.tarjeta.p-4.p-sm-5(
    :style="{'background-image': `url(${globalData.fondoBannerPrincipal})`}"
  )
    .row.justify-content-around.align-items-center
      .col-lg-7.col-xxl-6.banner-principal__info
        .banner-principal__programa
          .h4.mb-0 {{globalData.nombrePrograma}}
        .h2 Información del programa

        .banner-principal__datos
          ul
            li.mb-3.banner-principal__datos__item
              p.h6.mb-0.me-3.banner-principal__datos__item__titulo Nombre del programa: 
              p.banner-principal__datos__item__texto {{globalData.nombrePrograma}}
            li.mb-3.banner-principal__datos__item
              p.h6.mb-0.me-3.banner-principal__datos__item__titulo Código: 
              p.banner-principal__datos__item__texto {{globalData.codigo}}
            li.mb-3.banner-principal__datos__item
              p.h6.mb-0.me-3.banner-principal__datos__item__titulo Total Horas: 
              p.banner-principal__datos__item__texto {{globalData.horas}} hora{{globalData.horas > 1 ? 's':''}}
            li.mb-3.banner-principal__datos__item
              p.h6.mb-0.me-3.banner-principal__datos__item__titulo Duración en semanas: 
              p.banner-principal__datos__item__texto {{globalData.semanas}} semana{{globalData.semanas > 1 ? 's':''}}
            li.mb-3.banner-principal__datos__item
              p.h6.mb-0.me-3.banner-principal__datos__item__titulo Modalidad: 
              p.banner-principal__datos__item__texto {{globalData.modalidad}}
            li.mb-3.banner-principal__datos__item
              p.h6.mb-0.me-3.banner-principal__datos__item__titulo Requisito de ingreso: 
              .banner-principal__datos__item__texto
                ul.lista-ul
                  li(v-for="(item,index) in globalData.requisitosIngrso" :key="'req-'+index")
                    i.lista-ul__vineta
                    p {{item}}

      .d-none.d-lg-block.col-lg-5
        img(v-if="globalData.imagenBannerPrincipal" :src="globalData.imagenBannerPrincipal")
        .video(v-else-if="globalData.videoBannerPrincipal" v-html="globalData.videoBannerPrincipal")

</template>

<script>
import { global } from '../../config/global'
import mixins from '../../mixins/plantillaMixins'
export default {
  name: 'BannerPrincipal',
  mixins: [mixins],
  data: () => ({
    globalData: global,
  }),
}
</script>

<style lang="sass" scoped>
.banner-principal
  *
    color: $colorTextoBannerPrincipal
  p, h1
    color: $white

  .tarjeta
    background-color: $color-curso-a
    background-size: cover
    background-position: center

  &__info
    display: flex
    flex-direction: column
    justify-content: center

  &__programa
    display: flex
    align-items: center
    margin-bottom: 20px
    & > div
      text-transform: uppercase

  &__datos
    *
      line-height: 1.2em

    &__item
      display: flex
      // align-items: center
      &__titulo
        flex: 1
        text-align: right
      &__texto
        margin-top: 0.15em
        flex: 3
</style>
