import React from 'react'

class Search extends React.Component{
  constructor(props) {
    super(props)

    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  changeHandler({target}){
    this.props.changeSearchValue(target.value)
  }

  submitHandler(event){
    event.preventDefault()
    this.props.submitSearchValue()
  }

  render(){
    return(
        <form onSubmit={this.submitHandler}>
          <input
            id="search_text"
            type="text"
            value={this.props.searchValue}
            placeholder="Search reviews"
            onChange={this.changeHandler}
          />
        </form>
    )
  }
}

export default Search