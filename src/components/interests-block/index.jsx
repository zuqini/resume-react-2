import React from 'react';

import './styles.scss';

const InterestsBlock = (props) => {
    const { children } = props;
    return (
        <ul className='interests-block'>
            {children}
        </ul>
    );
};

export default InterestsBlock;