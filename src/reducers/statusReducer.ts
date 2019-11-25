import { STATE } from "../models"


type StatusAction = {
    type: string,
    value: string,
}

export default (state = STATE.status, { type, value }: StatusAction) => {
    switch (type) {
        case 'STATUS':
            return value
    }

    return state
}
