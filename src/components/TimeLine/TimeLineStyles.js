import styled from 'styled-components';

// Vertical timeline: a line down the left, one dot per role.
export const TimelineList = styled.ol`
  position: relative;
  max-width: 720px;
  list-style: none;
  margin: 0 0 80px;
  padding: 0 0 0 32px;

  // The vertical line, fading out at the bottom
  &::before {
    content: '';
    position: absolute;
    top: 8px;
    bottom: 8px;
    left: 5px;
    width: 2px;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.5) 0%,
      rgba(255, 255, 255, 0.08) 100%
    );
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding-left: 28px;
    margin-bottom: 48px;
  }
`;

export const TimelineItem = styled.li`
  position: relative;
  padding-bottom: 32px;

  &:last-child {
    padding-bottom: 0;
  }

  // The dot that sits on the line
  &::before {
    content: '';
    position: absolute;
    top: 9px;
    left: -32px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: linear-gradient(270deg, #13adc7 0%, #945dd6 100%);
    box-shadow: 0 0 0 4px #0f1624;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding-bottom: 24px;

    &::before {
      left: -28px;
      top: 6px;
    }
  }
`;

export const TimelineYear = styled.h4`
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0.02em;
  background: linear-gradient(
    121.57deg,
    #ffffff 10%,
    rgba(255, 255, 255, 0.66) 60%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 4px;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 18px;
    line-height: 24px;
  }
`;

export const TimelineRole = styled.p`
  font-size: 18px;
  line-height: 26px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.9);

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 15px;
    line-height: 22px;
  }
`;

export const TimelineCompany = styled.p`
  font-size: 15px;
  line-height: 22px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.6);

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 13px;
    line-height: 20px;
  }
`;
