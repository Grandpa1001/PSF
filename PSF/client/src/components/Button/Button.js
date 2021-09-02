import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import className from 'classnames';
import './styles/button.less';

 export default class Button extends PureComponent {

   onClick = (e) => {
     e.preventDefault();
     const {onClick, disabled} = this.props;
     if(onClick && !disabled){
       onClick(e);
     }
   }

  render (){
    const {children, disabled} = this.props;
    const buttonClass = className('form-button', {
      'form-button-disabled': disabled,
    })
    return (
      <button
      className ={buttonClass}
      onClick = {this.onClick}
    >
      {children}
      </button>
     );
  }
}
