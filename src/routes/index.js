import React from "react";
import { Switch, Route } from "react-router-dom";

import Main from "../pages/main";
import Contact from "../pages/contact";
import TimeView from "../pages/time";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/contato" exact component={Contact} />
      <Route path="/time/:idTime" exact component={TimeView} />
    </Switch>
  );
}
