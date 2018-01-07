import React    from 'react';
import ReactDOM from 'react-dom';
import MenuList from '../components/list/menu-list';

const ELSEWHERE_ITEMS = [
  {
    title    : 'Email',
    icon     : 'Email',
    url      : 'mailto:ryancanfield@me.com',
    external : true
  },
  {
    title    : 'Github',
    icon     : 'Github',
    url      : 'http://www.github.com/canfie1d',
    external : true
  },
  {
    title    : 'Twitter',
    icon     : 'Twitter',
    url      : 'http://www.twitter.com/canfie1d',
    external : true
  },
  {
    title    : 'LinkedIn',
    icon     : 'LinkedIn',
    url      : 'http://www.linkedin.com/in/ryanmcanfield',
    external : true
  }
];

const ElsewhereContent = React.createClass({

  displayName: 'ElsewhereContent',

  componentDidMount() {
    var component = ReactDOM.findDOMNode(this);

    component.style.opacity = 0;
    window.requestAnimationFrame(() => {
      component.style.transition = 'opacity 2500ms';
      component.style.opacity = 1;
    });
  },

  render() {
    return (
            <main className='page__content page__content--menu page__content--no-header'>
                <MenuList menuItems={ELSEWHERE_ITEMS} />
            </main>
        );
  },

});

export default ElsewhereContent;
