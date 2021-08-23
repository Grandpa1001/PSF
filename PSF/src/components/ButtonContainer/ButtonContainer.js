import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import './styles/buttonContainer.less';

 export default class ButtonConteiner extends PureComponent {

  render (){
    const {children} = this.props;
    return (
      <div
        className="form-button-container"
    >
      {children}
      </div>
     );
  }
};
