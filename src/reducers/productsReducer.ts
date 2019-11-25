import { STATE, Products, Product } from "../models"


export default (state = STATE.products, { type, data, payload }: any) => {
    switch (type) {
        case 'PRODUCTS_GETALL_SUCCESS':
            return data.reduce(addOrUpdate, {})
        case 'PRODUCTS_POST_SUCCESS':
        case 'PRODUCTS_PUT_SUCCESS':
        case 'PRODUCTS_GET_SUCCESS':
            return addOrUpdate(state, data)
        case 'PRODUCTS_DELETE_SUCCESS':
            const { [payload.id]: _, ...rest } = state
            return rest
    }

    return state
}

const addOrUpdate = (products: Products, product: Product) => ({
    ...products,
    [product.id]: product
})
