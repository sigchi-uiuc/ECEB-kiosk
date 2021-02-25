<template>
  <div class="page" id="pledge-form-page">
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
        <div id="form-inputs">
          <div class="form-field">
            <div class="form-field-label">Name</div>
            <input type="text" @input="onInputChange" @onKeyPress="onKeyPress" @click="bringUpKeyboard(0)" class="form-field-input" id="form-field-input-name" name="name" :v-model="name"/>
          </div>
          <div class="form-field">
            <div class="form-field-label">Email</div>
            <input type="text" @input="onInputChange" @onKeyPress="onKeyPress" class="form-field-input" @click="bringUpKeyboard(1)" id="form-field-input-email" name="email" :v-model="email" @blur="setEmail(email)"/>
            <div class="error-text" v-if="emailError">Please Enter A Valid Email</div>
          </div>
        </div>
        <div id="form-keyboard">
          <SimpleKeyboard v-if="currentSelection===0" @onChange="updateName" :input="name"/>
          <SimpleKeyboard v-else @onChange="updateEmail" :input="email"/>
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
import SimpleKeyboard from "./SimpleKeyboard";

export default {
  

  name: 'PledgeForm',
  components: {
    SimpleKeyboard
  },
  data: () => ({
    choices: [],
    selectedChoices: [],
    name: "",
    email: "",
    currentSelection: -1,
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
        let form = document.getElementById("signup-form")
        let name = form.elements["name"].value
        let email = form.elements["email"].value
        console.log(email)
        if(this.checkEmail(email) || name === "" || email === "") return false;
        //console.log({name: this.name, email: this.email});
        // Start loading animation
        this.submitLoading = true;

        //DB code
        this.$firestore.ecebkiosk.doc(email).set(
          {
            name: name,
            email: email,
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
      checkEmail(email) {
        this.emailError = !(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email));
        return this.emailError;
      },
      back() {
      this.$router.back(-1);
      },
      bringUpKeyboard(inputSelection) {
        if(this.currentSelection !== inputSelection) {
          this.currentSelection = inputSelection;
          console.log("here");
          document.getElementById("form-inputs").classList.add("active");
          document.getElementById("form-keyboard").classList.add("active");
        }
        
      },
      updateName(input) {
        this.name = input;
        document.getElementById("form-field-input-name").value= this.name;
      },
      updateEmail(input) {
        this.email = input;
        document.getElementById("form-field-input-email").value= this.email;
      },
      setEmail(email) {
        this.email = email;
      },
      onChange(input) {
        this.name = input;
        document.getElementById("form-field-input-name").value= this.name;
      },
      onKeyPress(button) {
        console.log("button", button);
      },
      onInputChange(input) {
        if(this.currentSelection)
          this.email = input.target.value;
        else this.name = input.target.value;
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

  #pledge-form-page {
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

  #form-inputs {
    position: absolute;
    top: 0;
    transition: all 1s;
  }

  #form-inputs.active {
    top: -130px !important;
  }

  .form-field {
    margin-bottom: 50px;
    transition: all 3s;
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

  #form-keyboard {
    position: absolute;
    top: 480px ;
    width: 1000px;
    transition: all 1s;
  }

  #form-keyboard.active {
    top: 250px !important;
  }

</style>