<template>
  <v-app id="app" class="white">
    <NavBar></NavBar>
    <main>
      <router-view></router-view>
    </main>
  </v-app>
</template>

<script>
import NavBar from './components/NavBar';

export default {
  name: 'App',
  components: {
    NavBar
  },
  data () {
    return {
      
    }
  }
}
</script>
