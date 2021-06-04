import React, {PureComponent} from 'react';
import {connect} from 'react-redux';

function mapStateToProps(state){
  return{
    activePage: state.activePage,
  }
}
class Instruktor extends PureComponent{

  render(){
    return(
    <div>Store: <b>{this.props.activePage}</b></div>
    );
  }
}


export default connect(mapStateToProps, null)(Instruktor)
