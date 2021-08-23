import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import className from 'classnames';
import './styles/input.less';

 export default class Input extends PureComponent {

static propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  isInvalid: PropTypes.bool,
  }

onChange = (e) => {
  const {onChange,name} = this.props;
  onChange(e.target.value, name);
}
  render (){
    const {value, isInvalid} = this.props;
    const inputClasses = className('form-input',{
      'form-input-invalid' : isInvalid,
    })
    return (
      <input
      className ={inputClasses}
      value ={value}
      onChange = {this.onChange}
      />
     );
  }
}
