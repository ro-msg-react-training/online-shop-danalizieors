import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { State } from '../../models'
import { ProductsTable, CartTable } from './Tables'


export const ProductsLoader = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch({
            type: 'PRODUCTS_GETALL',
            payload: {},
        })
    }, [])

    const products = useSelector((state: State) => state.products)

    return <ProductsTable data={products} />
}

export const CartLoader = () => {
    const cart = useSelector((state: State) => state.cart)

    return <CartTable data={cart} />
}
