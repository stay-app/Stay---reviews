import React from 'react'
import Review from './Review.jsx'

class ReviewList extends React.Component{
  constructor(props) {
    super(props)

    this.state={
      reviewList:[
        {
          name:'Jinjing Bi',
          review_date:'6/16',
          comments:'It is a nice home. I love to stay there there again.'
        }
      ]
    }
  }

  render(){
    return(
      <div>
        {this.state.reviewList.map((data) => { return <Review data={data}/>})}
      </div>
    )
  }
}

export default ReviewList