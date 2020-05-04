const http = require("http");
const bodyParser = require("body-parser");
const path = require("path");
const rootDir = require("./utils/path");



const express = require("express");
const app = express();
app.set("view engine","ejs");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const userRoutes = require("./routes/users");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.use('/admin', adminRoutes.routes);
app.use(shopRoutes);
app.use("/users",userRoutes.routes);

app.use((req, res, next) => {
    res.status(404).render('404',{title: "404 Page not found",path: ''});
});

const server = http.createServer(app);
server.listen(3000);