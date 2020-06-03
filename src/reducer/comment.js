import {SAVE_COMMENT,FETCH_COMMENTS} from '../reducer/actionTypes';

export default (state=[],action)=>{

    switch(action.type){
        case SAVE_COMMENT:{
            return [...state,action.payload]
        }
        case FETCH_COMMENTS:{
            const comments = action.payload.map(c=> c.name)
            return [...state,...comments]
        }
        default:{
            return state
        }
    }
    
}
