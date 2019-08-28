import React from 'react'
import Review from './Review.jsx';
import Page from './Page.jsx';


const ReviewList = (props) => {
  return(
    <div>
      {props.reviewList.map((data) => { return <Review data={data}/>})}
      {props.lastPage > 1 && <Page
        renderCurrentPage={props.renderCurrentPage}
        lastPage={props.lastPage}
        count={props.count}
        searchStatus={props.searchStatus}
        currentPage={props.currentPage}
        changeCurrentPage={props.changeCurrentPage}
      /> }
    </div>

  )
}

export default ReviewList