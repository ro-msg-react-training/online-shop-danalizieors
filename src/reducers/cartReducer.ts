import { STATE, Item, Product } from "../models"


type CartAction = {
    type: string,
    product: Product,
}

export default (state = STATE.cart, { type, product }: CartAction) => {
    switch (type) {
        case 'CART_ADD_ITEM':
            return {
                ...state,
                [product.id]: addOrIncrement(state[product.id], product),
            }
        case 'CART_REMOVE_ITEM':
            const { [product.id]: _, ...rest } = state
            return rest
    }

    return state
}

const addOrIncrement = (item: Item, product: Product) => ({
    product,
    quantity: item !== undefined ? item.quantity + 1 : 1
})
