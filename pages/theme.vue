<template>
  <div>
    <Header page_name="テーマ" back_link="/" />
    <main>
      <ThemeSection theme="仕事" link="/theme_settings" class="theme-section"/>
      <ThemeSection theme="生活" link="/theme_settings" class="theme-section"/>
      <ThemeSection theme="病院" link="/theme_settings" class="theme-section"/>
      <nuxt-link to="/theme_settings">
        <AddThemeIco class="add-theme-ico" />
      </nuxt-link>
    </main>
  </div>
</template>

<style lang="scss" scoped>
  main {
    padding: 0px 20px 105px;
  }
  .theme-section {
    margin-top: 20px;
  }
  .add-theme-ico {
    display: flex;
    justify-content: center;
    margin: 195px auto 0;
  }
</style>

