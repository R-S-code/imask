<template>
  <div>
    <select size="1">
      <option value="A">userA</option>
      <option value="B">userB</option>
      <option value="C">userC</option>
    </select>
  </div>
</template>

<style lang="scss" scoped>
  div {
    position: relative;
    width: fit-content;
    select {
      appearance: none;
      cursor: pointer;
      font-size: 18px;
      outline: none;
      padding-right: 20px;
      width: 100%;
    }
    &:after {
      content: "▼";
      font-size: 12px;
      pointer-events: none;
      position: absolute;
      right: 0;
      transform: translateY(5px);
    };
  }
</style>
