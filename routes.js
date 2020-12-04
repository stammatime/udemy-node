const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    if(url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>My first Page</title></head>')
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>')
        res.write('/<html>');
        return res.end();
    }
    if(url === '/message' && method=== 'POST'){
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk)
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString(); // create a new buffer and add all chunks to it, then to string
            // fs.writeFileSync('message.txt', parsedBody);
            const message = parsedBody.split('=')[1];
            // console.log(message)
            fs.writeFile('message.txt',message, (err) => {
                console.log(err);
                res.statusCode = 302
                res.setHeader('Location', '/');
                return res.end();
            });
        });
    }
    console.log("s")
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My first Page</title></head>')
    res.write('<body><h1>Hi from node.js</h1></body>')
    res.write('/<html>');
    res.end(); // send back to client
}

module.exports = requestHandler;