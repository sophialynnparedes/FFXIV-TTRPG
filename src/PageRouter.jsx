import { Route, Switch } from "wouter";
import Party from "./Pages/Party";
import Enemies from "./Pages/Enemies";
import NPCs from "./Pages/NPCs";
import Story from "./Pages/Story";

export default function PageRouter() {
    return (
        <Switch>
            <Route path="/" component={Story} />
            <Route path="/party" component={Party} />
            <Route path="/enemies" component={Enemies} />
            <Route path="/NPCs" component={NPCs} />
        </Switch>
    );
}
