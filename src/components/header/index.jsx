import React from 'react';

import './styles.scss';

import Icon from '../icon';

const Header = (props) => {
    return (
        <div className='header'>
            <div className='main-desc'>
                <p className='name bold-text'>Zach <span className='med-text'>(Zuqi)</span> Li</p>
                <p className='term'> <span className='bold-text'>Software Engineer</span> | University of Waterloo</p>
            </div>
            <div className='contact-links med-text'>
                <a href='https://zuqi.li'><Icon icon='website' />https://zuqi.li</a>
                <a href="tel:2067243286"><Icon icon='phone' />(206) 724 3286</a>
                <a href='mailto:lizuqiliang@gmail.com'><Icon icon='email' />lizuqiliang@gmail.com</a>
                <a href='https://github.com/zuqini'><Icon icon='github' />github.com/zuqini</a>
                <a href='https://ca.linkedin.com/in/zuqili'><Icon icon='linkedin' />linkedin.com/in/zuqili</a>
            </div>
        </div>
    );
};

export default Header;