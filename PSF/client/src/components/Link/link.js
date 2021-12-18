import React, { PureComponent } from 'react';
import './styles/link.less';

export default class Link extends PureComponent {
  render() {
		const { children, onClick, href} = this.props;
    let linkProps = {};

    if(onClick){
      linkProps = {...linkProps, onClick};
    }

    if(href){
      linkProps = {...linkProps, href};
    }

    return(
      <a className="link" {...linkProps}>
        {children}
      </a>
    );
	}
};
