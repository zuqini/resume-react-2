import React from 'react';

import './styles.scss';

const ProjectsBlock = (props) => {
    const {title, type, href, time, techList, children } = props;
    return (
        <a href={href} className='projects-block'>
            <div className='project-header clear-fix'>
                <p className='project-title med-text'>{title}</p>
                <span className='separator'>|</span>
                <p className='type bold-text'>{type}</p>
                <span className='separator'>|</span>
                <p className='tech med-text'>{techList.join(', ')}</p>
                <p className='time med-text'>{time}</p>
            </div>
            <div className='content'>
                {children}
            </div>
        </a>
    );
};

export default ProjectsBlock;