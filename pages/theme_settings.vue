<template>
  <div>
    <Header page_name="テーマ設定" back_link="/theme" />
    <main>
      <div class="settings-list">
        <div>
          <h2>テーマ名</h2>
          <p>仕事</p>
          <nuxt-link to="/stamps">
            <img src="~/assets/img/right_arrow.svg" alt="右矢印">
          </nuxt-link>
        </div>
        <div>
          <h2>スタンプ</h2>
          <img src="~/assets/img/smile_ico.png" alt="スタンプアイコン" class="stamp-ico">
          <nuxt-link to="/stamps">
            <img src="~/assets/img/right_arrow.svg" alt="右矢印">
          </nuxt-link>
        </div>
        <div>
          <h2>センサー感度</h2>
          <p>50%</p>
          <nuxt-link to="/stamps">
            <img src="~/assets/img/right_arrow.svg" alt="右矢印">
          </nuxt-link>
        </div>
        <div>
          <h2>背景画像</h2>
          <nuxt-link to="/stamps">
            <img src="~/assets/img/right_arrow.svg" alt="右矢印">
          </nuxt-link>
        </div>
        <ThemeSettingsBg />
      </div>
    </main>
  </div>
</template>

<style lang="scss" scoped>
  main {
    padding: 45px 20px 475px;
  }
  .settings-list {
    div {
      align-items: center;
      display: flex;
      margin-bottom: 30px;
      h2 {
        margin-right: auto;
      }
      img:last-child {
        display: inline-block;
        height: 20px;
        margin-left: 10px;
        width: 20x;
      }
    }
    .stamp-ico {
      height: 26px;
      width: 26px;
    }
  }
</style>

