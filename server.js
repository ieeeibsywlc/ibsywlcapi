const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();

const PORT = 3000 || process.env.PORT;

// Middlewares
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello There!");
});

app.get("/eventschedule/eone", (req, res) => {
  fs.readFile(`${__dirname}/eventschedule/data1.json`, "utf-8", (err, data) => {
    // console.log(data);
    res.send(data);
  });
});

app.get("/eventschedule/etwo", (req, res) => {
  fs.readFile(`${__dirname}/eventschedule/data2.json`, "utf-8", (err, data) => {
    // console.log(data);
    res.send(data);
  });
});

app.get("/eventschedule/ethree", (req, res) => {
  fs.readFile(`${__dirname}/eventschedule/data3.json`, "utf-8", (err, data) => {
    // console.log(data);
    res.send(data);
  });
});

app.get("/sessions/images", (req, res) => {
  fs.readFile(`${__dirname}/sessions/data.json`, "utf-8", (err, data) => {
    // console.log(data);
    res.send(data);
  });
});

app.get("/timeline", (req, res) => {
  fs.readFile(`${__dirname}/timeline/data.json`, "utf-8", (err, data) => {
    // console.log(data);
    res.send(data);
  });
});

app.get("/help/questions", (req, res) => {
  fs.readFile(`${__dirname}/help/questions.json`, "utf-8", (err, data) => {
    // console.log(data);
    res.send(data);
  });
});

app.get("/help/faq", (req, res) => {
  fs.readFile(`${__dirname}/help/faq.json`, "utf-8", (err, data) => {
    // console.log(data);
    res.send(data);
  });
});

app.get("/teams/sac", (req, res) => {
  fs.readFile(`${__dirname}/teams/sac.json`, "utf-8", (err, data) => {
    // console.log(data);
    res.send(data);
  });
});

app.get("/teams/ibsywlc/student", (req, res) => {
  fs.readFile(
    `${__dirname}/teams/ibsywlcstudent.json`,
    "utf-8",
    (err, data) => {
      // console.log(data);
      res.send(data);
    }
  );
});

app.get("/teams/ibsywlc/convenor", (req, res) => {
  fs.readFile(
    `${__dirname}/teams/ibsywlc/convenor.json`,
    "utf-8",
    (err, data) => {
      // console.log(data);
      res.send(data);
    }
  );
});

app.get("/teams/ibsywlc/coordinator", (req, res) => {
  fs.readFile(
    `${__dirname}/teams/ibsywlc/coordinator.json`,
    "utf-8",
    (err, data) => {
      // console.log(data);
      res.send(data);
    }
  );
});

app.listen(PORT, () => {
  console.log(`Server is listening on port http://localhost:${PORT}`);
});
