<template>
  <footer>  
    <div class="icon-wrapper">
      <FooterHome />
      <FooterMessage />
    </div>

    <FooterLogo />
  </footer>
</template>

<style lang="scss" scoped>
  footer {
    padding: 25px 0 5px;
    text-align: center;
  }
  .icon-wrapper {
    display: flex;
    font-size: 14px;
    justify-content: space-around;
  }
</style>
