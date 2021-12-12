<template>
  <div>
    <nuxt-link to="/">
      <img :src="home_ico_src" alt="ホームアイコン">
      <p>ホーム</p>
    </nuxt-link>
  </div>
</template>

<script lang="ts">
  interface HomeOnoff {
    home_onoff: string
  }

  export default {
    props: {
      home_onoff: { 
        type: String,
        required: true
      }
    },
    setup(props: HomeOnoff): { home_ico_src: string } {
      let home_onoff:string = props.home_onoff
      let home_ico_src:string = `/assets/img/home_ico_${home_onoff}.svg`
      return {
        home_ico_src
      }
    }
  }
</script>

<style lang="scss" scoped>
  div {
    text-align: center;
    img {
      height: 35px;
      width: 38px;
      &:hover {
        opacity: 0.8;
      }
    }
    p {
      margin-top: 5px;
    }
  }
</style>