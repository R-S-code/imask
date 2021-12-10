<template>
  <div>
    <p>仕事</p>
    <nuxt-link to="/theme">
      <img src="~/assets/img/list_ico.svg" alt="リストアイコン">
    </nuxt-link>
  </div>
</template>

<style lang="scss" scoped>
  div {
    background-image: url("~/assets/img/theme_bg1.png");
    background-position: center;
    background-size: cover;
    border-radius: 20px;
    height: 120px;
    margin-bottom: 40px;
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
      height: 6px;
      position: absolute;
      right: 20px;
      top: 50%;
      transform: translateY(-50%);
      width: 24px;
    }
  }
</style>
