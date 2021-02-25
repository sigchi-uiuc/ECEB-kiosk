<template>
  <div class="university-steps page">
    <div class="info-title">
      University Steps To Convserve Energy
    </div>

    <div id="university-steps-carousel">
      <v-carousel :show-arrows="false" :hide-delimiters="true" v-model="slide" height="758px">
        <v-carousel-item v-for="slidedata in uniStepsData" :key="slidedata.title + '-slide'" class="university-steps-carousel-item">


          <div v-if="slidedata.title == 'Energy Overview On Campus'">
            <v-img class ="overview-image" :src="require('../../assets/' + slidedata.image)"/>
          </div>
          <div v-else>
            <div class="blur text-card">

              <div class="carousel-title">
                {{slidedata.title}}
              </div>
              <div class="carousel-text">
                <div v-for="descriptionText in slidedata.description" :key="descriptionText" style="margin-bottom: 18px;">
                  {{descriptionText}}
                </div>
              </div>
            </div>
            <v-img class ="carousel-image" :src="require('../../assets/' + slidedata.image)"/>
          </div>
        
        </v-carousel-item>
        
      </v-carousel>
    </div>
    
    <v-row class="fill-height button-row" align="center" justify="center" no-gutters> 
      <v-col :md="12/buttons.size" v-for="(button, index) in buttons" :key="button + '-button'">
        <v-btn @click="slide = index" color="#13294B" class="carousel-button" :id="button + '-button'">
          {{button}}
        </v-btn>
        
      </v-col>
    
    </v-row>
    <div class="footer">
      <Footer></Footer>
    </div>
    
  </div>
</template>

<script>
import {uniStepsData} from "./../../const";
import Footer from "../../components/Footer.vue"
export default {
  name: 'UniversitySteps',
  data: () => ({
    uniStepsData: uniStepsData,

    buttons: [
      "ECEB",
      "iCAP",
      "Energy Overview",
      "Wind Power",
      "Solar Farms"
    ],
    slide: 0,
    active: 0,
    latin: "Lorem ipsum dolor sit amet, vim id augue tempor primis, in officiis indoctum mea, in veritus maiorum gloriatur usu. Omnis perpetua quaerendum ea sit, sea ea atqui quando legendos, dictas timeam insolens sed ut. Usu alii officiis consequat at, aliquip persequeris signiferumque cu has. In vim illud molestiae efficiendi. Ei vim nulla elitr integre."
    }),
  watch: {
    // Watch for when the slide changes
    slide: function (index) {
      // Get the element of the previously active button and new active button
      let oldActive = document.getElementById(this.buttons[this.active] + "-button");
      let newActive = document.getElementById(this.buttons[index] + "-button");
      // If we pressed the previously active button, do nothing
      if(oldActive == newActive) return;
      // Update the active index
      this.active = index;
      // Update the css classes of the previous button and new active button
      oldActive.classList.remove("selected");
      newActive.classList.add("selected");

    },

  },
  methods: {

  },
  components : {
   Footer
 },
  mounted() {
    let activeButton = document.getElementById(this.buttons[this.active] + "-button");
    activeButton.classList.add("selected");
  }
}
</script>

<style scoped>

  .info-title {
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(-45deg, rgba(232,74,39,1) 0%, rgba(19,41,75,1) 75%);
    background-size: 250% 100%;
    animation: gradient 45s ease infinite;
    margin: 0;
    padding: 0;

    font-family: ProximaNovaBold;
    font-size: 54px;
    color: white;
    padding: 37px 75px;
    line-height: 48px;
  }

  #university-steps-carousel {
    position: relative;
    top: 125px;
  }

  .university-steps-carousel-item {
    position: absolute;
    width: 100% !important;
    height: 100% !important;
  }

  .button-row {
    position: relative;
    width: 100%;
    height: auto;
    top: 120px;
  }

  .carousel-button {
    width: 95%;
    height: 80px !important;
    border-radius: 35px;
    margin: 18px 0;
    left: 2.5%;
    color: white;

    font-family: ProximaNova;
    font-size: 32px;
  }

  .carousel-button.selected {
    background-color: #618dcf !important;
  }

  .carousel-button:focus:before {
    opacity: 0 !important;
  }

  .blur {
    background: rgba(179, 179, 179, 0.2);
    border-radius: 40px;
    overflow: hidden;
  }

  .text-card {
    position: absolute;
    width: 1050px;
    height: 680px;
    top: 50px;
    left: 75px;
  }

  .carousel-title {
    position: relative;
    color: white;
    font-family: ProximaNovaBold;
    font-size: 48px;
    padding-left: 40px;
    padding-right: 40px;
    top: 20px;
  }

  .carousel-text {
    position: relative;
    color: white;
    font-family: ProximaNova;
    font-size: 28px;
    line-height: 36px;
    padding-left: 40px;
    padding-right: 40px;
    top: 40px;
    
    height: 500px;

  }

  .carousel-image {
    position: absolute;
    top: 50px;
    left: 1200px;
    width: 650px;
    height: 680px;
    border-radius: 40px;
    padding: 0;
    margin: 0;
  }

  .overview-image {
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