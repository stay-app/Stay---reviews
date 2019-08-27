import React from 'react';


class Page extends React.Component{
  constructor(props) {
    super(props)

    this.state={
      currentPage:1,
      firstPage:1,
      lastPage:1
    }

  }

  componentDidMount(){
    this.setState({
      lastPage:this.props.lastPage
    })
  }

  render(){
    return(
      <form>
        {/* {this.state.currentPage}
          <input id="left" type="button">
          <input id="left" type="button">
          <input id="left" type="button">
          <input id="left" type="button">
          <input id="left" type="button">
          <input id="left" type="button">
          <input id="left" type="button">
          <input id="right" type="button"> */}
      </form>
    )
  }
}

export default Page


