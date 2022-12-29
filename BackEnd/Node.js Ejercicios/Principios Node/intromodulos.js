const http = require('http'); //Carga modulo de Node.js
const url = require('url')

const date = require('./modules/retrieveDate');//Cargar modulo


http.createServer(function(req,res){
     res.writeHead(200, {'Content-Type': 'text/html'});
     res.write("La fecha y hora es: "+ date.RetrieveDate());
     //const query = url.parse(req.url, true).query; // para obtener informacion del url
     //const text = q.year + " " + query.month;
     res.end("Hola Mundooo!!");
}).listen(8080);
