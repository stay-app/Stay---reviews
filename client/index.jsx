import React from 'react'
import ReactDOM from 'react-dom'
import ReviewList from './components/ReviewList.jsx'


class ReviewSection extends React.Component{
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <div>
        <div>Summary</div>
        <div>Rating</div>
        <ReviewList/>
      </div>
      )
  }
}




ReactDOM.render(
  <ReviewSection/>, document.getElementById('app')
)