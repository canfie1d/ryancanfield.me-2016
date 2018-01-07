import React              from 'react';
import ReactDOM           from 'react-dom';
import { findIndex }      from 'lodash';
import { Link }           from 'react-router';
import { toggleMenuItem } from '../../../actions/menu-actions';
import { connect }        from 'react-redux';
import Icon               from '../icon/icon';
import classNames         from 'classnames';

const MenuIcon = React.createClass({

  displayName: 'MenuIcon',

  propTypes: {
    icon : React.PropTypes.string.isRequired,
    color: React.PropTypes.string.isRequired,
    menuHovered: React.PropTypes.bool.isRequired
  },

  getDefaultProps() {
    return {
      icon : null
    };
  },

  renderIcon() {
    let iconColor = () => {
      let icon = this.props.icon;
      let color = this.props.color;

      switch (icon) {
      case 'Projects':
        return color;
      case 'Concepts':
        return color;
      case 'About':
        return color;
      case 'Elsewhere':
        return color;
      default:
        return 'white';
      }
    };

    let classes = [
      'menu-icon',
      this.props.menuHovered ? 'menu-icon--active' : null
    ];

    return (
      <div className={classNames(classes)}>
        <Icon
          className = 'menu__icon'
          icon      = {this.props.icon !== '' && this.props.icon !== null ? this.props.icon : "Blank"}
          size      = 'x-large'
          color     = {iconColor()}
        />
      </div>
    );
  },

  render() {
    return this.renderIcon();
  },

});

export default MenuIcon;
