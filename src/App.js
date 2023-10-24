import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
    
    <Header />
      <main className="container content">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contacts" component={Contact} />
            <Route component={NotFound}/>
          </Switch>
        </Router>
      </main>
      <Footer/>
    </>
    
  );
}

export default App;
