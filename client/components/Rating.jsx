import React from 'react';

class Rating extends React.Component{
  constructor(props) {
    super(props)

  }

  render(){
    return(
      <div>
        <div>{this.props.rating.rating_accuracy}</div>
        <div>{this.props.rating.rating_communication}</div>
        <div>{this.props.rating.rating_cleanliness}</div>
        <div>{this.props.rating.rating_location}</div>
        <div>{this.props.rating.rating_checkin}</div>
        <div>{this.props.rating.rating_value}</div>
      </div>
    )
  }
}

export default Rating