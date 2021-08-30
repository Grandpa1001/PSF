import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import className from 'classnames';
import './styles/textarea.less';

 export default class Textarea extends PureComponent {

static propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  }

onChange = (e) => {
  const {onChange,name} = this.props;
  onChange(e.target.value, name);
}

onBlur = (e) => {
  const {onBlur,name} = this.props;
  if(onBlur){
    onBlur(e, name);
  }
}

onFocus = (e) => {
  const {onFocus,name} = this.props;
  if(onFocus){
    onFocus(e, name);
  }
}

  render (){
    const {value,isInvalid} = this.props;
    const textareaClasses = className('form-textarea',{
      'form-textarea-invalid' : isInvalid,
    })
    return (
      <textarea className ={textareaClasses}
      value ={value}
      onChange = {this.onChange}
      onFocus = {this.onFocus}
      onBlur = {this.onBlur}
      />
     );
  }
}
