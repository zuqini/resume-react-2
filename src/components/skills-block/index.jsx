import React from 'react';

import './styles.scss';

const SkillsBlock = (props) => {
    const { title, children } = props;
    return (
        <div className='skills-block'>
            <p className='skills-title'>{title}</p>
            <div className='content'>{children}</div>
        </div>
    );
};

export default SkillsBlock;