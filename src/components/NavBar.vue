<template>
  <div>
    <v-toolbar color="transparent" flat>   
    <img src="../assets/logo.png" height="60%"/>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <router-link to="/">
          <v-toolbar-title to="/" router flat>Projects</v-toolbar-title>
        </router-link>
        <router-link to="/about">
          <v-toolbar-title to="/about" router flat>About</v-toolbar-title>
        </router-link>
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

    a {
      text-decoration: none;
      color: black;
      padding: 2rem;
    }

    a:hover {
      color: grey;
    }
    
</style>

