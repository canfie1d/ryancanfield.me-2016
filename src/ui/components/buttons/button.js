import React from 'react';

let Button = React.createClass({

  displayName : 'Button',

  propTypes : {
    element : React.PropTypes.oneOf([
      'a',
      'button',
      'input',
      'span',
      'div'
    ]),
    componentCSSClassName : React.PropTypes.string,
    disabled              : React.PropTypes.bool,
    className             : React.PropTypes.string,
    href                  : React.PropTypes.string,
    target                : React.PropTypes.string,
    onClick               : React.PropTypes.func,
    tabIndex              : React.PropTypes.string,
    children              : React.PropTypes.any
  },

  getDefaultProps()
    {
    return {
      element               : 'button',
      componentCSSClassName : 'button',
      disabled              : false,
      className             : null,
      href                  : null,
      target                : null,
      onClick               : null,
      tabIndex              : 1
    };
  },

  render()
    {
    let Component,
      ComponentChildren,
      classes,
      childClassName;

    classes = [
      this.props.componentCSSClassName,
      this.props.className,
      this.props.disabled ?
                this.props.componentCSSClassName + '--disabled' : null
    ].join(' ');

    childClassName = this.props.componentCSSClassName + '__children';

    ComponentChildren = React.createElement(
            'span',
            {className : childClassName},
            this.props.children
        );

    Component = React.createElement(
            this.props.element,
      {
        className : classes,
        href      : this.props.href,
        target    : this.props.target,
        onClick   : this.props.onClick,
        disabled  : this.props.disabled,
        tabIndex  : this.props.tabIndex
      },
            ComponentChildren
        );

    return Component;
  }

});

export default Button;
