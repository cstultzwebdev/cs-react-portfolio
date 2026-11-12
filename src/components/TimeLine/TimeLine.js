import React from 'react';

import {
  TimelineCompany,
  TimelineItem,
  TimelineList,
  TimelineRole,
  TimelineYear,
} from './TimeLineStyles';
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';

// Each entry's text is "Company: Role"; split it so the role and company
// can be styled separately. Text without a colon is shown as the role.
const splitText = (text) => {
  const i = text.indexOf(': ');
  return i === -1
    ? { company: '', role: text }
    : { company: text.slice(0, i), role: text.slice(i + 2) };
};

const Timeline = () => (
  <Section id='about'>
    <SectionTitle>About Me</SectionTitle>
    <SectionText>
      In every position I've ever had, I've always been flexible, willing to
      learn new technologies & skill sets to get a project done regardless of
      job title.
    </SectionText>
    <TimelineList>
      {TimeLineData.map((item, index) => {
        const { company, role } = splitText(item.text);
        return (
          <TimelineItem key={index}>
            <TimelineYear>{item.year}</TimelineYear>
            <TimelineRole>{role}</TimelineRole>
            {company && <TimelineCompany>{company}</TimelineCompany>}
          </TimelineItem>
        );
      })}
    </TimelineList>
    <SectionDivider />
  </Section>
);

export default Timeline;
