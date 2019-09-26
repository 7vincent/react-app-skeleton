import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
//Import aqui todos os arquivos das minhas rotas
import Main from "./pages/Main";
import User from "./pages/User";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/user" exact component={User} />
      </Switch>
    </BrowserRouter>
  );
}
