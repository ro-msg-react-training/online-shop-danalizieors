import axios from 'axios'
import { Product, UserLogin, Order } from './models'


export const Products = {
    post: (data: Product) =>
        axios.post(`http://localhost:4000/products`, data),

    getAll: () =>
        axios.get(`http://localhost:4000/products`),

    put: (id: number, data: Product) =>
        axios.put(`http://localhost:4000/products/${id}`, data),

    delete: (id: number) =>
        axios.delete(`http://localhost:4000/products/${id}`),

    get: (id: number) =>
        axios.get(`http://localhost:4000/products/${id}`),
}

export const Users = {
    login: (data: UserLogin) =>
        axios.post(`http://localhost:4000/login`, data),
}

export const Orders = {
    order: (data: Order) =>
        axios.post(`http://localhost:4000/orders`, data),
}
