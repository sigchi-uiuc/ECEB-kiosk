<template>
  <v-app>
    <v-main style="background: #13294B;">
      <transition name="slide" mode="out-in">
        <router-view/>
      </transition>
      <!--<v-scroll-x-transition mode="in" hide-on-leave="true">
        <router-view></router-view>
      </v-scroll-x-transition>-->
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: "App",
  components: {
    
  },
  data() {
    return {
      //
    };
  }
};
</script>

<style>

  html, body{
    width: 100%;
    height: 100%;
    max-width:100% !important;
    max-height:100% !important;
    overflow: hidden;
    background: #13294B;
    touch-action: none;

  }

  .slide-leave-active,
  .slide-enter-active {
    transition: 0.5s;
  }
  .slide-enter {
    opacity: 0;
    transform: translate(100%, 0);
  }
  .slide-leave-to {
    opacity: 0;
    transform: translate(-100%, 0);
  }

  .page {
    position: relative;
    width: 100%;
    max-width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    background: white;
  }

  a {
    text-decoration: none;
  }

</style>