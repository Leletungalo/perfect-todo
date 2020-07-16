const express = require("express");
const app = express();

app.use(express.static("./perfectTodo/build"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`listening at ${PORT}`));
