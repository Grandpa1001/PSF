import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {MATERIALY, SZKOLENIA} from '../../constants/pages';
import {navigateTo} from '../../actions/navigate';

function mapStateToProps(state){
  return{
    activePage: state.activePage,
  }
}
function mapDispatchToProps(dispatch){
  return{
    goToMaterial: () => dispatch(navigateTo(MATERIALY.url)),
    goToSzkolenia: () =>dispatch(navigateTo(SZKOLENIA.url)),
  }
}
class Instruktor extends PureComponent{

  render(){
    return(
    <div>Store: <b>{this.props.activePage}</b>
      <div>
        <button onClick={this.props.goToMaterial}>Materiały</button>
      </div>
      <div>
        <button onClick={this.props.goToSzkolenia}>Szkolenia</button>
      </div>
    </div>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Instruktor)
