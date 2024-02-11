import express, { raw } from "express"
import {z} from "zod"
import filesystem from "fs"

const server = express();

server.use(express.json());

const QueryParamSchema = z.object({
    min: z.coerce.number(),
    max: z.coerce.number()
});

const CountrySchema = z.object({
    name: z.string(),
    population: z.number()
});

type Country = z.infer<typeof CountrySchema>

const rawData = filesystem.readFileSync(`${__dirname}/../database.json`, "utf-8")

const countries: Country = JSON.parse(rawData)

server.get("/api/countries", (req, res) => {
    const result = QueryParamSchema.safeParse(req.query)
    if(!result.success) {
        return res.status(400).json(result.error.issues);
    }
    const queryParams = result.data
    
    const filteredCountries = countries.filter(country => country.population > queryParams.min && country.population < queryParams.max)

    res.json(filteredCountries)
});

server.post("/api/countries", (req, res) => {
    const result = CountrySchema.safeParse(req.body)
    if(!result.success) {
        return res.status(400).json(result.error.issues);
    }
    const country = result.data

    countries.push(country)

    res.sendStatus(200)
});

server.listen(4001)