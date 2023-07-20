import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import AllItems from "./Components/AllItems/AllItems";
import BuyWatch from "./Components/BuyWatch/BuyWatch";
import Dashboard from "./Components/Dashboard/Dashboard/Dashboard";
import Home from './Components/Home/Home/Home';
import NotFound from "./Components/NotFound/NotFound";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import AuthProvider from "./Context/AuthProvider";
import Login from "./Login/Login/Login";
import Register from "./Login/Register/Register";

function App() {
  return (
    <div className="App">
     <AuthProvider>
     <Router>
        
        <Switch>
          <Route exact path="/">
          <Home></Home>
          </Route>
          <Route exact path="/home">
          <Home></Home>
          </Route>
          <Route exact path="/allWatches">
          <AllItems></AllItems>
          </Route>
          <Route exact path="/login">
          <Login></Login>
          </Route>
          <Route exact path="/register">
          <Register></Register>
          </Route>
          <PrivateRoute exact path="/buy/:id">
          <BuyWatch></BuyWatch>
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
          <Dashboard></Dashboard>
          </PrivateRoute>
          <Route exact path="*">
          <NotFound></NotFound>
          </Route>
         
        </Switch>
      </Router>
     </AuthProvider>
    </div>
  );
}

export default App;
