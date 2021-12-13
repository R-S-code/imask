<template>
  <div>
    <Header page_name="Facebook" back_link="/stamps" />
    <main>
      <div>
        <img src="~/assets/img/smile_stamp.png" alt="スタンプ">
        <p>FaceBook</p>
      </div>
      <div>
        <img src="~/assets/img/smile_stamp.png" alt="スタンプ">
        <p>FaceBook</p>
      </div>
      <div>
        <img src="~/assets/img/smile_stamp.png" alt="スタンプ">
        <p>FaceBook</p>
      </div>
    </main>
  </div>
</template>

<style lang="scss" scoped>
  main {
    display: flex;
    padding: 55px 20px 675px;
    div {
      border-radius: 20px;
      height: 165px;
      padding-top: 20px;
      text-align: center;
      width: 135px;
      img {
        height: 99px;
        width: 99px;
      }
      p {
        font-size: 14px;
        margin-top: 20px;
      }
      &:hover {
        border: 1px solid #3383F5;
      }
    }
  }
</style>

