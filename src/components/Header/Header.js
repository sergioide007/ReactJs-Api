import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';


class Header extends Component {
  
  constructor(props) {
      super(props);
      this.state = {isToggleOn: false};

      this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
      this.state(prevState => ({
          isToggleOn: !prevState.isToggleOn
      }));
  }
  
  render() {
    
    let menuActive = this.state.isToggleOn ? 'is-active' : '';

    return (
      <div className="nav has-shadow">
        <div className="container">
          <div className="nav-left">
            <a className="nav-item">MiBanco</a>
          </div>

          <span className={'nav-toggle '+menuActive} onClick={this.handleClick}>
            <span></span>
            <span></span>
            <span></span>
          </span>

          <div className={'nav-right nav-menu '+menuActive}>

            <Link to="/" className="nav-item r-item">Inicio</Link>
            <Link to="/faq" className="nav-item r-item">Características</Link>
            <Link to="/faq" className="nav-item r-item">Acerca de</Link>
            <Link to="/faq" className="nav-item r-item">Preguntas</Link>

            <div className="nav-item">
              <p className="control">
                <a className="button is-primary is-outlined">
                  <span className="icon">
                    <i className="fa fa-download"></i>
                  </span>
                  <span>Únete</span>
                </a>
              </p>
            </div>

          </div>
        </div>      
      </div>

            
    );
  }
}

export default Header;
