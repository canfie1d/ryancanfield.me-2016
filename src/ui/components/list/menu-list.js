import React              from 'react';
import ReactDOM           from 'react-dom';
import { findIndex }      from 'lodash';
import { Link }           from 'react-router';
import { toggleMenuItem } from '../../../actions/menu-actions';
import { connect }        from 'react-redux';
import Icon               from '../icon/icon';
import classNames         from 'classnames';
import MenuIcon           from './menu-icon.js';

let getPropsFromApplicationState = (state) => {
  return {
    currentMenuItem : state.menu.currentMenuItem,
    browser: state.browser
  };
};

const MenuList = connect(getPropsFromApplicationState)(React.createClass({

  displayName: 'MenuList',

  propTypes: {
    menuItems : React.PropTypes.array.isRequired
  },

  componentWillUnmount() {
    this.inactiveMenuItem();
  },

  activeMenuItem(title) {
    this.props.dispatch(toggleMenuItem(title));
  },

  inactiveMenuItem() {
    this.props.dispatch(toggleMenuItem(''));
  },

  renderItems() {
    let items = [];

    for (let i = 0; i < this.props.menuItems.length; i++) {
      if (this.props.menuItems[i].external) {
        items.push(
          <li key={i} className='menu__item'>
            <a
                key         = {i}
                href        = {this.props.menuItems[i].url}
                target      = {this.props.menuItems[i].url !== 'mailto:ryancanfield@me.com' ? '_blank' : '_self'}
                className   = 'menu__link'
                onMouseOver = {this.activeMenuItem.bind(null, this.props.menuItems[i].title)}
                onMouseOut  = {this.inactiveMenuItem}
                onClick     = {this.inactiveMenuItem}
                onTouchEnd  = {this.inactiveMenuItem}
                onFocus     = {this.activeMenuItem.bind(null, this.props.menuItems[i].title)}
                onBlur      = {this.inactiveMenuItem}
            >
                {this.props.menuItems[i].title}
            </a>
          </li>
        );
      } else {
        items.push(
          <li key={i} className='menu__item'>
            <Link
                key          = {i}
                to           = {'/' + this.props.menuItems[i].url}
                className    = 'menu__link'
                onFocus      = {this.activeMenuItem.bind(null, this.props.menuItems[i].url)}
                onBlur       = {this.inactiveMenuItem}
                onMouseOver  = {this.activeMenuItem.bind(null, this.props.menuItems[i].url)}
                onMouseOut   = {this.inactiveMenuItem}
                onMouseDown  = {this.inactiveMenuItem}
                onTouchStart = {this.inactiveMenuItem}
                >
                {this.props.menuItems[i].title}
            </Link>
          </li>
        );
      }
    }

    return items;
  },

  renderIcon() {
    if (this.props.browser.greaterThan.extraSmall) {
      return (
        <MenuIcon
          icon = {this.props.currentMenuItem}
          color = {this.props.currentMenuItem.toLowerCase()}
          menuHovered = {this.props.currentMenuItem !== ''}
        />
      );
    }
  },

  render() {
    return (
      <nav className='menu' aria-role='navigation'>
          <ul className='menu__list'>
              {this.renderItems()}
          </ul>
          {this.renderIcon()}
      </nav>
    );
  },

}));

export default MenuList;
