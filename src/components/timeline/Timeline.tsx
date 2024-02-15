import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBriefcase, faGraduationCap, faLocationDot, faPlay} from "@fortawesome/free-solid-svg-icons";
import TimelineElement from "./TimelineElement";
import {Flex, Heading, Image, Tag, Text} from "@chakra-ui/react";


const Timeline = () => {

    return (
        <VerticalTimeline>
            <TimelineElement>
                <Flex>
                    <Flex w='80%' flexDirection='column'>
                        <Heading style={{color: 'white'}}>Full-Stack Developer</Heading>
                        <Text style={{margin: '0'}}>
                            <FontAwesomeIcon icon={faBriefcase}/> WeddMate s.r.o.
                        </Text>
                        <Text style={{margin: '0 0 2.25em 0'}}>
                            <FontAwesomeIcon icon={faLocationDot}/> Remote (Czech Republic)
                        </Text>
                    </Flex>
                    <Flex>
                        <Image src='/img/timeline/weddmatfe.png' alt='Logo' w='3em' h='3em' borderRadius='full' />
                    </Flex>
                </Flex>
                <Tag me='2'>React.js</Tag>
                <Tag me='2'>Typescript</Tag>
                <Tag me='2'>Next.js</Tag>
                <Tag me='2'>Postman</Tag>
                <Tag me='2'>GitHub</Tag>
                <Tag me='2'>Google Analytics</Tag>
            </TimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2010 - 2011"
                contentStyle={{ borderTop: 'rgb(33, 150, 243)', color: 'gray', boxShadow: 'none' }}
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<FontAwesomeIcon icon={faBriefcase} />}
            >
                <h3 className="vertical-timeline-element-title">Art Director</h3>
                <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                <p>
                    Creative Direction, User Experience, Visual Design, SEO, Online Marketing
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2008 - 2010"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<FontAwesomeIcon icon={faBriefcase} />}
            >
                <h3 className="vertical-timeline-element-title">Web Designer</h3>
                <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
                <p>
                    User Experience, Visual Design
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2006 - 2008"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<FontAwesomeIcon icon={faBriefcase} />}
            >
                <h3 className="vertical-timeline-element-title">Web Designer</h3>
                <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                <p>
                    User Experience, Visual Design
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="April 2013"
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                icon={<FontAwesomeIcon icon={faGraduationCap} />}
            >
                <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
                <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
                <p>
                    Strategy, Social Media
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="November 2012"
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                icon={<FontAwesomeIcon icon={faGraduationCap} />}
            >
                <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
                <h4 className="vertical-timeline-element-subtitle">Certification</h4>
                <p>
                    Creative Direction, User Experience, Visual Design
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="2002 - 2006"
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                icon={<FontAwesomeIcon icon={faGraduationCap} />}
            >
                <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
                <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
                <p>
                    Creative Direction, Visual Design
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faPlay} />}
            />
        </VerticalTimeline>
    );
};

export default Timeline;