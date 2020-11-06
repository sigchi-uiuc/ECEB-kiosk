<template>
  <div class="learn-more-energy-page page">
    <div class="decision-title">
      Learn More About Energy And Sustainability at UIUC
    </div>
    <v-container fluid id="decision-buttons">
      <v-row no-gutters class="decision-row">
        
          <v-col md="8" id="university-steps" class="decision-col">
            <router-link to="/">
              <v-img
                src="../../assets/uiuc-greenhouse.jpg"
                class="white--text align-end card-image rounded-xl"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0, 0, 0, 0.1), rgba(0,0,0,.8)">
              <v-card-title class="card-text">See What The<br/>University & Organizations Are Doing To Help With Energy Consumption</v-card-title>
              </v-img>
              </router-link>
          </v-col>
        
        <v-col id="university-consumption" class="decision-col">
          <v-img to="/"
              src="../../assets/SolarPanels.jpg"
              class="white--text align-end card-image rounded-xl"
              gradient="to bottom, rgba(0,0,0,0), rgba(0, 0, 0, 0.0), rgba(0,0,0,.8)">
            <v-card-title class="card-text">See The University’s Specific Energy Consumption</v-card-title>
            </v-img>
        </v-col>
      </v-row>
      <!--<v-btn to="/" x-large id="back-button">Back</v-btn>-->
    </v-container>
    
  </div>
</template>

<script>

export default {
  name: 'Learn-More-Energy'
}
</script>

<style scoped>

.learn-more-energy-page {
  
}


  .decision-title {
    width: 100%;
    height: 125px;
    background: linear-gradient(225deg, rgba(232,74,39,1) 0%, rgba(19,41,75,1) 35%);
    margin: 0;
    padding: 0;

    font-family: Proxima Nova;
    font-weight: bold;
    font-size: 48px;
    color: white;
    padding: 37px 75px;
    line-height: 48px;
  }

  #decision-buttons {
    height: auto;
  }

  .decision-row {

  }

  .decision-col {
    width: 0;
    margin: 0px 4px;
  }

  .decision-card {
    color: black;

  }

  .card-text {
    font-family: Proxima Nova;
    font-weight: normal;
    font-size: 54px;
    line-height: 54px;
    width: 730px;
    word-break: normal;
    color: white;
    padding: 30px 40px;
    white-space: pre-line !important;
  }

  .card-image {
    height: 840px;
  }


  .learn-more-energy-page {
    
  }

  #about-buttons {
    position: absolute;
    width: auto;
    bottom: 5px;
    right: 10px;
  }

  #back-button {
    margin-right: 15px;
  }

</style>
