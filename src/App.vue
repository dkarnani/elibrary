<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/books">Maintain Books</router-link>|
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>-->
    <v-app>
      <v-app toolbar>
        <v-navigation-drawer permanent clipped>
          <v-list>
            <v-list-tile :to="{path: '/books'}">
              <v-list-tile-content>
                <v-list-tile-title>Maintain Books</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile :to="{path: '/about'}">
              <v-list-tile-content>
                <v-list-tile-title>About</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <!-- <v-list-tile v-for="i in 3" :to="{path: '/page' + i}">
              <v-list-tile-action>
                <v-icon>{{ icons[i-1] }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>Page {{ i }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>-->
          </v-list>
        </v-navigation-drawer>
        <!-- <v-toolbar>
          <v-toolbar-title>Toolbar</v-toolbar-title>
        </v-toolbar>-->
        <main>
          <v-container fluid>
            <v-fade-transition mode="out-in">
              <router-view></router-view>
            </v-fade-transition>
          </v-container>
        </main>
      </v-app>
    </v-app>
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
