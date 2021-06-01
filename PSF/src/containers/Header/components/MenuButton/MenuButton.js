import React, {Component} from 'react';
import './styles/menuButton.less';

export default class MenuButton extends Component {

  render (){

    return (
       <li className="menu-button">
       <button>{this.props.children}</button>
       </li>
     );
  }
}
