<template>
  <div class="why-care page">
    <div class="info-title">
      Why Care About Energy?
    </div>

    <div id="blur-card">

    <ul id="why-care-data-list">
      <li v-for="data in whyCareData" :key="data.title + '-list-item'" class="data-list-item">        
        <span class="data-title">
          {{data.title}}:
        </span>
        <span class="data-description">
          {{data.description}}
        </span>
      </li>
    </ul>

    </div>


    <div class="footer">
      <Footer></Footer>
    </div>
    
    
  </div>
</template>

<script>
import Footer from "../../components/Footer.vue"
import {whyCareData} from "../../const"
export default {
  name: 'WhyCare',
  data: () => ({
    whyCareData: whyCareData,
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

  .data-title {
    font-weight: bold;
    font-size: 40px;
    color: #7eaffc;
  }

  ul {
    padding-left: 0;
  }

</style>