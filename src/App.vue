<template>
<div>
  <v-app class="white">
    <NavBar></NavBar>
  </v-app>
</div>
</template>

<script>
import NavBar from './components/NavBar'

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
