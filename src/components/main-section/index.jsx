import React from 'react';

import './styles.scss';

import GeneralBlock from '../general-block/index.jsx';
import ProjectsBlock from '../projects-block/index.jsx';
import ExperienceBlock from '../experience-block/index.jsx';
import SubExperienceBlock from '../sub-experience-block/index.jsx';
import Highlight from '../highlight/index.jsx';
import Italic from '../italic/index.jsx';

const MainSection = (props) => {
    const DeprecatedProjects = [
        (
            <ProjectsBlock
                title='VReq'
                time='November 2014'
                techList={[
                    'D3.js',
                    'JQuery',
                    'Waterloo Open Data API',
                ]}
            >
                A <Highlight>D3.js</Highlight> representation of all course pre-requisites at the University of Waterloo
            </ProjectsBlock>
        ),
        (
            <ProjectsBlock
                title='Terre'
                href='https://github.com/zuqini/Terre'
                time='February 2015'
                techList={[
                    'C++',
                    'Cocos2d-X',
                ]}
            >
                A physics simulation sandbox for building star systems with dynamic lighting effects
            </ProjectsBlock>
        ),
        (<ProjectsBlock
            title='Angora'
            href='https://github.com/jasonf7/Angora'
            time='January 2016'
            techList={[
                'Node.js',
                'Angular',
                'MongoDB',
                'Jade/Pug',
                'Less',
            ]}
        >
            A platform where users explore various hairstyles and review local hairstylists
        </ProjectsBlock>)
    ];
    return (
        <div className='main-section'>
            <GeneralBlock title='Experience'>
                <ExperienceBlock
                    position='Software Engineer'
                    company='Microsoft'
                    href='https://www.microsoft.com/en-us/about/default.aspx'
                    time='September 2018 - Present'
                    location='Redmond, WA'
                    icon='microsoft'
                    techList={[
                        'C#',
                        'Python',
                        'TensorFlow',
                        'ML.NET',
                        'LINQ',
                        'MS Cosmos (Data Processing Platform)'
                    ]}
                >
                    <li>
                        Designed, trained, and integrated a new <Highlight>autosuggest ranker</Highlight> for the Chromium-based Edge browser; metrics show <Highlight>parity</Highlight> against Chrome autosuggestion
                    </li>
                    <li>
                        Designed and built a new service for ranking and serving non-prefix-match suggestions; serves <Highlight>2500~ QPS per machine</Highlight> and responds under <Highlight>50 ms</Highlight>
                    </li>
                    <li>
                        Helped tune and improve the autosuggest relevance of Windows Search Box, legacy Edge, and Bing.com by statistically analyzing query patterns and experimentation
                    </li>
                </ExperienceBlock>
                <SubExperienceBlock
                  position='Software Engineering Intern'
                  company='Microsoft'
                  href='https://www.microsoft.com/en-us/about/default.aspx'
                  time='September 2017 - December 2017'
                  location='Redmond, WA'
                >
                    <li>
                        Built an <Highlight>n-gram language model</Highlight> to predict the next words of incomplete user queries
                    </li>
                    <li>
                        Integrated <Highlight>next word prediction</Highlight> into <Highlight>Bing</Highlight>'s autosuggestion pipeline to show relevant suggestions for uncommon queries; improved overall suggestion coverage by <Highlight>23%</Highlight>
                    </li>
                    <li>
                        Prototyped a <Highlight>recurrent neural network (LSTM) language model</Highlight> to further improve prediction relevance; captures semantic relationships and long-term dependencies
                    </li>
                </SubExperienceBlock>
                <ExperienceBlock
                    position='Data Infrastructure Intern'
                    company='LinkedIn'
                    href='https://press.linkedin.com/about-linkedin'
                    time='January 2017 - April 2017'
                    location='Sunnyvale, CA'
                    icon='linkedin-colored'
                    techList={[
                        'Java 8',
                        'Kafka',
                        'MySQL',
                        'Ambry',
                    ]}
                >
                    <li>
                        Helped launch LinkedIn's <Highlight>media infrastructure</Highlight> for processing and serving media assets
                    </li>
                    <li>
                        Designed, built, and released a distributed <Highlight>end-to-end validation</Highlight> and <Highlight>performance testing</Highlight> framework for the media processing infrastructure:
                        <ul>
                            <li>
                                Handles traffic generation, pipeline monitoring, metrics collection, and data validation
                            </li>
                            <li>
                                Used by media teams for experimentation, analyzing metrics, and monitoring for failures
                            </li>
                        </ul>
                    </li>
                </ExperienceBlock>
                <ExperienceBlock
                    position='Software Engineering Intern'
                    company='Yahoo!'
                    href='https://about.yahoo.com/'
                    time='May 2016 - August 2016'
                    location='Sunnyvale, CA'
                    icon='yahoo'
                    techList={[
                        'ES6',
                        'Perl',
                        'Node.js',
                        'React',
                        'Fluxible',
                        'MySQL',
                        'AWS',
                    ]}
                >
                    <li>
                        Created and launched <a href='https://view.yahoo.com'><Highlight>Yahoo! View</Highlight> <Italic>(view.yahoo.com)</Italic></a> as part of the web team; built core UI components and API endpoints
                    </li>
                    <li>
                        Integrated <Highlight>Tumblr</Highlight> content into Yahoo! View to show relevant official and fan posts
                    </li>
                    <li>
                        Setup the entire backend integration testing infrastructure for Yahoo! View
                    </li>
                </ExperienceBlock>
            </GeneralBlock>
            <GeneralBlock title='Projects'>
                <ProjectsBlock
                    title='KSwap'
                    href='https://github.com/zuqini/'
                    time='December 2018 - Present'
                    techList={[
                        'Node.js',
                        'React',
                        'Redux',
                        'Firebase',
                    ]}
                >
                    A web platform where music enthusiasts can trade and resale albums and merchandise
                </ProjectsBlock>
                <ProjectsBlock
                  title='LUQL'
                  href='https://luql.io/'
                  time='January 2017 - September 2017'
                  techList={[
                        'Node.js',
                        'React-Native',
                        'MobX',
                        'Firebase',
                    ]}
                >
                    An iOS platform to help locals create and guide tours for travellers, tourists, and adventurers
                </ProjectsBlock>
                <ProjectsBlock
                  title='MelonWatch'
                  href='https://github.com/zuqini/MelonWatch'
                  time='August 2017'
                  techList={[
                        'C++',
                        'OpenGL',
                        'OpenAL',
                    ]}
                >
                    An 3D OpenGL FPS; built the entire game engine from scratch featuring dynamic shadow mapping, a particle system, and a physics engine
                </ProjectsBlock>
            </GeneralBlock>
        </div>
    );
};

export default MainSection;