<template>
  <div>
    <img src="~/assets/img/heart.svg" alt="">
    <p>心拍数が高いので<br>落ち着いてください</p>
  </div>
</template>

<style lang="scss" scoped>
  div {
    align-items: center;
    background-color: white;
    border-radius: 20px;
    box-shadow: 0 0 2px #dfdede;
    display: flex;
    flex-direction: column;
    height: 230px;
    justify-content: center;
    margin-top: 40px;
    text-align: center;
    width: 100%;
    img {
      height: 100px;
      width: 100px;
    }
    p {
      font-size: 24px;
    }
  }
</style>