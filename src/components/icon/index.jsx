import React from 'react';

import './styles.scss';

const Icon = (props) => {
    const { icon, isCompany } = props;
    return (
        <span className={`${isCompany ? 'company-default' : 'header-default'} ${icon}`} />
    );
};

export default Icon;