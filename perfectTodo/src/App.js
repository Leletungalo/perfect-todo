import React from "react";
import { Grid } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import Form from "./components/Form";
import Todos from "./components/Todos";
import Icons from "./components/temp";
import back from "./images/bg small.jpg"
import TodoState from "./context/TodoState";

function App() {
  return (
    <TodoState>
      <Router>
        <Switch>
          <Route exact path="/">
            <Grid container>
              <Grid item xs={12}>
                <Header />
              </Grid>
              <Grid item xs={1} md={2} />
              <Grid item xs={10} md={8}>
                <Form />
              </Grid>
              <Grid item xs={1} md={2} />
              <Grid item xs={1} md={2} />
              <Grid item xs={10} md={8}>
                <img src={back}></img>
                <Todos />
              </Grid>
              <Grid item xs={1} md={2} />
            </Grid>
          </Route>
          <Route exact path="/icons" component={Icons} />
        </Switch>
      </Router>
    </TodoState>
  );
}

export default App;
