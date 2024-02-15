import React from 'react';
import TimelineElement from "./TimelineElement";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { WorkExperience as work } from "../../data/WorkExperience";
import { Education as edu } from "../../data/Education";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Timeline = () => {
    return (
        <VerticalTimeline>
            {work.map((d, index) => (
                <TimelineElement key={index} props={d} isWork={true} />
            ))}
            {edu.map((d, index) => (
                <TimelineElement key={index} props={d} isWork={false} />
            ))}
            <VerticalTimelineElement
                iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                icon={<FontAwesomeIcon icon={faPlay} />}
            />
        </VerticalTimeline>
    );
};

export default Timeline;