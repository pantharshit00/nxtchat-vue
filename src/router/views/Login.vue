<template>
  <v-container fill-height>
    <v-layout row wrap align-center>
      <v-flex xs12 sm8 md4 lg4 xl4 offset-sm2 offset-md4>
        <v-card>
          <h3 class="text-xs-center pt-3 pr-2 pl-2 pb-0 hfont">NxtShare</h3>
          <v-card-text>
            <v-container fluid class="text-xs-center pt-0">
              <v-layout row wrap>
                <v-flex xs12 sm12 md12 lg12 xl12>
                  <div class="pb-3">
                    <v-btn block large dark class="bg-fb">
                      <v-icon left dark>fa-facebook-official</v-icon> Facebook</v-btn>
                  </div>
                  <div class="pb-3">
                    <v-btn block large dark class="bg-gplus">
                      <v-icon left dark>fa-google-plus-official</v-icon>Google</v-btn>
                  </div>
                  <div class="pb-3">
                    <v-btn block large dark class="bg-twit">
                      <v-icon left dark>fa-twitter</v-icon>Twitter</v-btn>
                  </div>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Login',
};
</script>

