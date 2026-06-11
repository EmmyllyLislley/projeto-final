require("dotenv").config();

const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const app = express();

app.use(cors());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
app.use(express.json());

const PORT = process.env.PORT;
const SECRET = process.env.JWT_SECRET;

/*
  Banco fake temporário
*/
const users = [
  {
    id: 1,
    username: "cinephile",
    email: "demo@cinelog.com",
    pass: "123456"
  }
];

/*
  LOGIN
*/
app.post("/login", (req, res) => {

  const { email, pass } = req.body;

  const user = users.find(
    u => u.email === email && u.pass === pass
  );

  if (!user) {

    return res.status(401).json({
      erro: "Email ou senha inválidos"
    });

  }

  /*
    Criando JWT
  */
  const token = jwt.sign(

    {
      id: user.id,
      username: user.username
    },

    SECRET,

    {
      expiresIn: "1h"
    }

  );

  res.json({

    token,

    user: {
      id: user.id,
      username: user.username,
      email: user.email
    }

  });

});

/*
  Verificar token
*/
function verifyToken(req, res, next) {

  const authHeader = req.headers.authorization;

  if (!authHeader) {

    return res.status(401).json({
      erro: "Token não enviado"
    });

  }

  const token = authHeader.split(" ")[1];

  try {

    const decoded = jwt.verify(token, SECRET);

    req.user = decoded;

    next();

  } catch {

    return res.status(403).json({
      erro: "Token inválido"
    });

  }

}

/*
  Rota protegida
*/
app.get("/profile", verifyToken, (req, res) => {

  res.json({
    mensagem: "Área protegida",
    user: req.user
  });

});
app.get("/titles", (req, res) => {
  const filmes = [
    { 
      id: 't1', 
      title: 'Oppenheimer', 
      type: 'movie', 
      year: 2023, 
      dir: 'Christopher Nolan',
      genres: ['Drama', 'Biografia']
    },
    { 
      id: 't2', 
      title: 'Duna: Parte 2', 
      type: 'movie', 
      year: 2024, 
      dir: 'Denis Villeneuve',
      genres: ['Ficção Científica', 'Ação']
    },
    { 
      id: 't5', 
      title: 'Succession', 
      type: 'series', 
      year: 2018, 
      dir: 'Jesse Armstrong',
      genres: ['Drama']
    }
  ];
  
  res.json(filmes);
});

app.listen(PORT, () => {

  console.log(`Servidor rodando na porta ${PORT}`);

});


app.post("/register", (req, res) => {

  const {
    username,
    email,
    password,
    age,
    favoriteGenre
  } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    !age ||
    !favoriteGenre
  ) {

    return res.status(400).json({
      erro: "Preencha todos os campos"
    });

  }

  if (password.length < 6) {

    return res.status(400).json({
      erro: "Senha muito curta"
    });

  }

  const existingUser = users.find(
    u => u.email === email
  );

  if (existingUser) {

    return res.status(400).json({
      erro: "Email já cadastrado"
    });

  }

  const newUser = {
    id: users.length + 1,
    username,
    email,
    pass: password,
    age,
    favoriteGenre
  };

  users.push(newUser);

  res.status(201).json({
    mensagem: "Usuário criado"
  });

});