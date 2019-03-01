<template>
  <div>
    <v-navigation-drawer
    mobile-break-point="1263"
    clipped mini-variant-width="72"
    :mini-variant="mini"
    v-model="drawer"
    app
    floating
    v-bind:width="220"
    class="info"
    >
      <!-- <div class="text-md-center text-xs-center" :style="mini ? `height: 60px` : `height: 90px`" v-bind:class="{ 'blue darken-2': mini }">
        <img v-if="!mini" class="mt-4 mr-2" height="40px" src="https://beta.datanest.co/logo-blue.svg" alt="Logo">
        <img v-else height="35px" src="https://beta.datanest.co/logo-white-nt.svg" alt="Logo">
      </div> -->
      <v-list :class="{ 'mt-0': mini }">
      <!-- <v-divider></v-divider> -->
        <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-tile-action :class="mini ? `pl-0 pr-2` : `pl-2`">
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              {{ link.text }}
            </v-list-tile-title> 
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-layout row justify-center>
        <v-flex xs6 v-if="mini">
          <v-btn class="minifier-button secondaryText--text" bottom fixed icon @click="mini = !mini">
            <v-icon>keyboard_arrow_right</v-icon>
          </v-btn>
        </v-flex>
        <v-flex xs2 v-else>
          <v-btn class="minifier-button secondaryText--text" bottom fixed icon @click="mini = !mini">
            <v-icon color="primary">keyboard_arrow_left</v-icon>
          </v-btn>
        </v-flex>
      </v-layout>
    </v-navigation-drawer>
    <v-toolbar id="bluefoxnav" v-bind:height="70" clipped-left app color="info" class="elevation-2">
      <v-toolbar-side-icon class="secondaryText--text" @click="drawer = !drawer"></v-toolbar-side-icon>
      <img src="https://bluefox-international.com/images/logo.png" height="33" class="ml-2 mb-1" alt="Header Logo">
      <v-spacer></v-spacer>
      <!-- <v-btn icon v-if="notification" @click="toggleButton">
        <v-icon color="primary">notifications</v-icon>
      </v-btn>
      <v-btn icon v-else @click="toggleButton">
        <v-icon color="grey">notifications_none</v-icon>
      </v-btn> -->
      <!-- <v-btn icon>
        <v-avatar size="35px" tile>
          <img
            src="https://randomuser.me/api/portraits/men/28.jpg"
            alt="avatar"
          >
        </v-avatar>
      </v-btn> -->
      <v-menu offset-y>
        <!-- <v-btn class="hidden-sm-and-up" slot="activator" icon >
          <v-icon>more_vert</v-icon>
        </v-btn> -->
        <v-btn class="hidden-xs-only text-capitalize primaryText--text" slot="activator" outline round>
          Nugroho
          <v-icon right class="ml-2">account_circle</v-icon>
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
      <!-- <v-btn outline round color="grey">
        John Doe
        <v-icon right>account_circle</v-icon>
      </v-btn> -->
    </v-toolbar>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: true,
    mini: false,
    height: 60,
    links: [
      { icon: 'group', text: 'Audience', route: '/'},
      { icon: 'watch_later', text: 'Exported History', route: '/projects'},
      { icon: 'perm_contact_calendar', text: 'Contact List', route: '/teams'}
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

<style scope>
/* .v-list .v-list__tile--active {
  border-left: 3px solid #2f60ce;
} */
.v-toolbar__title {
  margin-left: 5px !important;
}
.v-avatar--tile img {
  border-radius: 50px !important;
}
.v-navigation-drawer .text-md-center img {
  margin-top: 12px;
}
.v-list .v-list__tile {
  color: #365265 !important;
}
.v-list .v-list__tile i{
  color: #365265 !important;
}
.v-list .v-list__tile--active {
  color: #0f75bd !important;
  font-weight: bolder !important;
}
.v-list .v-list__tile--active i{
  color: #0f75bd !important;
}
.minifier-button {
  right: 18px;
}
#bluefoxnav {
  -webkit-box-shadow: 0px 3px 1px -2px rgba(54, 82, 101, 0.1), 0px 2px 2px 0px rgba(54, 82, 101,0.1), 0px 1px 5px 0px rgba(54, 82, 101, 0.05) !important;
  box-shadow: 0px 3px 1px -2px rgba(54, 82, 101, 0.1), 0px 2px 2px 0px rgba(54, 82, 101, 0.1), 0px 1px 5px 0px rgba(54, 82, 101, 0.1) !important;
}
</style>
