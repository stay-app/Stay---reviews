import React from 'react';
import Ratings from 'react-ratings-declarative';


const RatingSection = styled.div`
  margin-top:10px;
  margin-bottom:10px;
`;

const RatingColumn = styled.div`
  display:inline-flex;
  width:50%;
  position:relative;
`;
const RatingColumnDescription1 = styled.div`
  display:block;
  text-align: left;
`;

const RatingColumnDescription2 = styled.div`
  display:block;
  text-align: left;
  margin-left:1%
`;

const RatingColumnRating1 = styled.div`
  display:block;
  align: right;
  margin-left:22%;
`;

const RatingColumnRating2 = styled.div`
  display:block;
  align: right;
  margin-left:38%;
`;

const RatingCategory = styled.div`
  line-height: 1.75em;
  font-weight: 330;
  font-size: 16px;
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif
  word-wrap: break-word;
  boarder:5px;
`;

const RatingStar = styled.div`
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
    <RatingSection>
      <RatingColumn>
        <RatingColumnDescription1>
          <RatingCategory>Accuracy </RatingCategory>
          <RatingCategory>Communication</RatingCategory>
          <RatingCategory>Cleanliness </RatingCategory>
        </RatingColumnDescription1>
        <RatingColumnRating1>
          <RatingStar><NewRating newRating={rating.rating_accuracy}/></RatingStar>
          <RatingStar><NewRating newRating={rating.rating_communication}/></RatingStar>
          <RatingStar><NewRating newRating={rating.rating_cleanliness}/></RatingStar>
        </RatingColumnRating1>
      </RatingColumn>
      <RatingColumn>
        <RatingColumnDescription2>
          <RatingCategory>Location </RatingCategory>
          <RatingCategory>Check-in </RatingCategory>
          <RatingCategory>Value </RatingCategory>
        </RatingColumnDescription2>
        <RatingColumnRating2>
          <RatingStar><NewRating newRating={rating.rating_location}/></RatingStar>
          <RatingStar><NewRating newRating={rating.rating_checkin}/></RatingStar>
          <RatingStar><NewRating newRating={rating.rating_value}/></RatingStar>
        </RatingColumnRating2>
      </RatingColumn>
    </RatingSection>
  )
}

export default RatingComp


