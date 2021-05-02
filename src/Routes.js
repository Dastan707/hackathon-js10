import React from 'react';
import { BrowserRouter as Router, Switch, Route,} from 'react-router-dom'
import AddProduct from './components/AddProduct/AddProduct';
import ProductContextProvider from './contexts/ProductContext';
import Home from './components/Home/Home';
import ProductsDetails from './components/ProductsDetails/ProductsDetails';
import EditProduct from './components/EditProduct/EditProduct';
const Routes = () => {

    return (
        <div>
            <ProductContextProvider>
            <Router>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/add' component={AddProduct} />
                <Route exact path='/details/:id' component={ProductsDetails} />
                <Route exact path='/edit' component={EditProduct} />
            </Switch>
            </Router>
            </ProductContextProvider>
        </div>
    );
};

export default Routes;