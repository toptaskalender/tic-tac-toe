import express from "express";

const app = express();

app.get("/api/hi", (req, res) => {
  res.send(`<h1>hi</h1>`);
});

app.listen(3000, () => {
  console.log("started listening on port 3000");
});
