import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AuthProvider from "./contexts/AuthProvider";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
// import MyOrders from './components/DashboardPages/MyOrders';
// import AllOrders from './components/DashboardPages/AllOrders';
// import AddPackage from './components/DashboardPages/AddPackage';
import Registration from './components/Registration/Registration';
import Dashboard from './components/Dashboard/Dashboard';
import AllProducts from './components/AllProducts/AllProducts';
import PlaceOrder from './components/PlaceOrder.js/PlaceOrder';

function App() {
  return (
    <div className="App">
     <AuthProvider>
        <Router >
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/dashBoard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route path="/allProducts">
              <AllProducts></AllProducts>
            </Route>
            <PrivateRoute path="/home/:productId">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            
            <Route path="/registration">
              <Registration></Registration>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
