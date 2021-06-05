import React, {PureComponent} from 'react';
import './styles/page.less';

 export default class Page extends PureComponent {

  render (){
    const {children, title} = this.props;
    return (
      <div className ="page-container">
      <h1 className="page-container-heading">{title}</h1>
        {children}
      </div>
     );
  }
}
