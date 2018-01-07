import React       from 'react';
import ReactDOM    from 'react-dom';
import { connect } from 'react-redux';
import Display     from '../components/display/display';
import List        from '../components/list/list';

let getPropsFromApplicationState = (state) => {
  return {
    browser : state.browser
  };
};

const CLIENTS = [
  {
    title : 'eBay Enterprise',
    icon  : 'Ebay'
  },
  {
    title : 'Blue Cross Blue Shield',
    icon  : 'Bcbs'
  },
  {
    title : 'Arizona State University',
    icon  : 'Asu'
  },
  {
    title : 'University of Arizona',
    icon  : 'Uoa'
  },
  {
    title : 'Northern Arizona University',
    icon  : 'Nau'
  },
  {
    title : 'Hotelogical',
    icon  : 'Hotelogical'
  },
  {
    title : 'TruTankless',
    icon  : 'Trutankless'
  },
  {
    title : 'BodeTree',
    icon  : 'Bodetree'
  },
  {
    title : 'Beacon ID',
    icon  : 'Beacon'
  },
  {
    title : 'Puppies.com',
    icon  : 'Puppies'
  },
  {
    title : 'High Above',
    icon  : 'Highabove'
  },
  {
    title : 'Carnival Cruiselines',
    icon  : 'Carnival'
  }
];

const PROJECTS = [
  {
    title  : 'Hotelogical',
    id     : 1,
    images : [
      {
        url:'https://s3-us-west-2.amazonaws.com/ryancanfield.me-images/Hotelogical/home.png'
      },
      {
        url:'https://s3-us-west-2.amazonaws.com/ryancanfield.me-images/Hotelogical/results.png'
      },
      {
        url:'https://s3-us-west-2.amazonaws.com/ryancanfield.me-images/Hotelogical/map.png'
      },
      {
        url:'https://s3-us-west-2.amazonaws.com/ryancanfield.me-images/Hotelogical/details.png'
      }
    ],
  },
  {
    title  : 'Synapse Studios',
    id     : 2,
    images : [
      {
        url:'https://s3-us-west-2.amazonaws.com/ryancanfield.me-images/Synapse+Studios/home.png'
      },
      {
        url:'https://s3-us-west-2.amazonaws.com/ryancanfield.me-images/Synapse+Studios/home2.png'
      },
      {
        url:'https://s3-us-west-2.amazonaws.com/ryancanfield.me-images/Synapse+Studios/who.png'
      },
      {
        url:'https://s3-us-west-2.amazonaws.com/ryancanfield.me-images/Synapse+Studios/benefits.png'
      }
    ],
  },
  {
    title  : 'USMexPat',
    id     : 3,
    images : [
      {
        url:'https://s3-us-west-2.amazonaws.com/ryancanfield.me-images/USMexPat/home.png'
      },
      {
        url:'https://s3-us-west-2.amazonaws.com/ryancanfield.me-images/USMexPat/menu.png'
      },
      {
        url:'https://s3-us-west-2.amazonaws.com/ryancanfield.me-images/USMexPat/gdp.png'
      },
      {
        url:'https://s3-us-west-2.amazonaws.com/ryancanfield.me-images/USMexPat/form.png'
      }
    ]
  },
  {
    title  : 'TruTankless',
    id     : 4,
    images : [
      {
        url:'https://s3-us-west-2.amazonaws.com/ryancanfield.me-images/TruTankless/login.png'
      },
      {
        url:'https://s3-us-west-2.amazonaws.com/ryancanfield.me-images/TruTankless/home.png'
      },
      {
        url:'https://s3-us-west-2.amazonaws.com/ryancanfield.me-images/TruTankless/dashboard.png'
      },
      {
        url:'https://s3-us-west-2.amazonaws.com/ryancanfield.me-images/TruTankless/form.png'
      }
    ]
  }
];

const ProjectsContent = connect(getPropsFromApplicationState)(React.createClass({

  displayName: 'ProjectsContent',

  componentDidMount() {
    var component = ReactDOM.findDOMNode(this);

    component.style.opacity = 0;
    window.requestAnimationFrame(() => {
      component.style.transition = 'opacity 2500ms';
      component.style.opacity = 1;
    });
  },

  renderDisplay() {
    if (this.props.browser.greaterThan.mediumSmall) {
      return (
        <Display projects={PROJECTS} />
      );
    }
  },

  renderSubtitle() {
    if(this.props.browser.greaterThan.mediumSmall) {
      return (
        <h2 className='page__subtitle'>Clients</h2>
      );
    }
  },

  render() {
    return (
      <main className='page__content'>
        {this.renderDisplay()}
        {this.renderSubtitle()}
        <List listItems={CLIENTS} />
      </main>
    );
  },

}));

export default ProjectsContent;
