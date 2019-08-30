import React from 'react';
import Ratings from 'react-ratings-declarative'

const NewRating = ({newRating})=>{
  return(
    <Ratings
    rating={newRating}
    widgetRatedColors="#008489"
    widgetDimensions="17px"
    widgetSpacings='1px'
   >
    <Ratings.Widget/>
    <Ratings.Widget/>
    <Ratings.Widget/>
    <Ratings.Widget/>
    <Ratings.Widget/>
   </Ratings>
  )
}


const RatingComp = ({rating}) => {
  return(
    <div>
      <div><span>Accuracy </span><span><NewRating newRating={rating.rating_accuracy}/></span></div>
      <div><span>Communication </span><span><NewRating newRating={rating.rating_communication}/></span></div>
      <div><span>Cleanliness </span><span><NewRating newRating={rating.rating_cleanliness}/></span></div>
      <div><span>Location </span><span><NewRating newRating={rating.rating_location}/></span></div>
      <div><span>Check-in </span><span><NewRating newRating={rating.rating_checkin}/></span></div>
      <div><span>Value </span><span><NewRating newRating={rating.rating_value}/></span></div>
    </div>
  )
}

export default RatingComp