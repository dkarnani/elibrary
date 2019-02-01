<template>
  <!-- <div class="text-xs-center"> -->
  <div>
    <v-card>
      <v-card-title primary-title>
        <h1>Checkout / Return</h1>

        <v-spacer></v-spacer>
        <v-text-field v-model="search" append-icon="search" label="Search" single-line hide-details></v-text-field>
      </v-card-title>
      <v-dialog v-model="dialog" width="500">
        <v-btn slot="activator" color="primary" dark class="mb-2">Add new Book</v-btn>
        <v-card>
          <v-card-title>
            <span class="headline">{{ formTitle }}</span>
          </v-card-title>
          <v-card-text>
            <v-container grid-list-md>
              <v-layout align-center justify-center column fill-height>
                <v-flex xs12 sm6 md4>
                  <v-text-field
                    type="number"
                    v-model="editedItem.isbn"
                    :rules="isbnRules"
                    label="ISBN"
                    min="1"
                    required
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field
                    v-model="editedItem.bookName"
                    :rules="bookNameRules"
                    :counter="30"
                    label="Book name"
                    required
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.author" label="Author"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.publisher" label="Publisher"></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click="close">Cancel</v-btn>
            <v-btn color="blue darken-1" flat @click="save">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <!-- </v-toolbar> -->
      <v-data-table :headers="headers" :items="books" :search="search" class="elevation-1">
        <template slot="items" slot-scope="props">
          <td class="text-xs-center">{{ props.item.isbn }}</td>
          <td class="text-xs-center">{{ props.item.bookName }}</td>
          <td class="text-xs-center">{{ props.item.author }}</td>
          <td class="text-xs-center">{{ props.item.publisher }}</td>
          <td class="justify-center layout px-0">
            <v-icon small class="mr-2" @click="editItem(props.item)">edit</v-icon>
            <v-icon small @click="deleteItem(props.item)">delete</v-icon>
          </td>
        </template>
        <template slot="no-data">
          <v-btn color="primary" @click="initialize">Reset</v-btn>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>
 
<script>
import axios from "axios";
export default {
  data: () => ({
    search: "",
    dialog: false,
    apiURL: "http://localhost:3000/api/books",
    headers: [
      { text: "ISBN", align: "center", value: "isbn" },
      { text: "Book Name", align: "center", value: "bookName" },
      { text: "Author", align: "center", value: "author" },
      { text: "Publisher", align: "center", value: "publisher" }
    ],
    books: [],
    editedIndex: -1,
    editedItem: {
      id: 0,
      isbn: "",
      bookName: "",
      author: "",
      publisher: ""
    },
    defaultItem: {
      isbn: "",
      bookName: "",
      author: "",
      publisher: ""
    },
    bookNameRules: [
      v => !!v || "Book Name is required",
      v => v.length <= 30 || "Book Name must be less than 30 characters"
    ],
    isbnRules: [
      v => !!v || "ISBN is required",
      v => v.length <= 10 || "Book Name must be less than 10 digits"
    ]
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Book" : "Edit Book";
    }
  },

  watch: {
    dialog(val) {
      val || this.close();
    }
  },

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      axios.get(this.apiURL).then(response => {
        this.books = response.data;
      });
    },

    editItem(item) {
      this.editedIndex = this.books.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      confirm("Are you sure you want to delete this item?") &&
        this.deleteBook(item);
    },

    close() {
      this.dialog = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
    },

    save() {
      this.onAddOrUpdateBook(this.editedItem);
      this.close();
    },

    onAddOrUpdateBook(book) {
      if (book.id) {
        this.updateBook(book);
      } else {
        this.addBook(book);
      }
    },
    addBook(book) {
      return axios.post(this.apiURL, book).then(response => {
        const copy = this.books.slice();
        copy.push(response.data);
        this.books = copy;
      });
    },
    updateBook(book) {
      return axios.put(`${this.apiURL}/${book.id}`, book).then(response => {
        const copy = this.books.slice();
        const idx = copy.findIndex(c => c.id === response.data.id);
        copy[idx] = response.data;
        this.books = copy;
      });
    },
    deleteBook(book) {
      return axios.delete(`${this.apiURL}/${book.id}`).then(response => {
        let copy = this.books.slice();
        const idx = copy.findIndex(c => c.id === response.data.id);
        copy.splice(idx, 1);
        this.books = copy;
      });
    }
  }
};
</script>
