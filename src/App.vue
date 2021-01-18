<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-toolbar-title>
        N HighSchool Railway Club
      </v-toolbar-title>

      <v-spacer/>

      <div class="d-flex" style="background-color: white;">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App'
}
</script>
