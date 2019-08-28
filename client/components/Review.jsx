import React from 'react';
import ReadMore from './ReadMore.jsx'

class Review extends React.Component{
  constructor(props) {
    super(props)

  }

  render(){
    return(
      <div>
        <img src={this.props.data.profile}></img>
        <div>{this.props.data.name}</div>
        <div>{this.props.data.review_date}</div>
        {!this.props.searchStatus || this.props.data.comments.split(" ").length < 30 ? <div>{this.props.data.comments}</div>:<ReadMore comments = {this.props.data.comments}/>}
      </div>
    )
  }
}



export default Review