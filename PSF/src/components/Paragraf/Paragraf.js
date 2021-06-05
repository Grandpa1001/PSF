import React, {PureComponent} from 'react';
import './styles/paragraf.less';

 export default class Paragraf extends PureComponent {

  render (){
    const {children} = this.props;
    return (
      <p className ="paragraf-container">
        {children}
      </p>
     );
  }
}
