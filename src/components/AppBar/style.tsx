import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const AppBarStyle = styled.header`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const AppBarTitle = styled.h1`
  display: flex;
  align-items: center;
  color: var(--onyx);
  z-index: 10;
  user-select: none;
`;

type AppBarMenuProps = {
  menu: boolean;
};
export const AppBarMenu = styled.div<AppBarMenuProps>`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 100;
  background-color: var(--mint-cream);
  width: 20rem;
  height: 100%;
  padding: 1rem;
  box-shadow: ${({ menu }) => (menu ? '-0.1rem 0 1rem var(--onyx)' : 'none')};
  transform: translateX(${({ menu }) => (menu ? '0' : '20rem')});
  transition: all 0.3s ease;
`;

export const AppBarLink = styled(Link)`
  color: var(--onyx);
  display: flex;
  align-items: center;
  font-size: 1.1rem;
  text-decoration: none;
  padding: 0.6rem;
  border-radius: 0.2rem;
  transition: background-color 0.2s ease-in;

  &:hover {
    cursor: pointer;
    background-color: #2c2c2c1d;
  }

  & span {
    margin-left: 0.2rem;
  }
`;

export const AppBarMenuBack = styled.div<AppBarMenuProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: ${({ menu }) => (menu ? '0.8' : '0')};
  z-index: ${({ menu }) => (menu ? '99' : '-1')};
  background-color: var(--onyx);
  transition: all 0.3s ease;
`;
