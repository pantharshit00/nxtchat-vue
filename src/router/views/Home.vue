<template>
  <div>
    <v-toolbar dark class="primary">
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title class="white--text hfont">NxtShare</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-list two-line>
      <div v-for="(item,i) in items" :key="i">
        <v-list-tile avatar v-bind:key="item.title" download>
          <v-list-tile-avatar>
            <img v-bind:src="item.avatar">
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title v-html="item.title"></v-list-tile-title>
            <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider v-bind:inset="item.inset"></v-divider>
      </div>
    </v-list>
    <v-bottom-nav absolute shift :value="true" :active.sync="e2" :class="{
                                                                  'teal': e2 === 0,
                                                                  'green darken-2': e2 === 1,
                                                                  'brown': e2 === 2,
                                                                  'red': e2 === 3
                                                                }">
      <v-btn dark>
        <span>Stand</span>
        <v-icon>fa-newspaper-o</v-icon>
      </v-btn>
      <v-btn dark>
        <span>Message</span>
        <v-icon>fa-envelope-o</v-icon>
      </v-btn>
      <v-btn dark>
        <span>Book</span>
        <v-icon>book</v-icon>
      </v-btn>
      <v-btn dark>
        <span>Image</span>
        <v-icon>image</v-icon>
      </v-btn>
    </v-bottom-nav>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      items: [
        { avatar: 'http://vuetifyjs.com/static/doc-images/lists/1.jpg', title: 'Brunch this weekend?', subtitle: "<span class='grey--text text--darken-2'>Ali Connors</span> — I'll be in your neighborhood doing errands this weekend. Do you want to hang out?" },
        { avatar: 'http://vuetifyjs.com/static/doc-images/lists/2.jpg', title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>', subtitle: "<span class='grey--text text--darken-2'>to Alex, Scott, Jennifer</span> — Wish I could come, but I'm out of town this weekend." },
        { avatar: 'http://vuetifyjs.com/static/doc-images/lists/3.jpg', title: 'Oui oui', subtitle: "<span class='grey--text text--darken-2'>Sandra Adams</span> — Do you have Paris recommendations? Have you ever been?" },
      ],
      e2: 1,
    };
  },
};
</script>

<style>

</style>
