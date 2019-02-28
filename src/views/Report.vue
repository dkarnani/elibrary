<template>
  <div style="font-size: 13px; font-family: Verdana; float: left">
    <h1>Books currently checked out</h1>
    <p></p>
    <p></p>
    <JqxGrid
      ref="myGrid"
      :theme="'material'"
      :width="width"
      :source="dataAdapter"
      :columns="columns"
      :columnsresize="true"
      :pageable="true"
      :sorting="true"
    ></JqxGrid>
    <div style="height: 60px; margin-top: 15px;">
      <div style="float: left; margin-left: 15px">
        <JqxButton :theme="'material'" @click="pdfBtnOnClick()">Export to PDF</JqxButton>
      </div>
    </div>
  </div>
</template>
 
 <script>
import JqxGrid from "jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue";
import JqxButton from "jqwidgets-scripts/jqwidgets-vue/vue_jqxbuttons.vue";

export default {
  name: "Report",
  components: {
    JqxGrid,
    JqxButton
  },
  data() {
    return {
      width: "1200",
      dataAdapter: new jqx.dataAdapter(this.source),
      columns: [
        { text: "ID", datafield: "id", width: 40 },
        {
          text: "Student ID",
          datafield: "studentID",
          width: 100,
          sortable: true
        },
        {
          text: "First Name",
          datafield: "firstName",
          width: 100,
          sortable: true
        },
        {
          text: "Last Name",
          datafield: "lastName",
          width: 100,
          sortable: true
        },
        { text: "ISBN", datafield: "isbn", width: 100, sortable: false },
        {
          text: "Book Name",
          datafield: "bookName",
          width: 100,
          sortable: false
        },
        { text: "Author", datafield: "author", width: 100, sortable: false },
        {
          text: "Book Code",
          datafield: "bookCode",
          width: 100,
          sortable: false
        }
      ]
    };
  },
  beforeCreate() {
    this.source = {
      url: process.env.VUE_APP_ROOT_API + "/api/report",
      contenttype: "application/json",
      datatype: "json",
      datafields: [
        { name: "id", type: "number" },
        { name: "studentID", type: "string" },
        { name: "firstName", type: "string" },
        { name: "lastName", type: "string" },
        { name: "isbn", type: "number" },
        { name: "bookName", type: "string" },
        { name: "author", type: "string" },
        { name: "bookCode", type: "string" },
        { name: "checkedOutDate", type: "date" },
        { name: "dueDate", type: "date" },
        { name: "returnDate", type: "date" }
      ],
      id: "id",
      sortcolumn: "studentID",
      sortdirection: "asc"
    };
  },
  methods: {
    pdfBtnOnClick: function() {
      this.$refs.myGrid.exportdata("pdf", "jqxGrid");
    }
  }
};
</script>
