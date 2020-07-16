import React, { useContext, useState } from "react";
import {
  TextField,
  makeStyles,
  Button,
  Grid,
  IconButton,
} from "@material-ui/core";
import TodoContext from "../context/TodoContext";
import { Search } from "@material-ui/icons";

const Form = () => {
  const [inputString, setInputString] = useState("");
  const [addTodosState, setAddTodos] = useState("");
  const todoContext = useContext(TodoContext);
  const { searchTodos, addTodos } = todoContext;
  const clases = useStayles();

  const haddleOnChange = (e) => {
    const { value } = e.target;
    setInputString(value);
    searchTodos(value);
  };

  return (
    <Grid className={clases.formD} container spacing={3}>
      <Grid item xs={8} sm={10}>
        <TextField
          onChange={haddleOnChange}
          className={clases.input}
          label="Search Todos"
          value={inputString}
        />
      </Grid>
      <Grid item xs={4} sm={2}>
        <IconButton
          onClick={() => searchTodos(inputString)}
          className={clases.iconBut}
        >
          <Search />
        </IconButton>
      </Grid>
      <Grid item xs={8} sm={10}>
        <TextField
          onChange={(e) => setAddTodos(e.target.value)}
          className={clases.input}
          label="Add a todo"
          value={addTodosState}
        />
      </Grid>
      <Grid item xs={4} sm={2}>
        <Button
          onClick={() => addTodos(addTodosState)}
          className={clases.buttonStayle}
        >
          Add
        </Button>
      </Grid>
    </Grid>
  );
};

const useStayles = makeStyles({
  formD: {
    margin: "0.5em 0",
  },
  input: {
    width: "100%",
    height: "100%",
    margin: ".3em 0",
  },
  iconBut: {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
  },
  buttonStayle: {
    width: "100%",
    height: "100%",
    fontSize: "1.2rem",
    margin: ".3em 0",
  },
});

export default Form;
