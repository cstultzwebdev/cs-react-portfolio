import React from 'react';

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { ButtonRow, GhostButton, LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Chris Stultz <br /> Design Engineer
      </SectionTitle>
      <SectionText>
        I design interfaces and build them in production code, from Figma
        concepts to accessible, reusable components and the design systems
        behind them.
      </SectionText>
      <ButtonRow>
        <Button
          onClick={() =>
            window.open('/Chris-Stultz-Resume.pdf', '_blank', 'noopener')
          }>
          Resume
        </Button>
        <GhostButton href='https://chrisstultzportfolio.netlify.app/'>
          Other Work
        </GhostButton>
      </ButtonRow>
    </LeftSection>
  </Section>
);

export default Hero;
