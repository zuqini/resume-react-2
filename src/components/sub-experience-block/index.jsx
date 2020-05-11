import React from 'react';

import './styles.scss';

const SupExperienceBlock = (props) => {
    const { href, position, company, time, location, icon, techList, children } = props;
    return (
        <div className='sub-experience-block'>
            <a href={href} className='sub-experience-header'>
                <div className='desc'>
                    <p className='position-title'><span className='bold-text hidden'>{company}</span> | <span className='position med-text'>{position}</span></p>
                    <p className='subtitle'>{time} | {location}</p>
                </div>
            </a>
            <ul className='content'>
                {children}
            </ul>
        </div>
    );
};

export default SupExperienceBlock;