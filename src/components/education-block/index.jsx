import React from 'react';

import './styles.scss';

const EducationBlock = (props) => {
    return (
        <a href='https://uwaterloo.ca/software-engineering/'>
            <div className='education-block'>
                <p className='uni bold-text'>University of Waterloo</p>
                <p className='degree med-text'>Bachelor of Software Engineering</p>
                <p className='term'>Sept 2013 – Apr 2018</p>
            </div>
        </a>
    );
};

export default EducationBlock;