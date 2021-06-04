import React, {PureComponent} from 'react';

export const asyncComponent = (importConmponent)=>{
  return class extends PureComponent{

    state = {component: null};

    componentDidMount(){
      importConmponent()
      .then(c => {this.setState({component: c.default})
    })
    }


    render(){
      const {component: Component} = this.state;
      return Component ? <Component {...this.props}/> : null;
    }
  }
}
