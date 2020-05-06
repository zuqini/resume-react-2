import React from 'react';

import './styles.scss';

import GeneralBlock from '../general-block/index.jsx';
import ProjectsBlock from '../projects-block/index.jsx';
import ExperienceBlock from '../experience-block/index.jsx';
import SubExperienceBlock from '../sub-experience-block/index.jsx';
import Highlight from '../highlight/index.jsx';
import Italic from '../italic/index.jsx';

const MainSection = (props) => {
    return (
        <div className='main-section'>
            <GeneralBlock title='Experience'>
                <ExperienceBlock
                    position='Software Engineer'
                    company='Microsoft'
                    href='https://www.microsoft.com/en-us/about/default.aspx'
                    time='Sept 2018 - Present'
                    subTime='Sept 2017 - Dec 2017'
                    location='Redmond, WA'
                    icon='microsoft'
                    techList={[
                        'C#',
                        'Python',
                        'Scala',
                        'Spark',
                        'Azure Data Factory',
                        'ML.NET',
                        'TensorFlow'
                    ]}
                >
                    <li>
                        Developed a classifier for suppressing bad autosuggest and shipped <Highlight>block-level blending</Highlight> using the suppression classifier and data-driven heuristics; Achieved F1-score of <Highlight>0.91</Highlight>
                    </li>
                    <li>
                        Developed and shipped the <Highlight>autosuggest ranker</Highlight> for the Chromium-based Edge browser; side-by-side metrics showed <Highlight>parity</Highlight> against Chrome autosuggest
                    </li>
                    <li>
                        Built and deployed an Azure microservice for serving non-prefix-match autosuggest; handles <Highlight>~2,500 QPS</Highlight> per instance and has a 99th percentile latency of <Highlight>~20 ms</Highlight>
                    </li>
                    <li>
                        Developed an <Highlight>n-gram</Highlight> and an <Highlight>LSTM</Highlight> language model for predicting the next words of incomplete queries; improved autosuggest coverage by <Highlight>~20%</Highlight>
                    </li>
                    <li>
                        Maintained autosuggest infrastructure and tuned the relevance of Windows Search Box, Edge, and Bing.com autosuggest through analyzing query patterns and experimentation
                    </li>
                </ExperienceBlock>
                <ExperienceBlock
                    position='Data Infrastructure Intern'
                    company='LinkedIn'
                    href='https://press.linkedin.com/about-linkedin'
                    time='Jan 2017 - Apr 2017'
                    location='Sunnyvale, CA'
                    icon='linkedin-colored'
                    techList={[
                        'Java',
                        'Kafka',
                        'MySQL',
                        'Ambry',
                    ]}
                >
                    <li>
                        Helped launch LinkedIn's <Highlight>media infrastructure</Highlight> for processing and serving media assets
                    </li>
                    <li>
                        Designed, built, and released a distributed <Highlight>end-to-end validation</Highlight> and <Highlight>performance testing</Highlight> framework for the media processing infrastructure
                        <ul>
                            <li>
                                Handles scheduling, traffic generation, metrics collection, data validation, and alerting
                            </li>
                            <li>
                                Used for experimentation, failure monitoring, and automating customizable tests
                            </li>
                        </ul>
                    </li>
                </ExperienceBlock>
                <ExperienceBlock
                    position='Software Engineering Intern'
                    company='Yahoo!'
                    href='https://about.yahoo.com/'
                    time='May 2016 - Aug 2016'
                    location='Sunnyvale, CA'
                    icon='yahoo-2019'
                    techList={[
                        'Node.js',
                        'React',
                        'Fluxible',
                        'MySQL',
                        'AWS',
                    ]}
                >
                    <li>
                        Created and launched <a href='https://view.yahoo.com'><Highlight>Yahoo! View</Highlight> <Italic>(view.yahoo.com)</Italic></a> from scratch as part of the web team; served <Highlight>thousands</Highlight> of TV shows and movies
                    </li>
                    <li>
                        Built core React components, backend APIs, and integrated <Highlight>Tumblr</Highlight> content into Yahoo! View to show relevant official and fan posts
                    </li>
                    <li>
                        Setup the entire backend integration testing infrastructure for Yahoo! View
                    </li>
                </ExperienceBlock>
            </GeneralBlock>
            <GeneralBlock title='Projects'>
                <ProjectsBlock
                    title='KaeSwap'
                    type='Website'
                    href='https://kaeswap.com'
                    time='Dec 2018 - Present'
                    techList={[
                        'Next.js',
                        'Apollo GraphQL',
                        'Flask',
                        'Postgres',
                        'AWS S3',
                        'Docker',
                    ]}
                >
                    A platform for K-pop enthusiasts to trade and resale their albums/posters/merch; received <Highlight>thousands</Highlight> of pageviews and <Highlight>hundreds</Highlight> of concurrent active users during the KCON LA event
                </ProjectsBlock>
                <ProjectsBlock
                    title='Discord Helper Bots'
                    type='Node.js Client'
                    href='https://github.com/JustYourPythonEnvironment'
                    time='Aug 2018 - Present'
                    techList={[
                        'Node.js',
                        'Firebase',
                        'Discord API',
                    ]}
                >
                    Chatbots that power <Highlight>additional functionalities</Highlight> on top of Discord servers: custom emoji/gif and sticker reactions, media sorting and archiving, lyrics/YouTube scraper, and logging
                </ProjectsBlock>
                <ProjectsBlock
                  title='LUQL'
                  type='iOS App'
                  href='https://medium.com/@luql/announcing-luql-a-better-way-to-explore-a-city-2ec11185cbf6'
                  time='Jan 2017 - Sept 2017'
                  techList={[
                        'Node.js',
                        'React Native',
                        'MobX',
                        'Firebase',
                    ]}
                >
                    A mobile platform for locals and tourists to post, discover, and book tours around their area
                </ProjectsBlock>
                <ProjectsBlock
                  title='MelonWatch'
                  type='OpenGL App'
                  href='https://github.com/zuqini/MelonWatch'
                  time='Aug 2017'
                  techList={[
                        'C++',
                        'OpenGL',
                        'OpenAL',
                    ]}
                >
                    A 3D OpenGL first-person shooter; built completely from scratch featuring dynamic shadow mapping, particle system, and physics engine
                </ProjectsBlock>
                {
                    /*
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
                    <ProjectsBlock
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
                    </ProjectsBlock>
                    */
                }
            </GeneralBlock>
        </div>
    );
};

export default MainSection;