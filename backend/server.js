const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "fatec123*",
    database: "orderlydb"
});

app.post('/login', (req, res) => {
    const sql = "SELECT * FROM login WHERE email = ? AND password = ?";
    db.query(sql, [req.body.email, req.body.password], (err, data) => {
        if (err) return res.status(500).json({ message: "Error connecting to the database" });
        
        if (data.length > 0) {
            return res.status(200).json({ message: "Login Bem Sucedido" });
        } else {
            return res.status(401).json({ message: "Não Existe" });
        }
    });
});

app.listen(8081, () => {
    console.log("Listening...");
});
