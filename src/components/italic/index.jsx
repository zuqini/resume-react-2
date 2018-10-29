import React from 'react';

import './styles.scss';

const Italic = (props) => {
    const { children } = props;
    return (
        <span className='italic'>
            {children}
        </span>
    );
};

export default Italic;