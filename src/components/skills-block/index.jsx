import React from 'react';

import './styles.scss';

const SkillsBlock = (props) => {
    const { title, children } = props;
    return (
        <div className='skills-block'>
            <p className='skills-title med-text'>{title}</p>
            <ul className='content'>{children}</ul>
        </div>
    );
};

export default SkillsBlock;