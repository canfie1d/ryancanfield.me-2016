import React       from 'react';
import DisplayMenu from './display-menu';
import classNames  from 'classnames';
import Icon        from '../../components/icon/icon';

const Display = React.createClass({

  displayName: 'Display',

  propTypes: {
    projects : React.PropTypes.array
  },

  getInitialState() {
    return {
      menuActive    : true,
      activeProject : this.props.projects[0],
      activeImage   : 1
    };
  },

  toggleMenu() {
    if (!this.state.menuActive) {
      this.setState({
        menuActive    : true,
        activeProject : this.props.projects[0]
      });
    } else {
      this.setState({
        menuActive : false
      });
    }

  },

  onPreviousClick() {
    if (this.state.activeImage > 1) {
      this.setState({
        activeImage : this.state.activeImage - 1
      });
    }
  },

  onNextClick() {
    if (this.state.activeImage < this.state.activeProject.images.length) {
      this.setState({
        activeImage : this.state.activeImage + 1
      });
    }
  },

  renderImages(project) {
    let projectImages = [];

    for (let i = 0; i < project.images.length; i++) {
      let classes = [
        'project__image',
        'project__image--' + this.state.activeImage + '-active'
      ];

      projectImages.push(
                <img key={i} className={classNames(classes)} src={project.images[i].url} />
            );
    }

    return projectImages;
  },

  renderProjects() {
    let projects = [];

    for (let i = 0; i < this.props.projects.length; i++) {
      let classes = [
        'project__list',
        'project__list--' + this.state.activeProject.id + '-active'
      ];
      projects.push(
                <ul key={i} className={classNames(classes)}>
                    {this.renderImages(this.props.projects[i])}
                </ul>
            );
    }

    return projects;
  },

  onMenuItemClick(index) {
    let currentProject = this.props.projects[index];

    this.setState({
      activeProject : currentProject,
      activeImage   : 1
    });

    this.toggleMenu();
  },

  renderMenuItems() {
    let projectTitles = [];

    for (let i = 0; i < this.props.projects.length; i++) {
      projectTitles.push(
                <li key={i} className='display__menu__item' onClick={this.onMenuItemClick}>
                    {this.props.projects[i].title}
                </li>
            );
    }

    return projectTitles;
  },

  renderProjectButtons() {
    let buttonDisabledClass = () => {
        if(this.state.activeImage === this.state.activeProject.images.length) {
          return 'display__project-button--previous--disabled';
        } else if (this.state.activeImage === 1) {
          return 'display__project-button--next--disabled';
        }

        return null;
      },
      buttonsActiveClass = this.state.menuActive ? null : 'display__project-button--active',
      classes = [
        'display__project-button',
        buttonsActiveClass
      ];

    return [
      <div key='prev-button' className={classNames(classes, 'display__project-button--previous', buttonDisabledClass())} onClick={this.onPreviousClick}>
                <Icon icon='Caret' color='white' className='display__project-button__icon' />
            </div>,
      <div key='next-button' className={classNames(classes, 'display__project-button--next', buttonDisabledClass())} onClick={this.onNextClick}>
                <Icon icon='Caret' color='white' className='display__project-button__icon' />
            </div>
    ];
  },

  render() {
    let menuButtonClasses = [
      'display__menu__button',
      this.state.menuActive ? 'display__menu__button--active' : null
    ];

    return (
            <div className='display__body'>
                <div className={classNames(menuButtonClasses)} onClick={this.toggleMenu}>
                    MENU
                </div>
                <div className='display__inner-bezel'>
                    <DisplayMenu
                        projects        = {this.props.projects}
                        activeProject   = {this.state.activeProject}
                        onMenuItemClick = {this.onMenuItemClick}
                        menuActive      = {this.state.menuActive}
                    />
                    <div className='display'>
                        {this.renderProjects()}
                    </div>
                </div>
                <div className='display__button' />
                <div className='display__base' />
                {this.renderProjectButtons()}
            </div>
        );
  },

});

export default Display;
