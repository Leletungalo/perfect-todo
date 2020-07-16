const express = require("express");
const app = express();

app.use(express.json({ exterded: true }));
app.use(express.urlencoded({ extended: false }));
app.use(express.static("./perfectTodo/build"));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    return res.status(200).json({});
  }
  next();
});
app.use("/todoapi", require("./routes/todoApi/todoapi"));

const PORT = process.env.PORT || 4000;
app.listen(PORT, (lee) => console.log(`listening at ${PORT}`));
