import React from 'react'

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
        <div>{this.props.data.comments}</div>
      </div>
    )
  }
}

export default Review