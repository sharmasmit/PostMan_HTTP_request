import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Good Morning</h1>");
});

app.post("/register", (req, res) => {
  res.sendStatus(201);
});

app.put("/user/smit", (req, res) => {
  res.sendStatus(200);
});

app.patch("/user/smit", (req, res) => {
  res.sendStatus(200);
});

app.delete("/user/smit", (req, res) => {
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Local Started on Port ${port}`);
});
