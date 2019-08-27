import React from 'react'
import ReactDOM from 'react-dom';
import $ from 'jquery';
import ReviewList from './components/ReviewList.jsx';
import Rating from './components/Rating.jsx'


class ReviewSection extends React.Component{
  constructor(props) {
    super(props)
    this.state={
      search:"",
      hostID:87,
      reviewList:[],
      rating:{},
      overallRate:0
    }

    this.calculeteAverageRating = this.calculeteAverageRating.bind(this)
  }


  componentDidMount(){
    $.get('/api/reviews',{host:this.state.hostID},(data) => {
      const rating = this.calculeteAverageRating(data)

      this.setState({
        reviewList:data,
        rating:rating,
        overallRate:rating.review,
        count:rating.count
      })
    })
  }

  calculeteAverageRating(data){
    const ratingList =[...data];
    const length = ratingList.length;
    let newRating = {};
    ratingList.forEach((rating) => {
      let ratingType = ['rating_accuracy', 'rating_communication', 'rating_cleanliness', 'rating_location', 'rating_checkin', 'rating_value'];

      ratingType.forEach((type) => {
        if(!newRating[type]) {
          newRating[type] = rating[type];
        } else {
          newRating[type] += rating[type];
        };
      })
    });

    let total = 0;
    Object.keys(newRating).forEach((key) => {
      total += newRating[key];
      newRating[key] = Math.round(newRating[key]*2/length)/2;
    });
    newRating.review = Math.round(total*2/length/6)/2;
    newRating.count = length;
    return newRating;
  }

  render() {
    return (
      <div>
        <div>Summary</div>
        <Rating rating={this.state.rating}/>
        <ReviewList reviewList={this.state.reviewList}/>
      </div>
      )
  }
}


ReactDOM.render(
  <ReviewSection/>, document.getElementById('app')
)