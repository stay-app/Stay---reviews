import React from 'react';


class Page extends React.Component{
  constructor(props) {
    super(props)

    this.state={
      currentPage:1,
      pageHead:1
    }

  }


  render(){
    return(
      <form>
          {this.state.currentPage !== 1 && <input id="left" value="left" type="button"/>}
          <input value='1' type="button"/>
          {[1,2,3].includes(this.state.currentPage) && <input value={this.state.pageHead} type="button"/>}
          {[2,3,4].includes(this.state.currentPage) && <input value={this.state.pageHead+1} type="button"/>}
          <input value={this.state.pageHead+2} type="button"/>
          <input value={this.props.lastPage-2} type="button"/>
          <input value={this.props.lastPage-1} type="button"/>

          <input value={this.props.lastPage} type="button"/>
          {this.state.currentPage !== this.props.lastPage && <input id="right" value="right" type="button"/>}
      </form>
    )
  }
}

export default Page


