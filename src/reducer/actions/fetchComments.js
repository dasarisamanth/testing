import {FETCH_COMMENTS} from '../actionTypes';
import axios from 'axios';

const fetchComments=(comments)=>{
    return{
        type:FETCH_COMMENTS,
        payload:comments
    }
}

export const fetch=()=>{
    console.log('fetched')
    return dipatch=>{
   return  axios.get('https://jsonplaceholder.typicode.com/comments')
        .then((res)=>{
            const response=res.data;
            console.log(response)
           dipatch(fetchComments(response))
        })
        .catch(err=>{
            console.log(err)
        })
    }
}