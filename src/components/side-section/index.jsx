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
                    <li>GraphQL</li>
                    <li>HTML / CSS</li>
                    <li>ARM Assembly</li>
                </SkillsBlock>
                <SkillsBlock title='Frameworks'>
                    <li>TensorFlow</li>
                    <li>React / React Native</li>
                    <li>Redux</li>
                    <li>MobX</li>
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
                    <li>AWS</li>
                    <li>Microsoft Azure</li>
                    <li>Node.js</li>
                    <li>Docker</li>
                    <li>Git</li>
                    <li>Firebase</li>
                    <li>Jupyter Notebook</li>
                </SkillsBlock>
            </GeneralBlock>
            <GeneralBlock title='Education'>
                <EducationBlock />
            </GeneralBlock>
            <GeneralBlock title='Interests'>
                <InterestsBlock>
                    <li>Build apps</li>
                    <li>Create music</li>
                    <li>Catch pokémon</li>
                </InterestsBlock>
            </GeneralBlock>
        </div>
    );
};

export default SideSection;