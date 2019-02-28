<template>
  <div id="app">
    <v-app light>
      <v-navigation-drawer
        :clipped="clipped"
        v-model="drawer"
        enable-resize-watcher
        app
        dark
        class="primary lighten-3"
      >
        <v-list>
          <v-list-tile
            v-for="item in items"
            :key="item.title"
            :to="item.path == '#' ? '' : item.path"
          >
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
      <v-toolbar fixed app :clipped-left="clipped">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title>Troy's eLibrary</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-content>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </v-content>
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

<script>
export default {
  data: () => ({
    drawer: true,
    clipped: false,
    items: [
      {
        icon: "books",
        title: "Maintain eBooks",
        path: "/books"
      },
      {
        icon: "face",
        title: "Maintain Students",
        path: "/students"
      },
      {
        icon: "shopping_cart",
        title: "Checkout / Return",
        path: "/checkout"
      },
      {
        icon: "printer",
        title: "Books Issued Report",
        path: "/report"
      }
    ]
  })
};
</script>
