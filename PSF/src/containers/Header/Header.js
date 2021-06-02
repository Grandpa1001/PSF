import React, {Component} from 'react';
import MenuButton from './components/MenuButton/MenuButton';
import './styles/header.less';
export default class Header extends Component {

  render (){
    return (
       <div className= "main-header">
        <ul className = "main-header-menu">
          <MenuButton isActive={true}>Portfolio</MenuButton>
          <MenuButton>Teksty</MenuButton>
          <MenuButton>Mordeczki</MenuButton>
        </ul>
       </div>
     );
  }
}
