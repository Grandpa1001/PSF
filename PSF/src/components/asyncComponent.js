import React, {PureComponent} from 'react';
import store from '../store';
import {extendReducers} from '../reducers';
export const asyncComponent = (importConmponent)=>{
  return class extends PureComponent{

    state = {component: null};

    componentDidMount(){
      importConmponent()
      .then(c => {
        const {component, reducer, name} = c.default;
        extendReducers(store, reducer, name);
        return this.setState({component});
    })
    }


    render(){
      const {component: Component} = this.state;
      return Component ? <Component {...this.props}/> : null;
    }
  }
}
