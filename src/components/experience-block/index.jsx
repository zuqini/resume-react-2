import React from 'react';

import './styles.scss';

import Icon from '../icon';

const ExperienceBlock = (props) => {
    const { href, position, company, time, location, icon, techList, children } = props;
    return (
        <div className='experience-block'>
            <a href={href} className='experience-header clear-fix'>
                <div className='desc'>
                    <p className='position-title'><span className='bold-text'>{company}</span> | <span className='position med-text'>{position}</span></p>
                    <p className='subtitle'>{time} | {location}</p>
                    <p className='tech med-text'>{techList.join(', ')}</p>
                </div>
                <span className='icon'>
                    <Icon isCompany icon={icon} />
                </span>
            </a>
            <ul className='content'>
                {children}
            </ul>
        </div>
    );
};

export default ExperienceBlock;