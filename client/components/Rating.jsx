import React from 'react';
import Ratings from 'react-ratings-declarative';
import styled from 'styled-components'


const Rating_section = styled.div`
  margin-top:10px
  margin-bottom:10px
`;

const Rating_column = styled.div`
  display:inline-flex
  width:50%
  position:relative
`;

const Rating_column_description_1 = styled.div`
  display:block
  text-align: left;
`;

const Rating_column_description_2 = styled.div`
  display:block
  text-align: left;
`;

const Rating_column_rating_1 = styled.div`
  display:block;
  align: right;
  margin-left:10%
`;

const Rating_column_rating_2 = styled.div`
  display:block;
  align: right;
  margin-left:25%
`;

const Rating_category = styled.div`
  line-height: 1.75em
  font-weight: 330
  font-size: 16px
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif
  word-wrap: break-word
  boarder:5px
`;

const Rating_star = styled.div`
  width: 110px;
  margin:6px
`;


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
    <Rating_section>
      <Rating_column>
        <Rating_column_description_1>
          <Rating_category>Accuracy </Rating_category>
          <Rating_category>Communication</Rating_category>
          <Rating_category>Cleanliness </Rating_category>
        </Rating_column_description_1>
        <Rating_column_rating_1>
          <Rating_star><NewRating newRating={rating.rating_accuracy}/></Rating_star>
          <Rating_star><NewRating newRating={rating.rating_communication}/></Rating_star>
          <Rating_star><NewRating newRating={rating.rating_cleanliness}/></Rating_star>
        </Rating_column_rating_1>
      </Rating_column>
      <Rating_column>
        <Rating_column_description_2>
          <Rating_category>Location </Rating_category>
          <Rating_category>Check-in </Rating_category>
          <Rating_category>Value </Rating_category>
        </Rating_column_description_2>
        <Rating_column_rating_2>
          <Rating_star><NewRating newRating={rating.rating_location}/></Rating_star>
          <Rating_star><NewRating newRating={rating.rating_checkin}/></Rating_star>
          <Rating_star><NewRating newRating={rating.rating_value}/></Rating_star>
        </Rating_column_rating_2>
      </Rating_column>
    </Rating_section>
  )
}

export default RatingComp