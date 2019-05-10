// server.js

const express = require("express");
const bodyParser = require("body-parser");
const db = require("./models");
const app = express();
// CORS setup
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "*");
  next();
});
app.use(bodyParser.json());
app.use(express.static(__dirname + "/"));

// Service to Get Books

app.get("/api/books", (req, res) => {
  return db.sequelize
    .query("SELECT * FROM BooksWithCount ", {
      type: db.sequelize.QueryTypes.SELECT
    })
    .then(Books => res.send(Books))
    .catch(err => {
      console.log("There was an error querying books", JSON.stringify(err));
      return res.send(err);
    });
});

// Service to Get Inventory of a Book
app.get("/api/inventory/:isbn", (req, res) => {
  const isbn = parseInt(req.params.isbn);
  console.log("Checking Inventory for ISBN" + isbn);
  return db.sequelize
    .query(
      "select id, isbn, bookCode, studentID, firstName, lastName, checkedOutDate, dueDate" +
        " from BookInventoryWithStudent where isbn = " +
        isbn,
      {
        type: db.sequelize.QueryTypes.SELECT
      }
    )
    .then(inventory => res.send(inventory))
    .catch(err => {
      console.log("There was an error in Inventory Query", JSON.stringify(err));
      return res.send(err);
    });
});

// Service to Get Students
app.get("/api/students", (req, res) => {
  return db.sequelize
    .query("SELECT * FROM StudentsWithCount ", {
      type: db.sequelize.QueryTypes.SELECT
    })
    .then(Books => res.send(Books))
    .catch(err => {
      console.log("There was an error querying students", JSON.stringify(err));
      return res.send(err);
    });
});

// Service to Get Transactions by Student
app.get("/api/transactions/:studentID", (req, res) => {
  const studentID = parseInt(req.params.studentID);
  return db.sequelize
    .query(
      "SELECT id, isbn, bookName, author, bookCode, checkedOutDate, dueDate, returnDate, imageLink" +
        " FROM TransReport1 where studentID = " +
        studentID +
        " and returnDate isnull",
      {
        type: db.sequelize.QueryTypes.SELECT
      }
    )
    .then(transactions => res.send(transactions))
    .catch(err => {
      console.log(
        "There was an error in Transactions Query",
        JSON.stringify(err)
      );
      return res.send(err);
    });
});

// Service to Get Report Data for Books Currently Issued
app.get("/api/report", (req, res) => {
  return db.sequelize
    .query("SELECT * FROM `TransReport1` ", {
      type: db.sequelize.QueryTypes.SELECT
    })
    .then(report => res.send(report))
    .catch(err => {
      console.log("There was an error in Report Query", JSON.stringify(err));
      return res.send(err);
    });
});

// Service to Get Books in Stock
app.get("/api/available", (req, res) => {
  return db.sequelize
    .query(
      "SELECT isbn, bookName, author, publisher, availableQty, bookCode, imageLink FROM BooksInStock",
      {
        type: db.sequelize.QueryTypes.SELECT
      }
    )
    .then(report => res.send(report))
    .catch(err => {
      console.log("There was an error in Report Query", JSON.stringify(err));
      return res.send(err);
    });
});

// Service to Add New Books
app.post("/api/books", (req, res) => {
  const { isbn, bookName, author, publisher, imageLink } = req.body;
  return db.Books.create({ isbn, bookName, author, publisher, imageLink })
    .then(books => res.send(books))
    .catch(err => {
      console.log(
        "***There was an error creating a book",
        JSON.stringify(books)
      );
      return res.status(400).send(err);
    });
});

// Service to Add New Students
app.post("/api/students", (req, res) => {
  const { studentID, firstName, lastName, grade, phone, email } = req.body;
  return db.Students.create({
    studentID,
    firstName,
    lastName,
    grade,
    phone,
    email
  })
    .then(students => res.send(students))
    .catch(err => {
      console.log(
        "***There was an error creating a student",
        JSON.stringify(students)
      );
      return res.status(400).send(err);
    });
});

// Service to Checkout a Book
app.post("/api/transactions", (req, res) => {
  const { studentID, isbn, bookCode, checkedOutDate, dueDate } = req.body;
  return db.Transactions.create({
    studentID,
    isbn,
    bookCode,
    checkedOutDate,
    dueDate
  })
    .then(transactions => res.send(transactions))
    .catch(err => {
      console.log(
        "***There was an error creating a transaction",
        JSON.stringify(transactions)
      );
      return res.status(400).send(err);
    });
});

// Service to Create a New Book Code
app.post("/api/inventory", (req, res) => {
  const { isbn, bookCode, checkedOut } = req.body;
  return db.BooksInventory.create({
    isbn,
    bookCode,
    checkedOut
  })
    .then(bookCodes => res.send(bookCodes))
    .catch(err => {
      console.log(
        "***There was an error creating a Book Code",
        JSON.stringify(bookCodes)
      );
      return res.status(400).send(err);
    });
});

// Service to Delete a Book
app.delete("/api/books/:id", (req, res) => {
  const id = parseInt(req.params.id);
  return db.Books.findById(id)
    .then(books => books.destroy())
    .then(() => res.send({ id }))
    .catch(err => {
      console.log("***Error deleting a book", JSON.stringify(err));
      res.status(400).send(err);
    });
});

// Service to Delete a student
app.delete("/api/students/:id", (req, res) => {
  const id = parseInt(req.params.id);
  return db.Students.findById(id)
    .then(students => students.destroy())
    .then(() => res.send({ id }))
    .catch(err => {
      console.log("***Error deleting a student", JSON.stringify(err));
      res.status(400).send(err);
    });
});

// Service to Delete a BookCode
app.delete("/api/inventory/:id", (req, res) => {
  const id = parseInt(req.params.id);
  return db.BooksInventory.findById(id)
    .then(bookCodes => bookCodes.destroy())
    .then(() => res.send({ id }))
    .catch(err => {
      console.log("***Error deleting a bookCode", JSON.stringify(err));
      res.status(400).send(err);
    });
});

// Service to Update a Book
app.put("/api/books/:id", (req, res) => {
  const id = parseInt(req.params.id);
  return db.Books.findById(id).then(books => {
    const { isbn, bookName, author, publisher, imageLink } = req.body;
    return books
      .update({ isbn, bookName, author, publisher, imageLink })
      .then(() => res.send(books))
      .catch(err => {
        console.log("***Error updating a book", JSON.stringify(err));
        res.status(400).send(err);
      });
  });
});

// Service to Update a Student
app.put("/api/students/:id", (req, res) => {
  const id = parseInt(req.params.id);
  return db.Students.findById(id).then(students => {
    const { studentID, firstName, lastName, grade, phone, email } = req.body;
    return students
      .update({ studentID, firstName, lastName, grade, phone, email })
      .then(() => res.send(students))
      .catch(err => {
        console.log("***Error updating a student", JSON.stringify(err));
        res.status(400).send(err);
      });
  });
});

// Service to Return a Book
app.put("/api/transactions/:id", (req, res) => {
  const id = parseInt(req.params.id);
  return db.Transactions.findById(id).then(transactions => {
    const {
      studentID,
      isbn,
      bookCode,
      checkedOutDate,
      dueDate,
      returnDate
    } = req.body;
    return transactions
      .update({
        studentID,
        isbn,
        bookCode,
        checkedOutDate,
        dueDate,
        returnDate
      })
      .then(() => res.send(transactions))
      .catch(err => {
        console.log("***Error updating a transaction", JSON.stringify(err));
        res.status(400).send(err);
      });
  });
});

app.listen(3000, () => {
  console.log("Server is up on port 3000");
});
