import React       from 'react';
import { connect } from 'react-redux';
import chalk       from 'chalk';

let getPropsFromApplicationState = (state) => {
  return {
    currentMenuItem : state.menu.currentMenuItem,
    browser : state.browser
  };
};

let Branding = connect(getPropsFromApplicationState)(React.createClass({

  displayName: 'Branding',

  onClick() {
    console.log("        IT'S A SECRET        ");
    console.log("        TO EVERYBODY.        ");
    console.log("        🔥   👹   🔥         ");
    console.log("                             ");
    console.log("    ryancanfield.me/secret   ");
  },

  renderBlankTiles() {
    let tiles = [];
    let count = 4;

    if (this.props.browser.greaterThan.medium) {
      for(let i = 0; i < count; i++) {
        tiles.push(
          <div className='branding__column'>
            <span className='branding__letter'/>
          </div>
        );
      }

      return tiles;
    }
  },

  renderRemainingLetters() {
    if (this.props.browser.greaterThan.medium) {
      return [
        <div className='branding__column'>
          <span className='branding__letter'>i</span>
        </div>,
        <div className='branding__column'>
          <span className='branding__letter'>e</span>
        </div>,
        <div className='branding__column'>
          <span className='branding__letter'>l</span>
        </div>,
        <div className='branding__column'>
          <span className='branding__letter'>d</span>
        </div>
      ];
    }
  },

  renderLastRow() {
    if (this.props.browser.lessThan.large) {
      return (
        <div className='branding__row'>
          <div className='branding__column'>
            <span className='branding__letter'>i</span>
          </div>
          <div className='branding__column'>
            <span className='branding__letter'>e</span>
          </div>
          <div className='branding__column'>
            <span className='branding__letter'>l</span>
          </div>
          <div className='branding__column'>
            <span className='branding__letter'>d</span>
          </div>
        </div>
      );
    }
  },

  render() {
    let letterTextColor = 'branding__letter--' + this.props.currentMenuItem;

    let classes = [
      'branding__letter',
      letterTextColor,
    ].join(' ').trim();

    return (
      <div className='branding' onClick={this.onClick}>
        <div className='branding__row'>
          <div className='branding__column'>
            <span className={classes}>r</span>
          </div>
          <div className='branding__column'>
            <span className={classes}>y</span>
          </div>
          <div className='branding__column'>
            <span className='branding__letter'>a</span>
          </div>
          <div className='branding__column'>
            <span className='branding__letter'>n</span>
          </div>
          {this.renderBlankTiles()}
        </div>
        <div className='branding__row'>
          <div className='branding__column'>
            <span className='branding__letter'>c</span>
          </div>
          <div className='branding__column'>
            <span className={classes}>a</span>
          </div>
          <div className='branding__column'>
            <span className={classes}>n</span>
          </div>
          <div className='branding__column'>
            <span className='branding__letter'>f</span>
          </div>
          {this.renderRemainingLetters()}
        </div>
        {this.renderLastRow()}
      </div>
    );
  },

}));

export default Branding;
