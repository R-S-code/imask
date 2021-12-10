<template>
  <header>
    <nuxt-link to="/">
      <img src="~/assets/img/back_ico.svg" alt="戻るアイコン">
    </nuxt-link>
    <h1>テーマ</h1>
  </header>
</template>

<style lang="scss" scoped>
  header {
    padding: 65px 20px 25px;
    position: relative;
    img {
      height: 20px;
      width: 20px;
    }
    h1 {
      font-size: 18px;
      position: absolute;
      right: 50%;
      top: 55%;
      transform: translateX(50%);
    }
  }
</style>