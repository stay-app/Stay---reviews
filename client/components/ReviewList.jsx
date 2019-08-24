import React from 'react'
import Review from './Review.jsx'

class ReviewList extends React.Component{
  constructor(props) {
    super(props)

  }

  render(){
    return(
      <div>
        {this.props.reviewList.map((data) => { return <Review data={data}/>})}
      </div>
    )
  }
}

export default ReviewList