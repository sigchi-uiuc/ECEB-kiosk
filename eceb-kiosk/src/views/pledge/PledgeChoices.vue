<template>
  <div class="pledge-choices-page page">
    <div id="blue-border">
    </div>
    <div id="pledge-choices-title">
      I Pledge To...
    </div>

    <v-container id="choices-container">
      <v-row no-gutters>
        <v-col md="4" v-for="(choice, index) in choices" :key="choice.pledge">
          <v-card color="white" @click="cardClick(index)" elevation="20" class="choice-card rounded-xl" :id="choice.pledge + '-card'" :key="choice.pledge + '-card'">
            <v-card-title style="font-size: 36px; color: black; font-weight: bold;">{{choice.pledge}}</v-card-title>

            <v-card-text style="font-size: 24px; line-height: 28px !important;">{{choice.description}}</v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col align= "left">
      <v-btn @click="back"  outlined class="back-button">
      <v-icon large>mdi-arrow-left</v-icon>
      <span class="back-text"> BACK </span>
    </v-btn>
  </v-col>
  <v-col align= "left">
    <v-btn to="/"  class="home-button"  x-large>
      <span class="home-text"> </span>
      <v-icon dark x-large>mdi-home</v-icon>
    </v-btn>
    </v-col>
    </v-row>
    </v-container>
    
    <ul class="choice-list">
      <li id="choice-list-title">Pledges:</li>
      <div v-for="choice in choices" :key="choice.pledge + 'list'">
        <v-slide-y-transition mode="out-in" hide-on-leav="true">
          <li v-if="choice.selected" class="pledge-list-item"> {{choice.pledge}} </li>
        </v-slide-y-transition>
      </div>
      
    </ul>
    
  
    <v-btn @click="openForm"  outlined class="next-button">
      <span class="next-text"> NEXT </span>
      <v-icon large>mdi-arrow-right</v-icon>
    </v-btn>
    

  </div>
</template>

<script>

export default {
  name: 'PledgeChoices',
  data: () => ({
      "choices": [
        {
          "pledge": "Replace Light Bulbs",
          "selected": false,
          "description": "Switch out the bulbs in your home with LED bulbs to use up to 75% less energy"
        },
        {
          "pledge": "Adjust Thermosat",
          "selected": false,
          "description": "Turn thermostat up one degree in the summer (77-80°F; 25-27°C) and down 1 degree in the winter (64-68°F; 18-20°C)"
        },
        {
          "pledge": "Unplug Appliances",
          "selected": false,
          "description": "If you have old appliances that haven't been used for a while (such as a VCR), make sure to unplug it to save energy and possibly elimate a fire hazard."
        },
        {
          "pledge": "Turn Off Lights",
          "selected": false,
          "description": "Turn off lights in a room that you are no longer in (even if you know you’ll be coming back!)"
        },
        {
          "pledge": "Less Heated Water",
          "selected": false,
          "description": "Limit the time your water is running when washing dishes, brushing your teeth, and showering (still shower)"
        },
        {
          "pledge": "Use Power Strips",
          "selected": false,
          "description": "For multiple devices, using a single power strip rather than individual outlets can help save energy"
        }
      ]
    }),
    methods: {
      cardClick(index) {
        let choice = this.choices[index];
        choice.selected = !choice.selected;
        if(choice.selected)
          document.getElementById(choice.pledge + "-card").style.cssText = "background-color: #789fe3 !important";
        else document.getElementById(choice.pledge + "-card").style.cssText = "background-color: white !important";
      },
      openForm() {
        for(let choice of this.choices) {
          // If a choice has been selected, move on to the pledge form
          if(choice.selected) {
            this.$router.push({name: "PledgeForm", params:{choices: this.choices}});
            return;
          }
        }
      },
      back() {
      this.$router.back(-1);
    }
    }
}
</script>

<style scoped>

  .pledge-choices-page {
    background: #E84A27;
  }

  #blue-border {
    position: absolute;
    width: 83%;
    height: 100%;
    left: -100px;
    background: #13294B;
    border-radius: 100px;
  }

  #pledge-choices-title {
    position: absolute;
    top: 80px;
    left: 80px;

    font-family: ProximaNovaBold;
    font-size: 64px;
    color: white;
    line-height: 64px;
  }

  #choices-container {
    position: absolute;
    width: 1400px;

    left: 68px;
    top: 250px;
  }

  .choice-card {
    width: 400px;
    height: 300px;


    font-family: ProximaNova;

    padding: 12x 12px;
    margin-bottom: 50px;
  }

  .choice-card:focus:before {
    opacity: 0 !important;
  }

  .choice-list {
    position: absolute;
    width: 400px;
    right: 10px;
    top: 250px;

    font-family: ProximaNova;
    font-size: 40px;
    color: white;

    transition: all 0.66s ease-out;
  }

  #choice-list-title {
    font-size: 60px;
    font-weight: bold;

  }

  .next-button {
    position: absolute;
    right: 40px;
    bottom: 40px;

    height: 65px !important;
    font-family: ProximaNovaBold !important;
    font-size: 36px !important;
    letter-spacing: 4.5px !important;
    color: white;
    background: none;

    padding: 50px 50px;
  }

  .back-button {
    position: absolute;
    
    height: 65px !important;

    font-family: ProximaNovaBold !important;
    font-size: 36px !important;
    letter-spacing: 4.5px !important;
    color: white;
    background: none;

    padding: 50px 50px;
  }
  .home-button {
    position: absolute;
    background: transparent !important;
    height: 65px !important;
  
    font-family: ProximaNovaBold !important;
    font-size: 40px !important;
    letter-spacing: 4.5px !important;
    color: white;

    padding: 50px 50px;
  }
  ul {
    list-style: none;
  }

  .pledge-list-item {
    transition: all 0.6s ease-out;
  }

  .next-text {
    padding-right: 15px;
  }

  .back-text {
    padding-left: 15px;
  }
</style>