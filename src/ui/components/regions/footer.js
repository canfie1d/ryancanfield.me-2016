import React      from 'react';
import classNames from 'classnames';
import Icon       from '../../components/icon/icon';

const Footer = React.createClass({

  displayName: 'Footer',

  propTypes : {
    childArray : React.PropTypes.array
  },

  renderChildren() {
    if(this.props.childArray) {
      let children = [];

      for (let i = 0; i < this.props.childArray.length; i++) {
        children.push(
                    <div key={i} className='footer__column'>{this.props.childArray[i]}</div>
                );
      }

      return children;
    }

    return <div className='footer__column'>{this.props.children}</div>;
  },

  render() {
    return (
            <footer>
                <div className='footer'>
                    {this.renderChildren()}
                </div>
            </footer>
        );
  },

});

export default Footer;
