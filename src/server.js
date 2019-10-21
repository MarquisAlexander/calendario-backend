const express = require ("express");
const mongoose = require ("mongoose");
const routes = require ("./routes");
const cors = require("cors");
const path = require("path");

const app = express();

// conectando ao banco de dados
mongoose.connect('mongodb+srv://marquissantos:melhorsantos123@projeto-sjmrg.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

// todas as informações de envio e resposta para o cliente(navegador)

// falando para a aplicação que os arquivos são do formato .json
app.use(cors());
app.use(express.json());
app.use("/files", express.static(path.resolve(__dirname, "..", "uploads")));
app.use(routes); 


app.listen(3333);