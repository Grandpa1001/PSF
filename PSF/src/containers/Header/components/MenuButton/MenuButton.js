import React, {Component} from 'react';
import classnames from 'classnames';

import {Link, withRouter} from 'react-router-dom';
import './styles/menuButton.less';




 class MenuButton extends Component {

  render (){
    const {children, href, location} = this.props;

    const isActive =location.pathname.indexOf(href) >-1;

    const className = classnames('menu-button', {
      'menu-button-active': isActive,
    });
    return (
       <li className={className}>
       <Link to={href}>{children}</Link>
       </li>
     );
  }
}


export default withRouter(MenuButton)
