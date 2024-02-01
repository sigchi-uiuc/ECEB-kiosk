<template>
    <div class="organizations page">
      <div class="info-title">
        {{ this.eventData[this.active].title }}
      </div>
  
      <div id="org-carousel">
        <div class="blur text-card">
  
          <div class="text-card-title">
            Upcoming Events
          </div>
  
          <div class="carousel-text">
            <ul>
              <li v-for="(event, index) in eventData" :key="event.title + '-list-item'">
                <v-btn @click="slide=index" :id="event.title + '-button'" color="#FFEBEE" class="group-button">
                  <span style="white-space: normal !important; max-width: 400px !important;">
                    {{event.title}}
                  </span>
                  
                </v-btn>
              </li>
            </ul>
          </div>
        </div>
  
  
        <!-- Right carousel of group data/images -->
        <div id="groups-carousel">
          <v-carousel :show-arrows="false" :hide-delimiters="true" v-model="slide" height="760px">
            <v-carousel-item v-for="event in eventData" :key="event.title + '-row'" class="group-carousel-right">
              <v-img class = "group-carousel-image" :src="require('../../assets/' + event.image)"/>
              <v-img class= "group-carousel-qrcode" :src="require('../../assets/' + event.qrcode)"/>
              <div class= "group-carousel-dates">
                {{ event.dates }}
              </div>
              <div class= "group-carousel-description">
                {{event.description}}
              </div>
            </v-carousel-item>
          </v-carousel>
        </div>
      </div>
  
    <div class="footer">
        <Footer></Footer>
      </div>
      
    </div>
  </template>
  
  <script>
  import { events } from "./../../const";
  import Footer from "../../components/Footer.vue"
  export default {
    name: 'Events',
    data: () => ({
      eventData: events,
      slide: 0,
      active: 0,
      latin: "Lorem ipsum dolor sit amet, vim id augue tempor primis, in officiis indoctum mea, in veritus maiorum gloriatur usu. Omnis perpetua quaerendum ea sit, sea ea atqui quando legendos, dictas timeam insolens sed ut. Usu alii officiis consequat at, aliquip persequeris signiferumque cu has. In vim illud molestiae efficiendi. Ei vim nulla elitr integre."
      }),
    watch: {
      // Watch for when the slide changes
      slide: function (index) {
        // Get the element of the previously active button and new active button
        let oldActive = document.getElementById(this.eventData[this.active].title  + "-button");
        let newActive = document.getElementById(this.eventData[index].title + "-button");
        // If we pressed the previously active button, do nothing
        if(oldActive == newActive) return;
        // Update the active index
        this.active = index;
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
      let activeButton = document.getElementById(this.eventData[this.active].title + "-button");
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
      padding: 50px 75px;
      line-height: 48px;
    }
  
    #org-carousel {
      position: relative;
      top: 125px;
    }
  
    #groups-carousel {
      position: absolute;
      top: 50px;
      left: 700px;
      width: 1130px;
      height: 790px;
      border-radius: 40px;
      padding: 0;
      margin: 0;
      background: rgba(179, 179, 179, 0.2);
    }
  
    .carousel-button:focus:before {
      opacity: 0 !important;
    }
  
    .blur {
      background: rgba(179, 179, 179, 0.2);
      border-radius: 40px;
    }
  
    .text-card {
      position: absolute;
      width: 500px;
      height: 790px;
      top: 50px;
      left: 125px;
      padding: 20px;
    }
  
    .text-card-title {
      text-align: center;
      font-family: ProximaNovaBold;
      color: white;
      font-size: 32px;
    }
  
    .carousel-text {
      max-height: 700px;
      overflow: scroll;
      overscroll-behavior: contain;
      -ms-overflow-style: none;
      scrollbar-width: none;
      padding-top: 10px;
    }
  
    .carousel-text::-webkit-scrollbar {
      display: none;
    }
  
    .group-carousel-image {
      position: absolute;
      width: 700px;
      max-height: 350px;
      border-radius: 40px;
      left: 20px;
      top: 20px;
      padding: 0;
      margin: 0;
    }
  
    .group-carousel-qrcode {
      position: absolute;
      width: 350px;
      height: 350px;
      max-width: 350px;
      max-height: 350px;
      border-radius: 40px;
      right: 20px;
      top: 20px;
      padding: 0;
      margin: 0;
    }
  
    .group-carousel-description {
      font-family: ProximaNova;
      position: absolute;
      left: 20px;
      font-size: 27px;
      top: 460px;
      width: 1090px;
      max-height: 380px;
      overflow: scroll;
      overscroll-behavior: contain;
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
  
    .group-carousel-description::-webkit-scrollbar {
      display: none;
    }

    .group-carousel-dates {
      font-family: ProximaNova;
      position: absolute;
      left: 20px;
      font-weight: bold;
      font-size: 35px;
      top: 390px;
      width: 1090px;
      max-height: 380px;
      overflow: scroll;
      overscroll-behavior: contain;
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
  
    .group-carousel-dates::-webkit-scrollbar {
      display: none;
    }
  
    ul {
      padding-left: 0;
    }
  
    li {
      list-style: none;
      text-align: center;
    }
  
    .group-button {
      border-radius: 20px;
      font-family: ProximaNova;
      width: 450px;
      font-size: 26px;
      height: inherit !important;
      padding: 20px 20px !important;
      margin-bottom: 20px;
    }
  
    .group-button.selected {
      background-color: #cf9a61 !important;
    }
  
    .group-button:hover:before {
      opacity: 0 !important;
    }
  
  </style>