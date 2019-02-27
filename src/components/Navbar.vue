<template>
  <div>
    <!-- Sidebar -->
    <v-navigation-drawer :mini-variant="mini" v-model="drawer" app>
      <div class="text-md-center text-xs-center pt-2" style="height: 60px;" v-bind:class="{ 'blue darken-2': mini }">
        <img class="mt-1" v-if="!mini" height="35px" src="https://beta.datanest.co/logo-blue.svg" alt="Logo">
        <img class="mt-1" v-else height="35px" src="https://beta.datanest.co/logo-white-nt.svg" alt="Logo">
      </div>
      <v-list class="pt-0">
        <v-list-tile class="grey--text" v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-tile-action>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ link.text }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-layout row justify-center>
        <v-flex xs6 v-if="mini">
          <v-btn bottom fixed icon @click="mini = !mini">
            <v-icon color="primary">keyboard_arrow_right</v-icon>
          </v-btn>
        </v-flex>
        <v-flex xs2 v-else>
          <v-btn bottom fixed icon @click="mini = !mini">
            <v-icon color="primary">keyboard_arrow_left</v-icon>
          </v-btn>
        </v-flex>
      </v-layout>
    </v-navigation-drawer>
    <!-- /Sidebar -->
    <!-- Header -->
    <v-toolbar v-bind:height="60" flat app color="white">
      <v-toolbar-side-icon @click="drawer = !drawer" class="grey--text"></v-toolbar-side-icon>
      <v-spacer></v-spacer>
      <v-btn icon v-if="notification" @click="toggleButton">
        <v-icon color="primary">notifications</v-icon>
      </v-btn>
      <v-btn icon v-else @click="toggleButton">
        <v-icon color="grey">notifications_none</v-icon>
      </v-btn>
      <v-menu offset-y>
        <v-btn
          slot="activator"
          icon
        >
          <v-avatar size="35px" tile>
            <img
              src="https://randomuser.me/api/portraits/men/28.jpg"
              alt="avatar"
            >
          </v-avatar>
        </v-btn>
        <v-list>
          <v-list-tile router to="account">
            <v-list-tile-action>
              <v-icon>account_circle</v-icon>
            </v-list-tile-action>
            <v-list-tile-title class="mr-4 body-1">Account</v-list-tile-title>
          </v-list-tile>
          <v-list-tile router to="settings">
            <v-list-tile-action>
              <v-icon>settings</v-icon>
            </v-list-tile-action>
            <v-list-tile-title class="mr-4 body-1">Settings</v-list-tile-title>
          </v-list-tile>
          <v-list-tile @click="logout">
            <v-list-tile-action>
              <v-icon>power_settings_new</v-icon>
            </v-list-tile-action>
            <v-list-tile-title class="mr-4 body-1">Signout</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>
    <!-- /Header -->
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: true,
    mini: false,
    links: [
      { icon: 'dashboard', text: 'Overview', route: '/' },
      { icon: 'insert_chart', text: 'Insight', route: '/projects' },
      { icon: 'folder', text: 'File List', route: '/teams' }
    ],
    notification: false
  }),
  methods: {
    toggleButton () {
      this.notification = !this.notification
    },
    logout () {
      this.$router.push('login')
    }
  }
}
</script>
