import React from 'react';
import ReadMore from './ReadMore.jsx';
import moment from 'moment';
import styled from 'styled-components'

const Review_profile = styled.div`
  font-size: 14px;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif;
  line-height: 1.43;
  color: #484848;
  background-color: #fff;


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
align-items: flex-start;
display:inline-block;
  height:53px;
  border-Radius:50%
`

const Review = (props) => {
  return(
    <Review_profile>
      <Profile>
        <ProfileImg src={props.data.profile}></ProfileImg>
        <ProfileTitle>
          <div style={{fontWeight:`bold`,marginBottom:'3px'}}>{props.data.name}</div>
          <div>{moment(props.data.review_date).format('MMMM YYYY')}</div>
        </ProfileTitle>
      </Profile>
      {!props.searchStatus && props.data.comments.split(" ").length > 30 ? <ReadMore comments = {props.data.comments}/> : <div>{props.data.comments}</div>}
    </Review_profile>

  )
}


export default Review



