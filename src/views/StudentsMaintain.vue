<template>
  <div>
    <v-card>
      <v-card-title primary-title>
        <h1>Students</h1>
        <v-spacer></v-spacer>
        <!-- Search Input Box for Students-->
        <v-text-field v-model="search" append-icon="search" label="Search" single-line hide-details></v-text-field>
      </v-card-title>
      <!-- Dialog Box to Add / Edit  Students -->
      <v-dialog v-model="dialog" width="500">
        <v-btn slot="activator" color="primary" class="text-xs-right">Add new Student</v-btn>
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
                      v-model="editedItem.studentID"
                      :rules="idRules"
                      label="Student ID"
                      min="1"
                      required
                      v-if="this.editedIndex === -1"
                    ></v-text-field>
                    <v-text-field
                      type="number"
                      v-model="editedItem.studentID"
                      label="Student ID"
                      min="1"
                      disabled
                      v-if="this.editedIndex != -1"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field
                      type="name"
                      v-model="editedItem.firstName"
                      :rules="firstNameRules"
                      :counter="30"
                      label="First Name"
                      required
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field
                      type="name"
                      v-model="editedItem.lastName"
                      :rules="lastNameRules"
                      :counter="30"
                      label="Last Name"
                      required
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field
                      type="number"
                      v-model="editedItem.grade"
                      :rules="gradeRules"
                      :counter="2"
                      label="Grade"
                      required
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field
                      type="phoneNumber"
                      v-model="editedItem.phone"
                      :rules="phoneRules"
                      mask="(###) ### - ####"
                      label="Phone Number"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field
                      type="email"
                      v-model="editedItem.email"
                      :rules="emailRules"
                      label="Email"
                    ></v-text-field>
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

      <!--Table containing all the students -->
      <v-data-table :headers="headers" :items="students" :search="search" class="elevation-1">
        <template slot="items" slot-scope="props">
          <td class="text-xs-center">{{ props.item.studentID }}</td>
          <td class="text-xs-center">{{ props.item.firstName }}</td>
          <td class="text-xs-center">{{ props.item.lastName }}</td>
          <td class="text-xs-center">{{ props.item.grade }}</td>
          <td class="text-xs-center">{{ props.item.phone }}</td>
          <td class="text-xs-center">{{ props.item.email }}</td>
          <td class="text-xs-center">{{ props.item.dueCount }}</td>
          <td class="justify-center layout px-0">
            <v-icon small class="mr-2" @click="editItem(props.item)">edit</v-icon>
            <v-icon v-if="props.item.dueCount === 0" small @click="deleteItem(props.item)">delete</v-icon>
            <!--Allow navigation to Checkout page -->
            <v-icon small @click="navigateItem(props.item)">shopping_cart</v-icon>
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
import router from "../router";
export default {
  data: () => ({
    search: "",
    dialog: false,
    codesDialog: false,
    addCodeDialog: false,
    studentsURL: process.env.VUE_APP_ROOT_API + "/api/students",
    headers: [
      { text: "Student ID", align: "center", value: "studentID" },
      { text: "First Name", align: "center", value: "firstName" },
      { text: "Last Name", align: "center", value: "lastName" },
      { text: "Grade", align: "center", value: "grade" },
      { text: "Phone", align: "center", value: "phone" },
      { text: "Email", align: "center", value: "email" },
      { text: "Books Borrowed", align: "center", value: "dueCount" }
    ],
    students: [],
    editedIndex: -1,
    editedItem: {
      id: 0,
      studentID: "",
      firstName: "",
      lastName: "",
      grade: "",
      phone: "",
      email: "",
      count: 0
    },
    defaultItem: {
      studentID: "",
      firstName: "",
      lastName: "",
      grade: "",
      phone: "",
      email: "",
      count: 0
    },
    // Input Validation Rules
    firstNameRules: [v => !!v || "First name is required"],
    lastNameRules: [v => !!v || "Last name is required"],
    gradeRules: [v => !!v || "Grade is required"],
    phoneRules: [
      v => v.length >= 7 || "Phone number should be at least 7 digits"
    ],
    emailRules: [v => /.+@.+/.test(v) || "Must be valid E-mail"]
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Student" : "Edit Student";
    },
    idRules() {
      const rules = [];
      var rule = v => !!v || "Student ID is required";
      rules.push(rule);
      rule = v => v.length <= 10 || "Student ID must be less than 10 digits";
      rules.push(rule);
      if (this.editedItem) {
        rule = v =>
          !this.students.some(function(el) {
            return el.studentID == v;
          }) || "Student ID already exists";
        rules.push(rule);
      }
      return rules;
    }
  },

  watch: {
    studentID: "validateField",
    dialog(val) {
      val || this.close();
    }
  },

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      axios.get(this.studentsURL).then(response => {
        this.students = response.data;
      });
    },
    validateField() {
      this.$refs.form.validate();
    },
    editItem(item) {
      this.editedIndex = this.students.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    navigateItem(item) {
      router.push({ name: "checkout", params: { studentID: item.studentID } });
    },

    deleteItem(item) {
      confirm("Are you sure you want to delete this student record?") &&
        this.deleteStudent(item);
    },

    close() {
      this.dialog = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
    },

    save() {
      this.onAddOrUpdateStudent(this.editedItem);
      this.close();
    },

    onAddOrUpdateStudent(student) {
      if (student.id) {
        this.updateStudent(student);
      } else {
        this.addStudent(student);
      }
    },
    addStudent(student) {
      return axios.post(this.studentsURL, student).then(response => {
        this.initialize();
      });
    },
    updateStudent(student) {
      return axios
        .put(`${this.studentsURL}/${student.id}`, student)
        .then(response => {
          this.initialize();
        });
    },
    deleteStudent(student) {
      return axios
        .delete(`${this.studentsURL}/${student.id}`)
        .then(response => {
          this.initialize();
        });
    }
  }
};
</script>
