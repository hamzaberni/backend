import http from "http"
//import o2x from "object-to-xml"

const server = http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        if(req.url === "/api/countries") {
            return res.end(
            JSON.stringify({
            data: ["Finnland", "Netherlands"]
            })
        );
        }
        if(req.url === "/api/cities") {
            return res.end(
                ({
                    data: ["Helsinki", "Coppenhagen"]
                })
             )
            return res.end(`{"data": [""]}`)
        }

        res.end(
            JSON.stringify({
                data: "invalid url"
            })
        );
    })
    .listen(4000);