import React    from 'react';
import ReactDOM from 'react-dom';
import CardLink from '../components/cards/card-link';

const CARD_LINKS = [
  {
    title       : 'Process & Method',
    description : 'An adaptation from the speech I gave at Phoenix Design Week’s Pecha Kucha talks.',
    imageUrl    : 'https://s3-us-west-2.amazonaws.com/ryancanfield.me-images/Link+Images/icons.png',
    url         : 'https://medium.com/@Canfie1d/process-method-bddef9f5e47f',
    length      : '6 min read'
  },
  {
    title       : 'Embedded SVG icon sets and Reactjs',
    description : 'How we implement icons at Synapse Studios',
    imageUrl    : 'https://s3-us-west-2.amazonaws.com/ryancanfield.me-images/Link+Images/sketch.png',
    url         : 'https://medium.com/@Canfie1d/reactjs-and-embedded-svg-icons-1e6eed0dc16a',
    length      : '4 min read'
  },
  {
    title       : 'SMACSS/BEM edge case naming convention',
    description : 'What do you do in cases where BEM methodology fails? What does the fallback naming convention look like?',
    imageUrl    : 'https://s3-us-west-2.amazonaws.com/ryancanfield.me-images/Link+Images/code.png',
    url         : 'https://medium.com/@Canfie1d/smacss-bem-edge-case-naming-convention-73be902b1d30',
    length      : '3 min read'
  },
];

const ConceptsContent = React.createClass({

  displayName: 'ConceptsContent',

  componentDidMount() {
    var component = ReactDOM.findDOMNode(this);

    component.style.opacity = 0;
    window.requestAnimationFrame(() => {
      component.style.transition = 'opacity 2500ms';
      component.style.opacity = 1;
    });
  },

  renderCardLinks() {
    let links = [];

    for (let i = 0; i < CARD_LINKS.length; i++) {

      links.push(
        <li className='card__item'>
          <CardLink
              key         = {i}
              title       = {CARD_LINKS[i].title}
              description = {CARD_LINKS[i].description}
              imageUrl    = {CARD_LINKS[i].imageUrl}
              url         = {CARD_LINKS[i].url}
              length      = {CARD_LINKS[i].length}
          />
        </li>
      );
    };

    return links;
  },

  render() {
    return (
            <main className='page__content'>
                <ul className='card__list'>
                  {this.renderCardLinks()}
                </ul>
            </main>
        );
  },

});

export default ConceptsContent;
