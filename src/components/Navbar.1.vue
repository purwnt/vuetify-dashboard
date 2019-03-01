<template>
  <v-toolbar fixed clipped app dark color="primary" :clipped-left="$vuetify.breakpoint.mdAndUp">
    <v-toolbar-title class="headline text-uppercase">
      <span>Vuetify</span>
      <span class="font-weight-light">MATERIAL DESIGN</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn
      flat
      href="https://github.com/vuetifyjs/vuetify/releases/latest"
      target="_blank"
    >
      <span class="mr-2">Latest Release</span>
    </v-btn>
    <locale-dropdown/>
  </v-toolbar>
</template>

<script>
import { mapGetters } from 'vuex'
import LocaleDropdown from './LocaleDropdown'

export default {
  data: () => ({
    appName: ''
  }),

  computed: mapGetters({
    user: 'auth/user'
  }),

  components: {
    LocaleDropdown
  },

  methods: {
    async logout () {
      // Log out the user.
      await this.$store.dispatch('auth/logout')

      // Redirect to login.
      this.$router.push({ name: 'login' })
    }
  }
}
</script>

<style scoped>
.profile-photo {
  width: 2rem;
  height: 2rem;
  margin: -.375rem 0;
}
</style>
