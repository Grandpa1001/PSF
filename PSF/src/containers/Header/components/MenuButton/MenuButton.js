import React, {Component} from 'react';
import classnames from 'classnames';

import './styles/menuButton.less';



export default class MenuButton extends Component {

  render (){
    const {isActive, children} = this.props;
    const className = classnames('menu-button', {
      'menu-button-active': isActive,
    });
    return (
       <li className={className}>
       <button>{children}</button>
       </li>
     );
  }
}
