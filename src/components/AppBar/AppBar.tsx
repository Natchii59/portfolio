import { useState } from 'react';
import {
  IoLogoOctocat,
  IoMenu,
  IoClose,
  IoHome,
  IoMail,
  IoSchool,
  IoTerminal,
} from 'react-icons/io5';
import {
  AppBarLink,
  AppBarMenu,
  AppBarMenuBack,
  AppBarStyle,
  AppBarTitle,
} from './style';

export default function AppBar() {
  const [menu, setMenu] = useState<boolean>(false);

  return (
    <AppBarStyle>
      <AppBarTitle>
        <IoLogoOctocat />
        <span style={{ marginLeft: '0.4rem' }}>Natchi</span>
      </AppBarTitle>

      {!menu && (
        <IoMenu
          style={{
            fontSize: '2.1rem',
            zIndex: '8',
            color: 'var(--onyx)',
            cursor: 'pointer',
          }}
          onClick={() => setMenu(true)}
        />
      )}

      <AppBarMenuBack menu={menu} onClick={() => setMenu(false)} />

      <AppBarMenu menu={menu}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <h2>Menu</h2>

          <IoClose
            style={{
              fontSize: '2.1rem',
              color: 'var(--onyx)',
              cursor: 'pointer',
            }}
            onClick={() => setMenu(false)}
          />
        </div>

        <hr
          style={{
            background: 'var(--onyx)',
            margin: '0.5rem 0',
            border: 'none',
            height: '1px',
            width: '100%',
          }}
        />

        <div>
          <AppBarLink to={{ pathname: '/' }} onClick={() => setMenu(false)}>
            <IoHome />
            <span>Accueil</span>
          </AppBarLink>
          <AppBarLink
            to={{ pathname: '/professional' }}
            onClick={() => setMenu(false)}
          >
            <IoSchool />
            <span>Parcours Professionel</span>
          </AppBarLink>
          <AppBarLink to={{ pathname: '' }} onClick={() => setMenu(false)}>
            <IoTerminal />
            <span>Programmation</span>
          </AppBarLink>
          <AppBarLink to={{ pathname: '' }} onClick={() => setMenu(false)}>
            <IoMail />
            <span>Contact</span>
          </AppBarLink>
        </div>
      </AppBarMenu>
    </AppBarStyle>
  );
}
