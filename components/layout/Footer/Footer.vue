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
    box-shadow: 0 -10px 10px -10px rgba(0, 0, 0, 0.30);;
    padding: 25px 0 5px;
    text-align: center;
  }
  .icon-wrapper {
    color: #3383f5;
    display: flex;
    font-size: 14px;
    justify-content: space-around;
  }
</style>
