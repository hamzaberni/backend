"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const express = () => {
    //let getRequestURL = "";
    //let responseData: any = null;
    let getRequestURLs = [];
    let responseDatas = [];
    const server = http_1.default.createServer((req, res) => {
        res.writeHead(200, { "Content-Type": "applications/json" });
        if (getRequestURLs.includes(req.url)) {
            let index = getRequestURLs.indexOf(req.url);
            return res.end(JSON.stringify(responseDatas[index]));
        }
        res.end(JSON.stringify({
            data: "invalid url"
        }));
    });
    return {
        get: (url, requestListenerFunction) => {
            //getRequestURL = url;
            getRequestURLs = [...getRequestURLs, url];
            requestListenerFunction(null, {
                json: (data) => {
                    //responseData = data;
                    responseDatas = [...responseDatas, data];
                }
            });
        },
        listen: (port) => {
            server.listen(port);
        }
    };
};
exports.default = express;
