"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
//import o2x from "object-to-xml"
const server = http_1.default.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    if (req.url === "/api/countries") {
        return res.end(JSON.stringify({
            data: ["Finnland", "Netherlands"]
        }));
    }
    if (req.url === "/api/cities") {
        return res.end(({
            data: ["Helsinki", "Coppenhagen"]
        }));
        return res.end(`{"data": [""]}`);
    }
    res.end(JSON.stringify({
        data: "invalid url"
    }));
})
    .listen(4000);
