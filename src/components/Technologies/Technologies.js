import React from 'react';
import {
  DiFirebase,
  DiHtml53dEffects,
  DiPhotoshop,
  DiReact,
  DiZend,
} from 'react-icons/di';
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from './TechnologiesStyles';

const Technologies = () => (
  <Section id='tech'>
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I started in design and moved into frontend development. Today I work
      as a design engineer: I design the experience and build it myself, so
      nothing gets lost between the mockup and the shipped product.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size='3rem' />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js, Next.js, Typescript
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiPhotoshop size='3rem' />
        </picture>
        <ListContainer>
          <ListTitle>UX/UI</ListTitle>
          <ListParagraph>
            Experience with <br />
            Sketch, Figma, HTML/CSS
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiHtml53dEffects size='3rem' />
        </picture>
        <ListContainer>
          <ListTitle>UX Research</ListTitle>
          <ListParagraph>
            Experience with <br /> user-testing & market research
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
