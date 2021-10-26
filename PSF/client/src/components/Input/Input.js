import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import className from 'classnames';
import './styles/input.less';

 export default class Input extends PureComponent {

static propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  isInvalid: PropTypes.bool,
  type: PropTypes.string,
  }

static defaultProps = {
  type : 'text',
}

onChange = (e) => {
  const {onChange,name,type} = this.props;
  if(type ==='file'){
    onChange(e.target.files[0], name);
  }else{
    onChange(e.target.value, name);
  }
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
    const {value, isInvalid, type} = this.props;
    const inputClasses = className('form-input',{
      'form-input-invalid' : isInvalid,
    })
    return (
      <input
      className ={inputClasses}
      value ={value}
      onChange = {this.onChange}
      onBlur = {this.onBlur}
      onFocus  = {this.onFocus}
      type = {type}
      />
     );
  }
}
