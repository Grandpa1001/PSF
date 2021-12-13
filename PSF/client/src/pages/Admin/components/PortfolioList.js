import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

export default class PortfolioList extends Component {
  static propTypes = {
    portfolioList:PropTypes.array,
  };

  render() {
    const {
       portfolioList,
     } = this.props;

    return(
      <div>
        <b>Twoje prace:</b>
        <ul>
        {portfolioList.map((item, key)=>{
          return <li>{item.title} : <img src={item.filename}/></li>
        })}
        </ul>
      </div>
    )
  }
}
