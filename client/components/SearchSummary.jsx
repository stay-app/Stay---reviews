import React from 'react'
import styled from 'styled-components';

const Search_summary = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top:10px;
  padding-left:40px;
  padding-bottom:10px;
  border-bottom: 1px ridge lightgrey
`;
const Back_to_all_button = styled.a`
  font: inherit
  text-align: right
  color: #008489;
  cursor: pointer
`;

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
        <Search_summary>
          {this.props.searchCount > 1?
            <span>{this.props.searchCount} guests have mentioned "<a style={{fontWeight:`bold`}}>{this.props.searchValue}</a>"</span> :
              this.props.searchCount == 1?
                <span>1 guest has mentioned "<a style={{fontWeight:`bold`}}>{this.props.searchValue}</a>"</span>:
                <span>None of guests have mentioned "<a style={{fontWeight:`bold`}}>{this.props.searchValue}</a>"</span>
          }
          <Back_to_all_button id="back_to_all" onClick={this.backToAllHandler}>Back to all reviews</Back_to_all_button>
        </Search_summary>
    )
  }
}

export default SearchSummary