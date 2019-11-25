import React from 'react'
import { Product, Item } from '../../models'
import { LinkButton, Buttons, Button } from '../common/Buttons'
import { useDispatch } from 'react-redux'


export const ProductRow = ({ data }: { data: Product }) =>
    <tr>
        <th>{data.category}</th>
        <td>{data.name}</td>
        <td>{data.price}</td>
        <td>
            <Buttons>
                <LinkButton to={`/products/${data.id}`} text='View' icon='fa-eye' />
            </Buttons>
        </td>
    </tr>

export const ItemRow = ({ data }: { data: Item }) => {
    const dispatch = useDispatch()

    const removeProduct = () => {
        dispatch({
            type: 'CART_REMOVE_ITEM',
            product: data.product,
        })
    }

    return <tr>
        <th>{data.product.category}</th>
        <td>{data.product.name}</td>
        <td>{data.product.price}</td>
        <td>{data.quantity}</td>
        <td>
            <Buttons>
                <Button text='Delete' button='is-danger' icon='fa-trash' onClick={removeProduct} />
            </Buttons>
        </td>
    </tr>
}
