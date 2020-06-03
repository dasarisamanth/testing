import {saveComment} from '../saveComment';
import {SAVE_COMMENT} from '../../actionTypes';


describe('saveComment',()=>{

    test('shows action type ',()=>{

        const action = saveComment();

        expect(action.type).toEqual(SAVE_COMMENT);
    });

    test('shows payload ',()=>{
        const action = saveComment('New Comment');

        expect(action.payload).toEqual('New Comment')
    })
})