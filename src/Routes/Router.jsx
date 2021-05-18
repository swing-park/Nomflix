import { HashRouter, Route, Redirect, Switch } from "react-router-dom";
import Home from "./Home/Home";
import Search from "./Search/Search";
import TV from "./TV/TV";
import Detail from "./Detail/Detail";
import Header from "@/Components/Header/Header";

const Router = () => {
  return (
    <HashRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/tv" component={TV} />
        <Route path="/search" component={Search} />
        <Route path="/movie/:id" component={Detail} />
        <Route path="/show/:id" component={Detail} />
        <Redirect from="*" to="/" />
      </Switch>
    </HashRouter>
  );
};

export default Router;
