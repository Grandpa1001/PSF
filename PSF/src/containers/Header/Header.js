import React, {Component} from 'react';
import MenuButton from './components/MenuButton/MenuButton';
import {pages} from '../../constants/pages';

import './styles/header.less';

export default class Header extends Component {

  render (){
    return (
       <div className= "main-header">
        <ul className = "main-header-menu">
        {pages.map((page, index) => {
          return(
            <MenuButton key={index} href={page.url}>{page.label}</MenuButton>
          )
        })}
        </ul>
       </div>
     );
  }
}
