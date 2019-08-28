import React from 'react';


class Page extends React.Component{
  constructor(props) {
    super(props)

    this.increaseCurrentPgHandler = this.increaseCurrentPgHandler.bind(this);
    this.decreaseCurrentPgHandler = this.decreaseCurrentPgHandler.bind(this);
    this.changeCurrentPgHandler = this.changeCurrentPgHandler.bind(this)
  }


  changeCurrentPgHandler({target}){
    let newCurrent = Number(target.value);
    this.props.changeCurrentPage(newCurrent)
    this.props.renderCurrentPage(newCurrent)
  }

  increaseCurrentPgHandler(){
    if(this.props.currentPage < this.props.lastPage) {
      const oldCurrent = this.props.currentPage;
      const newCurrent = oldCurrent + 1;
      this.props.changeCurrentPage(newCurrent)
      this.props.renderCurrentPage(newCurrent)
    }
  }

  decreaseCurrentPgHandler(){
    if(this.props.currentPage > 1) {
      const oldCurrent = this.props.currentPage;
      const newCurrent = oldCurrent - 1;
      this.props.changeCurrentPage(newCurrent)
      this.props.renderCurrentPage(newCurrent)
    }
  }


  render(){
    return(
      <form>
          {this.props.currentPage !== 1 && <input id="left" value="left" type="button" onClick={this.decreaseCurrentPgHandler}/>}

          <input value={1} type="button" onClick={this.changeCurrentPgHandler}/>
          {this.props.currentPage > 4 && this.props.lastPage > 4 && <a>...</a>}
          { this.props.currentPage === this.props.lastPage && this.props.lastPage > 3 && <input value={this.props.lastPage - 2} type="button" onClick={this.changeCurrentPgHandler}/>}
          { this.props.currentPage === 4 && this.props.lastPage > 4 && <input value={this.props.currentPage-2} type="button" onClick={this.changeCurrentPgHandler}/>}
          { this.props.currentPage >= 3  && <input value={this.props.currentPage-1} type="button" onClick={this.changeCurrentPgHandler}/>}
          { this.props.currentPage >= 2 && this.props.currentPage <= (this.props.lastPage -1) && <input value={this.props.currentPage} type="button" onClick={this.changeCurrentPgHandler}/>}
          { this.props.currentPage <= (this.props.lastPage-2) && <input value={this.props.currentPage+1} type="button" onClick={this.changeCurrentPgHandler}/>}
          { this.props.currentPage === 1 && this.props.lastPage > 3 && <input value={this.props.currentPage+2} type="button" onClick={this.changeCurrentPgHandler}/>}
          { this.props.currentPage === this.props.lastPage -3 && this.props.lastPage > 4 && <input value={this.props.currentPage+2} type="button" onClick={this.changeCurrentPgHandler}/>}
          {this.props.currentPage < this.props.lastPage - 3 && this.props.lastPage > 4 && <a>...</a>}
          <input value={this.props.lastPage} type="button" onClick={this.changeCurrentPgHandler}/>

          {this.props.currentPage !== this.props.lastPage && <input id="right" value="right" type="button" onClick={this.increaseCurrentPgHandler}/>}
      </form>
    )
  }
}

export default Page


