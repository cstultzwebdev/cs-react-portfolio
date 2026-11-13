import styled from 'styled-components';

// Puts the hero buttons side by side, wrapping to a column on narrow screens
export const ButtonRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.6rem;
  margin-bottom: 80px;

  // The row owns the spacing below the hero, not each button
  & > div {
    margin: 0;
  }
`;

export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;
