<template>
  <div class="page" id="home-page">
    
    <div id="home-background"/>
    <div id="main-info">
      <router-link :to="{ name: 'PledgeChoices'}">
        <div class="blurred-box"/>
        <v-container class="prize-card">
          <v-img class ="prize-card-image" src="../assets/ChargerPrize.png"/>
          <!--<div class="prize-card-text">Sign The Environmental Action Pledge by October 5th To Enter To Win A Solar Phone Charger!</div>-->
          <div class="prize-card-text">Sign The Environmental Action Pledge To Show Your Support!</div>
        </v-container>
      </router-link>
      
      <router-link :to="{ name: 'Event'}">
        <div class="blurred-box-v2"/>
        <v-container class="event-card">
          <v-img class ="event-card-image" src="../assets/ilo.png"/>
          <div class="event-card-text">Illini Lights Out Is Coming Up!  Learn More About How To Volunteer!</div>
        </v-container>
      </router-link>
      
<!--
      
      <router-link :to="{ name: 'Event2'}">
        <div class="blurred-box-v3"/>
        <v-container class="event2-card">
          <v-img class ="event-card-image" src="../assets/EnergyEfficiencyDay.png"/>
          <div class="event2-card-text">Energy Efficiency Day Is October 5th!  Learn More!</div>
        </v-container>
      </router-link>
      -->

      <v-container fluid id="home-title">
        <v-carousel cycle interval=15000 hide-delimiters :show-arrows=false>
        <v-carousel-item>
          <v-container fluid class="title-text">
            The ECEB Has Been Certified As A Net Zero Energy Building!
          </v-container>
        </v-carousel-item>
        <v-carousel-item>
          <v-container fluid class="title-text">
            11.8% Of The University's Energy Consumption Comes From Renewable Sources
          </v-container>
        </v-carousel-item>
        <v-carousel-item>
          <v-container fluid class="title-text">
            UIUC Plans To Achieve Carbon Neutrality By 2050
          </v-container>
        </v-carousel-item>
        </v-carousel>
        
        <v-container fluid id="subtitle-text">
          Learn More About Electricity Consumption And How You Can Make A Difference
        </v-container>

        
        <v-img id ="net-zero-logo" src="../assets/img_cert_ze.png"/>

        <router-link :to="{ name: 'sigchi'}">
          <v-img id ="sigchi-transparent" src="../assets/sigchi_transparent.png"/>
        </router-link>
        
        
      </v-container>

        
    </div>

    <transition mode="out-in" name="slideDown">
      <div v-if="!activated" class="touch-to-begin-text" id="bottom-touch-to-begin">TOUCH TO BEGIN</div>
    </transition>
    
    <transition name="slideDown">
      <v-container v-if="activated" fluid id="home-button-row"> 
        <v-btn :to="{ name: 'Learn-More-Energy'}"  outlined outine-width="2px" class="home-button">ENERGY AT UIUC</v-btn>
        <v-btn :to="{ name: 'Rsos'}"  outlined outine-width="2px" class="home-button">WHAT YOU CAN DO</v-btn>
        <v-btn :to="{ name: 'WhyCare'}"  outlined outine-width="2px" class="home-button">WHY YOU SHOULD CARE</v-btn>
        <v-btn :to="{name: 'PledgeChoices'}" outlined id="pledge-button" class="home-button">SIGN THE PLEDGE</v-btn>
      </v-container>
    </transition>

    <!--<router-link :to="{ name: 'SIGCHI'}">
      <v-img class ="sigchi-logo" src="../assets/sigchi_logo.jpeg"/>
    </router-link>-->
      
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
  },
  // If idle for a specific time, reverse animation so that the initial "touch to begin" state is active
  onIdle() {
    if (this.activated)
      this.activated = false;
      document.getElementById("main-info").classList.remove("active");
  },
  created() {
    // Reload the page when returning from a timeout.  This allows the program to have automatic updates
    if(this.$route.params.shouldReload) {
      this.$route.params.shouldReload = false;
      location.reload();
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
    width: 1700px;
    height: 500px;
    left: 80px;
    top: 100px;

    padding: 0;
    margin: 0;
  }

  .title-text {
    position: absolute;

    outline-width: 2px !important;

    height: 108px;

    font-family: ProximaNovaBold;
    font-style: normal;
    font-size: 100px;
    line-height: 100px;
    text-align: left;
    

    color: white;
  }

  #subtitle-text {
    position: absolute;
    
    width: 750px;
    height: 88px;

    right: -70px;
    top: 645px;

    font-family: ProximaNovaBold;
    font-style: normal;
    font-size: 50px;
    line-height: 56px;
    
    color: white;

    text-align: right;
    letter-spacing: -1px;
  }

  #net-zero-logo {
    position: absolute;
    
    width: 420px;

    right: -20px;
    top: 185px;
  }

  .blurred-box{
    position: absolute;
    width: 470px;
    height: 470px;
    top: calc(50% - 105px);
    left: 75px;
    /*background: inherit;*/
    background: rgb(179, 179, 179);
    opacity: 0.2;
    border-radius: 40px;
    overflow: hidden;
  }

  .blurred-box-v2{
    position: absolute;
    width: 470px;
    height: 470px;
    top: calc(50% - 105px);
    left: 605px;
    /*background: inherit;*/
    background: rgb(179, 179, 179);
    opacity: 0.2;
    border-radius: 40px;
    overflow: hidden;
  }

  .blurred-box-v3{
    position: absolute;
    width: 470px;
    height: 470px;
    top: calc(50% - 105px);
    left: 1135px;
    /*background: inherit;*/
    background: rgb(179, 179, 179);
    opacity: 0.2;
    border-radius: 40px;
    overflow: hidden;
  }

  .prize-card {
    position: absolute;
    top: calc(50% - 105px);
    left: 80px;
    width: 450px !important;
    height: auto;
  }

  .prize-card-image {
    width: 300px;
    left: 60px;
    top: 10px;
  }

  .event-card-image {
    width: 300px;
    left: 69px;
    top: 10px;
    border-radius: 40px;
  }

  .event-card {
    position: absolute;
    top: calc(50% - 105px);
    left: 610px;
    width: 450px !important;
    height: auto;
  }

  .event2-card {
    position: absolute;
    top: calc(50% - 105px);
    left: 1140px;
    width: 450px !important;
    height: auto;
  }

  .prize-card-text {
    color: white;
    padding-top: 40px;
    font-family: ProximaNova;
    font-size: 30px;
    text-align: center;
  }

  .event-card-text {
    color: white;
    padding-top: 30px;
    font-family: ProximaNova;
    font-size: 30px;
    text-align: center;
  }

  .event2-card-text {
    color: white;
    padding-top: 30px;
    font-family: ProximaNova;
    font-size: 30px;
    text-align: center;
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
    font-family: ProximaNovaBold !important;
    font-size: 24px !important;
    letter-spacing: 4.5px !important;
    
    width: 410px !important;
    height: 110px !important;

    margin: 20px;
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
    font-family: ProximaNovaBold;
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

  .sigchi-logo {
    position: absolute;
    width: 100px;
    height: 100px;
    left: 1800px;
    top: 20px;
    border-radius: 50%;
    padding: 15px;
  }

  #sigchi-transparent {
    position: absolute;
    width: 150px;
    height: 150px;
    top: 10px;
    right: -80px;
    border-radius: 50%;
    outline: 2px;
    border: 5px solid orange;
  }


</style>
