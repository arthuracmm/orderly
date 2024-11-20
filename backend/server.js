const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "orderlydb"
});

app.post('/login', (req, res) => {
    const sql = "SELECT * FROM login WHERE email = ? AND password = ?";
    db.query(sql, [req.body.email, req.body.password], (err, data) => {
        if (err) return res.status(500).json({ message: "Error connecting to the database" });
        
        if (data.length > 0) {
            const user = data[0];
            return res.status(200).json({
                message: "Login Bem Sucedido",
                role: user.admin ? "admin" : "user",
                userId: user.id, // Inclua o ID do usuário
            });
        } else {
            return res.status(401).json({ message: "Não Existe" });
        }
    });
});

app.get('/users/:id', (req, res) => {
    const sql = "SELECT * FROM login WHERE id = ?";
    db.query(sql, [req.params.id], (err, data) => {
        if (err) return res.status(500).json({ message: "Error connecting to the database" });
        
        if (data.length > 0) {
            return res.status(200).json(data[0]); // Retorna o usuário
        } else {
            return res.status(404).json({ message: "Usuário não encontrado" });
        }
    });
});

app.post('/register', (req, res) => {
    const { name, email, password, cpf, cep, telefone, endereco } = req.body;
  
    const sql = "INSERT INTO login (nome, email, password, cpf, cep, telefone, endereco, admin) VALUES (?, ?, ?, ?, ?, ?, ?, false)";
    db.query(sql, [name, email, password, cpf, cep, telefone, endereco], (err, result) => {
        if (err) {
            console.error(err); // Adicione isso para depurar erros
            return res.status(500).json({ message: "Erro ao cadastrar usuário" });
        }
        return res.status(200).json({ message: "Usuário cadastrado com sucesso" });
    });
});




app.listen(8081, () => {
    console.log("Listening...");
});
