const express = require("express");
const DaterStore = require("nedb");
const todos = require("../../todos");
const router = express.Router();

const databese = new DaterStore("databese.db");
databese.loadDatabase();

console.log("routes");
console.log(" ");
console.log("localhost:4000/todoapi");
console.log(" ");
console.log("localhost:4000/todoapi/id");

router.get("/", (req, res) => {
  databese.find({}, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  databese.find({ _id: id }, (err, data) => {
    if (err) throw err;
    if (data.length > 0) {
      res.send(data);
    } else {
      res.status(404).json({ msg: "not found" });
    }
  });
});

router.get("/search/:searchInput", (req, res) => {
  const searchInput = req.params.searchInput;
  databese.find({ todo: `${searchInput}` }, (err, data) => {
    if (err) throw err;
    console.log(data);
    if (data.length > 0) {
      res.send(data);
    } else {
      res.status(404).json({ msg: "not found" });
    }
  });
});

router.post("/", (req, res) => {
  const todo = req.body.todo;
  console.log(todo)
  if (todo !== "" && todo !== undefined) {
    databese.insert({ todo, completed: false });
    databese.find({}, (err, data) => {
      if (err) throw err;
      res.send(data);
    });
  }else{
    res.sendStatus(500);
  }
});

router.post("/:id", (req, res) => {
  databese.find({ _id: `${req.params.id}` }, (err, data) => {
    if (err) {
      res.status(400).json({ error: err });
    } else {
      console.log(data.todo);
      databese.update(
        { _id: `${req.params.id}` },
        { todo: `${data.todo}`, completed: !data.completed },
        (err, resiponse) => {
          if (err) throw err;
          console.log(resiponse);
        }
      );
      res.status(200).json({ msg: "done" });
    }
  });
});

router.delete("/:id", (req, res) => {
  databese.remove({ _id: `${req.params.id}` }, (err, resiponse) => {
    if (err) throw err;
    databese.find({}, (err, data) => {
      if (err) throw err;
      res.status(200).send(data);
    });
  });
});

router.put("/markAsComplete/:id", (req,res) => {
  databese.update({_id:req.params.id},{$set:{completed:"true"}}, { multi: true },(err,data) => {
    if(err) {
      console.log("leg", err);
      return res.sendStatus(500);
    };
    databese.find({}, (err, data) => {
      if (err) throw err;
     return res.status(200).send(data);
    });
  })
})

module.exports = router;
