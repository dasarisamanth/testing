import React from 'react';
import {mount} from 'enzyme';
import CommentList from '../CommentList';
import Root from '../../Root';
let wrapped;
beforeEach(()=>{
const initialState={comment:['Comment 1', 'Comment 2']};
 wrapped = mount(
<Root initialState={initialState}>
    <CommentList/>
</Root>);
})

test('creates an li for each comment',()=>{
expect(wrapped.find('li').length).toEqual(2);
});

test('checks whether text in li is visible ',()=>{
    expect(wrapped.render().text()).toContain('Comment 1');
    expect(wrapped.render().text()).toContain('Comment 2');
})