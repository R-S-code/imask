<template>
  <div>
    <Header />
    <transition>
      <p>theme page</p>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
  .v-enter-active {
    transition: opacity 3s;
    opacity: 0;
  }
  .v-enter-to {
    opacity: 1;
  }

  /* leave-active -> leave-to の順番で書くのが大事*/
  .v-leave-active {
    transition: opacity 3s;
    opacity: 1;
  }
  .v-leave-to {
    opacity: 0;
  }
</style>
