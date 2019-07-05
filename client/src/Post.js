import React, { Component } from 'react';
import axios from 'axios';

class Post extends Component {
    constructor(props) {
      super(props);
      this.onChangeTitle = this.onChangeTitle.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
      this.state = {
        title: '',
      }
    }
    

    
      onChangeTitle(e) {
      this.setState({
        title: e.target.value
      });
    }
 
    onSubmit(e) {
      e.preventDefault();
      const obj = {
        title: this.state.title
      };
      axios.post('http://localhost:5000/api/AddNewPost', obj)
          .then(this.setState({
            
            title: ''
         }));
         
    
      
    }
    
    render() {
      return (
        <div className="App">
        <h3>Post Form</h3>  
      <form className="form" onSubmit={this.onSubmit}>
        <input required type="text"  placeholder="Enter Post Title"
        value={this.state.title}
        onChange={this.onChangeTitle} /><br /><br />
        <button>Submit</button>
      </form>
        </div>
      );
    }
}

export default Post;