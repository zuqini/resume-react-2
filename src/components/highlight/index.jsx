import React from 'react';

import './styles.scss';

const Highlight = (props) => {
    const { children } = props;
    return (
        <span className='highlight bold-text'>
            {children}
        </span>
    );
};

export default Highlight;