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
                    <ul>
                        <li>JavaScript</li>
                        <li>Python</li>
                        <li>Java</li>
                        <li>C#</li>
                        <li>C++</li>
                        <li>Scala</li>
                        <li>SQL</li>
                        <li>HTML / CSS</li>
                    </ul>
                </SkillsBlock>
                <SkillsBlock title='Frameworks'>
                    <p className='subheader'>Web</p>
                    <ul>
                        <li>React</li>
                        <li>Apollo GraphQL</li>
                        <li>Express</li>
                        <li>Flask</li>
                        <li>Redux</li>
                        <li>MobX</li>
                        <li>Angular</li>
                    </ul>
                    <p className='subheader'>Data</p>
                    <ul>
                        <li>Spark</li>
                        <li>ML.NET</li>
                        <li>TensorFlow</li>
                        <li>Hadoop</li>
                    </ul>
                    <p className='subheader'>Application</p>
                    <ul>
                        <li>React Native</li>
                        <li>Android SDK</li>
                        <li>.NET</li>
                        <li>OpenGL</li>
                    </ul>
                </SkillsBlock>
                <SkillsBlock title='Databases'>
                    <ul>
                        <li>PostgreSQL</li>
                        <li>MySQL</li>
                        <li>MongoDB</li>
                    </ul>
                </SkillsBlock>
                <SkillsBlock title='Tools'>
                    <ul>
                        <li>Node.js</li>
                        <li>AWS</li>
                        <li>Microsoft Azure</li>
                        <li>Firebase</li>
                        <li>Docker</li>
                        <li>Jupyter</li>
                        <li>Git</li>
                    </ul>
                </SkillsBlock>
            </GeneralBlock>
            <GeneralBlock title='Education'>
                <EducationBlock />
            </GeneralBlock>
            {
                /*
                <GeneralBlock title='Interests'>
                    <InterestsBlock>
                        <li>Build apps</li>
                        <li>Create music</li>
                        <li>Catch pokémon</li>
                    </InterestsBlock>
                </GeneralBlock>
                */
            }
        </div>
    );
};

export default SideSection;