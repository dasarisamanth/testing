import React from 'react';
import {shallow} from 'enzyme';
import App from '../App';
import CommentBox from '../CommentBox';
import CommentList from '../CommentList';

 let wrapped;
 
beforeEach(()=>{
  wrapped= shallow(<App/>);
})

test('shows a Comment Box', () => {
 
 
  expect(wrapped.find(CommentBox).length).toEqual(1);
 });

 test('shows a Comment List',()=>{
  expect(wrapped.find(CommentList).length).toEqual(1);
 })
