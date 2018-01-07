import React       from 'react';
import classNames from 'classnames';

let DisplayMenu = React.createClass({

  displayName: 'DisplayMenu',

  propTypes: {
    projects        : React.PropTypes.array,
    activeProject   : React.PropTypes.object,
    onMenuItemClick : React.PropTypes.func,
    menuActive      : React.PropTypes.bool
  },

  renderMenuItems() {
    let projects = [];

    for (let i = 0; i < this.props.projects.length; i++) {
      projects.push(
        <li key={i} tabIndex='1' className='display__menu__item' onClick={this.props.onMenuItemClick.bind(this, i)}>
          {this.props.projects[i].title}
        </li>
      );
    }

    return projects;
  },

  render() {
    let classes = classNames({
      'display__menu'         : true,
      'display__menu--active' : this.props.menuActive
    });

    return (
      <div className='display__menu__wrapper'>
        <div className={classes}>
          <ul className='display__menu__list'>
            {this.renderMenuItems()}
          </ul>
        </div>
      </div>
    );
  },

});

export default DisplayMenu;
