const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let texto = "nao ha texto impresso.";

app.post('/v1/gravarTexto', function (req, res) {
	console.log(req.body.texto)
	texto = req.body.texto;

  	res.send("Backup efetuado com sucesso.");
});

app.get('/v1/mostarTextoGravado', function (req, res) {
	var t = {texto: texto};
  	res.send(t);
});

app.listen(3050, () => {
 console.log(`SWEDA Backup Status ${app.name} listening on port 3050`);
});
