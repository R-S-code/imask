<template>
  <div>
    <main>
      <User />
      <ThemeSection theme="仕事" link="/theme" class="theme-section" />
      <IndexMask />
    </main>
    <Footer home_onoff="on" msg_onoff="off" />
  </div>
</template>

<style lang="scss" scoped>
  main {
    background-color: #f7f7f7;
    padding: 75px 20px 210px;
  }
  .theme-section {
    margin-bottom: 40px;
  }
</style>
