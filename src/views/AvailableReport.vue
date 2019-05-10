<template>
  <div style="font-size: 13px; font-family: Verdana; float: left">
    <h1>Books Available in Inventory Report</h1>
    <p></p>
    <div>
      <h2>Total books available: {{this.totalBookCount}}</h2>
    </div>
    <p></p>
    <JqxListBox
      v-if="this.displayListBox"
      style="float: right"
      @checkChange="myListBoxOnCheckChange($event)"
      :width="200"
      :height="200"
      :source="listBoxSource"
      :checkboxes="true"
    ></JqxListBox>
    <JqxButton
      style="float: right"
      :theme="'material'"
      @click="columnsBtnOnClick()"
    >{{ this.columnsBtnTxt }}</JqxButton>
    <JqxGrid
      ref="myGrid"
      :theme="'energyblue'"
      :width="width"
      :source="dataAdapter"
      :filterable="true"
      :showfilterrow="true"
      :sortable="true"
      :columns="columns"
      :columnsresize="true"
      :pageable="true"
      :sorting="true"
      :rendered="removeFilter"
    ></JqxGrid>

    <div style="height: 60px; margin-top: 15px;">
      <div style="float: left; margin-left: 15px">
        <JqxButton style="float: left" :theme="'material'" @click="removeFilter()">Remove Filter</JqxButton>
      </div>

      <div style="float: left; margin-left: 15px">
        <JqxButton :theme="'material'" @click="pdfBtnOnClick()">Export to PDF</JqxButton>
      </div>

      <div style="float: left; margin-left: 15px">
        <JqxButton :theme="'material'" @click="excelBtnOnClick()">Export to Excel</JqxButton>
      </div>
    </div>
  </div>
</template>
 
 <script>
import JqxGrid from "jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue";
import JqxButton from "jqwidgets-scripts/jqwidgets-vue/vue_jqxbuttons.vue";
import JqxListBox from "jqwidgets-scripts/jqwidgets-vue/vue_jqxlistbox.vue";

export default {
  name: "AvailableReport",
  components: {
    JqxGrid,
    JqxButton,
    JqxListBox
  },
  data() {
    return {
      width: "800",
      displayListBox: false,
      columnsBtnTxt: "Display Columns",
      dataAdapter: new jqx.dataAdapter(this.source),
      totalBookCount: 0,
      columns: [
        { text: "ISBN", datafield: "isbn", width: "10%", sortable: true },
        {
          text: "Book Name",
          datafield: "bookName",
          width: "25%",
          sortable: true
        },
        { text: "Author", datafield: "author", width: "20%", sortable: true },
        {
          text: "Publisher",
          datafield: "publisher",
          width: "20%",
          sortable: true
        },
        {
          text: "Available Qty",
          datafield: "availableQty",
          width: "10%",
          sortable: true
        }
      ],
      listBoxSource: [
        { label: "ISBN", value: "isbn", checked: true },
        { label: "Book Name", value: "bookName", checked: true },
        { label: "Author", value: "author", checked: true },
        { label: "Publisher", value: "publisher", checked: true },
        { label: "Available Qty", value: "availableQty", checked: true }
      ]
    };
  },
  beforeCreate() {
    this.source = {
      url: process.env.VUE_APP_ROOT_API + "/api/available",
      contenttype: "application/json",
      datatype: "json",
      datafields: [
        { name: "isbn", type: "string" },
        { name: "bookName", type: "string" },
        { name: "author", type: "string" },
        { name: "publisher", type: "string" },
        { name: "availableQty", type: "number" }
      ],
      id: "isbn",
      sortcolumn: "isbn",
      sortdirection: "asc"
    };
  },
  methods: {
    removeFilter: function() {
      this.$refs.myGrid.clearfilters();
      var i;
      this.totalBookCount = 0;
      for (i = 0; i < this.dataAdapter.loadedData.length; i++) {
        this.totalBookCount += this.dataAdapter.loadedData[i].availableQty;
      }
    },
    pdfBtnOnClick: function() {
      this.$refs.myGrid.exportdata("pdf", "jqxGrid");
    },

    excelBtnOnClick: function() {
      this.$refs.myGrid.exportdata("xls", "jqxGrid");
    },

    columnsBtnOnClick: function() {
      if (!this.displayListBox) {
        this.columnsBtnTxt = "Close";
        this.displayListBox = true;
      } else {
        this.columnsBtnTxt = "Display Columns";
        this.displayListBox = false;
      }
    },
    myListBoxOnCheckChange: function(event) {
      this.$refs.myGrid.beginupdate();
      if (event.args.checked) {
        this.$refs.myGrid.showcolumn(event.args.value);
      } else {
        this.$refs.myGrid.hidecolumn(event.args.value);
      }
      this.$refs.myGrid.endupdate();
    }
  }
};
</script>
