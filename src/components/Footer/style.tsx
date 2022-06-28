import styled from 'styled-components';

export const FooterStyle = styled.div`
  margin: 0 2rem 2rem 2rem;
  padding: 1rem;
  background-color: var(--orange-red-crayola);
  border-radius: 0 0 1rem 1rem;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 750px) {
    margin: 0 1rem 1rem 1rem;
  }
`;

export const FooterLink = styled.a`
  font-size: 1.2rem;
  color: var(--onyx);
  text-decoration: none;
  display: flex;
  align-items: flex-start;
`;

export const FooterCredits = styled.div`
  font-family: 'Source Code Pro', monospace;
  font-size: 0.9rem;
  margin-top: 8rem;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

export const FooterContainer = styled.div`
  display: flex;

  @media screen and (max-width: 550px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const FooterBox = styled.div`
  padding-right: 2rem;

  @media screen and (max-width: 550px) {
    padding-right: 0;
    padding-bottom: 2rem;
  }
`;

export const FooterBoxTitle = styled.h2`
  margin-bottom: 0.5rem;
`;
