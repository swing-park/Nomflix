import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Home from "./Home";
import Search from "./Search";
import TV from "./TV";
import Header from "@/Components/Header/Header";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/tv" component={TV} />
        <Route path="/search" component={Search} />
        <Redirect from="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
