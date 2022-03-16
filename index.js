const port = 8989;
const http = require("http");
const httpStatus = require("http-status-codes");
const fs = require("fs");
const router = require("./router");

const htmlContentType = {
    "Content-Type": "text/HTML",
};
router.get("/", (req,res) =>{
    res.writeHead(httpStatus.StatusCodes.OK, htmlContentType);
    customReadFile("views/index.html", res);
});
const app = http.createServer(router.handle);
app.listen(port);
console.log(
    `server started on port: ${port}`
);
customReadFile = (file, res) => {
    fs.readFile(`./${file}`, (errors, data) => {
        if (errors) {
            console.log("Error reading file");
        }
        res.end(data);
    });
};