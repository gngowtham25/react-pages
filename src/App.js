import React, { Component } from 'react';
import './App.css';
import DisplayComponent from "./Child";
const axios = require('axios');

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      posts: []
    };
  }

  componentDidMount(){
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(res => {
      this.setState({
        posts:res.data
      })
    })
  }

  render() {

    return (
      <div className="App">

        {
          this.state.posts && this.state.posts.map((post) => <div>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <hr></hr>
          </div> 
          )
        }

        {/* <input value={this.state.value} onChange={ (evt) => this.setState({value: evt.target.value})} type="text" />
        <button onClick={() => { this.setState({ nextComponentValue: this.state.value }) }}>Submit</button>
        <DisplayComponent value={this.state.nextComponentValue} /> */}

      </div>
    );
  }
}

export default App;
