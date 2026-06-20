import express from "express";
import { user } from "./db.js";

const app = express();
app.use(express.json());
app.post("/signin", async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const age = req.body.age;

  const userEntry = user.create({
    name,
    email,
    age,
  });
  if (!userEntry) {
    res.send("Error While making entry");
  }
  res.status(201).send({
    name,
    email,
    age,
  });
});
app.get("/", (req, res) => {
  res.json({
    msg: "Testing",
  });
});

app.listen(3000);
