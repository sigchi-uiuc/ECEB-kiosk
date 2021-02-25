<template>
  <div class="pledge-finish-page page">
    <div class="pledge-finish-background"/>
    <div class="pledge-thank-you-message">
      <div class="title-message">
        Thank you for pledging to conserve energy and help the environment!
      </div>
      <div class="subtext-message">
        You have been entered into the prize pool for the chance to win a solar phone charger!<br>The Student Sustainability Committee will follow up on your pledge progress soon!
      </div>
      <router-link :to="{name: 'Home'}">
        <v-btn outlined class="return-button">
          Return Home
        </v-btn>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PledgeFinish'
}
</script>

<style scoped>
  .pledge-finish-background {
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(-45deg, rgba(232,74,39,1) 0%, rgba(19,41,75,1) 75%);
    background-size: 250% 100%;
    animation: gradient 20s ease infinite;
    margin: 0;
    padding: 0;
  }


  .pledge-thank-you-message {
    font-family: ProximaNovaBold;
    position: relative;
    text-align: center;
    color: white;
    top: 380px;
    width: 100%;
  }

  .title-message {
    font-size: 55px;
  }

  .subtext-message {
    margin-top: 10px;
    font-family: ProximaNova;
    font-size: 34px;
  }

  .return-button {
    font-size: 28px !important;
    letter-spacing: 4.5px !important;
    border-radius: 20px;
    width: 350px !important;
    height: 90px !important;
    color: rgb(207, 207, 207);
    margin-top: 360px;
  }

</style>