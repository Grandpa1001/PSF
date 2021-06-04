import React, {Component} from 'react';
import classnames from 'classnames';
import './styles/menuButton.less';

 export default class MenuButton extends Component {

constructor(){
  super();
  this.goToPage = this.goToPage.bind(this);
}

goToPage= () => {
  const{navigateTo, href} = this.props;
  navigateTo(href);
}
  render (){
    const {children, href, activePage} = this.props;

    const isActive = activePage===href;

    const className = classnames('menu-button', {
      'menu-button-active': isActive,
    });
    return (
       <li className={className} onClick={this.goToPage}>
       {children}
       </li>
     );
  }
}
