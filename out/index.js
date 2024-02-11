"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const zod_1 = require("zod");
const server = (0, express_1.default)();
const QueryParamSchema = zod_1.z.object({
    min: zod_1.z.coerce.number(),
    max: zod_1.z.coerce.number()
});
const countries = [
    {
        name: "Hungary",
        population: 9500000
    },
    {
        name: "Austria",
        population: 12500000
    }
];
server.get("/api/countries", (req, res) => {
    const result = QueryParamSchema.safeParse(req.query);
    if (!result.success) {
        res.status(400).json(result.error.issues);
        return;
    }
    const queryParams = result.data;
    const filteredCountries = countries.filter(country => country.population > queryParams.min && country.population < queryParams.max);
    res.json(filteredCountries);
});
server.post("/api/countries", (req, res) => {
    countries.push(req.query);
    res.json("success");
});
server.listen(4001);
