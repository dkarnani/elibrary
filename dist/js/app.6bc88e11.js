(function(t){function e(e){for(var i,o,r=e[0],d=e[1],l=e[2],u=0,v=[];u<r.length;u++)o=r[u],s[o]&&v.push(s[o][0]),s[o]=0;for(i in d)Object.prototype.hasOwnProperty.call(d,i)&&(t[i]=d[i]);c&&c(e);while(v.length)v.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],i=!0,r=1;r<a.length;r++){var d=a[r];0!==s[d]&&(i=!1)}i&&(n.splice(e--,1),t=o(o.s=a[0]))}return t}var i={},s={app:0},n=[];function o(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=i,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(a,i,function(e){return t[e]}.bind(null,i));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/elibrary/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],d=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var c=d;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var i=a("64a9"),s=a.n(i);s.a},"0e6e":function(t,e,a){},"2a7b":function(t,e,a){"use strict";var i=a("0e6e"),s=a.n(i);s.a},"2e11":function(t,e,a){"use strict";var i=a("d2c3"),s=a.n(i);s.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("097d");var i=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("v-app",{attrs:{light:""}},[a("v-navigation-drawer",{staticClass:"primary lighten-3",attrs:{clipped:t.clipped,"enable-resize-watcher":"",app:"",dark:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list",t._l(t.items,function(e){return a("v-list-tile",{key:e.title,attrs:{to:"#"==e.path?"":e.path}},[a("v-list-tile-action",[a("v-icon",[t._v(t._s(e.icon))])],1),a("v-list-tile-content",[a("v-list-tile-title",[t._v(t._s(e.title))])],1)],1)}),1)],1),a("v-toolbar",{attrs:{fixed:"",app:"","clipped-left":t.clipped}},[a("v-toolbar-side-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),a("v-toolbar-title",[t._v("Troy's eLibrary")]),a("v-spacer")],1),a("v-content",[a("v-container",{attrs:{fluid:""}},[a("router-view")],1)],1)],1)],1)},n=[],o={data:function(){return{drawer:!0,clipped:!1,items:[{icon:"books",title:"Maintain eBooks",path:"/books"},{icon:"face",title:"Maintain Students",path:"/students"},{icon:"shopping_cart",title:"Checkout / Return",path:"/checkout"},{icon:"tv",title:"Books Issued Report",path:"/report"}]}}},r=o,d=(a("034f"),a("2877")),l=Object(d["a"])(r,s,n,!1,null,null,null);l.options.__file="App.vue";var c=l.exports,u=a("8c4f"),v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-card",[a("v-card-title",{attrs:{"primary-title":""}},[a("h1",[t._v("eBooks")]),a("v-spacer"),a("v-text-field",{attrs:{"append-icon":"search",label:"Search","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),a("v-dialog",{attrs:{width:"500"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-btn",{staticClass:"text-xs-right",attrs:{slot:"activator",color:"primary"},slot:"activator"},[t._v("Add new Book")]),a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[t._v(t._s(t.formTitle))])]),a("v-card-text",[a("v-form",{ref:"form"},[a("v-container",{attrs:{"grid-list-md":""}},[a("v-layout",{attrs:{"align-center":"","justify-center":"",column:"","fill-height":""}},[a("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[-1===this.editedIndex?a("v-text-field",{attrs:{type:"number",rules:t.isbnRules,label:"ISBN",min:"1",required:""},model:{value:t.editedItem.isbn,callback:function(e){t.$set(t.editedItem,"isbn",e)},expression:"editedItem.isbn"}}):t._e(),-1!=this.editedIndex?a("v-text-field",{attrs:{type:"number",label:"ISBN",min:"1",disabled:""},model:{value:t.editedItem.isbn,callback:function(e){t.$set(t.editedItem,"isbn",e)},expression:"editedItem.isbn"}}):t._e()],1),a("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[a("v-text-field",{attrs:{rules:t.bookNameRules,counter:30,label:"Book name",required:""},model:{value:t.editedItem.bookName,callback:function(e){t.$set(t.editedItem,"bookName",e)},expression:"editedItem.bookName"}})],1),a("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[a("v-text-field",{attrs:{label:"Author"},model:{value:t.editedItem.author,callback:function(e){t.$set(t.editedItem,"author",e)},expression:"editedItem.author"}})],1),a("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[a("v-text-field",{attrs:{label:"Publisher"},model:{value:t.editedItem.publisher,callback:function(e){t.$set(t.editedItem,"publisher",e)},expression:"editedItem.publisher"}})],1)],1)],1)],1)],1),a("v-divider"),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:t.close}},[t._v("Cancel")]),a("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:t.save}},[t._v("Save")])],1)],1)],1),a("v-dialog",{attrs:{width:"900"},model:{value:t.codesDialog,callback:function(e){t.codesDialog=e},expression:"codesDialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[t._v("Edit Book Codes")])]),a("v-card-text",[a("v-container",{attrs:{fluid:"","grid-list-md":""}},[a("v-layout",[a("table",[a("tr",[a("th",[t._v("ISBN")]),a("th",[t._v("Book Name")]),a("th",[t._v("Author")]),a("th",[t._v("Publisher")])]),a("tr",[a("td",[t._v(t._s(t.editedItem.isbn))]),a("td",[t._v(t._s(t.editedItem.bookName))]),a("td",[t._v(t._s(t.editedItem.author))]),a("td",[t._v(t._s(t.editedItem.publisher))])])])]),a("br"),a("br"),a("v-layout",[a("v-flex",{attrs:{md12:""}},[a("div",{staticClass:"text-xs-right"},[a("v-btn",{staticClass:"mr-0",attrs:{color:"primary"},on:{click:function(e){t.openAddCode()}}},[t._v("Add new Code")])],1),a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.bookCodesHeaders,items:t.bookCodes},scopedSlots:t._u([{key:"items",fn:function(e){return[a("td",{staticClass:"text-xs-center"},[t._v(t._s(e.item.bookCode))]),a("td",{staticClass:"text-xs-center"},[t._v(t._s(e.item.studentID))]),a("td",{staticClass:"text-xs-center"},[t._v(t._s(e.item.firstName))]),a("td",{staticClass:"text-xs-center"},[t._v(t._s(e.item.lastName))]),a("td",{staticClass:"text-xs-center"},[t._v(t._s(e.item.checkedOutDate))]),a("td",{staticClass:"text-xs-center"},[t._v(t._s(e.item.dueDate))]),a("td",{staticClass:"justify-center layout px-0"},[e.item.studentID?t._e():a("v-icon",{attrs:{small:""},on:{click:function(a){t.deleteBookCode(e.item)}}},[t._v("delete")])],1)]}}])})],1)],1)],1)],1),a("v-divider"),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:t.closeCodes}},[t._v("Close")])],1)],1)],1),a("v-dialog",{attrs:{width:"300"},model:{value:t.addCodeDialog,callback:function(e){t.addCodeDialog=e},expression:"addCodeDialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[t._v("New Book Code")])]),a("v-card-text",[a("v-form",{ref:"codeform"},[a("v-container",{attrs:{"grid-list-md":""}},[a("v-layout",{attrs:{"align-center":"","justify-center":"",column:"","fill-height":""}},[a("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[a("v-text-field",{attrs:{type:"string",rules:t.bookCodeRules,label:"Book Code",min:"1",required:""},model:{value:t.editedBookCode.bookCode,callback:function(e){t.$set(t.editedBookCode,"bookCode",e)},expression:"editedBookCode.bookCode"}})],1)],1)],1)],1)],1),a("v-divider"),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:t.closeAddCode}},[t._v("Cancel")]),a("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:t.saveAddCode}},[t._v("Save")])],1)],1)],1),a("v-data-table",{staticClass:"elevation-1",attrs:{expand:"",headers:t.headers,items:t.books,search:t.search},scopedSlots:t._u([{key:"items",fn:function(e){return[a("td",{staticClass:"text-xs-center"},[t._v(t._s(e.item.isbn))]),a("td",{staticClass:"text-xs-center"},[t._v(t._s(e.item.bookName))]),a("td",{staticClass:"text-xs-center"},[t._v(t._s(e.item.author))]),a("td",{staticClass:"text-xs-center"},[t._v(t._s(e.item.publisher))]),a("td",{staticClass:"text-xs-center"},[t._v(t._s(e.item.count))]),a("td",{staticClass:"text-xs-center"},[a("v-btn",{attrs:{color:"primary"},on:{click:function(a){t.editCode(e.item)}}},[t._v("Edit Codes")])],1),a("td",{staticClass:"justify-center pa-2"},[a("v-tooltip",{attrs:{top:""}},[a("v-icon",{staticClass:"pa-2 mr-2",attrs:{slot:"activator",small:""},on:{click:function(a){t.editItem(e.item)}},slot:"activator"},[t._v("edit")]),a("span",[t._v("Edit book")])],1),a("v-tooltip",{attrs:{top:""}},[0===e.item.count?a("v-icon",{staticClass:"pa-2 mr-2",attrs:{slot:"activator",small:""},on:{click:function(a){t.deleteItem(e.item)}},slot:"activator"},[t._v("delete")]):t._e(),a("span",[t._v("Delete book")])],1)],1)]}}])},[a("template",{slot:"no-data"},[a("v-btn",{attrs:{color:"primary"},on:{click:t.initialize}},[t._v("Reset")])],1)],2)],1),a("td",{staticClass:"right ma-2"},[a("v-tooltip",{attrs:{"max-width":"200",left:"","close-delay":"500"}},[a("v-icon",{attrs:{slot:"activator"},slot:"activator"},[t._v("info")]),a("span",[t._v("This page is for renting out books. The user can view, edit, or remove from the collection of books and codes.")])],1)],1)],1)},m=[],h=(a("20d6"),a("5176")),f=a.n(h),p=a("bc3a"),b=a.n(p),x={data:function(){return{search:"",dialog:!1,codesDialog:!1,addCodeDialog:!1,booksURL:"https://elibrary.node-express.com/api/books",inventoryURL:"https://elibrary.node-express.com/api/inventory",headers:[{text:"ISBN",align:"center",value:"isbn"},{text:"Book Name",align:"center",value:"bookName"},{text:"Author",align:"center",value:"author"},{text:"Publisher",align:"center",value:"publisher"},{text:"Qty",align:"center",value:"count"}],bookCodesHeaders:[{text:"Book Code",align:"center",value:"bookCode"},{text:"Student ID",align:"center",value:"studentID"},{text:"First Name",align:"center",value:"firstName"},{text:"Last Name",align:"center",value:"lastName"},{text:"Checked Out Date",align:"center",value:"checkedOutDate"},{text:"Due Date",align:"center",value:"dueDate"}],books:[],bookCodes:[],editedIndex:-1,editedItem:{id:0,isbn:"",bookName:"",author:"",publisher:"",count:0},editedBookCode:{id:0,isbn:"",bookCode:"",checkedOut:0},defaultItem:{isbn:"",bookName:"",author:"",publisher:"",count:0},bookNameRules:[function(t){return!!t||"Book Name is required"},function(t){return t.length<=30||"Book Name must be less than 30 characters"}]}},computed:{formTitle:function(){return-1===this.editedIndex?"New Book":"Edit Book"},isbnRules:function(){var t=this,e=[],a=function(t){return!!t||"ISBN is required"};return e.push(a),a=function(t){return t.length<=10||"ISBN must be less than 10 digits"},e.push(a),this.editedItem&&(a=function(e){return!t.books.some(function(t){return t.isbn==e})||"ISBN already exists"},e.push(a)),e},bookCodeRules:function(){var t=this,e=[],a=function(t){return!!t||"Book Code is required"};return e.push(a),a=function(t){return t.length<=6||"Book Code must be less than 6 digits"},e.push(a),a=function(e){return!t.bookCodes.some(function(t){return t.bookCode==e})||"Book Code already exists"},e.push(a),e}},watch:{isbn:"validateField",bookCode:"validateBookCodeField",dialog:function(t){t||this.close()}},created:function(){this.initialize()},methods:{initialize:function(){var t=this;b.a.get(this.booksURL).then(function(e){t.books=e.data})},editItem:function(t){this.editedIndex=this.books.indexOf(t),this.editedItem=f()({},t),this.dialog=!0},editCode:function(t){var e=this;this.editedIndex=this.books.indexOf(t),this.editedItem=f()({},t),void 0!=t&&b.a.get(this.inventoryURL+"/"+t.isbn).then(function(t){e.bookCodes=t.data}),this.codesDialog=!0},deleteItem:function(t){confirm("Are you sure you want to delete this eBook record?")&&this.deleteBook(t)},close:function(){var t=this;this.dialog=!1,setTimeout(function(){t.editedItem=f()({},t.defaultItem),t.editedIndex=-1},300)},save:function(){this.$refs.form.validate()&&(this.onAddOrUpdateBook(this.editedItem),this.close())},validateField:function(){this.$refs.form.validate()},validateBookCodeField:function(){this.$refs.codeform.validate()},closeCodes:function(){var t=this;this.codesDialog=!1,setTimeout(function(){t.editedItem=f()({},t.defaultItem),t.editedIndex=-1},300)},openAddCode:function(){this.addCodeDialog=!0},closeAddCode:function(){this.addCodeDialog=!1},deleteBookCode:function(t){var e=this;return b.a.delete("".concat(this.inventoryURL,"/").concat(t.id)).then(function(t){var a=e.bookCodes.slice(),i=a.findIndex(function(e){return e.id===t.data.id});a.splice(i,1),e.bookCodes=a})},saveAddCode:function(){var t=this;if(this.$refs.codeform.validate())return this.editedBookCode.isbn=this.editedItem.isbn,b.a.post(this.inventoryURL,this.editedBookCode).then(function(e){e.data.checkedOut=e.data.checkedOut?1:0;var a=t.bookCodes.slice();a.push(e.data),t.bookCodes=a,t.closeAddCode()})},onAddOrUpdateBook:function(t){t.id?this.updateBook(t):this.addBook(t)},addBook:function(t){var e=this;return b.a.post(this.booksURL,t).then(function(t){e.initialize()})},updateBook:function(t){var e=this;return b.a.put("".concat(this.booksURL,"/").concat(t.id),t).then(function(t){e.initialize()})},deleteBook:function(t){var e=this;return b.a.delete("".concat(this.booksURL,"/").concat(t.id)).then(function(t){e.initialize()})}}},k=x,_=(a("2e11"),Object(d["a"])(k,v,m,!1,null,null,null));_.options.__file="BooksMaintain.vue";var g=_.exports,C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-card",[a("v-card-title",{attrs:{"primary-title":""}},[a("h1",[t._v("Checkout / Return")])]),a("v-card-text",[a("v-container",{attrs:{fluid:""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-combobox",{attrs:{items:t.students,chips:"",label:"Select a student",autocomplete:"","return-object":""},on:{input:t.onStudentSelection},scopedSlots:t._u([{key:"selection",fn:function(e){return[t._v(t._s(e.item.firstName)+" "+t._s(e.item.lastName))]}},{key:"item",fn:function(e){return[a("v-list-tile-content",[a("v-list-tile-title",{domProps:{innerHTML:t._s(e.item.firstName+" "+e.item.lastName)}}),a("v-list-tile-sub-title",{domProps:{innerHTML:t._s("Student ID: "+e.item.studentID)}})],1)]}}]),model:{value:t.selectedStudent,callback:function(e){t.selectedStudent=e},expression:"selectedStudent"}})],1),null!==t.selectedStudent?[a("v-flex",{attrs:{xs12:"",sm6:""}},[a("v-subheader",{domProps:{textContent:t._s("Books Issued")}})],1),a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.booksIssuedHeaders,items:t.booksIssued},scopedSlots:t._u([{key:"items",fn:function(e){return[a("td",{staticClass:"text-xs-center"},[t._v(t._s(e.item.isbn))]),a("td",{staticClass:"text-xs-center"},[t._v(t._s(e.item.bookName))]),a("td",{staticClass:"text-xs-center"},[t._v(t._s(e.item.author))]),a("td",{staticClass:"text-xs-center"},[t._v(t._s(e.item.bookCode))]),a("td",{staticClass:"text-xs-center"},[t._v(t._s(e.item.checkedOutDate))]),a("td",{staticClass:"text-xs-center"},[t._v(t._s(e.item.dueDate))]),a("td",{staticClass:"justify-center layout px-0"},[a("v-btn",{attrs:{color:"primary"},on:{click:function(a){t.returnBook(e.item)}}},[t._v("Return")])],1)]}}])})]:t._e(),null!==t.selectedStudent?[a("v-flex",{attrs:{xs12:"",sm8:""}},[a("v-spacer"),a("v-subheader",{domProps:{textContent:t._s("Books Available")}}),a("v-text-field",{attrs:{"append-icon":"search",label:"Search Available Books","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.booksAvailableHeaders,items:t.booksAvailable,search:t.search},scopedSlots:t._u([{key:"items",fn:function(e){return[a("td",{staticClass:"text-xs-center"},[t._v(t._s(e.item.isbn))]),a("td",{staticClass:"text-xs-center"},[t._v(t._s(e.item.bookName))]),a("td",{staticClass:"text-xs-center"},[t._v(t._s(e.item.author))]),a("td",{staticClass:"text-xs-center"},[t._v(t._s(e.item.publisher))]),a("td",{staticClass:"text-xs-center"},[t._v(t._s(e.item.availableQty))]),a("td",{staticClass:"text-xs-center"},[t._v(t._s(e.item.bookCode))]),a("td",{staticClass:"justify-center layout px-0"},[a("v-btn",{attrs:{color:"primary"},on:{click:function(a){t.checkoutBook(e.item)}}},[t._v("Checkout")])],1)]}}])})]:t._e()],2)],1)],1)],1)],1)},I=[],y={data:function(){return{studentsURL:"https://elibrary.node-express.com/api/students",transactionsURL:"https://elibrary.node-express.com/api/transactions",booksAvailableURL:"https://elibrary.node-express.com/api/available",search:"",students:[],booksIssued:[],booksAvailable:[],selectedStudent:null,booksIssuedHeaders:[{text:"ISBN",align:"center",value:"isbn"},{text:"Book Name",align:"center",value:"bookName"},{text:"Author",align:"center",value:"author"},{text:"Book Code",align:"center",value:"bookCode"},{text:"Checked Out Date",align:"center",value:"checkedOutDate"},{text:"Due Date",align:"center",value:"dueDate"}],booksAvailableHeaders:[{text:"ISBN",align:"center",value:"isbn"},{text:"Book Name",align:"center",value:"bookName"},{text:"Author",align:"center",value:"author"},{text:"Publisher",align:"center",value:"publisher"},{text:"Available Qty",align:"center",value:"availableQty"},{text:"Book Code",align:"center",value:"bookCode"}]}},created:function(){void 0!=this.$route.params.navStudent?(this.selectedStudent=this.$route.params.navStudent,this.onStudentSelection(),this.initialize()):this.initialize()},methods:{initialize:function(){var t=this;b.a.get(this.studentsURL).then(function(e){t.students=e.data})},onStudentSelection:function(){var t=this;void 0!=this.selectedStudent&&(b.a.get(this.transactionsURL+"/"+this.selectedStudent.studentID).then(function(e){t.booksIssued=e.data}),b.a.get(this.booksAvailableURL).then(function(e){t.booksAvailable=e.data}))},returnBook:function(t){var e=this;return t.returnDate=(new Date).toISOString().slice(0,10),b.a.put("".concat(this.transactionsURL,"/").concat(t.id),t).then(function(t){b.a.get(e.booksAvailableURL).then(function(t){e.booksAvailable=t.data,b.a.get(e.transactionsURL+"/"+e.selectedStudent.studentID).then(function(t){e.booksIssued=t.data})})})},checkoutBook:function(t){var e=this,a=new Date,i=new Date;i.setDate(a.getDate()+30),t.studentID=this.selectedStudent.studentID,t.checkedOutDate=a.toISOString().slice(0,10),t.dueDate=i.toISOString().slice(0,10),b.a.post(this.transactionsURL,t).then(function(t){b.a.get(e.booksAvailableURL).then(function(t){e.booksAvailable=t.data,b.a.get(e.transactionsURL+"/"+e.selectedStudent.studentID).then(function(t){e.booksIssued=t.data})})})}}},S=y,D=Object(d["a"])(S,C,I,!1,null,null,null);D.options.__file="CheckOut.vue";var N=D.exports,B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{"font-size":"13px","font-family":"Verdana",float:"left"}},[a("h1",[t._v("Books currently checked out")]),a("p"),a("p"),a("JqxGrid",{ref:"myGrid",attrs:{theme:"material",width:t.width,source:t.dataAdapter,columns:t.columns,columnsresize:!0,pageable:!0,sorting:!0}}),a("div",{staticStyle:{height:"60px","margin-top":"15px"}},[a("div",{staticStyle:{float:"left","margin-left":"15px"}},[a("JqxButton",{attrs:{theme:"material"},on:{click:function(e){t.pdfBtnOnClick()}}},[t._v("Export to PDF")])],1)])],1)},w=[],R=a("b8ed"),A=a("3af0"),O={name:"Report",components:{JqxGrid:R["a"],JqxButton:A["a"]},data:function(){return{width:"1200",dataAdapter:new jqx.dataAdapter(this.source),columns:[{text:"ID",datafield:"id",width:40},{text:"Student ID",datafield:"studentID",width:100,sortable:!0},{text:"First Name",datafield:"firstName",width:100,sortable:!0},{text:"Last Name",datafield:"lastName",width:100,sortable:!0},{text:"ISBN",datafield:"isbn",width:100,sortable:!1},{text:"Book Name",datafield:"bookName",width:100,sortable:!1},{text:"Author",datafield:"author",width:100,sortable:!1},{text:"Book Code",datafield:"bookCode",width:100,sortable:!1}]}},beforeCreate:function(){this.source={url:"https://elibrary.node-express.com/api/report",contenttype:"application/json",datatype:"json",datafields:[{name:"id",type:"number"},{name:"studentID",type:"string"},{name:"firstName",type:"string"},{name:"lastName",type:"string"},{name:"isbn",type:"number"},{name:"bookName",type:"string"},{name:"author",type:"string"},{name:"bookCode",type:"string"},{name:"checkedOutDate",type:"date"},{name:"dueDate",type:"date"},{name:"returnDate",type:"date"}],id:"id",sortcolumn:"studentID",sortdirection:"asc"}},methods:{pdfBtnOnClick:function(){this.$refs.myGrid.exportdata("pdf","jqxGrid")}}},L=O,j=Object(d["a"])(L,B,w,!1,null,null,null);j.options.__file="Report.vue";var U=j.exports,$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-card",{staticClass:"elevation-0"},[a("v-img",{attrs:{src:"http://www.literatureproject.com/images/ipad-ebooks.jpg","aspect-ratio":"5.00"}}),a("v-card-title",{staticClass:"layout justify-center",attrs:{"primary-title":""}},[a("h1",[t._v("Welcome to the e-Library")])]),a("v-card-text",[t._v("Please select one of the menu options")])],1)],1)},q=[],P={name:"Home"},z=P,T=Object(d["a"])(z,$,q,!1,null,null,null);T.options.__file="Home.vue";var E=T.exports,F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-card",[a("v-card-title",{attrs:{"primary-title":""}},[a("h1",[t._v("Students")]),a("v-spacer"),a("v-text-field",{attrs:{"append-icon":"search",label:"Search","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),a("v-dialog",{attrs:{width:"500"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-btn",{staticClass:"text-xs-right",attrs:{slot:"activator",color:"primary"},slot:"activator"},[t._v("Add new Student")]),a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[t._v(t._s(t.formTitle))])]),a("v-card-text",[a("v-form",{ref:"form"},[a("v-container",{attrs:{"grid-list-md":""}},[a("v-layout",{attrs:{"align-center":"","justify-center":"",column:"","fill-height":""}},[a("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[-1===this.editedIndex?a("v-text-field",{attrs:{type:"number",rules:t.idRules,label:"Student ID",min:"1",required:""},model:{value:t.editedItem.studentID,callback:function(e){t.$set(t.editedItem,"studentID",e)},expression:"editedItem.studentID"}}):t._e(),-1!=this.editedIndex?a("v-text-field",{attrs:{type:"number",label:"Student ID",min:"1",disabled:""},model:{value:t.editedItem.studentID,callback:function(e){t.$set(t.editedItem,"studentID",e)},expression:"editedItem.studentID"}}):t._e()],1),a("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[a("v-text-field",{attrs:{type:"name",rules:t.firstNameRules,counter:30,label:"First Name",required:""},model:{value:t.editedItem.firstName,callback:function(e){t.$set(t.editedItem,"firstName",e)},expression:"editedItem.firstName"}})],1),a("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[a("v-text-field",{attrs:{type:"name",rules:t.lastNameRules,counter:30,label:"Last Name",required:""},model:{value:t.editedItem.lastName,callback:function(e){t.$set(t.editedItem,"lastName",e)},expression:"editedItem.lastName"}})],1),a("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[a("v-text-field",{attrs:{type:"number",rules:t.gradeRules,counter:2,label:"Grade",required:""},model:{value:t.editedItem.grade,callback:function(e){t.$set(t.editedItem,"grade",e)},expression:"editedItem.grade"}})],1),a("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[a("v-text-field",{attrs:{type:"phoneNumber",rules:t.phoneRules,mask:"(###) ### - ####",label:"Phone Number"},model:{value:t.editedItem.phone,callback:function(e){t.$set(t.editedItem,"phone",e)},expression:"editedItem.phone"}})],1),a("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[a("v-text-field",{attrs:{type:"email",rules:t.emailRules,label:"Email"},model:{value:t.editedItem.email,callback:function(e){t.$set(t.editedItem,"email",e)},expression:"editedItem.email"}})],1)],1)],1)],1)],1),a("v-divider"),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:t.close}},[t._v("Cancel")]),a("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:t.save}},[t._v("Save")])],1)],1)],1),a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.students,search:t.search},scopedSlots:t._u([{key:"items",fn:function(e){return[a("td",{staticClass:"text-xs-center"},[t._v(t._s(e.item.studentID))]),a("td",{staticClass:"text-xs-center"},[t._v(t._s(e.item.firstName))]),a("td",{staticClass:"text-xs-center"},[t._v(t._s(e.item.lastName))]),a("td",{staticClass:"text-xs-center"},[t._v(t._s(e.item.grade))]),a("td",{staticClass:"text-xs-center"},[t._v(t._s(e.item.phone))]),a("td",{staticClass:"text-xs-center"},[t._v(t._s(e.item.email))]),a("td",{staticClass:"text-xs-center"},[t._v(t._s(e.item.dueCount))]),a("td",{staticClass:"justify-center",attrs:{width:"3%"}},[a("v-tooltip",{attrs:{top:""}},[0===e.item.dueCount?a("v-icon",{staticClass:"ma-9",attrs:{slot:"activator",small:""},on:{click:function(a){t.deleteItem(e.item)}},slot:"activator"},[t._v("delete")]):t._e(),a("span",[t._v("Delete student")])],1),a("v-tooltip",{attrs:{top:""}},[a("v-icon",{attrs:{slot:"activator",small:""},on:{click:function(a){t.editItem(e.item)}},slot:"activator"},[t._v("edit")]),a("span",[t._v("Edit student")])],1),a("v-tooltip",{attrs:{top:""}},[a("v-icon",{attrs:{slot:"activator",small:""},on:{click:function(a){t.navigateItem(e.item)}},slot:"activator"},[t._v("shopping_cart")]),a("span",[t._v("Checkout book")])],1)],1)]}}])},[a("template",{slot:"no-data"},[a("v-btn",{attrs:{color:"primary"},on:{click:t.initialize}},[t._v("Reset")])],1)],2)],1),a("td",{staticClass:"right ma-2"},[a("v-tooltip",{attrs:{"max-width":"200",left:"","close-delay":"500"}},[a("v-icon",{attrs:{slot:"activator"},slot:"activator"},[t._v("info")]),a("span",[t._v("This page is for maintaining the students. The user can view, edit, and remove the students' information, or can rent out a book for the student.")])],1)],1)],1)},M=[],H={data:function(){return{search:"",dialog:!1,codesDialog:!1,addCodeDialog:!1,studentsURL:"https://elibrary.node-express.com/api/students",headers:[{text:"Student ID",align:"center",value:"studentID"},{text:"First Name",align:"center",value:"firstName"},{text:"Last Name",align:"center",value:"lastName"},{text:"Grade",align:"center",value:"grade"},{text:"Phone",align:"center",value:"phone"},{text:"Email",align:"center",value:"email"},{text:"Books Borrowed",align:"center",value:"dueCount"}],students:[],editedIndex:-1,editedItem:{id:0,studentID:"",firstName:"",lastName:"",grade:"",phone:"",email:"",count:0},defaultItem:{studentID:"",firstName:"",lastName:"",grade:"",phone:"",email:"",count:0},firstNameRules:[function(t){return!!t||"First name is required"}],lastNameRules:[function(t){return!!t||"Last name is required"}],gradeRules:[function(t){return!!t||"Grade is required"}],phoneRules:[function(t){return t.length>=7||"Phone number should be at least 7 digits"}],emailRules:[function(t){return/.+@.+/.test(t)||"Must be valid E-mail"}]}},computed:{formTitle:function(){return-1===this.editedIndex?"New Student":"Edit Student"},idRules:function(){var t=this,e=[],a=function(t){return!!t||"Student ID is required"};return e.push(a),a=function(t){return t.length<=10||"Student ID must be less than 10 digits"},e.push(a),this.editedItem&&(a=function(e){return!t.students.some(function(t){return t.studentID==e})||"Student ID already exists"},e.push(a)),e}},watch:{studentID:"validateField",dialog:function(t){t||this.close()}},created:function(){this.initialize()},methods:{initialize:function(){var t=this;b.a.get(this.studentsURL).then(function(e){t.students=e.data})},validateField:function(){this.$refs.form.validate()},editItem:function(t){this.editedIndex=this.students.indexOf(t),this.editedItem=f()({},t),this.dialog=!0},bbbbigateItem:function(t){V.push({name:"checkout",params:{navStudent:t}})},deleteItem:function(t){confirm("Are you sure you want to delete this student record?")&&this.deleteStudent(t)},close:function(){var t=this;this.dialog=!1,setTimeout(function(){t.editedItem=f()({},t.defaultItem),t.editedIndex=-1},300)},save:function(){this.onAddOrUpdateStudent(this.editedItem),this.close()},onAddOrUpdateStudent:function(t){t.id?this.updateStudent(t):this.addStudent(t)},addStudent:function(t){var e=this;return b.a.post(this.studentsURL,t).then(function(t){e.initialize()})},updateStudent:function(t){var e=this;return b.a.put("".concat(this.studentsURL,"/").concat(t.id),t).then(function(t){e.initialize()})},deleteStudent:function(t){var e=this;return b.a.delete("".concat(this.studentsURL,"/").concat(t.id)).then(function(t){e.initialize()})}}},G=H,J=(a("2a7b"),Object(d["a"])(G,F,M,!1,null,null,null));J.options.__file="StudentsMaintain.vue";var Q=J.exports;i["default"].use(u["a"]);var V=new u["a"]({routes:[{path:"/",name:"home",component:E},{path:"/books",name:"booksmaintain",component:g},{path:"/students",name:"studentsmaintain",component:Q},{path:"/checkout",name:"checkout",component:N},{path:"/report",name:"report",component:U}]}),W=a("2f62");i["default"].use(W["a"]);var K=new W["a"].Store({state:{},mutations:{},actions:{}}),X=a("ce5b"),Y=a.n(X);a("bf40");i["default"].use(Y.a),i["default"].config.productionTip=!1,new i["default"]({router:V,store:K,render:function(t){return t(c)}}).$mount("#app")},"64a9":function(t,e,a){},d2c3:function(t,e,a){}});
//# sourceMappingURL=app.6bc88e11.js.map