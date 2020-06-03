import React from 'react';
import {mount} from 'enzyme';
import CommentBox from '../CommentBox';
import Root from '../../Root';

let wrapped;

beforeEach(()=>{
    wrapped=mount(
    <Root>
    <CommentBox/>
    </Root>
    );
})
 afterEach(()=>{
     wrapped.unmount();
 })


test('shows textarea and button',()=>{
 

    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(2);
});
describe('textarea',()=>{
    beforeEach(()=>{
        wrapped.find('textarea').simulate('change',{
            target:{value:'new comment'}
        });
    
        wrapped.update();
    })
test('has a text area to type in',()=>{
   

    expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
});

test('on submit text area becomes empty ',()=>{
    
    wrapped.find('form').simulate('submit');
    wrapped.update();

    expect(wrapped.find('textarea').prop('value')).toEqual('');
   
})
})