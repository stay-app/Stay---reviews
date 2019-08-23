import React from 'react'

class Review extends React.Component{
  constructor(props) {
    super(props)

    this.state={
      data:{}
    }
  }

  componentDidMount(){
    this.setState({
      data:this.props.data
    })
  }

  render(){
    return(
      <div>
        <div>{this.state.data.name}</div>
        <div>{this.state.data.review_date}</div>
        <div>{this.state.data.comments}</div>
      </div>
    )
  }
}

export default Review