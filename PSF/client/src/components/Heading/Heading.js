import React, { PureComponent } from 'react';
import className from 'classnames';
import './styles/heading.less';

export default class Heading extends PureComponent {

  static defaultprops = {
    size: 6,
  }
  render() {
		const { children, size} = this.props;
    const headingClasses = className('heading',{
      'heading-h1': size === 1,
      'heading-h2': size === 2,
      'heading-h3': size === 3,
      'heading-h4': size === 4,
      'heading-h5': size === 5,
      'heading-h6': size === 6,
    });

    switch(size){
      case 1: return <h1 className={headingClasses}>{children}</h1>;
      case 2: return <h2 className={headingClasses}>{children}</h2>;
      case 3: return <h3 className={headingClasses}>{children}</h3>;
      case 4: return <h4 className={headingClasses}>{children}</h4>;
      case 5: return <h5 className={headingClasses}>{children}</h5>;
      case 6: return <h6 className={headingClasses}>{children}</h6>;
    }
	}
};
