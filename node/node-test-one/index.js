const http = require("http");
const url = require("url")
const os = require("os")

http.createServer((req, res) => {
    const urls = url.parse(req.url).pathname;

    if (urls === "/") {

        const details = os.cpus()

        res.write(JSON.stringify(details));
        res.end();

    } else if (urls === "/cart") {

        res.write("Cart Page")
        res.end();

    }
    else{
        res.write("Error Page");
        res.end();

    }



}).listen(3000)