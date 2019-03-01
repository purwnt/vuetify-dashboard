<template>
  <v-menu>
    <v-btn flat slot="activator">
      <span>{{ locales[locale] }}</span>
      <v-icon>arrow_drop_down</v-icon>
    </v-btn>

    <v-list>
      <v-list-tile
        v-for="(value, key) in locales"
        :key="key"
        @click.prevent="setLocale(key)"
      >
        <v-list-tile-title v-text="value"></v-list-tile-title>
      </v-list-tile>
    </v-list>
  </v-menu>
</template>

<script>
import { mapGetters } from 'vuex'
import { loadMessages } from '@/plugins/i18n'

export default {
  computed: mapGetters({
    locale: 'lang/locale',
    locales: 'lang/locales'
  }),

  methods: {
    setLocale (locale) {
      if (this.$i18n.locale !== locale) {
        loadMessages(locale)

        this.$store.dispatch('lang/setLocale', { locale })
      }
    }
  }
}
</script>
