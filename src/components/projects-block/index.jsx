import React from 'react';

import './styles.scss';

const ProjectsBlock = (props) => {
    const {title, type, href, time, techList, children } = props;
    return (
        <div className='projects-block'>
            <div className='project-header clear-fix'>
                <p className='project-title med-text'><a href={href}>{title}</a></p>
                <span className='separator'>|</span>
                <p className='type bold-text'>{type}</p>
                <span className='separator'>|</span>
                <p className='tech med-text'>{techList.join(', ')}</p>
                <p className='time med-text'>{time}</p>
            </div>
            <div className='content'>
                {children}
            </div>
        </div>
    );
};

export default ProjectsBlock;