import { ADD_FLASH_MESSAGE, DELETE_FLASH_MESSAGE } from '../constants'

export const addflashMessage = (message) => {
    return {
        type: ADD_FLASH_MESSAGE,
        message
    }
}

export const deleteflashMessage = (id) => {
    return {
        type: DELETE_FLASH_MESSAGE,
        id
    }
}