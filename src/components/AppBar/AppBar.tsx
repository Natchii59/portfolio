import { useState } from 'react';
import {
  IoLogoOctocat,
  IoMenu,
  IoClose,
  IoHome,
  IoMail,
  IoFolderOpen,
  IoDocuments,
} from 'react-icons/io5';
import { AppBarMenu, AppBarStyle, AppBarTitle } from './style';

export default function AppBar() {
  const [menu, setMenu] = useState<boolean>(false);

  return (
    <AppBarStyle>
      <AppBarTitle>
        <IoLogoOctocat />
        <span style={{ marginLeft: '0.4rem' }}>Natchi</span>
      </AppBarTitle>

      {menu ? (
        <IoClose
          style={{
            fontSize: '2.1rem',
            zIndex: '10',
            color: 'var(--mint-cream)',
            cursor: 'pointer',
          }}
          onClick={() => setMenu(false)}
        />
      ) : (
        <IoMenu
          style={{
            fontSize: '2.1rem',
            zIndex: '10',
            color: 'var(--onyx)',
            cursor: 'pointer',
          }}
          onClick={() => setMenu(true)}
        />
      )}

      <AppBarMenu
        menu={menu}
        style={{
          width: menu ? '13rem' : '0',
          height: menu ? '13rem' : '0',
        }}
      >
        <IoHome />
        <IoFolderOpen />
        <IoDocuments />
        <IoMail />
      </AppBarMenu>
    </AppBarStyle>
  );
}
