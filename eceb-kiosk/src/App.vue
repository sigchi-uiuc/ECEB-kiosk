<template>
  <v-app>
    <v-main style="background: #e84a27;">
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

  html {
    overflow: hidden;
    height: 100%;
  }

  body {
    overflow: hidden;
    height: 100%;
    background: #e84a27 !important;
  }

  .slide-leave-active,
  .slide-enter-active {
    transition: 0.25s;
  }
  .slide-enter {
    transform: translate(100%, 0);
  }
  .slide-leave-to {
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