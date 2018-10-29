import React from 'react';

import './styles.scss';

const EducationBlock = (props) => {
    return (
       <div className='education-block'>
           <p className='uni bold-text'>University of Waterloo</p>
           <p className='degree'>Bachelor of Software Engineering</p>
           <p className='term med-text'>Sept. 2013 – April. 2018</p>
       </div>
    );
};

export default EducationBlock;