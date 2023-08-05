import { combineReducers } from "redux";
import postsReducer from "./postsReducers";
import detailsReducer from "./detailsReducer";
import infoReducer from "./infoReducer";



const rootReducer = combineReducers({
    posts: postsReducer,
    detailsCard: detailsReducer,
    infoid: infoReducer
})

export default rootReducer;