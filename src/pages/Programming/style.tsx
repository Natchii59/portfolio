import styled from 'styled-components';

export const ProgrammingStyle = styled.div`
  font-family: 'Source Code Pro', monospace;
  margin: 2rem 0;
  padding: 0 1rem;
`;

export const ProgrammingTitle = styled.h1`
  font-size: 1.8rem;
  text-align: center;
`;

export const ProgrammingContainer = styled.div`
  margin: 3rem 0;
`;

export const ProgrammingSubTitle = styled.h2`
  padding-bottom: 0.2rem;
  border-bottom: solid 1px #80808075;
`;

export const ProgrammingBox = styled.div`
  margin-top: 0.4rem;
`;

export const CardsContainer = styled(ProgrammingBox)`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const SkillCard = styled.div`
  min-height: 9rem;
  min-width: 7rem;
  padding: 0.4rem;
  margin: 0.4rem;
  border: solid 1px #80808075;
  border-radius: 0.7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  & svg {
    font-size: 2.6rem;
  }
`;

type ProgressBarProps = {
  value: number;
};
export const ProgressBar = styled.div<ProgressBarProps>`
  height: 5.8rem;
  width: 5.8rem;
  margin-bottom: 0.4rem;
  position: relative;

  & svg circle {
    fill: transparent;
    stroke: #80808075;
    stroke-width: 4;
    transform: translate(2px, 2px);
  }

  & svg circle:nth-child(2) {
    stroke: #4a4a4a;
    stroke-dasharray: 283;
    stroke-dashoffset: ${({ value }) => 283 - (283 * value) / 100};
  }
`;

export const RepositoriesContainer = styled(ProgrammingBox)`
  display: flex;
  flex-wrap: wrap;
`;

export const RepositoryCard = styled.div`
  width: 25rem;
  margin: 0.8rem;
  border: solid 1px #80808075;
  padding: 1rem;
  border-radius: 0.3rem;
  box-shadow: 0 0 0.1rem #80808075;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & a {
    margin-left: 0.4rem;
    color: var(--pacific-blue);
    text-decoration: none;
    font-weight: 600;

    &:hover {
      text-decoration: underline;
    }
  }

  & p {
    padding: 0.6rem 0;
    font-size: 0.8rem;
  }
`;

export const RepositoryLangsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

type RepositoryLangProps = {
  color: string;
};
export const RepositoryLang = styled.span<RepositoryLangProps>`
  font-size: 0.7rem;
  padding-left: 1.2rem;
  margin: 0 0.4rem 0.2rem 0;
  position: relative;

  &::before {
    content: '';
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 1rem;
    border: solid 1px #80808075;
    background-color: ${({ color }) => color};
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
  }
`;
