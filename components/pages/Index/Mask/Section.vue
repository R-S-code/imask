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
    cursor: pointer;
    height: 130px;
    margin: 25px 5px 0;
    padding: 10px 15px 0;
    position: relative;
    width: 180px;
    &:hover {
      opacity: 0.8;
    }
    div:first-child {
      display: flex;
      justify-content: space-between;
      p:last-child {
        color: #57aeff;
      }
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
