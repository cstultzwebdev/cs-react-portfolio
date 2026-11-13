import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle> Call </LinkTitle>
          <LinkItem href='tel:385-318-6529'>385-318-6529</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle> Email </LinkTitle>
          <LinkItem href='mailto:cstultzwebdev@gmail.com' target='_blank'>
            cstultzwebdev@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Frontend Developer and UX/UI Designer</Slogan>
        </CompanyContainer>
        <SocialIcons href='https://github.com/cstultzwebdev' target='_blank'>
          <AiFillGithub size='3rem' />
        </SocialIcons>
        <SocialIcons href='https://www.linkedin.com/in/chrisstultzux/' target='_blank'>
          <AiFillLinkedin size='3rem' />
        </SocialIcons>
        <SocialIcons href='https://www.instagram.com/itsalwaysbeenchris/' target='_blank'>
          <AiFillInstagram size='3rem' />
        </SocialIcons>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
