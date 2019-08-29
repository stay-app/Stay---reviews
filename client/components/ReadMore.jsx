import React from 'react';


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
       this.state.expand? <div className="read_more">{this.props.comments}</div>:
        <div className="read_more">
          <a>{this.props.comments.split(" ").slice(0,30).join(" ") + "..."}</a><a onClick={this.expandHandler}>Read more</a>
        </div>
    )
  }
}

export default ReadMore