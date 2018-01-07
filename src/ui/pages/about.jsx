import React              from 'react';
import { browserHistory } from 'react-router';
import { connect }        from 'react-redux';
import BackButton         from '../components/buttons/back-button';
import Icon               from '../components/icon/icon.jsx';
import Header             from '../components/regions/header';
import Footer             from '../components/regions/footer';
import AboutContent       from '../content/about-content';

let getPropsFromApplicationState = (state) => {
  return {
    currentMenuItem : state.menu.currentMenuItem
  };
};

const AboutPage = connect(getPropsFromApplicationState)(React.createClass({

  displayName: 'AboutPage',

  onBackClick() {
    browserHistory.push('/');
  },

  render() {
    return (
            <div key='about-page' className='page__content-container'>
                <Header
                    title = 'About Me'
                    icon  = 'About'
                    smallWidth
                />
                <AboutContent />
                <Footer>
                    <BackButton onClick={this.onBackClick} staySmall />
                </Footer>
            </div>
        );
  },

}));

export default AboutPage;
