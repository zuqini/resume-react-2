import React from 'react';

import './styles.scss';

const GeneralBlock = (props) => {
    const { title, children } = props;
    return (
        <div className='general-block'>
            <p className='block-title bold-text'>{title}</p>
            {children}
        </div>
    );
};

export default GeneralBlock;