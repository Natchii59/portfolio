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
  mix-blend-mode: exclusion;
`;

type AppBarMenuProps = {
  menu: boolean;
};
export const AppBarMenu = styled.div<AppBarMenuProps>`
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 0 0 0 13rem;
  background-color: var(--onyx);
  z-index: 9;
  transition-property: width, height;
  transition-duration: 0.3s;
  transition-timing-function: ease;

  & svg {
    display: ${({ menu }) => (menu ? 'unset' : 'none')};
    font-size: 1.4rem;
    color: var(--mint-cream);
    position: absolute;
    cursor: pointer;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(110%);
    }
  }

  & :nth-child(1) {
    left: 1.5rem;
    top: 1.6rem;
  }

  & :nth-child(2) {
    left: 3rem;
    top: 5.1rem;
  }

  & :nth-child(3) {
    left: 5.8rem;
    top: 8rem;
  }

  & :nth-child(4) {
    left: 9.9rem;
    top: 9.9rem;
  }
`;
