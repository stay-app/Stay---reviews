import React from 'react';


class Page extends React.Component{
  constructor(props) {
    super(props)

    this.state={
      currentPage:1,
    }

    this.increaseCurrentPg = this.increaseCurrentPg.bind(this);
    this.decreaseCurrentPg = this.decreaseCurrentPg.bind(this);
    this.changeCurrentPg = this.changeCurrentPg.bind(this)
  }


  changeCurrentPg({target}){
    let newCurrent = Number(target.value);
    this.setState({
      currentPage:newCurrent
    })
    this.props.renderCurrentPage(newCurrent)
  }

  increaseCurrentPg(){
    if(this.state.currentPage < this.props.lastPage) {
      const oldCurrent = this.state.currentPage;
      const newCurrent = oldCurrent + 1;
      this.setState({
        currentPage:newCurrent
      })
      this.props.renderCurrentPage(newCurrent)
    }
  }

  decreaseCurrentPg(){
    if(this.state.currentPage > 1) {
      const oldCurrent = this.state.currentPage;
      const newCurrent = oldCurrent - 1;
      this.setState({
        currentPage:newCurrent
      })
      this.props.renderCurrentPage(newCurrent)
    }
  }


  render(){
    return(
      <form>
          {this.state.currentPage !== 1 && <input id="left" value="left" type="button" onClick={this.decreaseCurrentPg}/>}

          <input value={1} type="button" onClick={this.changeCurrentPg}/>
          { this.state.currentPage === this.props.lastPage && <input value={this.props.lastPage - 2} type="button" onClick={this.changeCurrentPg}/>}
          { this.state.currentPage === 4 && <input value={this.state.currentPage-2} type="button" onClick={this.changeCurrentPg}/>}
          { this.state.currentPage >= 3 && <input value={this.state.currentPage-1} type="button" onClick={this.changeCurrentPg}/>}
          { this.state.currentPage >= 2 && this.state.currentPage <= (this.props.lastPage -1) && <input value={this.state.currentPage} type="button" onClick={this.changeCurrentPg}/>}
          { this.state.currentPage <= (this.props.lastPage-2) && <input value={this.state.currentPage+1} type="button" onClick={this.changeCurrentPg}/>}
          { this.state.currentPage === 1 && <input value={this.state.currentPage+2} type="button" onClick={this.changeCurrentPg}/>}
          { this.state.currentPage === this.props.lastPage -3 && <input value={this.state.currentPage+2} type="button" onClick={this.changeCurrentPg}/>}
          <input value={this.props.lastPage} type="button" onClick={this.changeCurrentPg}/>


          {this.state.currentPage !== this.props.lastPage && <input id="right" value="right" type="button" onClick={this.increaseCurrentPg}/>}
      </form>
    )
  }
}

export default Page


