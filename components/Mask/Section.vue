<template>
  <div class="wrapper">
    <div> 
      <p>iMask {{mask_color.charAt(0).toUpperCase()}}</p>
      <p>OFF</p>
    </div>
    <div>
      <img :src="mask_img_src" alt="マスク">
    </div>
  </div>
</template>

<script lang="ts">
  export default {
    props: {
      color: { 
        type: String,
        required: true
      }
    },
    setup(props) {
      let mask_color:string = props.color
      let mask_img_src:string = `/assets/img/mask_${mask_color}.png`
      return {
        mask_img_src,
        mask_color
      }
    }
  }
</script>

<style lang="scss" scoped>
  .wrapper {
    background-color: white;
    border-radius: 20px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.30);
    height: 130px;
    margin-top: 25px;
    padding: 10px 15px 0;
    position: relative;
    width: 180px;
    div:first-child {
      display: flex;
      justify-content: space-between;
    }
    div:last-child {
      margin:0 auto;
      width:fit-content;
       img {
        height: 100px;
        width: 100px;
      }
    }
  }
</style>
