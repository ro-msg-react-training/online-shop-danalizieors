import { call, put, all, takeLatest } from 'redux-saga/effects'
import { Products, Users, Orders } from './api'


function* defaultHandlerwBuilder(name: string, method: any) {

    function* defaultHandler(action: any) {
        try {
            yield put({ type: 'STATUS', value: 'loading' })
            const parameters = toParameters(action.payload)
            const response = yield call(method, ...parameters)
            const data = response.data
            yield put({ type: `${name}_SUCCESS`, data, payload: action.payload })
            yield put({ type: 'STATUS', value: 'success' })
        }
        catch (exception) {
            const error = exception.message
            yield put({ type: `${name}_FAILURE`, error })
            yield put({ type: 'STATUS', value: 'failure' })
        }
    }

    yield takeLatest(name, defaultHandler)
}

const toParameters = (payload: any) =>
    [payload.id, payload.data]
        .filter(parameter => parameter !== undefined)


function* products() {
    yield all([
        defaultHandlerwBuilder('PRODUCTS_POST', Products.post),
        defaultHandlerwBuilder('PRODUCTS_GETALL', Products.getAll),
        defaultHandlerwBuilder('PRODUCTS_PUT', Products.put),
        defaultHandlerwBuilder('PRODUCTS_DELETE', Products.delete),
        defaultHandlerwBuilder('PRODUCTS_GET', Products.get),
    ])
}

function* users() {
    yield all([
        defaultHandlerwBuilder('USERS_LOGIN', Users.login),
    ])
}

function* orders() {
    yield all([
        defaultHandlerwBuilder('ORDERS_ORDER', Orders.order),
    ])
}

export default function* () {
    yield all([
        products(),
        users(),
        orders(),
    ])
}
