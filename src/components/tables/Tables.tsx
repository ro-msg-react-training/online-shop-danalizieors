import React from 'react'
import { ProductsHeader, CartHeader } from './Headers'
import { Buttons, Button, LinkButton } from '../common/Buttons'
import { ProductRow, ItemRow } from './Rows'
import { Products, Cart } from '../../models'


export const Table = (props: any) =>
    <table className='table is-striped is-fullwidth'>
        {props.children}
    </table>

export const TableContent = ({ Row, data }: any) =>
    <tbody>
        {Object.values(data).map((item: any) => <Row key={item.id} data={item} />)}
    </tbody>

export const ProductsTable = ({ data }: { data: Products }) =>
    <>
        <Table>
            <ProductsHeader />
            <TableContent Row={ProductRow} data={data} />
        </Table>
        <Buttons>
            <LinkButton to='/products/add' text='Add new product' button='is-success' icon='fa-plus' />
        </Buttons>
    </>

export const CartTable = ({ data }: { data: Cart }) =>
    <>
        <Table>
            <CartHeader />
            <TableContent Row={ItemRow} data={data} />
        </Table>
        <Buttons>
            <Button text='Checkout' button='is-success' icon='fa-check' />
        </Buttons>
    </>
