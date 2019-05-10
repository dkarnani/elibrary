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
            <v-btn fab small color="blue" @click="showHelp(item)">
              <v-icon>help</v-icon>
            </v-btn>
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
    <v-dialog v-model="helpDialog" max-width="500px">
      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>{{ this.helpTitle }}</v-card-title>
        <v-card-text>{{ this.helpText }}</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="helpDialog = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
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
    helpDialog: false,
    clipped: false,
    helpTitle: "Help Title",
    helpText: "Help Text",
    items: [
      {
        icon: "books",
        title: "Maintain eBooks",
        path: "/books",
        helpText:
          "This page is for renting out books. The user can view, edit, or remove from the collection of books and codes."
      },
      {
        icon: "face",
        title: "Maintain Students",
        path: "/students",
        helpText:
          "This page is for maintaining the students. The user can view, edit, and remove the students' information, or can rent out a book for the student."
      },
      {
        icon: "shopping_cart",
        title: "Checkout / Return",
        path: "/checkout",
        helpText:
          "This page is for books checkout and return. The user can list the books issued to a student and return them. Also, the list of books available in inventory are shown for the student to checkout."
      },
      {
        icon: "tv",
        title: "Books Issued Report",
        path: "/report",
        helpText:
          "This page shows a report of books that are currently checked out. The user can select, filter or sort the columns for analysis. Also, the report can be downloaded as a pdf or excel file for printing."
      },
      {
        icon: "print",
        title: "Books Available Report",
        path: "/availableReport",
        helpText:
          "This page shows a report of books that are currently available in inventory. The user can select, filter or sort the columns for analysis. Also, the report can be downloaded as a pdf or excel file for printing."
      }
    ]
  }),

  methods: {
    showHelp(item) {
      this.helpTitle = "Help - " + item.title;
      this.helpText = item.helpText;
      this.helpDialog = true;
    }
  }
};
</script>
