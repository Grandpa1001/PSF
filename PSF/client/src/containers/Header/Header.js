import React, {Component} from 'react';
import MenuButton from './components/MenuButton/MenuButton';
import Button  from '../../components/Button/Button';
import ButtonContainer  from '../../components/ButtonContainer/ButtonContainer';
import {pages} from '../../constants/pages';
import {navigateTo} from '../../actions/navigate';
import {connect} from 'react-redux';
import {getActivePage} from '../../selectors/root'
import './styles/header.less';

function mapStateToProps(state){
  return {
    activePage: getActivePage(state),
  }
}
function mapDispatchToProps(dispatch){
  return {
    navigateTo: (url) => dispatch(navigateTo(url))
  }
}

class Header extends Component {

  componentDidMount(){
    this.props.navigateTo(window.location.pathname);
  }

  render () {
    const {navigateTo, activePage} = this.props;
    return (
      <div className="main-header">
        <ul className="main-header-menu">
          {pages
            .filter(page => page.showInMenu)
            .map((page, index) => {
            return (
              <MenuButton
                key={index}
                navigateTo={navigateTo}
                href={page.url}
                activePage={activePage}
              >
              {page.label}

              </MenuButton>
            )
          })}
                  <Button>zaloguj</Button>
        </ul>

      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
