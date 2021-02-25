<template>
  <div class="pledge-form-page page">

    <div id="pledge-form-title">
      I Pledge To...
    </div>

    <v-container id="choices-form-container">
      <v-row no-gutters>
        <v-col md="4" v-for="choice in selectedChoices" :key="choice.pledge">
            <v-card color="#e6e6e6" elevation="10" class="choice-form-card rounded-xl" :id="choice.pledge + '-card'" :key="choice.pledge + '-card'">
              <v-card-title style="font-size: 48px; color: black; font-weight: bold; text-align: center;" class="justify-center">
                {{choice.pledge}}
              </v-card-title>
            </v-card>
        </v-col>
      </v-row>
      
    </v-container>
    
    <form id="signup-form" @submit.prevent="submitForm">
      <div class="form-field">
        <div class="form-field-label">Name</div>
        <input type="text" class="form-field-input" name="name" v-model="name"/>
      </div>
      <div class="form-field">
        <div class="form-field-label">Email</div>
        <input type="text" class="form-field-input" name="email" v-model="email" @blur="checkEmail"/>
        <div class="error-text" v-if=" emailError">Please Enter A Valid Email</div>
      </div>
      <v-btn @click="back()" outlined class="back-button">
        <v-icon large>mdi-arrow-left</v-icon>
        <span class="submit-text"> BACK </span>
      </v-btn>
      <v-btn type="submit" outlined class="submit-button">
        <div v-if="!submitLoading">
          <span  class="submit-text"> SUBMIT </span>
          <v-icon large>mdi-arrow-right</v-icon>
        </div>
        <v-progress-circular v-else-if="!submitFinish" indeterminate color="white" :size="40"></v-progress-circular>
        <v-icon v-else color="white" :size="45"> mdi-checkbox-marked-circle </v-icon>
      </v-btn>
    </form>
    

  </div>
</template>

<script>
import { db } from './firebase';

export default {
  

  name: 'PledgeForm',
  props:  {
    
  },
  data: () => ({
    choices: [],
    selectedChoices: [],
    name: "",
    email: "",
    emailError: false,
    submitLoading: false,
    submitFinish: false
    }),
     firestore() {
      return {
        ecebkiosk: db.collection('users'),
      }
    },
    methods: {
      async submitForm() {
        if(this.emailError || this.name === "" || this.email === "") return false;
        console.log({name: this.name, email: this.email});
        // Start loading animation
        this.submitLoading = true;

        //DB code
        this.$firestore.ecebkiosk.doc(this.email).set(
          {
            name: this.name,
            email: this.email,
            choices: this.selectedChoices,
            timestamp: new Date()
          }
        )
        .then(async () => {
          // Wait 1.5 seconds to give the illusion of the process taking time (Its actually close to instant)
          await new Promise(r => setTimeout(r, 1500));
          this.submitFinish = true;
          await new Promise(r => setTimeout(r, 1250));
          this.$router.push({name: "PledgeFinish"});
          this.submitLoading = false;
          this.submitFinish = false;
        })
        .catch((error) => {
          this.submitLoading = false;
          console.error("Error uploading document: ", error);
        });
        
      },
      checkEmail() {
        this.emailError = !(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(this.email));
      },
      back() {
      this.$router.back(-1);
      }
    },
    created() {
      this.choices = this.$route.params.choices;
      if(this.choices) {
        for(let choice of this.choices) {
          if(choice.selected)
            this.selectedChoices.push(choice);
        }
      }
    }
}
</script>

<style scoped>

  .pledge-form-page {
    background: radial-gradient(circle, rgba(97,141,207,1) 0%, rgba(19,41,75,1) 100%);
    background-size: 200% 200%;
    position: absolute;
    background-position: 100% 100%;
  }

  .submit-button {
    position: absolute;
    left: 1180px;
    top: 380px;
    width: 255px;
    height: 65px !important;
    font-family: ProximaNovaBold !important;
    font-size: 36px !important;
    letter-spacing: 4.5px !important;
    color: white;
    background: none;
  }

  .back-button {
    position: absolute;
    left: -380px;
    top: 380px;
    height: 65px !important;

    font-family: ProximaNovaBold !important;
    font-size: 36px !important;
    letter-spacing: 4.5px !important;
    color: white;
    background: none;

    padding: 50px 50px;
  }

  .v-btn--active::before {
    opacity: 0 !important;
  }

  #pledge-form-title {
    position: absolute;
    top: 80px;
    left: 80px;

    font-family: ProximaNovaBold;
    font-size: 64px;
    color: white;
    line-height: 64px;
  }

  #choices-form-container {
    position: absolute;
    width: 1600px;

    left: calc(50% - 800px);
    top: 250px;
  }

  .choice-form-card {
    width: 500px;
    height: auto;

    font-family: ProximaNova;

    padding: 12x 12px;
    margin-bottom: 50px;
  }

  #signup-form {
    position: absolute;
    left: calc(50% - 500px);
    top: 600px;
  }

  .form-field {
    margin-bottom: 50px;
  }

  .form-field-label {
    font-family: ProximaNova;
    color: white;
    font-size: 40px;
  }

  .form-field-input {
    background: white;
    border-radius: 30px;
    width: 1000px;
    height: 80px;
    font-size: 48px;
    padding: 40px;
  }

  .error-text {
    font-family: ProximaNova;
    font-size: 36px;
    color: #d15e5e;
  }

  input:focus {
    outline: none !important;
    box-shadow: 0 0 3pt 2pt grey;
  }

</style>