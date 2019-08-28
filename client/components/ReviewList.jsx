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
        {this.props.lastPage > 1 && <Page
          renderCurrentPage={this.props.renderCurrentPage}
          lastPage = {this.props.lastPage}
          count={this.props.count}
          searchStatus = {this.props.searchStatus}
        /> }
      </div>
    )
  }
}

export default ReviewList