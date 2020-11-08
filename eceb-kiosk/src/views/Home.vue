<template>
  <div class="home-page page">
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
        Learn More About Electricity Consumption, And How You Can Make A Difference
      </v-container>
    </v-container>
    
    <v-container fluid id="home-button-row"> 
      <!--
      <v-slide-y-transition mode="out-in" hide-on-leav="true">
        <v-btn @click="learnMoreShow = !learnMoreShow" v-show="!learnMoreShow" outlined outine-width="2px" class="home-button">LEARN MORE</v-btn>
      </v-slide-y-transition>
      <v-slide-y-transition mode="out-in">
        <v-btn :to="{ name: 'Learn-More-Energy'}" v-show="false" outlined outine-width="2px" class="home-button">OPTION 1</v-btn>
      </v-slide-y-transition>
      <v-slide-y-transition mode="out-in">
        <v-btn :to="{ name: 'Learn-More-Energy'}" v-show="false" outlined outine-width="2px" class="home-button">OPTION 2</v-btn>
      </v-slide-y-transition>-->

      <v-btn :to="{ name: 'Learn-More-Energy'}"  outlined outine-width="2px" class="home-button">ENERGY AT UIUC</v-btn>
      <v-btn :to="{ name: 'Learn-More-Energy'}"  outlined outine-width="2px" class="home-button">WHAT YOU CAN DO</v-btn>
      <v-btn to="/pledge-choices" outlined id="pledge-button" class="home-button">SIGN THE PLEDGE</v-btn>
    </v-container>
    <!--
    <transition name="slide1">
      <v-container fluid id="learn-more-row" style="transition-delay: 0.3s;" v-show="learnMoreShow">
          
      </v-container>
    </transition>-->
  </div>
</template>

<script>

export default {
  name: 'Home',
  data: () => ({
      "learnMoreShow": false
    }),
  methods: {
    learnMoreClick() {
      this.learnMoreShow = !this.learnMoreShow;
    }
  }
}
</script>

<style scoped>

  .home-page {
    background: linear-gradient(225deg, rgba(232,74,39,1) 30%, rgba(19,41,75,1) 100%);
    height: 100%;
    padding: 0;
    margin: 0;
  }

  body.noScroll {
    overflow: hidden;
  }

  #home-title {
    position: absolute;
    width: 1438px;
    height: 500px;
    right: 73px;
    top: 225px;

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
    
    width: 460px !important;
    height: 110px !important;

    margin: 20px;
  }

  #pledge-button {
    
  }

  .v-btn--outlined {
    border: thick solid currentColor !important;
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

.slide1-enter-active, .slide1-leave-active {
  transition-delay: 1s;
  transition: .2s ease-out;
}

/*
you set the css property before transition starts
*/
.slide1-enter, .slide1-leave-to {
transform: translate(0, 200%);
}


</style>
