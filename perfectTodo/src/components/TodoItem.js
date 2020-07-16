import React from "react";
import {
  Paper,
  Toolbar,
  Typography,
  makeStyles,
  IconButton,
  Grid,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import Done from "@material-ui/icons/Done";

const TodoItem = (props) => {
  const { id, todo, completed, setComplete, removeTodo } = props;
  const clases = useStayles(completed);

  return (
    <Paper className={clases.myTool} elevation={8}>
      <Toolbar>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={2}>
            <IconButton
              onClick={() => setComplete(id)}
              className={clases.iconBut}
            >
              <Done />
            </IconButton>
          </Grid>
          <Grid item xs={8}>
            <Typography className={clases.todo}>{todo}</Typography>
          </Grid>
          <Grid item xs={2}>
            <IconButton
              onClick={() => removeTodo(id)}
              className={clases.iconBut}
            >
              <DeleteIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </Paper>
  );
};

const useStayles = makeStyles({
  myTool: {
    margin: "1em",
  },
  iconBut: {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
  },
  todo: {
    textDecoration: (completed) => (completed ? "line-through" : "none"),
  },
});

export default TodoItem;
