import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import './styles/button.less';

 export default class Button extends PureComponent {

   onClick = (e) => {
     e.preventDefault();
     const {onClick} = this.props;
     if(onClick){
       onClick(e);
     }
   }
  render (){
    const {value, children} = this.props;
    return (
      <button className ="form-button"
      onClick = {this.onClick}
    >
      {children}
      </button>
     );
  }
}
