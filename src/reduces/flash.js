import { ADD_FLASH_MESSAGE, DELETE_FLASH_MESSAGE } from '../constants'
import shortid from 'shortid'
import findIndex from 'lodash/findIndex'
const flashMessage = (state=[], action={}) =>{
    switch(action.type) {
        case ADD_FLASH_MESSAGE:
            return [
                ...state,
                {
                    id: shortid.generate(),
                    type: action.message.type,
                    text: action.message.text
                }
            ]
        case DELETE_FLASH_MESSAGE:
            const idIndex = findIndex(state, { id: action.id })
            if (idIndex >= 0) {
                return [
                    ...state.slice(0, idIndex),
                    ...state.slice(idIndex+1)
                ]
            }
             
        default:
            return state
    }
}


export default flashMessage