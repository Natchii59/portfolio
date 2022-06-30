import { IoAlertCircle } from 'react-icons/io5';
import {
  NotFoundButton,
  NotFoundCogLogo,
  NotFoundLogo,
  NotFoundStyle,
} from './style';

export default function NotFound() {
  return (
    <NotFoundStyle>
      <h1>Page introuvable</h1>

      <NotFoundLogo>
        <NotFoundCogLogo />
        <IoAlertCircle
          style={{
            color: 'var(--orange-red-crayola)',
            fontSize: '3rem',
            position: 'absolute',
            bottom: '1.5rem',
            right: '0.3rem',
          }}
        />
      </NotFoundLogo>

      <p style={{ textAlign: 'center' }}>
        Vous êtes arrivés sur une page qui n'existe pas.
        <br />
        Je vous invite à revenir en lieu sûr, ou bien vous dirigez vers la barre
        de navigation.
      </p>

      <NotFoundButton to={{ pathname: '/' }}>
        Revenir en lieu sûr
      </NotFoundButton>
    </NotFoundStyle>
  );
}
