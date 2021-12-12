<template>
  <footer>  
    <div class="icon-wrapper">
      <FooterHome :home_onoff="home_onoff" />
      <FooterMessage :msg_onoff="msg_onoff" />
    </div>
    <FooterLogo />
  </footer>
</template>

<script lang="ts">
  interface Onoff {
    home_onoff: string,
    msg_onoff: string
  }

  export default {
    props: {
      home_onoff: { 
        type: String,
        required: true
      },
      msg_onoff: { 
        type: String,
        required: true
      }
    },
    setup(props: Onoff): { home_onoff: string; msg_onoff: string } {
      let home_onoff:string = props.home_onoff
      let msg_onoff:string = props.msg_onoff
      return {
        home_onoff,
        msg_onoff
      }
    }
  }
</script>

<style lang="scss" scoped>
  footer {
    background-color: white;
    bottom: 0;
    box-shadow: 0 -10px 10px -10px rgba(0, 0, 0, 0.30);
    max-width: 426px;
    padding: 25px 0 5px;
    position: fixed;
    text-align: center;
    width: 100%;
    z-index: 1;
  }
  .icon-wrapper {
    color: #3383f5;
    display: flex;
    font-size: 14px;
    justify-content: space-around;
  }
</style>
