const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());


const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "projectx",
  });

app.post('/register', (req, res) => {
    const username = req.body.username;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const password = req.body.password;

    db.query(
        "INSERT INTO user (username, lastname, email, password) VALUES (?, ?, ?, ?)",
        [username, lastname, email, password],
        (err, result)=> {
            console.log(err);
        }
    )
});

app.post('/contactform', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;

  db.query(
      "INSERT INTO contact (name, email, message) VALUES (?, ?, ?)",
      [name, email, message],
      (err, result)=> {
          console.log(err);
      }
  )
});

app.post('/subscription', (req, res) => {
  const email = req.body.email;

  db.query(
      "INSERT INTO subscriptions (email) VALUES (?)",
      [email],
      (err, result)=> {
          console.log(err);
      }
  )
});



app.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    db.query(
        "SELECT * FROM user WHERE email = ? AND password = ?",
        [email, password],
        (err, result)=> {
            if(err) {
                res.send({err:err});
            }
            if (result.length > 0) {
                res.send(result);
                } else({message: "Wrong username/password combination!"});
            }
    );
});

//starts
app.post("/createProduct", (req, res) => {
    const name = req.body.name;
    const price = req.body.price;
    const brand = req.body.brand;
    const amount = req.body.amount;
    const description = req.body.description;
    const imagelink = req.body.imagelink;
    const type = req.body.type;
    const departament = req.body.departament;
    const year = req.body.year;
    const prodcondition = req.body.prodcondition;
  
    db.query(
      "INSERT INTO product (name,	price,	brand,	amount,	description,	imagelink,	type, departament, year, prodcondition) VALUES (?,?,?,?,?,?,?,?,?,?)",
      [name, price, brand, amount, description, imagelink, type, departament, year, prodcondition],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send("Values Inserted");
        }
      }
    );
  });
  
  app.get("/Products", (req, res) => {
    db.query("SELECT * FROM product", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });
  
  app.delete("/delete/:productID", (req, res) => {
    const productID = req.params.productID;
    db.query(
      "DELETE FROM product WHERE productID = " + productID,
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      }
    );
  });

  app.post("/ProductsSorted", (req, res) => {
    const sort = req.body.sort;
    db.query("SELECT * FROM product ORDER BY price " + sort , (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

  app.post("/ProductsFiltered", (req, res) => {
    const departament = req.body.departament;
    db.query("SELECT * FROM product WHERE departament= ?", [departament] , (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

  app.post("/YearFiltered", (req, res) => {
    const year = req.body.year;
    db.query("SELECT * FROM product WHERE year= ?", [year] , (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

  app.post("/bothFiltered", (req, res) => {
    const departament = req.body.departament;
    const year = req.body.year;
    db.query("SELECT * FROM product WHERE departament=? AND year= ?", [departament, year] , (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });
  //end


app.listen(3001, () => {
    console.log("server running");
});

