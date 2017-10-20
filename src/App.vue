<template>
  <v-app :class="color">
    <router-view></router-view>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  computed: {
    color() {
      return this.$route.path === '/login' ? 'green darken-2' : '';
    },
  },
};
</script>

<style lang="stylus">
  @import './stylus/main'
  @import url('https://fonts.googleapis.com/css?family=Kaushan+Script')

.hfont
  font-family 'Kaushan Script', cursive

.bg-fb
  background-color #3b5998 !important

.bg-gplus
  background-color #dd4b39 !important

.bg-twit
  background-color #0084b4 !important
</style>
