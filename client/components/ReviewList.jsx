import React from 'react'
import Review from './Review.jsx';
import Page from './Page.jsx';

class ReviewList extends React.Component{
  constructor(props) {
    super(props)

  }


  render(){
    return(
      <div>
        {this.props.reviewList.map((data) => { return <Review data={data}/>})}
        <Page
          renderCurrentPage={renderCurrentPage}
          lastPage = {this.props.lastPage}
          count={this.props.count}
        />
      </div>
    )
  }
}

export default ReviewList