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


{/* <svg
viewBox="0 0 24 24"
role="presentation"
aria-hidden="true"
focusable="false"
style="height: 1em; width: 1em; display: block; fill: currentcolor;"
></svg> */}

// const customStyles = {
//   control: (base, state) => ({
//     ...base,
//     borderColor: state.isFocused
//       ? 'red'
//       : 'yellow'
//   })
// };

class Search extends React.Component{
  constructor(props) {
    super(props)
    // state={focused:false}
    this.inputRef = React.createRef();

    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  changeHandler({target}){
    this.props.changeSearchValue(target.value)
  }

  // focusHandler(){
  //   // event.preventDefault()
  //   this.setState({

  //   })
  // }


  submitHandler(event){
    event.preventDefault()
    this.props.submitSearchValue()
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
        </Search_box>
    )
  }
}

export default Search