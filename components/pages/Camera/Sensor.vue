<template>
  <div>
    <p>センサー感度: {{String(sensorRef)}}%</p>
    <input type="range" min="1" max="100" step="1" v-model="sensorRef">
  </div>
</template>

<script lang="ts">
  import { ref } from 'vue'
  export default {
    setup() { 
      const sensorRef = ref<number>(0)
     
      return {
        sensorRef
      }
    }
  }
</script>

<style lang="scss" scoped>
  div {
    background-color: #333333;
    height: 160px;
    padding: 40px 35px;
    width: 100%;
    p {
      color: white;
      font-size: 18px;
      margin-bottom: 20px;
    }
    input {
      background: #3383F5;
      border-radius: 10px;
      height: 12px;
      width: 100%;
      &::-webkit-slider-thumb {
        -webkit-appearance: none;
        background-image: url("~/assets/img/smile_stamp.png");
        background-repeat: no-repeat;
        background-size: contain;
        cursor: pointer;
        height: 40px;
        width: 40px;
      }
      &::-moz-range-thumb {
        background-image: url("~/assets/img/smile_stamp.png");
        background-repeat: no-repeat;
        background-size: contain;
        border: none; /* デフォルトの線を消す */
        border-radius: 50%;
        cursor: pointer;
        height: 40px;
        width: 40px;
      }
    }
  }
 
</style>