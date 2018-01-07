import React              from 'react';
import { Link }           from 'react-router';
import { connect }        from 'react-redux';
import Icon               from '../icon/icon';
import classNames         from 'classnames';

const List = React.createClass({

  displayName: 'List',

  propTypes: {
    listItems : React.PropTypes.array.isRequired
  },

  renderItems() {
    let items = [];

    for (let i = 0; i < this.props.listItems.length; i++) {
      items.push(
        <li key={i} className='icon-list__item'>
          <span className='icon-list__icon'>
            <Icon className='icon--logo' icon={this.props.listItems[i].icon} color='white' size='x-large' />
          </span>
          <span className='icon-list__tooltip'>{this.props.listItems[i].title}</span>
        </li>
      );
    }

    return items;
  },

  render() {
    return (
      <ul className='icon-list'>
        {this.renderItems()}
      </ul>
    );
  },

});

export default List;
