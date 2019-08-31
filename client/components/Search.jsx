import React from 'react';
import styled from 'styled-components';

const Search_box_text = styled.input`
  font-size:12px;
  line-height:8px;
  letter-spacing:normal;
  padding-top:6px;
  padding-left:2px;
  padding-right:40px;
  padding-bottom:6px;
  text-indent: 30px;
`;

const Search_box = styled.form`
  position: relative;
  display: block;
  width: 100%;
  border-width: 1px;
  border-color: lightgray;
  border-radius: 4px;
  textarea:focus, input:focus{
    outline:1px solid #008489
`;

const Search_close_icon_content = styled.a`
  font-family:Arial Unicode MS
  cursor: pointer
  position: absolute;
  right: 10px;
  top: 7px;
  font-size:16px;
  color:lightgray
  font-weight:lighter;
`;


class Search extends React.Component{
  constructor(props) {
    super(props)
    // state={focused:false}
    this.inputRef = React.createRef();

    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    this.clickHandler = this.clickHandler.bind(this)
  }

  changeHandler({target}){
    this.props.changeSearchValue(target.value)
  }

  submitHandler(event){
    event.preventDefault()
    this.props.submitSearchValue()
  }

  clickHandler(event){
    this.props.clearSearchValue()
  }

  render(){
    return(
        <Search_box onSubmit={this.submitHandler} >
          <i style={{position:`absolute`,left: `6px`,top: `10px`,fontSize:`19px`,fontWeight:`9`}}class="material-icons">search</i>
          <Search_box_text
            id="search_text"
            type="text"
            value={this.props.searchValue}
            placeholder="Search reviews"
            onChange={this.changeHandler}
          />
          {this.props.searchValue && <Search_close_icon_content
            onClick={this.clickHandler}
          >X</Search_close_icon_content>}
        </Search_box>
    )
  }
}

export default Search