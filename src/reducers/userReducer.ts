import { STATE } from "../models"


export default (state = STATE.user, { type, data }: any) => {
    switch (type) {
        case 'USERS_LOGIN_SUCCESS':
            return {
                ...data,
                roles: {
                    customer: data.roles.includes['customer'],
                    admin: data.roles.includes['admin'],
                }
            }
        case 'USERS_LOGOUT':
            return null
    }

    return state
}
