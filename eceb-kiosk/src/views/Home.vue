<template>
  <div class="page" id="home-page">
    
    <div id="home-background"/>
    <div id="main-info">
      <router-link :to="{ name: 'PledgeChoices'}">
        <div class="blurred-box"/>
      
        <v-container class="prize-card">
          <v-img class ="prize-card-image" src="../assets/google_home.png"/>
          <div class="prize-card-text">Sign The Environmental Action Pledge For A Chance To Win A Google Home!</div>
        </v-container>
      </router-link>

      <v-container fluid id="home-title">
        <v-carousel cycle interval=10000 hide-delimiters :show-arrows=false>
        <v-carousel-item>
          <v-container fluid class="title-text">
            The ECE Building Has Saved 500 Polar Bears Now
          </v-container>
        </v-carousel-item>
        <v-carousel-item>
          <v-container fluid class="title-text">
            The ECE Building Has Saved None Polar Bears Now
          </v-container>
        </v-carousel-item>
        <v-carousel-item>
          <v-container fluid class="title-text">
            The ECE Building Has Saved 1 Polar Bears Now
          </v-container>
        </v-carousel-item>
        </v-carousel>
        <v-container fluid id="subtitle-text">
          Learn More About Electricity Consumption And How You Can Make A Difference
        </v-container>
      </v-container>
    </div>

    <transition mode="out-in" name="slideDown">
      <div v-if="!activated" class="touch-to-begin-text" id="bottom-touch-to-begin">TOUCH TO BEGIN</div>
    </transition>
    
    <transition name="slideDown">
      <v-container v-if="activated" fluid id="home-button-row"> 
        <v-btn :to="{ name: 'Learn-More-Energy'}"  outlined outine-width="2px" class="home-button">ENERGY AT UIUC</v-btn>
        <v-btn :to="{ name: 'Learn-More-Energy'}"  outlined outine-width="2px" class="home-button">WHAT YOU CAN DO</v-btn>
        <v-btn :to="{ name: 'WhyCare'}"  outlined outine-width="2px" class="home-button">WHY YOU SHOULD CARE</v-btn>
        <v-btn to="/pledge-choices" outlined id="pledge-button" class="home-button">SIGN THE PLEDGE</v-btn>
      </v-container>
    </transition>
      
    <div @click="touched" v-if="!activated" id="touch-to-begin"></div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data: () => ({
      learnMoreShow: false,
      activated: false
    }),
  methods: {
    learnMoreClick() {
      this.learnMoreShow = !this.learnMoreShow;
    },
    touched() {
      this.activated = true;
      //document.getElementById("bottom-touch-to-begin").classList.add = none;
      document.getElementById("main-info").classList.add("active");
    }
  }
}
</script>

<style>

  #home-page {
    height: 100%;
    padding: 0;
    margin: 0;
  }

  #home-background {
    position: absolute;
    height: 100%;
    width: 100%;
    background: linear-gradient(-25deg, #E84A27 30%, #13294B 60%, #618dcf 100%);
    /*background: linear-gradient(225deg, rgba(232,74,39,1) 0%, rgba(19,41,75,1) 100%);*/
    background-size: 400% 400%;
    animation: gradient 60s ease infinite;
  }

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  body.noScroll {
    overflow: hidden;
  }

  #main-info {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0px;
    transition: all .5s;
  }

  #main-info.active {
    top: -85px !important;
  }

  #home-title {
    position: absolute;
    width: 1350px;
    height: 500px;
    right: 73px;
    top: 175px;

    padding: 0;
    margin: 0;
  }

  .title-text {
    position: absolute;

    outline-width: 2px !important;

    width: 1438px;
    height: 108px;

    font-family: Proxima Nova;
    font-style: normal;
    font-weight: bold;
    font-size: 100px;
    line-height: 100px;
    text-align: right;

    color: white;
  }

  #subtitle-text {
    position: absolute;
    
    width: 480px;
    height: 88px;

    right: 0;
    top: 300px;

    font-family: Proxima Nova;
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 56px;
    
    color: white;

    text-align: right;
    letter-spacing: -1px;
  }

  .blurred-box{
    position: absolute;
    width: 440px;
    height: 470px;
    top: calc(50% - 145px);
    left: 75px;
    /*background: inherit;*/
    background: rgb(179, 179, 179);
    opacity: 0.2;
    border-radius: 40px;
    overflow: hidden;
  }

  .prize-card {
    position: absolute;
    top: calc(50% - 145px);
    left: 100px;
    width: 400px !important;
    height: auto;
  }

  .prize-card-image {
    width: 300px;
    left: 35px;
  }

  .prize-card-text {
    color: white;
    font-family: Proxima Nova;
    font-size: 30px;
  }

  #home-button-row {
    position: absolute;
    width: auto;
    bottom: 20px;
    right: 53px;
  }

  #learn-more-row {
    position:absolute;
    width: auto;
    bottom: 20px;
    right: 553px;
  }

  .home-button {
    color: white !important;

    font-weight: bold !important;
    font-family: Proxima Nova !important;
    font-size: 24px !important;
    letter-spacing: 4.5px !important;
    
    width: 410px !important;
    height: 110px !important;

    margin: 20px;
  }

  #pledge-button {
    
  }

  .v-btn--outlined {
    border: thick solid currentColor !important;
  }

  #touch-to-begin {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .touch-to-begin-text {
    position: absolute;
    width: 100%;
    font-family: Proxima Nova;
    font-weight: bold;
    font-size: 35px;
    color: white;
    opacity: 0.7;
    text-align: center;
    animation: float 10s infinite ease;
  }

  @keyframes float {
    0% {
      transform: translateY(30%);
    }
    50% {
      transform: translateY(-30%);
    }
    100% {
      transform: translateY(30%);
    }
  }


  #top-touch-to-begin {
    top: 40px;
  }

  #bottom-touch-to-begin {
    bottom: 40px;
  }

  .expand-transition {
  transition: all 2s ease;
  height: 30px;
  padding: 10px;
  background-color: #eee;
  overflow: hidden;
  }
  /* .expand-enter defines the starting state for entering */
  /* .expand-leave defines the ending state for leaving */
  .expand-enter, .expand-leave {
    height: 0;
    padding: 0 10px;
    opacity: 0;
  }

  .slideUp-enter-active, .slideUp-leave-active {
    transition: opacity .2s ease-in-out, transform .2s ease;
  }

  .slideUp-enter-to, .slideUp-leave {
    opacity: 1;
  }

  .slideUp-enter, .slideUp-leave-to {
    transform: translate(0, -200%);
    opacity: 0;
  }

  .slideDown-enter-active, .slideDown-leave-active {
    transition: opacity .2s ease-in-out, transform .2s ease;
  }

  .slideDown-enter-active {
    transition-delay: 0.3s !important;
  }

  .slideDown-enter-to, .slideDown-leave {
    opacity: 1;
  }

  .slideDown-enter, .slideDown-leave-to {
    transform: translate(0,200%);
    opacity: 0;
  }


</style>
