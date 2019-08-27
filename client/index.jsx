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
      overallRate:0,
      lastPage:1,
      count:0,
      currentList:[]
    }

    this.calculeteAverageRating = this.calculeteAverageRating.bind(this);
    this.currentPageReviewList = this.currentPageReviewList.bind(this);
    this.renderCurrentPage = this.renderCurrentPage.bind(this)
  }


  componentDidMount(){
    $.get('/api/reviews',{host:this.state.hostID},(data) => {
      const rating = this.calculeteAverageRating(data);
      const count = rating.count;
      const lastPage = Math.ceil(count / 7);
      const currentList = this.currentPageReviewList(1,data,count)

      this.setState({
        lastPage,
        rating,
        reviewList:data,
        currentList,
        count,
        overallRate:rating.review
      })
    })
  }

  renderCurrentPage(curPg){
    const currentList = this.currentPageReviewList(curPg,this.state.reviewList,this.state.count)
    this.setState({
      currentList
    })
  }

  currentPageReviewList(curPg,reviewList,count){
    let beginIndex = (curPg - 1) * 7;
    let endingIndex = Math.min(beginIndex + 6,count-1);
    return reviewList.slice(beginIndex, endingIndex+1);
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
        <ReviewList
            reviewList={this.state.currentList}
            lastPage={this.state.lastPage}
            count={this.state.count}
            renderCurrentPage = {this.renderCurrentPage}
        />
      </div>
      )
  }
}


ReactDOM.render(
  <ReviewSection/>, document.getElementById('app')
)