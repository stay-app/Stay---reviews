import React from 'react'

class SearchSummary extends React.Component{
  constructor(props) {
    super(props)
    this.backToAllHandler = this.backToAllHandler.bind(this)
  }

  backToAllHandler(){
    this.props.clearSearchValue()
  }


  render(){
    return(
        <div>
          {this.props.searchCount > 0?
              <a>{this.props.searchCount} guests have mentioned "{this.props.searchValue}"</a> :
              <a>None of guests have mentioned "{this.props.searchValue}"</a>
          }
          <a id="back_to_all" onClick={this.backToAllHandler}>Back to all reviews</a>
        </div>
    )
  }
}

export default SearchSummary