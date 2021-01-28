<template>
  <div class="Footer">
    <div>
      <v-row
      align="center"
      justify="center"
      id="buttons">
        <v-col
        align="center"
        id="back"
        >
          <v-btn @click = "back()" depressed x-large>
            <v-icon dark x-large>
              mdi-arrow-left
            </v-icon>
              BACK
          </v-btn>
        </v-col>
        <v-col
          align="center"
          id="home"
        >
          <v-btn to="/"  depressed  x-large>
          <v-icon dark x-large>
            mdi-home
          </v-icon>
          </v-btn>
        </v-col>
        <v-col
        align="center"
        id="pledge"
        >
          <v-btn to="/pledge-choices" color="#13294B"  block x-large>
            Sign The Pledge!
          </v-btn>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data: () => ({
    padless: true,
    absolue: true,
  }),
  methods: {
    back() {
      this.$router.back(-1);
    }
  },
}
</script>
<style scoped>
.Footer {
    bottom: 0;
    position: absolute;
    width: 100%;
}
#buttons {
  margin-right: 5px;
  margin-bottom: 10px;
}
#pledge .v-btn {
  border-radius: 30px;
  font-size: 30px;
  color: white;
}
#home .v-btn {
  font-size: 30px;
  margin-left: 15px;
  background: transparent !important;
}
#back .v-btn {
  margin-right: 30px;
  font-size: 30px;
  background: transparent !important;
}

.template{
  background-color: "blue";
}

</style>