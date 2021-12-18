import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import className from 'classnames';
import './styles/button.less';
export const PRIMARY = 'primary';
export const SECONDARY = 'secondary';
export default class Button extends PureComponent {

  static propTypes = {
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    type: PropTypes.oneOf([PRIMARY, SECONDARY]),
  }

  static defaultProps = {
    type: PRIMARY,
  }

  onClick = (e) => {
    e.preventDefault();
    const {onClick, disabled} = this.props;
    if(onClick && !disabled) {
      onClick(e);
    }
  }

  render() {
		const {children, disabled, type} = this.props;
    const buttonClass = className('form-button', {
      'form-button-disabled': disabled,
      'form-button-primary': type === PRIMARY,
      'form-button-secondary': type === SECONDARY,
    })
		return(
      <button
        className={buttonClass}
        onClick={this.onClick}
      >
        {children}
      </button>
    );
	}
};
