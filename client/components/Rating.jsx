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
        <ul>
          <li>{this.props.rating.rating_accuracy}</li>
          <li>{this.props.rating.rating_communication}</li>
          <li>{this.props.rating.rating_cleanliness}</li>
          <li>{this.props.rating.rating_location}</li>
          <li>{this.props.rating.rating_checkin}</li>
          <li>{this.props.rating.rating_value}</li>
        </ul>
      </div>
    )
  }
}

export default Rating