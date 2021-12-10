<template>
  <div>
    <h2>マスク</h2>
    <div class="mask-wrapper">
      <IndexMaskSection color="black" />
      <IndexMaskSection color="green" />
      <IndexMaskSection color="yellow" />
      <IndexMaskSection color="red" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  h2 {
    font-size: 18px;
    font-weight: 500;
  }
  .mask-wrapper  {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 0 auto;
  }
</style>
