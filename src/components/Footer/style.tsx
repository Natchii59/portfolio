import styled from 'styled-components';

export const FooterStyle = styled.div`
  padding: 0 2rem 2rem 2rem;
  box-shadow: inset 0 0.2rem 0.3rem var(--onyx);

  @media screen and (max-width: 750px) {
    padding: 0 1rem 1rem 1rem;
  }
`;

export const FooterContainer = styled.div`
  z-index: 5;
  padding: 1rem;
  background-color: #80808075;
  border-radius: 0 0 1rem 1rem;
  display: flex;
  flex-direction: column;
`;

export const FooterLink = styled.a`
  font-size: 1.1rem;
  color: var(--onyx);
  text-decoration: none;
  display: flex;
  align-items: center;

  & span {
    margin-left: 0.2rem;
  }
`;

export const FooterCredits = styled.div`
  font-family: 'Source Code Pro', monospace;
  font-size: 0.9rem;
  margin-top: 8rem;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

export const FooterContent = styled.div`
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
