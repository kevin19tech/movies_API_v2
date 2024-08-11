const express = require('express');
const app = express();
const port = 3000; //Porta em que a aplicação vai rodar

// Middleware para interpretar o corpo das requisições como JSON
app.use(express.json());

/*Definindo uma rota simples
app.get('/', (req,res) => {
    res.send('testando...1,2,3')
});*/

//Iniciando o servidor na porta especificada
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
})

