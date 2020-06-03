
import {SAVE_COMMENT} from '../actionTypes';
import comment from '../comment';



test(' shows reducer handles an actionType of SAVE_COMMENT',()=>{
  
    const action = {
        type:SAVE_COMMENT,
        payload:'New Comment'
    };

    const newState = comment([],action);

   expect(newState).toEqual(['New Comment']);

});

test('handles unknow actionTypes',()=>{
    
    const newState=comment([],{type:'unknown action'});

    expect(newState).toEqual([]);
});