import React, {PureComponent} from 'react';
import './styles/formContainer.less';

 export default class FormContainer extends PureComponent {

  render (){
    const {children} = this.props;
    return (
      <form className ="form-container">
        {children}
      </form>
     );
  }
}
