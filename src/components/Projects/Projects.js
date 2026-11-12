import React from 'react';

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
  ImgPlaceholder,
} from './ProjectsStyles';
import {
  Section,
  SectionDivider,
  SectionTitle,
} from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id='projects'>
    <SectionDivider />
    <SectionTitle main>Projects </SectionTitle>
    <GridContainer>
      {projects.map(
        ({ title, description, image, tags, source, visit, id }) => (
          <BlogCard key={id}>
            {image ? (
              <Img src={image} alt={title} />
            ) : (
              <ImgPlaceholder aria-hidden='true'>{title}</ImgPlaceholder>
            )}
            <TitleContent>
              <HeaderThree $title>{title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo> {description} </CardInfo>
            <div>
              <TitleContent>Stack</TitleContent>
              <TagList>
                {tags.map((tag, i) => (
                  <Tag key={i}>{tag}</Tag>
                ))}
              </TagList>
            </div>
            <UtilityList>
              {/* `visit` is the GitHub repo, `source` is the live site */}
              <ExternalLinks target='_blank' rel='noopener noreferrer' href={visit}>
                View Repo
              </ExternalLinks>
              {source && (
                <ExternalLinks target='_blank' rel='noopener noreferrer' href={source}>
                  View Site
                </ExternalLinks>
              )}
            </UtilityList>
          </BlogCard>
        )
      )}
    </GridContainer>
  </Section>
);

export default Projects;
