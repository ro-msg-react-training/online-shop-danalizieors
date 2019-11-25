import React from 'react'
import { Switch, Route } from 'react-router'
import { ProductsLoader, CartLoader } from '../tables/Loaders'
import { ProductDisplayContainer, ProductModifyContainer, ProductAddContainer } from '../products/ProductContainers'


export default () =>
    <Switch>
        <Route path={`/products/add`}>
            <ProductAddContainer />
        </Route>
        <Route path={`/products/:id/edit`}>
            <ProductModifyContainer />
        </Route>
        <Route path={`/products/:id`}>
            <ProductDisplayContainer />
        </Route>
        <Route path="/products">
            <ProductsLoader />
        </Route>
        <Route path="/cart">
            <CartLoader />
        </Route>
    </Switch>
