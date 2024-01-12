//Importando o Express para fazer a criação de rotas
import express from "express";

//Importando o Cors para que a API possa ser acessada de fora
import cors from "cors";

const app = express();
var router = express.Router();

//A aplicação irá trabalhar no formato JSON

app.use(express.json(),
        cors());

//Rotas
//Redireciona o usuário ao cadastramento
app.get("/", function(req, res){
    res.sendFile("C:/projeto_web/src/front/login/index.html");
})

app.listen(3000, function(){
    console.log("Server online");
})