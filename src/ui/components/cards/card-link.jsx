import React              from 'react';
import { browserHistory } from 'react-router';

const CardLink = React.createClass({

  displayName: 'CardLink',

  propTypes : {
    title       : React.PropTypes.string,
    description : React.PropTypes.string,
    imageUrl    : React.PropTypes.string,
    url         : React.PropTypes.string,
    length      : React.PropTypes.string
  },

  render() {
    return (
            <a href={this.props.url} target='_blank' className='card__link'>
                <div className='card__row'>
                    <div className='card__column'>
                        <img src={this.props.imageUrl} className='card__image' />
                    </div>
                    <div className='card__column'>
                        <span className='card__title'>
                            {this.props.title}
                        </span>
                        <p className='card__description'>
                            {this.props.description}
                        </p>
                        <span className='card__length'>
                            {this.props.length}
                        </span>
                    </div>
                </div>
            </a>
        );
  },

});

export default CardLink;
