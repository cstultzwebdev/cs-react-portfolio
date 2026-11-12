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

// "2020 – 2022"; a single year when a job started and ended the same year;
// "2024 – Present" when there's no end year.
const formatYears = ({ start, end }) => {
  if (end === undefined) return `${start} – Present`;
  return start === end ? `${start}` : `${start} – ${end}`;
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
            <TimelineYear>{formatYears(item)}</TimelineYear>
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
