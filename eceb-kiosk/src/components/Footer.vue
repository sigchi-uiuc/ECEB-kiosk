<template>
  <v-card height="450px">
    <v-footer
      v-bind="localAttrs"
      padless="padless"
    >
      <v-row
      align="center"
      justify="center">
        <v-col
        align="center"
        id="back"
        >
          <v-btn @click = "back()" depressed x-large>
            <v-icon dark x-large>
              mdi-arrow-left
            </v-icon>
              Back
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
    </v-footer>
  </v-card>
</template>

<script>
export default {
  name: 'Footer',
  methods: {
    back() {
      this.$router.back(-1);
    }
  },
}
</script>
<style scoped>
#pledge .v-btn {
  border-radius: 30px;
  font-size: 30px;
  color: white;
}
#home .v-btn {
  font-size: 30px;
  margin-left: 15px;
}
#back .v-btn {
  margin-right: 30px;
  font-size: 30px;
}

.template{
  background-color: "blue";
}

</style>