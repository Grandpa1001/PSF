import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Heading from '../../../components/Heading/Heading';
import PortfolioItem  from './PortfolioItem';

export default class PortfolioList extends PureComponent {

    static propTypes = {
      portfolioList: PropTypes.array.isRequired,
      editItem: PropTypes.func.isRequired,
      removeItem: PropTypes.func.isRequired,
    };

    render() {
       const {
         portfolioList,
         editItem,
         removeItem,
      } = this.props;

      return (
        <div>
          <Heading size={1}>Twoje prace:</Heading>
          <ul className="admin-portfolio-list">
            {portfolioList.map((item, key) => (
              <PortfolioItem
                item={item}
                editItem={editItem}
                removeItem={removeItem}
                key={item._id}
              />
          ))}
          </ul>
        </div>
        )
  }
}
