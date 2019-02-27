<template>
  <v-app>
    <Navbar/>
    <router-view></router-view>
    <!-- <Footer/> -->
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  components: {
    Navbar
  },
  data: () => ({

  })
}
</script>
