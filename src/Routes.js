import React from 'react';
import { BrowserRouter as Router, Switch, Route,} from 'react-router-dom'
import AddProduct from './components/AddProduct/AddProduct';
import ProductContextProvider from './contexts/ProductContext';
import Home from './components/Home/Home';
import ProductsDetails from './components/ProductsDetails/ProductsDetails';
import EditProduct from './components/EditProduct/EditProduct';
import LogIn from './components/LogIn/LogIn';
import Register from './components/Register/Register';
import AuthContextProvider from './contexts/AuthContext';

const Routes = () => {

    return (
        <div>
            <ProductContextProvider>
                <AuthContextProvider>
            <Router>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/login' component={LogIn} />
                <Route exact path='/regist' component={Register} />
                <Route exact path='/add' component={AddProduct} />
                <Route exact path='/details/:id' component={ProductsDetails} />
                <Route exact path='/edit' component={EditProduct} />
            </Switch>
            </Router>
                </AuthContextProvider>
            </ProductContextProvider>
        </div>
    );
};

export default Routes;