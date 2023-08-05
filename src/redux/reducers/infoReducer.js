import {ADD_INFO_ID} from "../actions/actionTypes"

const initialState = {
    post: {}
}

const infoReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_INFO_ID:
            return {
                ...state,
                post: action.payload
            }
        default:
            return state
    }
}

export default infoReducer