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
      <div
        class="d-flex justify-space-between"
        style="height: 100%; flex-flow: column;"
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

        <v-list nav dense>
          <v-list-item-group>
            <v-list-item
              v-model="$vuetify.theme.dark"
            >
              <v-list-item-icon>
                <v-icon>mdi-theme-light-dark</v-icon>
              </v-list-item-icon>

              <v-list-item-title>
                Dark Mode
              </v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </div>
    </v-navigation-drawer>

    <v-navigation-drawer
      v-model="drawer2"
      mobile-breakpoint="960"
      class="text-center"
      color="rgba(200, 200, 200, 0.4)"
      app
      bottom
      height="auto"
      overlay-opacity="0"
      style="backdrop-filter: blur(15px);"
    >
      <v-btn
        @click="$vuetify.theme.dark = !$vuetify.theme.dark"
        @focus="e => e.currentTarget.blur()"
        class="ma-2"
        color="grey darken-3"
        fab
        small
        dark
        retain-focus-on-click
      >
        <v-icon>mdi-theme-light-dark</v-icon>
      </v-btn>

      <v-list nav dense>
        <v-list-item-group>
          <v-list-item
            v-for="route in routes"
            :key="route.path"
            :to="route.path"
            style="background-color: rgba(255, 255, 255, 0.5);"
            light
            color="link-text"
          >
            <v-list-item-title>
              {{ route.ja }}
              </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-btn
      v-if="!$vuetify.breakpoint.mdAndUp"
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
  },
  methods: {$log: console.log}
}
</script>
