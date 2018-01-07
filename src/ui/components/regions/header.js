import React              from 'react';
import classNames         from 'classnames';
import Icon               from '../../components/icon/icon';
import { connect }        from 'react-redux';
import BackButton         from '../../components/buttons/back-button';
import { browserHistory } from 'react-router';

let getPropsFromApplicationState = (state) => {
  return {
    browser : state.browser
  };
};

const Header = connect(getPropsFromApplicationState)(React.createClass({

  displayName: 'Header',

  propTypes : {
    title      : React.PropTypes.string,
    icon       : React.PropTypes.string,
    marginTop  : React.PropTypes.bool,
    smallWidth : React.PropTypes.bool
  },

  renderIcon() {
    if (this.props.browser.greaterThan.extraSmall) {
      let iconSize = this.props.browser.greaterThan.small ? 'x-large' : 'large';

      return (
        <Icon className='page__header__icon' icon={this.props.icon} size={iconSize} color='white' />
      );
    }
  },

  render() {
    let classes = [
      'page__header',
      this.props.smallWidth ? 'page__header--small-width' : null
    ];

    return (
            <header className='header'>
                <div className={classNames(classes)}>
                    {this.renderIcon()}
                    <h1 className='page__header__title'>{this.props.title}</h1>
                </div>
            </header>
        );
  },

}));

export default Header;
