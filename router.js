const httpStatus = require("http-status-codes");
const htmlContentType = {
    "Content-Type": "text/html",
}
const routes = {
    GET: {
        "/info": (req, res) => {
            res.writeHead(httpStatus.StatusCodes.OK, {
                "Content-Type": "text/plain",
            });
            res.end("Welcome");
        },
    },
};
exports.handle = (req, res) => {
    try {
        if (routes[req.method][req.url]) {
            routes[req.method][req.url](req,res);
        } else {
            res.writeHead(httpStatus.StatusCodes.NOT_FOUND, htmlContentType);
            res.end("<h1> does not exist");
        }
    }catch (ex) {
        console.log("error: " + ex);
    }
};
exports.get = (url, action) => {
    routes["GET"][url] = action;
};