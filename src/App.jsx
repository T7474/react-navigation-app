import Navigation from "./components/Navigation";
import { BrowserRouter as Router , Switch,Route } from "react-router-dom/cjs/react-router-dom.min";
import Home from "./components/page/home";
import Member from "./components/page/Member";
import Product from "./components/page/Product";
import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/member" component={Member}/>
          <Route path="/product" component={Product}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
