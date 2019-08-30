import React from 'react';
import styled from 'styled-components'

const Read_More = styled.a`
  font:inherit
  color:#008489
  cursor: pointer
  background: transparent
  -webkit-font-smoothing: antialiase
`;



class ReadMore extends React.Component{
  constructor(props) {
    super(props)

    this.state={
      expand:false
    }

    this.expandHandler = this.expandHandler.bind(this)
  }

  expandHandler(){
    let oldState = this.state.expand;
    let expand = oldState? false: true
    this.setState({
      expand
    })
  }

  render(){
    return(
       this.state.expand? <div id="read_more_false">{this.props.comments}</div>:
        <div id="read_more_true">
          <a>{this.props.comments.split(" ").slice(0,20).join(" ") + "..."}</a><Read_More id="read_more_button" onClick={this.expandHandler} style={{}}>Read more</Read_More>
        </div>
    )
  }
}

export default ReadMore