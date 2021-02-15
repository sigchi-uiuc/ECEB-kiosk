<template>
  <div class="organizations page">
    <div class="info-title">
      Environment-Focused Organizations
    </div>

    <div id="org-carousel">
      <v-carousel :show-arrows="false" :hide-delimiters="true" v-model="slide" height="758px">
        <v-carousel-item v-for="slidedata in orgData" :key="slidedata.title + '-slide'" class="org-carousel-item">
          <!-- Left blur card -->
          
          <!-- Left list of groups -->
          
          <div class="blur text-card">
            <div class="carousel-title">
              {{slidedata.title}}
            </div>
            <div class="carousel-text">
              <ul>
                <li v-for="(group, index) in slidedata.groups" :key="slidedata.title + group.name + '-list-item'">
                  <v-btn @click="groupSlide=index" :id="slidedata.title + group.name + '-button'" class="group-button">
                    {{group.name}}
                  </v-btn>
                </li>
              </ul>
            </div>
          </div>


          <!-- Right carousel of group data/images -->
          <div id="groups-carousel">
            <v-carousel :show-arrows="false" :hide-delimiters="true" v-model="groupSlide" height="758px">
              <v-carousel-item v-for="group in slidedata.groups" :key="group.name + '-row'" class="group-carousel-right">
                <v-img class ="group-carousel-image" :src="require('../../assets/' + group.image)"/>
              </v-carousel-item>
            </v-carousel>
          </div>
          <!--
          <div>
            
            
            <v-img class ="carousel-image" :src="require('../../assets/' + slidedata.image)"/>
          </div>
          -->
        
        </v-carousel-item>
        
      </v-carousel>
    </div>
    
    <v-row class="fill-height button-row" align="center" justify="center" no-gutters> 
      <v-col :md="12/slidedata.size" v-for="(slidedata, index) in orgData" :key="slidedata.button + '-button'">
        <v-btn @click="slide = index" color="#13294B" class="carousel-button" :id="slidedata.button + '-button'">
          {{slidedata.button}}
        </v-btn>
        
      </v-col>
    
    </v-row>
  <div class="footer">
      <Footer></Footer>
    </div>
    
  </div>
</template>

<script>
import {orgData} from "./../../const";
import Footer from "../../components/Footer.vue"
export default {
  name: 'Organizations',
  data: () => ({
    orgData: orgData,
    slide: 0,
    groupSlide: 0,
    active: 0,
    groupActive: 0,
    latin: "Lorem ipsum dolor sit amet, vim id augue tempor primis, in officiis indoctum mea, in veritus maiorum gloriatur usu. Omnis perpetua quaerendum ea sit, sea ea atqui quando legendos, dictas timeam insolens sed ut. Usu alii officiis consequat at, aliquip persequeris signiferumque cu has. In vim illud molestiae efficiendi. Ei vim nulla elitr integre."
    }),
  watch: {
    // Watch for when the slide changes
    slide: function (index) {
      // Get the element of the previously active button and new active button
      let oldActive = document.getElementById(this.orgData[this.active].button  + "-button");
      let newActive = document.getElementById(this.orgData[index].button  + "-button");
      // If we pressed the previously active button, do nothing
      if(oldActive == newActive) return;
      // Update the active index
      this.active = index;
      // Update the css classes of the previous button and new active button
      oldActive.classList.remove("selected");
      newActive.classList.add("selected");
      //this.groupSlide = 1;
      this.groupSlide = 0;

    },
    // Watch for when the group slide changes
    groupSlide: function (index) {
      // Get the element of the previously active button and new active button
      let oldActive = document.getElementById(this.orgData[this.active].title + this.orgData[this.active].groups[this.groupActive].name  + "-button");
      let newActive = document.getElementById(this.orgData[this.active].title + this.orgData[this.active].groups[index].name  + "-button");
      // If we pressed the previously active button, do nothing
      if(oldActive == newActive) return;
      // Update the active index
      this.groupActive = index;
      // Update the css classes of the previous button and new active button
      oldActive.classList.remove("selected");
      newActive.classList.add("selected");

    }
  },
  methods: {

  },
  components : {
   Footer
 },
  mounted() {
    let activeButton = document.getElementById(this.orgData[this.active].button + "-button");
    activeButton.classList.add("selected");
    //for(groups in this.orgData[this.])
    let groupActiveButton = document.getElementById(this.orgData[this.active].title + this.orgData[this.active].groups[this.groupActive].name + "-button");
    groupActiveButton.classList.add("selected");
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

  #org-carousel {
    position: relative;
    top: 125px;
  }

  #groups-carousel {
    position: absolute;
    top: 50px;
    left: 1200px;
    width: 600px;
    height: 660px;
    border-radius: 40px;
    padding: 0;
    margin: 0;
  }

  .org-carousel-item {
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
    width: 500px;
    height: 660px;
    top: 50px;
    left: 125px;
  }

  .carousel-title {
    position: relative;
    color: white;
    font-family: ProximaNovaBold;
    font-size: 48px;
    text-align: center;
    top: 10px;
  }

  .carousel-text {
    position: relative;
    color: white;
    font-family: ProximaNova;
    font-size: 36px;
    text-align: center;
    top: 30px;
    height: 100px;
    overflow: scroll;
    touch-action: auto !important;

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

  .group-carousel-image {
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

  li {
    list-style: none;
    text-align: center;
  }

  .group-button {
    border-radius: 20px;
    font-family: ProximaNova;
    font-size: 30px;
    padding: 28px 30px !important;
    margin-bottom: 20px;
  }

  .group-button.selected {
    background-color: #cf9a61 !important;
    
  }

</style>