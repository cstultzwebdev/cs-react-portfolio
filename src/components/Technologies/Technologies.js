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
      I started with a design background and gradually moved to frontend
      development. I pride myself on being a multidisciplinary developer
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size='3rem' />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experiece with <br />
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
