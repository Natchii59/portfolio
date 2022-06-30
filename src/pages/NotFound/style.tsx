import { IoCog } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NotFoundStyle = styled.div`
  padding: 0 1rem;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const NotFoundLogo = styled.div`
  position: relative;
  font-size: 7rem;
  margin: 1rem 0;
`;

export const NotFoundCogLogo = styled(IoCog)`
  animation: 2s rotation infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;

export const NotFoundButton = styled(Link)`
  margin-top: 2rem;
  font-size: 1rem;
  font-weight: 500;
  color: var(--onyx);
  text-decoration: none;
  border: solid 2px var(--onyx);
  padding: 0.6rem;
  border-radius: 10rem;
  box-shadow: 0.4rem 0.4rem 0 var(--onyx);
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    cursor: pointer;
    box-shadow: 0 0 0 var(--onyx);
  }
`;
