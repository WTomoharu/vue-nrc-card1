<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
      clipped-left
    >
      <v-app-bar-nav-icon
        @click.stop="drawer1 = !drawer1"
      />

      <v-toolbar-title
        @click="$route.path !== '/' ? $router.push('/') : null"
      >
        N Railway Club Demo Site
      </v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer1"
      mobile-breakpoint="960"
      class="grey lighten-4"
      app
      clipped
    >
      <v-list nav dense>
        <v-list-item-group>
          <v-list-item
            v-for="route in routes"
            :key="route.path"
            :to="route.path"
          >
            <v-list-item-title>
              {{ route.ja }}
              </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-navigation-drawer
      v-model="drawer2"
      mobile-breakpoint="960"
      class="grey lighten-4"
      app
      bottom
      overlay-opacity="0.3"
      style="opacity: 0.95;"
    >
      <v-list nav dense>
        <v-list-item-group>
          <v-list-item
            v-for="route in routes"
            :key="route.path"
            :to="route.path"
          >
            <v-list-item-title>
              {{ route.ja }}
              </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-btn
      v-if="!drawer2 && !$vuetify.breakpoint.mdAndUp"
      @click="drawer2 = !drawer2"
      class="ma-2"
      color="primary"
      fab
      fixed
      right
      bottom
      large
      dark
    >
      <v-icon>mdi-menu</v-icon>
    </v-btn>

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
      drawer1: this.$vuetify.breakpoint.mdAndUp,
      drawer2: false,
      routes
    }
  }
}
</script>
