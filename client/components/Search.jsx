import React from 'react'

class Search extends React.Component{
  constructor(props) {
    super(props)
    this.state={
      keyWords:""
    }
    this.changeHandler = this.changeHandler.bind(this)

  }

  changeHandler({target}){
    this.setState({
      keyWords:target.value
    })
  }

  render(){
    return(
      <a><input
        type="text"
        value={this.state.keyWords}
        placeholder="Search reviews"
        onChange={this.changeHandler}
      /></a>
    )
  }
}

export default Search