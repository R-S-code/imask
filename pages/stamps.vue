<template>
  <div>
    <Header page_name="スタンプ" back_link="/theme_settings" />
    <main>
      <nuxt-link to="/stamp_set">
        <div>
          <img src="~/assets/img/smile_stamp.png" alt="スタンプ">
          <p>FaceBook</p>
        </div>
      </nuxt-link>
      <nuxt-link to="/stamp_set">
        <div>
          <img src="~/assets/img/smile_stamp.png" alt="スタンプ">
          <p>FaceBook</p>
        </div>
      </nuxt-link>
      <nuxt-link to="/stamp_set">
        <div>
          <img src="~/assets/img/smile_stamp.png" alt="スタンプ">
          <p>FaceBook</p>
        </div>
      </nuxt-link>
    </main>
  </div>
</template>

<style lang="scss" scoped>
  main {
    display: flex;
    flex-wrap: wrap;
    padding: 55px 20px 675px;
    div {
      border-radius: 20px;
      height: 165px;
      padding-top: 20px;
      text-align: center;
      width: 125px;
      img {
        height: 85px;
        width: 85px;
      }
      p {
        font-size: 14px;
        margin-top: 20px;
      }
      &:hover {
        outline: 1px solid #3383F5;
      }
    }
  }
</style>

