import styled from 'styled-components';

export const HomeStyle = styled.div`
  margin-top: 2rem;
`;

export const HomeContainer = styled.div`
  height: 40rem;
  padding: 0 2rem;
`;

export const HomeContainer1 = styled(HomeContainer)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;

export const HomeText = styled.div`
  max-width: 40rem;
`;

export const HomeTitle = styled.h1`
  text-decoration: underline;
  text-decoration-thickness: 0.2rem;
  font-size: 2.8rem;
  margin-bottom: 0.2rem;

  @media screen and (max-width: 690px) {
    font-size: 2rem;
  }
`;

export const HomeProfilePicture = styled.img`
  width: 100%;
  max-width: 35rem;
  max-height: 35rem;
  filter: grayscale(1);
  border-radius: 40rem;
  user-select: none;

  @media screen and (max-width: 1000px) {
    max-width: 30rem;
    max-height: 30rem;
  }
`;

export const HomeContainer2 = styled.div`
  background-color: var(--onyx);
  color: var(--mint-cream);
  padding: 5rem 2rem 10rem 2rem;
`;

export const HomeTitleDesc = styled.h1`
  text-align: center;

  @media screen and (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

export const HomeTimeLine = styled.ul`
  margin-top: 4rem;
  padding: 2rem 0;
  list-style-type: none;
  display: flex;
  align-items: flex-start;
  overflow-x: scroll;
`;

export const HomeTLLi = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

type HomeTLTimestampProps = {
  complete: boolean;
};
export const HomeTLTimestamp = styled.div<HomeTLTimestampProps>`
  margin-bottom: 1.3rem;
  font-weight: 100;
  position: relative;

  & :before {
    content: '';
    width: 25px;
    height: 25px;
    background-color: ${({ complete }) =>
      complete ? 'var(--illuminating-emerald)' : 'white'};
    border-radius: 25px;
    border: ${({ complete }) =>
      complete ? 'solid 1px var(--illuminating-emerald)' : 'solid 1px #ddd'};
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translate(-50%, 50%);
  }
`;

type HomeTLStatusProps = {
  complete: boolean;
};
export const HomeTLStatus = styled.div<HomeTLStatusProps>`
  padding: 1.3rem 2rem 0 2rem;
  border-top: ${({ complete }) =>
    complete ? 'solid 2px var(--illuminating-emerald)' : '2px solid #d6dce0'};
  min-width: 13rem;
  text-align: center;

  & h4 {
    font-weight: 500;
  }

  @media screen and (max-width: 600px) {
    padding: 1.3rem 1rem 0 1rem;
  }
`;
