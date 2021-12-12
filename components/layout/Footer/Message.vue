<template>
  <div>
    <nuxt-link to="messages">
      <img :src="msg_ico_src" alt="メッセージアイコン">
      <p>メッセージ</p>
    </nuxt-link>
  </div>
</template>

<script lang="ts">
  interface MsgOnoff {
    msg_onoff: string
  }

  export default {
    props: {
      msg_onoff: { 
        type: String,
        required: true
      }
    },
    setup(props: MsgOnoff): { msg_ico_src: string } {
      const msg_onoff:string = props.msg_onoff
      const msg_ico_src:string = `/assets/img/message_ico_${msg_onoff}.svg`
    
      return {
        msg_ico_src,
      }
    }
  }
</script>

<style lang="scss" scoped>
  div {
    text-align: center;
    img {
      height: 36px;
      width: 35px;
      &:hover {
        opacity: 0.8;
      }
    }
    p {
      margin-top: 5px;
    }
  }
</style>