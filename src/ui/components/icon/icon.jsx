import React from 'react';

const Icon = React.createClass({

  displayName : 'Icon',

  propTypes: {
    icon: React.PropTypes.string.isRequired,
    size: React.PropTypes.oneOf([
      'x-small',
      'small',
      'large',
      'x-large',
      null,
    ]),
    rotate: React.PropTypes.oneOf([
      0,
      45,
      90,
      180,
      270,
    ]),
    color: React.PropTypes.oneOf([
      'black',
      'white',
      'primary',
      'secondary',
      'tertiary',
      'projects',
      'concepts',
      'about',
      'elsewhere',
      'status--success',
      'status--warning',
      'status--error',
      null,
    ]),
    className: React.PropTypes.string,
  },

  getDefaultProps() {
    return {
      size: null,
      rotate: null,
      color: null,
      className: null,
    };
  },

  render() {
    const IconComponent = require(`./icons/${this.props.icon}`).default;
    const sizeClass = this.props.size ?
      `icon--${this.props.size}` : null;

    const colorClass = this.props.color ?
      `icon--${this.props.color}` : null;

    const rotationClass = this.props.rotate ?
      `icon--rotate-${this.props.rotate}` : null;

    const classes = [
      'icon',
      sizeClass,
      colorClass,
      rotationClass,
      this.props.className,
    ].join(' ').trim();

    return (
            <span className={classes}>
                <IconComponent />
            </span>
        );
  },

});

export default Icon;
