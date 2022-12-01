import "./App.css";
import NavBar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { PaginaClientes } from "./components/Pages/PaginaClientes";
import {PaginaCliente}  from "./components/Pages/PaginaCliente";
import { Login } from "./components/Pages/Login";
import { PaginaPlanes } from "./components/Pages/PaginaPlanes"
import ScrollToTop from "./components/ScrollToTop";
import { PaginaPlan } from "./components/Pages/PaginaPlan";
import ClientePlan from "./components/Pages/ClientePlan";
import AltaClientePlan from "./components/AltaClientePlan";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <div className="pages">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/clientes" component={PaginaClientes} />
            <Route path="/cliente/:ci" component={PaginaCliente} />
            <Route path="/planes" component={PaginaPlanes} />
            <Route path="/plan/:id" component={PaginaPlan} />
            <Route path="/ClientePlan/:ci" component={ClientePlan} />
            <Route path="/Cli/:ci/Plan/:id" component={AltaClientePlan} />

            <Route path="/login" component={Login} />
          </Switch>
        </div>
      </Router>
      <ScrollToTop />
    </>
  );
}

export default App;

