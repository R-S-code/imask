<template>
  <div>
    <p>{{theme}}</p>
    <nuxt-link :to="link">
      <img src="~/assets/img/list_ico.svg" alt="リストアイコン">
    </nuxt-link>
  </div>
</template>

<script lang="ts">
  export default {
    props: {
      theme: { 
        type: String,
        required: true
      },
      link: { 
        type: String,
        required: true
      }
    },
    setup(props) {
      let theme:string = props.theme
      let link:string = props.link 
      return {
        theme,
        link
      }
    }
  }
</script>

<style lang="scss" scoped>
  div {
    background-image: url("~/assets/img/theme_bg1.png");
    background-position: center;
    background-size: cover;
    border-radius: 20px;
    height: 120px;
    position: relative;
    width: 100%;
    p {
      font-size: 18px;
      position: absolute;
      font-weight: 500;
      right: 50%;
      top: 50%;
      transform: translateX(50%) translateY(-50%) ;
    }
    img {
      height: 8px;
      position: absolute;
      right: 20px;
      top: 50%;
      transform: translateY(-50%);
      width: 32px;
      &:hover {
        opacity: 0.8;
      }
    }
  }
</style>
