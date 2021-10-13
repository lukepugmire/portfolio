import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "../pages/home/Home";
import Contact from "../pages/contact/Contact";
import Navbar from "./Navbar";


export default function Nav() {
    return (
        <Router>
            <div>
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/Contact" component={Contact} />
                </Switch>
            </div>
        </Router>
    )
}
