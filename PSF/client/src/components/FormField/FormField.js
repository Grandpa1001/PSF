import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import './styles/formField.less';
import className from 'classnames';

 export default class FormField extends PureComponent {

static propTypes = {
  value: PropTypes.string,
  isEmpty:PropTypes.bool,
  errorMessage: PropTypes.string,
  }

  render (){
    const {children, label, isEmpty, errorMessage} = this.props;
    const formFieldClasses = className('form-field-label',{
      'form-field-label-empty': isEmpty
    })
    return (
      <div className ="form-field">
        <div className={formFieldClasses}>{label}</div>
          {children}
        <div className = 'form-field-error'>
          {errorMessage}
        </div>
      </div>
     );
  }
}
