<template>
  <div class="home-page page">
    <v-container fluid id="home-title">
      <v-container fluid id="title-text">
        The ECE Building has saved 500 polar bears now
      </v-container>
      <v-container fluid id="subtitle-text">
        Learn more about Electricity Consumption, and how you can make a difference.
      </v-container>
    </v-container>
    
    <v-container fluid id="home-button-row">
      <v-slide-y-transition mode="out-in" hide-on-leav="true">
        <v-btn @click="learnMoreShow = !learnMoreShow" v-show="!learnMoreShow" outlined outine-width="2px" class="home-button">LEARN MORE</v-btn>
      </v-slide-y-transition>
      <v-slide-y-transition mode="out-in">
        <v-btn :to="{ name: 'Learn-More-Energy'}" v-show="learnMoreShow" outlined outine-width="2px" class="home-button">OPTION 1</v-btn>
      </v-slide-y-transition>
      <v-slide-y-transition mode="out-in">
        <v-btn :to="{ name: 'Learn-More-Energy'}" v-show="learnMoreShow" outlined outine-width="2px" class="home-button">OPTION 2</v-btn>
      </v-slide-y-transition>
      <v-btn to="/template" outlined id="pledge-button" class="home-button">SIGN THE PLEDGE</v-btn>
    </v-container>
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

  #title-text {
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

</style>
