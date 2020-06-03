import React, { Component } from 'react';
import {connect} from 'react-redux';
import {saveComment} from '../reducer/actions/saveComment';
import {fetch} from '../reducer/actions/fetchComments';
class CommentBox extends Component {
    state = { 
        comment:''
     }
     
     handleSubmit=event=>{
         const{saveComment}=this.props;
         const{comment} =this.state;
         event.preventDefault();
         console.log(this.state.comment);
         saveComment(comment);
         this.setState({comment:''});
     }


     handleChange=event=>{
         this.setState({comment:event.target.value})
     }
    render() { 
        const{comment}=this.state;
      
        return ( 
            <div>
                <form onSubmit={this.handleSubmit}>
                    <textarea onChange={this.handleChange} type='text' value={comment}  />
                    <button>Submit</button>
                </form>
                <button className='fetch-comments' onClick={()=>this.props.fetch()}>Fetch Comments</button>
            </div>
         );
    }
}
 
export default connect(null,{saveComment,fetch})(CommentBox);