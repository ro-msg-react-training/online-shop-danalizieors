import React, { useEffect } from 'react'
import { useParams, useHistory } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { State, Product } from '../../models'
import { ProductDisplay, ProductModify } from './ProductForm'


export const ProductDisplayContainer = () => {
    const { id = -1 } = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch({
            type: 'PRODUCTS_GET',
            payload: { id },
        })
    }, [])

    const product = useSelector((state: State) => state.products[+id])

    return <ProductDisplay data={product} />
}

export const ProductModifyContainer = () => {
    const { id = -1 } = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({
            type: 'PRODUCTS_GET',
            payload: { id },
        })
    }, [])

    const product = useSelector((state: State) => state.products[+id])
    const onClick = (data: Product) =>
        dispatch({
            type: 'PRODUCTS_PUT',
            payload: { id: data.id, data },
        })

    return <ProductModify operation='Update' icon='fa-check' data={product} onClick={onClick} />
}

export const ProductAddContainer = () => {
    const dispatch = useDispatch()
    const history = useHistory()

    const onClick = (data: Product) => {
        dispatch({
            type: 'PRODUCTS_POST',
            payload: { data },
        })
        history.push('/products')
    }

    return <ProductModify operation='Add' icon='fa-plus' data={{}} onClick={onClick} />
}
