<template>
  <!-- <div class="text-xs-center"> -->
  <div>
    <v-card>
      <v-card-title primary-title>
        <h1>e-Books</h1>

        <v-spacer></v-spacer>
        <v-text-field v-model="search" append-icon="search" label="Search" single-line hide-details></v-text-field>
      </v-card-title>
      <v-dialog v-model="dialog" width="500">
        <v-btn slot="activator" color="primary" class="text-xs-right">Add new Book</v-btn>
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
      <v-dialog v-model="codesDialog" width="900">
        <v-card>
          <v-card-title>
            <span class="headline">Edit Book Codes</span>
          </v-card-title>
          <v-card-text>
            <v-container fluid grid-list-md>
              <v-layout>
                <table>
                  <tr>
                    <th>ISBN</th>
                    <th>Book Name</th>
                    <th>Author</th>
                    <th>Publisher</th>
                  </tr>
                  <tr>
                    <td>{{editedItem.isbn}}</td>
                    <td>{{editedItem.bookName}}</td>
                    <td>{{editedItem.author}}</td>
                    <td>{{editedItem.publisher}}</td>
                  </tr>
                </table>
              </v-layout>
              <br>
              <br>
              <v-layout>
                <v-flex md12>
                  Total:
                  Checked Out:
                  <div class="text-xs-right">
                    <v-btn color="primary" class="mr-0" @click="openAddCode()">Add new Code</v-btn>
                  </div>
                  <v-data-table :headers="bookCodesHeaders" :items="bookCodes" class="elevation-1">
                    <template slot="items" slot-scope="props">
                      <td class="text-xs-center">{{ props.item.bookCode }}</td>
                      <td class="text-xs-center">{{ props.item.checkedOut }}</td>
                      <td class="text-xs-center">{{ props.item.checkedOutDate }}</td>
                      <td class="text-xs-center">{{ props.item.dueDate }}</td>
                      <td class="justify-center layout px-0">
                        <v-icon
                          v-if="props.item.checkedOut === 0 || props.item.checkedOut === false"
                          small
                          @click="deleteBookCode(props.item)"
                        >delete</v-icon>
                      </td>
                    </template>
                  </v-data-table>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click="closeCodes">Close</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-dialog v-model="addCodeDialog" width="300">
        <v-card>
          <v-card-title>
            <span class="headline">New Book Code</span>
          </v-card-title>
          <v-card-text>
            <v-container grid-list-md>
              <v-layout align-center justify-center column fill-height>
                <v-flex xs12 sm6 md4>
                  <v-text-field
                    type="string"
                    v-model="editedBookCode.bookCode"
                    :rules="bookCodeRules"
                    label="Book Code"
                    min="1"
                    required
                  ></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click="closeAddCode">Cancel</v-btn>
            <v-btn color="blue darken-1" flat @click="saveAddCode">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-data-table :headers="headers" :items="books" :search="search" class="elevation-1">
        <template slot="items" slot-scope="props">
          <td class="text-xs-center">{{ props.item.isbn }}</td>
          <td class="text-xs-center">{{ props.item.bookName }}</td>
          <td class="text-xs-center">{{ props.item.author }}</td>
          <td class="text-xs-center">{{ props.item.publisher }}</td>
          <td class="text-xs-center">{{ props.item.count }}</td>
          <td class="text-xs-center">
            <v-btn color="primary" @click="editCode(props.item)">Edit Codes</v-btn>
          </td>
          <td class="justify-center layout px-0">
            <v-icon small class="mr-2" @click="editItem(props.item)">edit</v-icon>
            <v-icon v-if="props.item.count === 0" small @click="deleteItem(props.item)">delete</v-icon>
          </td>
        </template>
        <template slot="no-data">
          <v-btn color="primary" @click="initialize">Reset</v-btn>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<style>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>
 
