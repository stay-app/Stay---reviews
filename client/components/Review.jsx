import React from 'react';
import ReadMore from './ReadMore.jsx';
import moment from 'moment';
import styled from 'styled-components'

const profileImg = styled.img`
  height='1'
  width='1'
`

const profileName = styled.div`
  width:788px;
  color:green
`


const Review = (props) => {
  return(
    <div>
      <img style={{height:`50px`, borderRadius: `50%`}} src={props.data.profile}></img>
      <div style={{}}>{props.data.name}</div>
      <div>{moment(props.data.review_date).format('MMMM YYYY')}</div>
      {!props.searchStatus && props.data.comments.split(" ").length > 30 ? <ReadMore comments = {props.data.comments}/> : <div>{props.data.comments}</div>}
    </div>

  )
}


export default Review



