const express = require("express");
const app = express();
const cors = require("cors");
const port = 3085;
const axios = require("axios");

const ID_KEY = "9uU2qHN7dYtWTQBpV68p";
const SECRET_KEY = "Vqc5tG7Frb";

app.use(cors());

app.use("/search/:search/:display/:start", (req, res) => {
  console.log(req.params.start);
  axios
    .get("https://openapi.naver.com/v1/search/book.json", {
      params: {
        query: req.params.search,
        display: req.params.display,
        start: req.params.start,
      },
      headers: {
        "X-Naver-Client-Id": ID_KEY,
        "X-Naver-Client-Secret": SECRET_KEY,
        "Access-Control-Allow-Origin": "*",
      },
    })
    .then(function (response) {
      const items = response.data.items;
      res.send({ items: items });
    })
    .catch(function (error) {
      console.log(error);
    });
});

app.listen(port, () => {
  console.log(`express is running on ${port}`);
});