<script>
import axios from "axios";
export default {
  data: () => ({
    search: "",
    dialog: false,
    codesDialog: false,
    addCodeDialog: false,
    booksURL: "https://elibrary.node-express.com/api/books",
    inventoryURL: "https://elibrary.node-express.com/api/inventory",
    headers: [
      { text: "ISBN", align: "center", value: "isbn" },
      { text: "Book Name", align: "center", value: "bookName" },
      { text: "Author", align: "center", value: "author" },
      { text: "Publisher", align: "center", value: "publisher" },
      { text: "Qty", align: "center", value: "count" }
    ],
    bookCodesHeaders: [
      { text: "Book Code", align: "center", value: "bookCode" },
      { text: "Checked Out", align: "center", value: "checkedOut" },
      { text: "Checked Out Date", align: "center", value: "checkedOutDate" },
      { text: "Due Date", align: "center", value: "dueDate" }
    ],
    books: [],
    bookCodes: [],
    editedIndex: -1,
    editedItem: {
      id: 0,
      isbn: "",
      bookName: "",
      author: "",
      publisher: "",
      count: 0
    },
    editedBookCode: {
      id: 0,
      isbn: "",
      bookCode: "",
      checkedOut: 0
    },
    defaultItem: {
      isbn: "",
      bookName: "",
      author: "",
      publisher: "",
      count: 0
    },
    bookNameRules: [
      v => !!v || "Book Name is required",
      v => v.length <= 30 || "Book Name must be less than 30 characters"
    ],
    isbnRules: [
      v => !!v || "ISBN is required",
      v => v.length <= 10 || "Book Name must be less than 10 digits"
    ],
    bookCodeRules: [
      v => !!v || "Book Code is required",
      v => v.length <= 6 || "Book Code must be less than 6 digits"
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
      axios.get(this.booksURL).then(response => {
        this.books = response.data;
      });
    },

    editItem(item) {
      this.editedIndex = this.books.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    editCode(item) {
      this.editedIndex = this.books.indexOf(item);
      this.editedItem = Object.assign({}, item);
      if (item != undefined) {
        axios.get(this.inventoryURL + "/" + item.isbn).then(response => {
          this.bookCodes = response.data;
        });
      }
      this.codesDialog = true;
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

    closeCodes() {
      this.codesDialog = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
    },

    openAddCode() {
      this.addCodeDialog = true;
    },

    closeAddCode() {
      this.addCodeDialog = false;
    },

    deleteBookCode(bookCode) {
      return axios
        .delete(`${this.inventoryURL}/${bookCode.id}`)
        .then(response => {
          let copy = this.bookCodes.slice();
          const idx = copy.findIndex(c => c.id === response.data.id);
          copy.splice(idx, 1);
          this.bookCodes = copy;
        });
    },

    saveAddCode() {
      this.editedBookCode.isbn = this.editedItem.isbn;
      return axios
        .post(this.inventoryURL, this.editedBookCode)
        .then(response => {
          // Change the value of checkedOut to 0 if false
          response.data.checkedOut = response.data.checkedOut ? 1 : 0;
          const copy = this.bookCodes.slice();
          copy.push(response.data);
          this.bookCodes = copy;
          this.closeAddCode();
        });
    },

    onAddOrUpdateBook(book) {
      if (book.id) {
        this.updateBook(book);
      } else {
        this.addBook(book);
      }
    },
    addBook(book) {
      return axios.post(this.booksURL, book).then(response => {
        const copy = this.books.slice();
        copy.push(response.data);
        this.books = copy;
      });
    },
    updateBook(book) {
      return axios.put(`${this.booksURL}/${book.id}`, book).then(response => {
        const copy = this.books.slice();
        const idx = copy.findIndex(c => c.id === response.data.id);
        copy[idx] = response.data;
        this.books = copy;
      });
    },
    deleteBook(book) {
      return axios.delete(`${this.booksURL}/${book.id}`).then(response => {
        let copy = this.books.slice();
        const idx = copy.findIndex(c => c.id === response.data.id);
        copy.splice(idx, 1);
        this.books = copy;
      });
    }
  }
};
</script>
