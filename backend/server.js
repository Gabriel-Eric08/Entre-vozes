const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json()); // para receber JSON


const usersRoutes = require('./routes/users.routes');

app.use('/users', usersRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
