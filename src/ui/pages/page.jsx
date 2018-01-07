import React from 'react';
import classNames from 'classnames';

const Page = React.createClass({

  displayName: 'Page',

  render() {
    let classes=[
      'page',
      this.props.className
    ];

    return (
      <div className={classNames(classes)}>
        {this.props.children}
      </div>
    );
  },

});

export default Page;
