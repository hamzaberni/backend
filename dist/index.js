"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("./express"));
const server = (0, express_1.default)();
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
server.listen(4001);
