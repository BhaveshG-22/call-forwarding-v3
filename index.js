const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  console.log(`Express on Vercel Working- ${PORT}`);
  console.log("REQUEST RECEIVED");

  console.log(req.query);
  req.query.ID && console.log("-----V", req.query);
  req.query.ID &&
    console.log("CUSTOMER CALLED US ON OUR THIS NUMBER: ", req.query.ID);
  req.query.ID && console.log("CUSTOMER NUMBER: ", req.query.from);

  req.query.R &&
    console.log(
      `Customer is calling for the restaurant service: ${req.query.R}`
    );

  req.query.ID && console.log("-----A");
  res.send("Welcome to our server dashboarddd!");
});

app.listen(PORT, () => console.log(`Server ready on port ${PORT}.`));

module.exports = app;
