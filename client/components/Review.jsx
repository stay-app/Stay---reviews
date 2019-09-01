import React from 'react';
import ReadMore from './ReadMore.jsx';
import FullContent from './FullContent.jsx';
import moment from 'moment';
import styled from 'styled-components'

const ReviewProfile = styled.div`
  box-sizing: border-box;
  border-bottom: 1px ridge lightgrey;
`;

const ReviewContent = styled.div`
  margin-bottom:30px;
`;

const Profile = styled.div`
  display:inline-flex;
  align-items: flex-start;
  margin-top:20px;
  margin-bottom:17px
`;

const ProfileTitle = styled.div`
  display:inline-block;
  margin-left:20px;
`;

const ProfileImg = styled.img`
  display:inline-block;
  height:48px;
  border-Radius:50%
`


const Review = (props) => {
  return(
    <ReviewProfile>
      <Profile>
        <ProfileImg src={props.data.profile}></ProfileImg>
        <ProfileTitle>
          <div style={{fontWeight:`bold`,marginBottom:'3px'}}>{props.data.name}</div>
          <div>{moment(props.data.review_date).format('MMMM YYYY')}</div>
        </ProfileTitle>
      </Profile>
      <ReviewContent>
        {props.searchStatus?
          <FullContent
            comments={props.data.comments}
            searchValue={props.searchValue}
          /> :
          props.data.comments.split(" ").length <= 30 ?
            <div>{props.data.comments}</div> :
            <ReadMore comments = {props.data.comments}/>}
      </ReviewContent>
    </ReviewProfile>

  )
}

export default Review



