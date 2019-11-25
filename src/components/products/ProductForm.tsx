import React from 'react'
import { labeledFieldify } from '../common/LabeledField'
import { LabelElement, InputElement, TextAreaElement } from '../common/Elements'
import { fieldify, useInputState } from '../common/Fields'
import { Product } from '../../models'
import { Buttons, Button, LinkButton } from '../common/Buttons'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'


const Input = labeledFieldify(LabelElement, fieldify(InputElement))
const TextArea = labeledFieldify(LabelElement, fieldify(TextAreaElement))

const useStates = (selected: any) => ({
    name: useInputState(selected.name),
    category: useInputState(selected.category),
    price: useInputState(selected.price),
    image: useInputState(selected.image),
    description: useInputState(selected.description),
})

const prepareData = (state: any, product: Product) => ({
    id: product.id,
    name: state.name.value,
    category: state.category.value,
    price: state.price.value,
    image: state.image.value,
    description: state.description.value,
})

export const ProductModify = ({ operation, icon, data = {}, onClick }: { operation: string, icon: string, data: any, onClick: any }) => {
    const state = useStates(data)
    const navigateTo = data.id !== undefined ? `/products/${data.id}` : '/products'

    return <>
        <h1 className="title is-spaced">{operation} product</h1>
        <Input label='Name' placeholder='Product name' {...state.name} editable={true} />
        <Input label='Category' placeholder='Product category' {...state.category} editable={true} />
        <Input label='Price' placeholder='Product price' {...state.price} editable={true} />
        <Input label='Image' placeholder='Product image' {...state.image} editable={true} />
        <TextArea label='Description' placeholder='Product description' {...state.description} editable={true} />
        <Buttons>
            <Button text={operation} button='is-success' icon={icon} onClick={() => onClick(prepareData(state, data))} />
            <LinkButton to={navigateTo} text='Cancel' button='is-danger' icon='fa-times' />
        </Buttons>
    </>
}

export const ProductDisplay = ({ data = {} }: { data: Product | any }) => {
    const dispatch = useDispatch()
    let history = useHistory();

    const addProduct = () =>
        dispatch({
            type: 'CART_ADD_ITEM',
            product: data,
        })
    const removeProduct = () => {
        history.push('/products')
        dispatch({
            type: 'PRODUCTS_DELETE',
            payload: {
                id: data.id,
            },
        })
    }

    return <>
        <h1 className="title is-spaced">Product</h1>
        <div className="columns">
            <div className="column is-8">
                <Input label='Name' placeholder='Product name' value={data.name} editable={false} />
                <Input label='Category' placeholder='Product category' value={data.category} editable={false} />
                <Input label='Price' placeholder='Product price' value={data.price} editable={false} />
                <TextArea label='Description' placeholder='Product description' value={data.description} editable={false} />
            </div>
            <div className="column">
                <figure className="image">
                    <img src={data.image} />
                </figure>
            </div>
        </div>
        <Buttons>
            <Button text='Add to cart' button='is-success' icon='fa-shopping-cart' onClick={addProduct} />
            <LinkButton to={`/products/${data.id}/edit`} text='Edit' button='is-info' icon='fa-edit' />
            <Button text='Delete' button='is-danger' icon='fa-trash' onClick={removeProduct} />
        </Buttons>
    </>
}
