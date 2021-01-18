<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
      />

      <v-toolbar-title>
        N HighSchool Railway Club
      </v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app>
      <v-list nav dense>
        <v-list-item-group>
          <v-list-item
            v-for="route in routes"
            :key="route.path"
            :to="route.path"
          >
            <v-list-item-title>
              {{ route.name }}
              </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import routes from './router/routes'

export default {
  name: 'App',
  data() {
    return {
      drawer: false,
      routes
    }
  }
}
</script>
