import React from 'react'
import ReactDOM from 'react-dom';
import $ from 'jquery'
import ReviewList from './components/ReviewList.jsx'


class ReviewSection extends React.Component{
  constructor(props) {
    super(props)
    this.state={
      search:"",
      hostID:87,
      reviewList:[]
    }
  }


  componentDidMount(){
    $.get('/api/reviews',{host:this.state.hostID},(data) => {
        this.setState({
          reviewList:data
        })
    })
  }


  render() {
    return (
      <div>
        <div>Summary</div>
        <div>Rating</div>
        <ReviewList reviewList={this.state.reviewList}/>
      </div>
      )
  }
}




ReactDOM.render(
  <ReviewSection/>, document.getElementById('app')
)