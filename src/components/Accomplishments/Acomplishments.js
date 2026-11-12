import React from 'react';

import {
  Section,
  SectionDivider,
  SectionTitle,
} from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AccomplishmentsStyles';

const data = [
  { degree: 'Psychology Degree', text: "Bachelor's Degree " },
  { degree: 'Human Computer Interaction', text: 'Graduate Degree' },
  { number: 8, text: 'High traffic sites' },
  { number: 8, text: 'Years of experience' },
];

const Accomplishments = () => (
  <Section>
    <SectionTitle> Personal Accomplishments </SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          {card.number ? (
            <BoxNum>{card.number}+</BoxNum>
          ) : (
            <BoxNum style={{ fontSize: '22px', lineHeight: '1' }}>
              {card.degree}
            </BoxNum>
          )}

          <BoxText> {card.text} </BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Accomplishments;
