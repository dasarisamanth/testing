import React, { Component } from 'react';
import {connect} from 'react-redux';
class CommentList extends Component {
    state = {  }
    render() { 
        const{comments}=this.props;
        const listOfComments= comments.map(c=>
        <li key={c}>{c}</li>
        )
        return ( 
            <div>
               {listOfComments}
            </div>
         );
    }
}

const mapStateToProps=(state)=>{
    return{
        comments:state.comment
    }
}
 
export default connect(mapStateToProps,null)(CommentList);