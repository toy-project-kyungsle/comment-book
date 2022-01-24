const express = require("express");
const app = express();
const cors = require("cors");
const port = 3085;
const axios = require("axios");

app.use(cors());

app.use("/search/:search/:display/:start", (req, res) => {
  // console.log(req.params);
  axios
    .get("http://book.interpark.com/api/search.api", {
      params: {
        key: "B882F0871FB3BDB05CB040F3925EB04EA0FC63EA18F82FC788AE198D4785E337",
        query: req.params.search,
        maxResults: req.params.display,
        start: req.params.start,
        output: "json",
      },
    })
    .then(function (response) {
      const items = response.data.item;
      // console.log(items);
      res.send({ items });
    })
    .catch(function (error) {
      console.log(error);
    });
});

app.use("/isbnsearch/:search", (req, res) => {
  // console.log(req.params);
  axios
    .get("http://book.interpark.com/api/search.api", {
      params: {
        key: "B882F0871FB3BDB05CB040F3925EB04EA0FC63EA18F82FC788AE198D4785E337",
        queryType: "isbn",
        query: req.params.search,
        output: "json",
      },
    })
    .then(function (response) {
      const items = response.data.item;
      // console.log(items);
      res.send({ items });
    })
    .catch(function (error) {
      console.log(error);
    });
});

app.use("/hotbooks", (req, res) => {
  // console.log(req.params);
  axios
    .get("http://book.interpark.com/api/bestSeller.api", {
      params: {
        key: "B882F0871FB3BDB05CB040F3925EB04EA0FC63EA18F82FC788AE198D4785E337",
        categoryId: 100,
        output: "json",
      },
    })
    .then(function (response) {
      const items = response.data.item;
      // console.log(items);
      res.send({ items });
    })
    .catch(function (error) {
      console.log(error);
    });
});

app.listen(port, () => {
  console.log(`express is running on ${port}`);
});
