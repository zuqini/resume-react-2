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
                    <li>C++</li>
                    <li>Scala</li>
                    <li>HTML / CSS</li>
                </SkillsBlock>
                <SkillsBlock title='Frameworks'>
                    <li>React / React Native</li>
                    <li>Next.js</li>
                    <li>Apollo GraphQL</li>
                    <li>TensorFlow</li>
                    <li>Redux</li>
                    <li>MobX</li>
                    <li>Express</li>
                    <li>Flask</li>
                    <li>Angular</li>
                    <li>Sass / Less</li>
                    <li>OpenGL</li>
                    <li>Android SDK</li>
                </SkillsBlock>
                <SkillsBlock title='Databases'>
                    <li>PostgreSQL</li>
                    <li>MySQL</li>
                    <li>MongoDB</li>
                </SkillsBlock>
                <SkillsBlock title='Tools'>
                    <li>Spark</li>
                    <li>AWS</li>
                    <li>Node.js</li>
                    <li>Microsoft Azure</li>
                    <li>Docker</li>
                    <li>Firebase</li>
                    <li>Hadoop</li>
                    <li>Jupyter</li>
                    <li>Git</li>
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