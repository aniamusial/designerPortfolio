<template>
  <div>
    <v-toolbar color="transparent" flat>   
    <img src="../assets/logo.png" height="60%"/>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat>Projects</v-btn>
        <v-btn flat>About</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-divider id="divider"></v-divider>
  </div>
</template>

<script>

export default {
    name: 'NavBar'
}
</script>

<style scoped>
    div {
        font-family: "Quicksand", sans-serif;
    }

    #divider {
        border: 1px solid #000;
    }
    
</style>

