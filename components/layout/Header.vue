<template>
  <header>
    <nuxt-link :to="back_link">
      <BackIco />
    </nuxt-link>
    <h1>{{page_name}}</h1>
  </header>
</template>

<script lang="ts">
  export default {
    props: {
      page_name: { 
        type: String,
        required: true
      },
      back_link: { 
        type: String,
        required: true
      }
    },
    setup(props) {
      let page_name:string = props.page_name
      let back_link:string = props.back_link 
      return {
        page_name,
        back_link
      }
    }
  }
</script>

<style lang="scss" scoped>
  header {
    padding: 65px 20px 25px;
    position: relative;
    h1 {
      font-size: 18px;
      position: absolute;
      right: 50%;
      top: 55%;
      transform: translateX(50%);
    }
  }
</style>