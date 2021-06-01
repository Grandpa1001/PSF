import React, {Component} from 'react';
import MenuButton from './components/MenuButton/MenuButton';

export default class Header extends Component {

  render (){

    return (
       <div>
        <ul>
          <MenuButton>Portfolio</MenuButton>
          <MenuButton>Teksty</MenuButton>
          <MenuButton>Mordeczki</MenuButton>
        </ul>
       </div>
     );
  }
}
