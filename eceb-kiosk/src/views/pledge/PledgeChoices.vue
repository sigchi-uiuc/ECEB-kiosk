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

            <v-card-text style="font-size: 24px;">{{choice.description}}</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <ul class="choice-list">
      <li id="choice-list-title">Pledges:</li>

      <div v-for="choice in choices" :key="choice.pledge + 'list'">
        <v-slide-y-transition mode="out-in" hide-on-leav="true">
          <li v-if="choice.selected"> {{choice.pledge}} </li>
        </v-slide-y-transition>
      </div>
    </ul>

  </div>
</template>

<script>

export default {
  name: 'PledgeChoices',
  data: () => ({
      "choices": [
        {
          "pledge": "Turn Off Lights",
          "selected": false,
          "description": "Turn off lights in a room that you are no longer in (even if you know you’ll be coming back!)"
        },
        {
          "pledge": "Thermosat",
          "selected": false,
          "description": "Turn thermostat up one degree in the summer (77-80°F; 25-27°C) and down 1 degree in the winter (64-68°F; 18-20°C)"
        },
        {
          "pledge": "Option3",
          "selected": false,
          "description": "lol"
        },
        {
          "pledge": "Option4",
          "selected": false,
          "description": "lol"
        },
        {
          "pledge": "Option5",
          "selected": false,
          "description": "lol"
        },
        {
          "pledge": "Option6",
          "selected": false,
          "description": "lol"
        }
      ]
    }),
    methods: {
      cardClick(index) {
        let choice = this.choices[index];
        choice.selected = !choice.selected;
        if(choice.selected)
          document.getElementById(choice.pledge + "-card").style.cssText = "background-color: #ffa15e !important";
        else document.getElementById(choice.pledge + "-card").style.cssText = "background-color: white !important";
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

    font-family: Proxima Nova;
    font-weight: bold;
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


    font-family: Proxima Nova;

    padding: 12x 12px;
    margin-bottom: 50px;
  }

  .choice-list {
    position: absolute;
    width: 400px;
    right: 10px;
    top: 250px;

    font-family: Proxima Nova;
    font-size: 54px;
    color: white;

    transition: all 0s;
  }

  #choice-list-title {
    font-size: 60px;
    font-weight: bold;

  }

  ul {
    list-style: none;
  }

</style>