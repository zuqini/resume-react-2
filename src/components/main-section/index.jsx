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
                    position='Software Engineer II'
                    company='Microsoft'
                    team='Shopping|Autosuggest Relevance'
                    href='https://www.microsoft.com/en-us/about/default.aspx'
                    time='Sept 2018 - Present'
                    subTime='Intern @ Sept 2017 - Dec 2017'
                    location='Redmond, WA'
                    icon='microsoft'
                    techList={[
                        'C#',
                        'Python',
                        'Scala',
                        'Spark',
                        'Azure',
                        'ML.NET',
                        'TensorFlow',
                        'Databricks',
                        'TypeScript',
                    ]}
                >
                    <li>
                        Created the unified <Highlight>Shopping Recommendations</Highlight> service for product recommendations on all Microsoft applications; simplifies workflows and enables faster iteration
                    </li>
                    <li>
                        Developed on <a href='https://www.microsoft.com/en-us/bing/commerce'><Highlight>Microsoft Bing for Commerce</Highlight></a> services and data pipelines to provide intelligent autosuggest for <a href='https://dynamics.microsoft.com/en-us/commerce/overview/'><Highlight>Dynamics 365 Commerce</Highlight></a> and large-scale retailers
                    </li>
                    <li>
                        Designed a classifier for suppressing suggestions given context and achieved an F1-score of <Highlight>0.91</Highlight>; significantly improved defect-rate and side-by-side metrics for Bing autosuggest
                    </li>
                    <li>
                        Delivered a service for powering non-prefix-match suggestions to major international markets; expanded autosuggest coverage and serves <Highlight>~1,600 QPS</Highlight> per instance
                    </li>
                    <li>
                        Developed the <Highlight>autosuggest ranker</Highlight> of the Chromium-based Edge browser using a regression model; side-by-side metrics showed similar performance as Chrome
                    </li>
                    <li>
                        Prototyped and productionized an <Highlight>n-gram</Highlight> and an <Highlight>RNN</Highlight> language model for next word prediction; increased autosuggest coverage by <Highlight>~20%</Highlight> and improved user engagement
                    </li>
                </ExperienceBlock>
                <ExperienceBlock
                    position='Data Infrastructure Intern'
                    company='LinkedIn'
                    team='Media Infrastructure'
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
                        Helped launch LinkedIn's <Highlight>media infrastructure</Highlight> for processing and serving all digital assets
                    </li>
                    <li>
                        Designed and deployed a distributed <Highlight>end-to-end validation</Highlight>/<Highlight>performance testing</Highlight> service
                        <ul>
                            <li>
                                Handles scheduling, traffic generation, metrics collection, data validation, and alerting
                            </li>
                            <li>
                                Used for experimentation, automating customizable tests, and failure monitoring
                            </li>
                        </ul>
                    </li>
                </ExperienceBlock>
                <ExperienceBlock
                    position='Software Engineering Intern'
                    company='Yahoo!'
                    team='Yahoo! View'
                    href='https://www.yahoo.com/'
                    time='May 2016 - Aug 2016'
                    location='Sunnyvale, CA'
                    icon='yahoo-2019'
                    techList={[
                        'Node.js',
                        'React',
                        'Fluxible',
                        'MySQL',
                        'AWS',
                        'Chai',
                        'Mocha',
                    ]}
                >
                    <li>
                        Created <a href='https://techcrunch.com/2016/08/08/yahoo-launches-a-tv-watching-site-yahoo-view-in-partnership-with-hulu/'><Highlight>Yahoo! View</Highlight></a> as part of the web team; hosted <Highlight>thousands</Highlight> of TV shows and movies
                    </li>
                    <li>
                        Implemented search into Yahoo! View using <Highlight>AWS CloudSearch</Highlight>; built main UX flows and business logic; and set-up automated functional/unit tests
                    </li>
                    <li>
                        Integrated <Highlight>Tumblr</Highlight> content into Yahoo! View to show relevant official and fan posts
                    </li>
                </ExperienceBlock>
            </GeneralBlock>
            <GeneralBlock title='Projects'>
                <ProjectsBlock
                    title='KaeSwap'
                    type='Website'
                    href='https://v1.kaeswap.com/'
                    time='Dec 2018 - Present'
                    techList={[
                        'Next.js',
                        'Apollo GQL',
                        'Flask',
                        'Postgres',
                        'AWS S3',
                        'Docker',
                    ]}
                >
                    A platform for fans to trade and resale their albums/posters/merch; received <Highlight>thousands</Highlight> of pageviews and <Highlight>hundreds</Highlight> of concurrent active users during the KCON LA event
                </ProjectsBlock>
                <ProjectsBlock
                    title='HoppyPup'
                    type='Android/iOS Game'
                    time='Oct 2020 - Present'
                    techList={[
                        'Unity',
                        'C#'
                    ]}
                >
                    A 2D mobile game featuring custom assets, dynamic shadows, and day-night system
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
                    A 3D first-person shooter built completely from scratch featuring dynamic shadow mapping, particle system, and physics engine
                </ProjectsBlock>
                {
                    /*
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
