<template>
  <div>
    <v-card>
      <v-card-title primary-title>
        <h1>Checkout / Return</h1>
      </v-card-title>
      <v-card-text>
        <v-container fluid>
          <v-layout row wrap>
            <v-flex xs12>
              <!-- Combo Box for Student Selection by ID or Name-->
              <v-combobox
                v-bind:items="students"
                v-model="selectedStudent"
                @input="onStudentSelection"
                chips
                label="Select a student"
                autocomplete
                return-object
              >
                <template
                  slot="selection"
                  slot-scope="data"
                >{{ data.item.firstName}} {{data.item.lastName}}</template>
                <template slot="item" slot-scope="data">
                  <v-list-tile-content>
                    <v-list-tile-title v-html="`${data.item.firstName} ${data.item.lastName}`"></v-list-tile-title>
                    <v-list-tile-sub-title v-html="`Student ID: ${data.item.studentID}`"></v-list-tile-sub-title>
                  </v-list-tile-content>
                </template>
              </v-combobox>
            </v-flex>
            <!--Table containing all the books issued to the student-->
            <template v-if="selectedStudent !== null">
              <v-flex xs12 sm6>
                <v-subheader v-text="'Books Issued'"></v-subheader>
              </v-flex>
              <v-data-table :headers="booksIssuedHeaders" :items="booksIssued" class="elevation-1">
                <template slot="items" slot-scope="props">
                  <td class="text-xs-center">{{ props.item.isbn }}</td>
                  <td class="text-xs-center">
                    <img
                      :src="props.item.imageLink"
                      v-bind:alt="props.item"
                      height="125px"
                      width="95px"
                    >
                  </td>
                  <td class="text-xs-center">{{ props.item.bookName }}</td>
                  <td class="text-xs-center">{{ props.item.author }}</td>
                  <td class="text-xs-center">{{ props.item.bookCode }}</td>
                  <td class="text-xs-center">{{ props.item.checkedOutDate }}</td>
                  <td class="text-xs-center">{{ props.item.dueDate }}</td>
                  <td class="text-xs-center">
                    <!--Allow Return-->
                    <v-btn color="primary" @click="returnBook(props.item)">Return</v-btn>
                  </td>
                </template>
              </v-data-table>
            </template>
            <!--Search for books in inventory -->
            <template v-if="selectedStudent !== null">
              <v-flex xs12 sm8>
                <v-spacer></v-spacer>
                <v-subheader v-text="'Books Available'"></v-subheader>
                <v-text-field
                  v-model="search"
                  append-icon="search"
                  label="Search Available Books"
                  single-line
                  hide-details
                ></v-text-field>
              </v-flex>
              <!--Table containing all the books that can be borrowed-->
              <v-data-table
                :headers="booksAvailableHeaders"
                :items="booksAvailable"
                :search="search"
                class="elevation-1"
              >
                <template slot="items" slot-scope="props">
                  <td class="text-xs-center">{{ props.item.isbn }}</td>
                  <td class="text-xs-center">
                    <img
                      :src="props.item.imageLink"
                      v-bind:alt="props.item"
                      height="125px"
                      width="95px"
                    >
                  </td>
                  <td class="text-xs-center">{{ props.item.bookName }}</td>
                  <td class="text-xs-center">{{ props.item.author }}</td>
                  <td class="text-xs-center">{{ props.item.publisher }}</td>
                  <td class="text-xs-center">{{ props.item.availableQty }}</td>
                  <td class="text-xs-center">{{ props.item.bookCode }}</td>
                  <td class="text-xs-center">
                    <v-btn color="primary" @click="checkoutBook(props.item)">Checkout</v-btn>
                  </td>
                </template>
              </v-data-table>
            </template>
          </v-layout>
        </v-container>
      </v-card-text>
    </v-card>
  </div>
</template>
 
<script>
import axios from "axios";
export default {
  data: () => ({
    studentsURL: process.env.VUE_APP_ROOT_API + "/api/students",
    transactionsURL: process.env.VUE_APP_ROOT_API + "/api/transactions",
    booksAvailableURL: process.env.VUE_APP_ROOT_API + "/api/available",
    search: "",
    students: [],
    booksIssued: [],
    booksAvailable: [],
    selectedStudent: null,
    booksIssuedHeaders: [
      { text: "ISBN", align: "center", value: "isbn" },
      { text: "Image", align: "center", value: "imageLink" },
      { text: "Book Name", align: "center", value: "bookName" },
      { text: "Author", align: "center", value: "author" },
      { text: "Book Code", align: "center", value: "bookCode" },
      { text: "Checked Out Date", align: "center", value: "checkedOutDate" },
      { text: "Due Date", align: "center", value: "dueDate" }
    ],
    booksAvailableHeaders: [
      { text: "ISBN", align: "center", value: "isbn" },
      { text: "Image", align: "center", value: "imageLink" },
      { text: "Book Name", align: "center", value: "bookName" },
      { text: "Author", align: "center", value: "author" },
      { text: "Publisher", align: "center", value: "publisher" },
      { text: "Available Qty", align: "center", value: "availableQty" },
      { text: "Book Code", align: "center", value: "bookCode" }
    ]
  }),

  created() {
    if (this.$route.params.navStudent != undefined) {
      this.selectedStudent = this.$route.params.navStudent;
      this.onStudentSelection();
      this.initialize();
    } else {
      this.initialize();
    }
  },

  methods: {
    initialize() {
      axios.get(this.studentsURL).then(response => {
        this.students = response.data;
      });
    },
    onStudentSelection() {
      if (this.selectedStudent != undefined) {
        axios
          .get(this.transactionsURL + "/" + this.selectedStudent.studentID)
          .then(response => {
            this.booksIssued = response.data;
          });
        axios.get(this.booksAvailableURL).then(response => {
          this.booksAvailable = response.data;
          // Remove Books Issued from the Books Available array
          var i, j;
          for (i = 0; i < this.booksAvailable.length; i++) {
            for (j = 0; j < this.booksIssued.length; j++) {
              if (this.booksAvailable[i].isbn == this.booksIssued[j].isbn) {
                this.booksAvailable.splice(i, 1);
              }
            }
          }
          this.booksAvailable = response.data;
        });
      }
    },
    returnBook(transaction) {
      transaction.returnDate = new Date().toISOString().slice(0, 10);
      return axios
        .put(`${this.transactionsURL}/${transaction.id}`, transaction)
        .then(response => {
          // Call Return API and refresh the 2 tables
          axios.get(this.booksAvailableURL).then(response => {
            this.booksAvailable = response.data;
            axios
              .get(this.transactionsURL + "/" + this.selectedStudent.studentID)
              .then(response => {
                this.booksIssued = response.data;
              });
          });
        });
    },
    checkoutBook(transaction) {
      var today = new Date();
      var dueDate = new Date();
      // Default the due date to 30 days out in future
      dueDate.setDate(today.getDate() + 30);
      transaction.studentID = this.selectedStudent.studentID;
      transaction.checkedOutDate = today.toISOString().slice(0, 10);
      transaction.dueDate = dueDate.toISOString().slice(0, 10);
      // Call Checkout API and refresh the 2 tables
      axios.post(this.transactionsURL, transaction).then(response => {
        axios.get(this.booksAvailableURL).then(response => {
          this.booksAvailable = response.data;
          axios
            .get(this.transactionsURL + "/" + this.selectedStudent.studentID)
            .then(response => {
              this.booksIssued = response.data;
            });
        });
      });
    }
  }
};
</script>
