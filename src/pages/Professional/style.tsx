import { IoArrowUp } from 'react-icons/io5';
import styled from 'styled-components';

export const ProfessionalStyle = styled.div`
  background-color: var(--onyx);
  color: var(--mint-cream);
`;

export const GoToTop = styled(IoArrowUp)`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  height: 2.5rem;
  width: 2.5rem;
  background-color: var(--mint-cream);
  color: var(--onyx);
  border-radius: 0.3rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
`;

export const StartZone = styled.div`
  min-height: 100vh;
`;

export const StartZoneSticky = styled.div`
  position: sticky;
  top: 50%;
  transform: translateY(-50%);
  text-align: center;
  padding: 1rem;
`;

export const StartTitle = styled.h1`
  @media screen and (max-width: 800px) {
    font-size: 1.4rem;
  }
`;

type TimeLineZoneProps = {
  complete: boolean;
};
export const TimeLineZone = styled.div<TimeLineZoneProps>`
  min-height: 150vh;
  max-width: 1000px;
  border-left: ${({ complete }) =>
    complete
      ? 'solid 0.2rem var(--illuminating-emerald)'
      : 'solid 0.2rem var(--mint-cream)'};
  margin: 0 2rem;
`;

export const TimeLineZoneSticky = styled.div`
  position: sticky;
  top: 50%;
  transform: translateY(-50%);
  padding-left: 2rem;
  height: 18rem;
`;

export const TimeLineContainer = styled.div<TimeLineZoneProps>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  &::before {
    content: '';
    width: 25px;
    height: 25px;
    background-color: ${({ complete }) =>
      complete ? 'var(--illuminating-emerald)' : 'var(--mint-cream)'};
    border: ${({ complete }) =>
      complete ? 'solid 1px var(--illuminating-emerald)' : 'solid 1px #ddd'};
    border-radius: 25px;
    position: absolute;
    top: 50%;
    left: -2.9rem;
    transform: translateY(-50%);
  }

  & p {
    margin-top: 0.4rem;
    color: #f2f7f2d8;
  }
`;
