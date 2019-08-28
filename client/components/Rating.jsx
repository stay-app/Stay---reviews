import React from 'react';
import Search from './Search.jsx';


class Rating extends React.Component{
  constructor(props) {
    super(props)

  }

  render(){
    return(
      <div>
        <div>
          <a>
            {this.props.rating.count} Reviews {this.props.rating.review}
          </a> <Search/>
        </div>
        <div>
          <div>{this.props.rating.rating_accuracy}</div>
          <div>{this.props.rating.rating_communication}</div>
          <div>{this.props.rating.rating_cleanliness}</div>
          <div>{this.props.rating.rating_location}</div>
          <div>{this.props.rating.rating_checkin}</div>
          <div>{this.props.rating.rating_value}</div>
        </div>
      </div>
    )
  }
}

export default Rating