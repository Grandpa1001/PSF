import React, {PureComponent, Fragment} from 'react';
import PropTypes from 'prop-types';

export default class PortfolioList extends PureComponent {

  static propTypes = {
    portfolioList: PropTypes.array.isRequired,
  }

  render () {
    const {
      portfolioList,
    } =this.props;

    return (
      <ul className="portfolio-list-container">
        {portfolioList.map(item=>(
          <li className="portfolio-list-item">
            <div className="portfolio-list-item-title">
              {item.title}
            </div>
            <div className="portfolio-list-item-image">
              <img src={item.filename}/>
            </div>
            <div className="portfolio-list-item-description">
              {item.description}
            </div>
          </li>
        )
      )}
      </ul>
    );
  }
}
