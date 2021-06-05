import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import './styles/input.less';

 export default class Input extends PureComponent {

static propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  }

onChange = (e) => {
  const {onChange,name} = this.props;
  onChange(e.target.value, name);
}
  render (){
    const {value} = this.props;
    return (
      <input className ="form-input"
      value ={value}
      onChange = {this.onChange}
      />
     );
  }
}
