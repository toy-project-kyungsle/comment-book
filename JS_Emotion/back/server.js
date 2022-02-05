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
        key: "175AF4ED9C547CE56E4781C9077B755D3F3078DD67FB8C6689A191043673F01D",
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
        key: "175AF4ED9C547CE56E4781C9077B755D3F3078DD67FB8C6689A191043673F01D",
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

// app.use("/hotbooks", (req, res) => {
//   // console.log(req.params);
//   axios
//     .get("http://book.interpark.com/api/bestSeller.api", {
//       params: {
//         key: "175AF4ED9C547CE56E4781C9077B755D3F3078DD67FB8C6689A191043673F01D",
//         categoryId: 100,
//         output: "json",
//       },
//     })
//     .then(function (response) {
//       const items = response.data.item;
//       // console.log(items);
//       res.send({ items });
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
// });

app.listen(port, () => {
  console.log(`express is running on ${port}`);
});
