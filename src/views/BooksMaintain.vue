// <template>
  <div>
    <v-card>
      <v-card-title primary-title>
        <h1>eBooks</h1>
        <v-spacer></v-spacer>
        <!-- Search Input Box for Books-->
        <v-text-field v-model="search" append-icon="search" label="Search" single-line hide-details></v-text-field>
      </v-card-title>
      <!-- Dialog Box to Add / Edit  Books -->
      <v-dialog v-model="dialog" width="500">
        <v-btn slot="activator" color="primary" class="text-xs-right">Add new Book</v-btn>
        <v-card>
          <v-card-title>
            <span class="headline">{{ formTitle }}</span>
          </v-card-title>
          <v-card-text>
            <v-form ref="form">
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
                      v-if="this.editedIndex === -1"
                    ></v-text-field>
                    <v-text-field
                      type="number"
                      v-model="editedItem.isbn"
                      label="ISBN"
                      min="1"
                      disabled
                      v-if="this.editedIndex != -1"
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
            </v-form>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click="close">Cancel</v-btn>
            <v-btn color="blue darken-1" flat @click="save">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <!-- Dialog Box to Edit Book Codes -->
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
                  <div class="text-xs-right">
                    <v-btn color="primary" class="mr-0" @click="openAddCode()">Add new Code</v-btn>
                  </div>
                  <v-data-table :headers="bookCodesHeaders" :items="bookCodes" class="elevation-1">
                    <template slot="items" slot-scope="props">
                      <td class="text-xs-center">{{ props.item.bookCode }}</td>
                      <td class="text-xs-center">{{ props.item.studentID }}</td>
                      <td class="text-xs-center">{{ props.item.firstName }}</td>
                      <td class="text-xs-center">{{ props.item.lastName }}</td>
                      <td class="text-xs-center">{{ props.item.checkedOutDate }}</td>
                      <td class="text-xs-center">{{ props.item.dueDate }}</td>
                      <td class="justify-center layout px-0">
                        <v-icon
                          v-if="! props.item.studentID"
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
      <!-- Dialog Box to Add New Book Code -->
      <v-dialog v-model="addCodeDialog" width="300">
        <v-card>
          <v-card-title>
            <span class="headline">New Book Code</span>
          </v-card-title>
          <v-card-text>
            <v-form ref="codeform">
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
            </v-form>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click="closeAddCode">Cancel</v-btn>
            <v-btn color="blue darken-1" flat @click="saveAddCode">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <!--Table containing all the books -->
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

<!-- Styles for the table-->
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
    booksURL: process.env.VUE_APP_ROOT_API + "/api/books",
    inventoryURL: process.env.VUE_APP_ROOT_API + "/api/inventory",
    headers: [
      { text: "ISBN", align: "center", value: "isbn" },
      { text: "Book Name", align: "center", value: "bookName" },
      { text: "Author", align: "center", value: "author" },
      { text: "Publisher", align: "center", value: "publisher" },
      { text: "Qty", align: "center", value: "count" }
    ],
    bookCodesHeaders: [
      { text: "Book Code", align: "center", value: "bookCode" },
      { text: "Student ID", align: "center", value: "studentID" },
      { text: "First Name", align: "center", value: "firstName" },
      { text: "Last Name", align: "center", value: "lastName" },
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
    // Input Validation Rules
    bookNameRules: [
      v => !!v || "Book Name is required",
      v => v.length <= 30 || "Book Name must be less than 30 characters"
    ]
    // ,
    // bookCodeRules: [
    //   v => !!v || "Book Code is required",
    //   v => v.length <= 6 || "Book Code must be less than 6 digits"
    // ]
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Book" : "Edit Book";
    },
    isbnRules() {
      const rules = [];
      var rule = v => !!v || "ISBN is required";
      rules.push(rule);
      rule = v => v.length <= 10 || "ISBN must be less than 10 digits";
      rules.push(rule);
      if (this.editedItem) {
        rule = v =>
          !this.books.some(function(el) {
            return el.isbn == v;
          }) || "ISBN already exists";
        rules.push(rule);
      }
      return rules;
    },
    bookCodeRules() {
      const rules = [];
      var rule = v => !!v || "Book Code is required";
      rules.push(rule);
      rule = v => v.length <= 6 || "Book Code must be less than 6 digits";
      rules.push(rule);
      rule = v =>
        !this.bookCodes.some(function(el) {
          return el.bookCode == v;
        }) || "Book Code already exists";
      rules.push(rule);

      return rules;
    }
  },

  watch: {
    isbn: "validateField",
    bookCode: "validateBookCodeField",
    dialog(val) {
      val || this.close();
    }
  },

  created() {
    this.initialize();
  },

  methods: {
    // REST API calls to node.js server
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
      confirm("Are you sure you want to delete this eBook record?") &&
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
      if (this.$refs.form.validate()) {
        this.onAddOrUpdateBook(this.editedItem);
        this.close();
      }
    },

    validateField() {
      this.$refs.form.validate();
    },
    validateBookCodeField() {
      this.$refs.codeform.validate();
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
      if (this.$refs.codeform.validate()) {
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
      }
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
        this.initialize();
      });
    },

    updateBook(book) {
      return axios.put(`${this.booksURL}/${book.id}`, book).then(response => {
        this.initialize();
      });
    },
    deleteBook(book) {
      return axios.delete(`${this.booksURL}/${book.id}`).then(response => {
        this.initialize();
      });
    }
  }
};
</script>
