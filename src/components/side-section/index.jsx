import React from 'react';

import './styles.scss';

import EducationBlock from '../education-block/index.jsx';
import GeneralBlock from '../general-block/index.jsx';
import SkillsBlock from '../skills-block/index.jsx';
import InterestsBlock from '../interests-block/index.jsx';

const SideSection = (props) => {
    return (
        <div className='side-section'>
            <GeneralBlock title='Skills'>
                <SkillsBlock title='Languages'>
                    <li>JavaScript</li>
                    <li>Python</li>
                    <li>Java</li>
                    <li>C#</li>
                    <li>Scala</li>
                    <li>C++</li>
                    <li>C</li>
                    <li>HTML / CSS</li>
                    <li>ARM Assembly</li>
                </SkillsBlock>
                <SkillsBlock title='Frameworks'>
                    <li>TensorFlow</li>
                    <li>React / React Native</li>
                    <li>Redux</li>
                    <li>Angular</li>
                    <li>Express</li>
                    <li>Less / Sass</li>
                    <li>OpenGL</li>
                    <li>Android SDK</li>
                </SkillsBlock>
                <SkillsBlock title='Databases'>
                    <li>MySQL</li>
                    <li>PostgreSQL</li>
                    <li>MongoDB</li>
                </SkillsBlock>
                <SkillsBlock title='Tools'>
                    <li>Spark</li>
                    <li>Hadoop</li>
                    <li>Kafka</li>
                    <li>Node.js</li>
                    <li>Firebase</li>
                    <li>Git</li>
                    <li>Maven</li>
                    <li>Jupyter Notebook</li>
                </SkillsBlock>
            </GeneralBlock>
            <GeneralBlock title='Education'>
                <EducationBlock />
            </GeneralBlock>
            <GeneralBlock title='Interests'>
                <InterestsBlock>
                    <li>Build apps</li>
                    <li>Make music</li>
                    <li>Catch pokémon</li>
                </InterestsBlock>
            </GeneralBlock>
        </div>
    );
};

export default SideSection;