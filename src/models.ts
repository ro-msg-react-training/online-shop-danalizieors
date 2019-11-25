export const STATE: State = {
    products: {},
    user: null,
    cart: {},
    status: 'idle'
}

export type State = {
    products: Products,
    user: User | null,
    cart: Cart,
    status: string,
}

export type Products = {
    [id: number]: Product
}

export type Product = {
    id: number,
    name: string,
    category: string,
    price: number,
    image: string,
    description: string,
}

export type User = {
    username: string,
    fullName: string,
    roles: {
        customer: boolean,
        admin: boolean,
    }
}

export type Cart = {
    [id: number]: Item
}

export type Item = {
    product: Product,
    quantity: number,
}

export type UserLogin = {
    username: string,
    password: string,
}

export type Order = {
    customer: string,
    products: {
        productId: number,
        quantity: number,
    }[],
}
