<template>
  <div class="why-care page">
    <div class="info-title">
      Why Care About Energy?
    </div>

    
   
    
  </div>
</template>

<script>
import {uniStepsData} from "./../../const";

export default {
  name: 'UniversitySteps',
  data: () => ({
    uniStepsData: uniStepsData,

    buttons: [
      "Overview",
      "Wind Power",
      "Solar Farms"
    ]
    }),
  methods: {

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
    height: 1000px;
    background: linear-gradient(-45deg, rgba(232,74,39,1) 0%, rgba(19,41,75,1) 75%);
    background-size: 250% 100%;
    animation: gradient 45s ease infinite;
    margin: 0;
    padding: 0;

    font-family: Proxima Nova;
    font-weight: bold;
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

    font-family: Proxima Nova;
    font-size: 32px;
  }

  .carousel-button.selected {
    background-color: #618dcf !important;
  }

  .carousel-button:focus:before {
    opacity: 0 !important;
  }

  .blur {
    background: rgb(179, 179, 179);
    opacity: 0.2;
    border-radius: 40px;
    overflow: hidden;
  }

  .text-card {
    position: absolute;
    width: 1000px;
    height: 660px;
    top: 50px;
    left: 125px;
  }

  .carousel-title {
    position: relative;
    color: white;
    font-family: Proxima Nova;
    font-size: 48px;
    font-weight: bold;
    left: 165px;
    top: 80px;
  }

  .carousel-text {
    position: relative;
    color: white;
    font-family: Proxima Nova;
    font-size: 36px;
    left: 165px;
    top: 110px;
    width: 920px;

  }

  .carousel-image {
    position: absolute;
    top: 50px;
    left: 1200px;
    width: 600px;
    height: 660px;
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