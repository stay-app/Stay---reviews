import React from 'react'

class Search extends React.Component{
  constructor(props) {
    super(props)
    this.state={
      keyWords:""
    }
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this)

  }

  changeHandler({target}){
    this.setState({
      keyWords:target.value
    })
  }

  submitHandler(event){
    event.preventDefault()
    console.log(this.state.keyWords)
  }

  render(){
    return(
        <form onSubmit={this.submitHandler} value={this.state.keyWords}>
          <input
            type="text"
            value={this.state.keyWords}
            placeholder="Search reviews"
            onChange={this.changeHandler}
          />
        </form>
    )
  }
}

export default Search