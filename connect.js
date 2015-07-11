
var http = require('http');
http.createServer(function (req,res) {
	res.end('Hai This is Saiteja!!');
}).listen(5000,'localhost');
console.log('Server running on port 5000');