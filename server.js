// server.js

const express = require("express");
const bodyParser = require("body-parser");
const db = require("./models"); // new require for db object
const app = express();

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

app.get("/api/books", (req, res) => {
  return db.Books.findAll()
    .then(Books => res.send(Books))
    .catch(err => {
      console.log("There was an error querying books", JSON.stringify(err));
      return res.send(err);
    });
});

app.get("/api/students", (req, res) => {
  return db.Students.findAll()
    .then(Students => res.send(Students))
    .catch(err => {
      console.log("There was an error querying students", JSON.stringify(err));
      return res.send(err);
    });
});

app.get("/api/transactions/:studentID", (req, res) => {
  const studentID = parseInt(req.params.studentID);
  return db.sequelize
    .query(
      "SELECT id, isbn, bookName, author, bookCode, checkedOutDate, dueDate, returnDate" +
        " FROM TransReport1 where studentID = " +
        studentID +
        " and returnDate isnull",
      {
        type: db.sequelize.QueryTypes.SELECT
      }
    )
    .then(contacts => res.send(contacts))
    .catch(err => {
      console.log(
        "There was an error in Transactions Query",
        JSON.stringify(err)
      );
      return res.send(err);
    });
});

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

app.get("/api/available", (req, res) => {
  return db.sequelize
    .query(
      "SELECT isbn, bookName, author, publisher, availableQty, bookCode FROM BooksInStock",
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

app.post("/api/books", (req, res) => {
  const { isbn, bookName, author, publisher } = req.body;
  return db.Books.create({ isbn, bookName, author, publisher })
    .then(books => res.send(books))
    .catch(err => {
      console.log(
        "***There was an error creating a book",
        JSON.stringify(books)
      );
      return res.status(400).send(err);
    });
});

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

app.put("/api/books/:id", (req, res) => {
  const id = parseInt(req.params.id);
  return db.Books.findById(id).then(books => {
    const { isbn, bookName, author, publisher } = req.body;
    return books
      .update({ isbn, bookName, author, publisher })
      .then(() => res.send(books))
      .catch(err => {
        console.log("***Error updating a book", JSON.stringify(err));
        res.status(400).send(err);
      });
  });
});

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
