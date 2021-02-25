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
  },
  // Return home when inactive for a certain period of time if not already on the home screen
  onIdle() {
    if (this.$route.name != "Home"/* || store.state.homeActivated*/)
      this.$router.push({ name: "Home", params:{shouldReload: true} });
  },
  // Prevent right clicking when the application is created
  created() {
    //ocument.addEventListener('contextmenu',  event => event.preventDefault()); 
  }
};
</script>

<style>

  @font-face {
    font-family: "ProximaNova";
    src: local("prox"), url(./fonts/prox.otf) format("opentype")
  }

  @font-face {
    font-family: "ProximaNovaBold";
    src: local("proxBold"), url(./fonts/proxBold.otf) format("opentype")
  }

  html, body{
    width: 100%;
    height: 100%;
    max-width: 100% !important;
    max-height: 100% !important;
    overflow: hidden;
    background: #13294B;
    touch-action: none;

    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

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
    width: 1920px;
    height: 1080px;
    max-width: 1920px;
    max-height: 1080px;
    padding: 0;
    margin: 0;
    background: white;
  }

  a {
    text-decoration: none;
  }



  #info-carousel {
    position: relative;
    top: 125px;
  }

  .info-carousel-item {
    position: absolute;
    width: 100% !important;
    height: 100% !important;
  }

  .info-carousel-button-row {
    position: relative;
    width: 100%;
    height: auto;
    top: 120px;
  }

  .info-carousel-button {
    width: 95%;
    height: 80px !important;
    border-radius: 35px;
    margin: 18px 0;
    left: 2.5%;
    color: white;

    font-family: Proxima Nova;
    font-size: 32px;
  }

  .info-carousel-button.selected {
    background-color: #618dcf !important;
  }

  .info-carousel-button:focus:before {
    opacity: 0 !important;
  }

  .info-blur {
    background: rgb(179, 179, 179);
    opacity: 0.2;
    border-radius: 40px;
    overflow: hidden;
  }

  .info-text-card {
    position: absolute;
    width: 1000px;
    height: 660px;
    top: 50px;
    left: 125px;
  }

  .info-carousel-title {
    position: relative;
    color: white;
    font-family: Proxima Nova;
    font-size: 48px;
    font-weight: bold;
    left: 165px;
    top: 80px;
  }

  .info-carousel-text {
    position: relative;
    color: white;
    font-family: Proxima Nova;
    font-size: 36px;
    left: 165px;
    top: 110px;
    width: 920px;

  }

  .info-carousel-image {
    position: absolute;
    top: 50px;
    left: 1200px;
    width: 600px;
    height: 660px;
    border-radius: 40px;
    padding: 0;
    margin: 0;
  }

  .info-overview-image {
    position: absolute;
    top: 0px;
    left: 322px;
    width: 1277px;
    height: 730px;
    border-radius: 40px;
    padding: 0;
    margin: 0;
  }

</style>