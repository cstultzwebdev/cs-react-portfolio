import React from 'react';

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { ButtonRow, LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Chris Stultz <br /> Portfolio
      </SectionTitle>
      <SectionText>
        A showcase of relevant technologies I've worked with
      </SectionText>
      <ButtonRow>
        <Button
          onClick={() =>
            window.open('/Chris-Stultz-Resume.pdf', '_blank', 'noopener')
          }>
          Resume
        </Button>
        <Button
          onClick={() =>
            (window.location = 'https://chrisstultzportfolio.netlify.app/')
          }>
          Other Work
        </Button>
      </ButtonRow>
    </LeftSection>
  </Section>
);

export default Hero;
