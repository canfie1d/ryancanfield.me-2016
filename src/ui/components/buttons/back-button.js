import React      from 'react';
import classNames from 'classnames';

let BackButton = React.createClass({

  displayName: 'BackButton',

  propTypes: {
    onClick   : React.PropTypes.func,
    staySmall : React.PropTypes.bool
  },

  render() {
    let classes = [
      'branding',
      'branding--back',
      this.props.staySmall ? 'branding--small' : null
    ];

    return (
            <div className={classNames(classes)} onClick={this.props.onClick} tabIndex='1'>
                <div className='branding__row'>
                    <div className='branding__column'>
                        <span className='branding__letter'>b</span>
                    </div>
                    <div className='branding__column'>
                        <span className='branding__letter'>a</span>
                    </div>
                    <div className='branding__column'>
                        <span className='branding__letter' />
                    </div>
                </div>
                <div className='branding__row'>
                    <div className='branding__column'>
                        <span className='branding__letter' />
                    </div>
                    <div className='branding__column'>
                        <span className='branding__letter'>c</span>
                    </div>
                    <div className='branding__column'>
                        <span className='branding__letter'>k</span>
                    </div>
                </div>
            </div>
        );
  },

});

export default BackButton;
