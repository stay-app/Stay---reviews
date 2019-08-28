import React from 'react';
import ReadMore from './ReadMore.jsx'


const Review = (props) => {
  return(
    <div>
      <img src={props.data.profile}></img>
      <div>{props.data.name}</div>
      <div>{props.data.review_date}</div>
      {!props.searchStatus && props.data.comments.split(" ").length > 30 ? <ReadMore comments = {props.data.comments}/> : <div>{props.data.comments}</div>}
    </div>

  )
}


export default Review