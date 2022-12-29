const http = require('http'); //Carga modulo de Node.js
const fs = require('fs');//fs es file system permite crear actualizar y demas

http.createServer((req, res) => {
    fs.readFile('./html/demo.html',function(err, data){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end;
    });
}).listen(8080);