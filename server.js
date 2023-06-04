const express = require("express");
const fs = require("fs");
const cors = require("cors")

const app = express();

// Middlewares
app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello World!");
    }
);

app.get('/eventschedule/eone', (req, res) => {
    fs.readFile(`${__dirname}/eventschedule/data1.json`, "utf-8", (err, data) => {
        console.log(data);
        res.send(data);
    })
})

app.get('/eventschedule/etwo', (req, res) => {
    fs.readFile(`${__dirname}/eventschedule/data2.json`, "utf-8", (err, data) => {
        console.log(data);
        res.send(data);
    })
})

app.get('/eventschedule/ethree', (req, res) => {
    fs.readFile(`${__dirname}/eventschedule/data3.json`, "utf-8", (err, data) => {
        console.log(data);
        res.send(data);
    })
})

app.get('/sessions/images', (req, res) => {
    fs.readFile(`${__dirname}/sessions/data.json`, "utf-8", (err, data) => {
        console.log(data);
        res.send(data);
    })
})

app.listen(3000, () => {
    console.log("Server is listening on port http://localhost:3000");
    }
);