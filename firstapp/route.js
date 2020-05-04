const fs = require('fs');
const users = ["Deepak", "Ashish"];
const requestHandler = ((req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === "/") {
        res.write('<html>');
        res.write('<body>');
        res.write('<h1>Welcome to first server</h1>');
        res.write('<a href="/users">Users List</a>');
        res.write('<form method="POST" action="/create-user">');
        res.write('<input type="text" name="username">');
        res.write('<input type="submit">');
        res.write('</form>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }

    if (url === "/users") {
        res.write('<html>');
        res.write('<body>');
        res.write('<ul>');
        for (i = 0; i < users.length; i++) {
            res.write('<li>' + users[i] + '</li>');
        }
        res.write('</ul>');
        res.write('<a href="/">Back to home</a>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }

    if (url === "/create-user") {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });

        return req.on('end', () => {
            const parseBody = Buffer.concat(body).toString();
            const username = parseBody.split("=")[1];
            users.push(username);
            res.statusCode = 302;
            res.setHeader("location", "/users");
            return res.end();
        });
    }
});

module.exports = {
    handler: requestHandler,
    someText: "Hello world"
}
