import React from 'react';
import SVG from 'react-inlinesvg';

const PageIcon = styled.div`
  display:inline-flex;
  margin-left:10px;
  margin-top: 20px;
  margin-bottom:40px;
`;
const PageNumber = styled.div`
  margin-top:3.5px;
  margin-left:23px;
  margin-right:23px;
  cursor:pointer;
  color:#008489;
  font-size:15px;
  font-weight:lighter;
  :hover{text-decoration: underline;}
`;

const CurrentPage = styled.div`
  margin-left:23px;
  margin-right:23px;
  cursor:pointer;
  color:white;
  font-size:15px;
  border-Radius:50%;
  background-color:#008489;;
  width:28px;
  height:28px;
  text-align:center;
  line-height: 1.8;
  font-weight:lighter;
  :hover{text-decoration: underline;}
`;

const PageDec = styled.a`
  margin-left:8px;
  margin-right:8px;
`;

const PageButton = styled.div`
  font-size:1.5px;
  cursor:pointer;
`;


class Page extends React.Component{
  constructor(props) {
    super(props)
    this.increaseCurrentPgHandler = this.increaseCurrentPgHandler.bind(this);
    this.decreaseCurrentPgHandler = this.decreaseCurrentPgHandler.bind(this);
    this.changeCurrentPgHandler = this.changeCurrentPgHandler.bind(this)
  }


  changeCurrentPgHandler({target}){
    let newCurrent = Number(target.id);
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
      <PageIcon>
          {this.props.currentPage !== 1 && <PageButton><SVG id="left" src="http://localhost:5002/fonts/left-arrow.svg" onClick={this.decreaseCurrentPgHandler}></SVG></PageButton> }

          <div style={{display:`inline-flex`, marginLeft:`20px`,marginRight:`20px`}}>

            {this.props.currentPage !==1 && <PageNumber className="pg" id={1} onClick={this.changeCurrentPgHandler}>1</PageNumber>}

            {this.props.currentPage > 4 && this.props.lastPage > 4 && <PageDec>...</PageDec>}

            { this.props.currentPage === this.props.lastPage && this.props.lastPage > 3 && <PageNumber className="pg" id={this.props.lastPage - 2} onClick={this.changeCurrentPgHandler}>{this.props.lastPage - 2}</PageNumber>}

            { this.props.currentPage === 4 && this.props.lastPage > 4 && <PageNumber className="pg" id={this.props.currentPage-2} onClick={this.changeCurrentPgHandler}>{this.props.currentPage-2}</PageNumber>}

            { this.props.currentPage >= 3  && <PageNumber className="pg" id={this.props.currentPage-1} onClick={this.changeCurrentPgHandler}>{this.props.currentPage-1}</PageNumber>}

            { this.props.currentPage >= 1 && this.props.currentPage <= this.props.lastPage && <CurrentPage className="pg" id={this.props.currentPage} onClick={this.changeCurrentPgHandler}>{this.props.currentPage}</CurrentPage>}

            { this.props.currentPage <= (this.props.lastPage-2) && <PageNumber className="pg" id={this.props.currentPage+1} onClick={this.changeCurrentPgHandler}>{this.props.currentPage+1}</PageNumber>}

            { this.props.currentPage === 1 && this.props.lastPage > 3 && <PageNumber className="pg" id={this.props.currentPage+2} onClick={this.changeCurrentPgHandler}>{this.props.currentPage+2}</PageNumber>}

            { this.props.currentPage === this.props.lastPage -3 && this.props.lastPage > 4 && <PageNumber className="pg" id={this.props.currentPage+2} onClick={this.changeCurrentPgHandler}>{this.props.currentPage+2}</PageNumber>}

            {this.props.currentPage < this.props.lastPage - 3 && this.props.lastPage > 4 && <PageDec>...</PageDec>}

            {this.props.currentPage !==this.props.lastPage && <PageNumber className="pg" id={this.props.lastPage} type="button" onClick={this.changeCurrentPgHandler}>{this.props.lastPage}</PageNumber>}
          </div>

          {this.props.currentPage !== this.props.lastPage && <PageButton><SVG id="right" src="http://localhost:5002/fonts/right-arrow.svg" onClick={this.increaseCurrentPgHandler}></SVG></PageButton>}
      </PageIcon>
    )
  }
}


export default Page


