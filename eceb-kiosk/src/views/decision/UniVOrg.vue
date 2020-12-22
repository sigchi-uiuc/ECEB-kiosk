<template>
  <div class="uni-v-org-page page">
    <div class="decision-title">
      Learn More About Energy And Sustainability at UIUC
    </div>
    <v-container fluid id="decision-buttons">
      <v-row no-gutters class="decision-row">
        
          <v-col md="6" id="university-steps" class="decision-col">
            <router-link :to="{ name: 'UniversitySteps'}">
              <v-img
                src="../../assets/grainger.jpg"
                class="white--text align-end card-image rounded-xl"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0, 0, 0, 0.1), rgba(0,0,0,.8)">
              <v-card-title class="card-text">University</v-card-title>
              </v-img>
              </router-link>
          </v-col>
        
        <v-col id="university-consumption" class="decision-col">
          <router-link to="/">
          <v-img
              src="../../assets/solarcar.jpg"
              class="white--text align-end card-image rounded-xl"
              gradient="to bottom, rgba(0,0,0,0), rgba(0, 0, 0, 0.0), rgba(0,0,0,.8)">
            <v-card-title class="card-text">Organizatons</v-card-title>
            </v-img>
          </router-link>
        </v-col>
        
      </v-row>
      <!--<v-btn to="/" x-large id="back-button">Back</v-btn>-->
    
    </v-container>
    <div class="footer">
      <Footer></Footer>
      </div>
    
  </div>
 
</template>

<script>
import Footer from "../../components/Footer.vue"
export default {
  
  name: 'Learn-More-Energy',
 components : {
   Footer
 },
}
</script>

<style scoped>

  
  .decision-title {
    width: 100%;
    height: 125px;
    background: linear-gradient(-45deg, rgba(232,74,39,1) 0%, rgba(19,41,75,1) 75%);
    background-size: 200% 100%;
    animation: gradient 30s ease infinite;
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