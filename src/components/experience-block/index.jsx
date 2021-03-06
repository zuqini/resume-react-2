import React from 'react';

import './styles.scss';

import Icon from '../icon';

const ExperienceBlock = (props) => {
    const { href, position, team, company, time, subTime, location, icon, techList, children } = props;
    return (
        <div className='experience-block'>
            <div className='experience-header'>
                <div className='desc'>
                    <p className='position-title'><a href={href} className='bold-text'>{company}</a> | <span className='position med-text'>{position}</span> <span className='team med-text'>{team ? `@${team}` : ''}</span></p>
                    <p className='subtitle med-text'>{time} | {location} { subTime ? <span className='subtime'>({subTime})</span> : null }</p>
                    <p className='tech med-text'>{techList.join(', ')}</p>
                </div>
                <a href={href}>
                    <Icon isCompany icon={icon} />
                </a>
            </div>
            <ul>
                {children}
            </ul>
        </div>
    );
};

export default ExperienceBlock;
