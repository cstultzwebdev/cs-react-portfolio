import styled from 'styled-components';

// Resume and Other Work sit side by side on one row at every screen size,
// so both buttons share one width/height that steps down on smaller screens.
export const ButtonRow = styled.div`
  display: flex;
  gap: 1.6rem;
  margin-bottom: 80px;

  && > * {
    width: 200px;
    height: 60px;
    margin: 0;
  }
  && button,
  && > a {
    font-size: 2.2rem;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    && > * {
      width: 170px;
      height: 52px;
    }
    && button,
    && > a {
      font-size: 1.9rem;
    }
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    gap: 1.2rem;
    margin-bottom: 48px;

    && > * {
      width: 140px;
      height: 46px;
    }
    && button,
    && > a {
      font-size: 1.6rem;
    }
  }
`;

// Ghost button: transparent fill with a white border, for secondary actions
export const GhostButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  border: 2px solid #fff;
  border-radius: 50px;
  background: transparent;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
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
