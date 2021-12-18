import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Link from '../../../components/Link/Link';

export default class PortfolioItem extends PureComponent {
    static propTypes = {
      item: PropTypes.object.isRequired,
      editItem: PropTypes.func.isRequired,
      removeItem: PropTypes.func.isRequired,
    };

    constructor(){
      super();
      this.state = {showConfirm: false};
    }

    editItem = () => {
      const {item, editItem} = this.props;
      editItem(item._id, item);
    }

    deleteItem = () => {
      const {item, removeItem} = this.props;
      removeItem(item._id);
      this.hideConfirm();
    }

    showConfirm = () => {
      this.setState({showConfirm: true});
    }

    hideConfirm = () => {
      this.setState({showConfirm: false});
    }

    render() {
       const {item} = this.props;
       const {showConfirm} = this.state;
       const styles = {
         backgroundImage: `url('${item.filename}')`,
       };
      return (
        <li className='admin-portfolio-list-item'>
          <div
            className='admin-portfolio-list-item-image'
            style={styles}
          />
          <p className='admin-portfolio-list-item-title'>{item.title}</p>
          <div>
            <Link onClick={this.editItem}>Edytuj</Link>
            <Link onClick={this.showConfirm}>Usuń</Link>
          </div>

          {showConfirm && (
            <div className='admin-portfolio-list-item-confirm'>
              <p className='admin-portfolio-list-item-confirm-description'>
                Czy na pewno usunąć: <b>{item.title}</b>
              </p>
              <div>
                <Link onClick={this.hideConfirm}>Anuluj</Link>
                <Link onClick={this.deleteItem}>Usuń</Link>
              </div>
            </div>
          )}
        </li>
        )
  }
}
