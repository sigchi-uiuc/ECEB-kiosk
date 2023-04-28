<template>
  <div class="why-care page">
    <div class="info-title">
      SIGCHI
    </div>

    <div id="blur-card">

    <ul id="why-care-data-list">
      <li class="data-list-item">        
        <div class="data-title">
          What Is SIGCHI?
        </div>
        <div class="data-description">
          SIGCHI is an RSO at UIUC that stands for 'Special Interest Group for Computer-Human Interaction'. We're part of the largest Computer Science group on campus, ACM (Association for Computing Machinery). We made all the software for this kiosk, and we love making new projects every year! Scan the QR code to join our Discord to learn more!
        </div>
      </li>
      <!--<li class="bottom_row">
        <div v-for="data in eventData2_bottom" :key="data.title + '-list-item'" class="data-list-item-2">        
          <div class="data-title">
            {{data.title}}:
          </div>
          <div class="data-description">
            {{data.description}}
          </div>
        </div>
        <div class="data-list-item-2">
          <div class="data-title">
            Learn More By Scanning The QR Code Below!QQQQ
          </div>
          <v-img class ="event-image" src="../../assets/IlliniLightsOut_QRCode.png"/>
        </div>

      </li>-->
      <!--<li v-for="data in eventData2_bottom" :key="data.title + '-list-item'" class="data-list-item">        
        <div class="data-title">
          {{data.title}}:
        </div>
        <div class="data-description">
          {{data.description}}
        </div>
      </li>
      <li class="data-list-item">
        <div class="data-title">
          Learn More By Scanning The QR Code Below!QQQQ
        </div>
        <v-img class ="event-image" src="../../assets/IlliniLightsOut_QRCode.png"/>
      </li>-->
    </ul>

    <div class="data-list-item-2">        
          <div class="data-title credits-title">
            Project Credits
          </div>
          <div class="data-description credits">
            Team Lead: Mitchell Bifeld
          </div>
          <div class="data-description credits">
            Backend Lead: Smit Purohit
          </div>
    </div>
    <div class="data-list-item-3">
        <div class="data-title">
          Scan To Join Our Discord!
        </div>
        <v-img class ="event-image" src="../../assets/sigchi_qrcode.png"/>
    </div>

    </div>


    <div class="footer">
      <Footer></Footer>
    </div>
    
    
  </div>
</template>

<script>
import Footer from "../../components/Footer.vue"
import {sigchiData} from "../../const"
import {sigchiData2_bottom} from "../../const"
export default {
  name: 'SIGCHI',
  data: () => ({
    eventData: sigchiData,
    eventData2_bottom: sigchiData2_bottom
    }),
  methods: {

  },
  components : {
   Footer
 },
}
</script>

<style scoped>

  .info-title {
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(-45deg, rgba(232,74,39,1) 0%, rgba(19,41,75,1) 75%);
    background-size: 250% 100%;
    animation: gradient 30s ease infinite;
    margin: 0;
    padding: 0;

    font-family: ProximaNovaBold;
    font-size: 54px;
    color: white;
    padding: 37px 75px;
    line-height: 48px;
  }

  #blur-card {
    position: absolute;
    background-color: rgb(179, 179, 179, 0.2);
    left: 125px;
    top: 130px;
    width: auto;
    height: auto;
    padding: 20px 40px;
    

    border-radius: 40px;
  }

  #why-care-data-list {
    position: relative;
    width: 1605px !important;
    width: auto;
    height: auto;
    list-style: none;
    color: white;
    font-size: 32px;
  }

  .data-list-item {
    margin-bottom: 20px;
    background-color: rgba(0,0,40,0.5);
    border-radius: 25px;
    padding: 15px;
  }

  .data-list-item-2 {
    width: 995px !important;
    height: 390px;
    margin-bottom: 20px;
    color: white;
    font-size: 29px;
    background-color: rgba(0,0,40,0.5);
    border-radius: 25px;
    padding: 15px;
    white-space: pre-line;
    text-align: center;
    padding-top: 100px;
  }

  .data-list-item-3 {
    position: absolute;
    top: 322px;
    left: 1060px;
    width: 585px !important;
    height: 390px;
    margin-bottom: 20px;
    color: white;
    font-size: 29px;
    background-color: rgba(0,0,40,0.5);
    border-radius: 25px;
    padding: 15px;
  }

  .data-title {
    font-weight: bold;
    font-size: 40px;
    color: #7eaffc;
  }

  .event-image {
    width: 290px;
    height: 290px;
    top: 5px;
    left: 140px;
    border-radius: 40px;
  }

  .credits-title {
    font-size: 45px;
  }

  .credits {
    font-size: 35px;
  }

  ul {
    padding-left: 0;
  }

</style>