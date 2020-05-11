import React from 'react';

import './styles.scss';

const EducationBlock = (props) => {
    return (
       <div className='education-block'>
           <p className='uni bold-text'><a href='https://uwaterloo.ca/'>University of Waterloo</a></p>
           <p className='degree med-text'><a href='https://uwaterloo.ca/software-engineering/'>Bachelor of Software Engineering</a></p>
           <p className='term'>Sept 2013 – Apr 2018</p>
       </div>
    );
};

export default EducationBlock;