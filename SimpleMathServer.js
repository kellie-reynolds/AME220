var http = require("http");
var callback = function(req, res) {  // req --> request object; res --> response object

	var eq = req.url.substring(1);
	if(eq == "favicon.ico") {
	console.log(eq);
		res.end(""); // ignore
	}
	else {
		res.writeHead(200, {'Content-Type': 'text/plain'}); // send response header
		var ans = eval(eq).toString();
		res.end(ans); // send response body
	}
}

var server = http.createServer(callback) // creates an http server
server.listen(1234, "127.0.0.1"); // make server listen to port 1234
console.log("Server running at " + "http://127.0.0.1:1234");