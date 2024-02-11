import express from "./expressLib"

const server = express()

server.get("/api/countries", (req, res) => {
    res.json({
        data: ["Finnland", "Netherlands"]
    });
});

server.get("/api/cities", (req, res) => {
    res.json({
        data: ["Helsinki", "Coppenhagen"]
    });
});
server.listen(4001)
