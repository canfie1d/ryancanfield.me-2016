import React              from 'react';
import Header             from '../components/regions/header';
import ElsewhereContent   from '../content/elsewhere-content';

const ElsewherePage = React.createClass({

  displayName: 'ElsewherePage',

  render() {
    return (
            <div key='elsewhere-page' className='page__content-container'>
                <Header
                    title = 'Elsewhere'
                    icon  = 'Elsewhere'
                />
                <ElsewhereContent />
            </div>
        );
  },

});

export default ElsewherePage;
