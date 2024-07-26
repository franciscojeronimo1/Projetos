const express = require("express")

const app = express()



app.get('/usuarios', function (req, res) {
    res.send('Hello Wold!');
  });
  

app.listen(3000, () => {
    console.log(`Servidor rodando `)
})