import React from 'react';


const Rating = ({rating}) => {
  return(
    <div>
      <div>{rating.rating_accuracy}</div>
      <div>{rating.rating_communication}</div>
      <div>{rating.rating_cleanliness}</div>
      <div>{rating.rating_location}</div>
      <div>{rating.rating_checkin}</div>
      <div>{rating.rating_value}</div>
    </div>
  )
}

export default Rating