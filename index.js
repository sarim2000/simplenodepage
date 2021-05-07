const http = require("http");
const fs = require("fs");

http
	.createServer(function (req, res) {
		var q = req.url;
		var filename = "." + q;
		fs.readFile(filename, function (err, data) {
			if (err) {
				let x = fs.readFileSync("./404.html");
				console.log(x);
				res.writeHead(404, { "Content-Type": "text/html" });
				res.write(x);
				return res.end();
			}
			console.log(filename);
			res.writeHead(200, { "Content-Type": "text/html" });
			res.write(data);
			return res.end();
		});
	})
	.listen(8000);
