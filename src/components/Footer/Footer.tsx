import {
  FooterBox,
  FooterBoxTitle,
  FooterContainer,
  FooterContent,
  FooterCredits,
  FooterLink,
  FooterStyle,
} from './style';
import { IoLogoGithub, IoLogoLinkedin, IoLogoTwitter } from 'react-icons/io5';
import CV from '../../assets/CV-Nathan-Caron.png';

export default function Footer() {
  return (
    <FooterStyle>
      <FooterContainer>
        <FooterContent>
          <FooterBox>
            <FooterBoxTitle>Mes réseaux</FooterBoxTitle>

            <FooterLink href='https://github.com/Natchii59' target='blank'>
              <IoLogoGithub />
              <span>Github</span>
            </FooterLink>

            <FooterLink
              href='https://www.linkedin.com/in/nathan-caron/'
              target='blank'
            >
              <IoLogoLinkedin />
              <span>LinkedIn</span>
            </FooterLink>

            <FooterLink href='https://twitter.com/Natchi59/' target='blank'>
              <IoLogoTwitter />
              <span>Twitter</span>
            </FooterLink>
          </FooterBox>

          <FooterBox>
            <FooterBoxTitle>Me contacter</FooterBoxTitle>

            <a href='mailto:caron.nathan@hotmail.com' style={{ color: 'var(--onyx)' }}>
              caron.nathan@hotmail.com
            </a>
          </FooterBox>

          <FooterBox>
            <FooterBoxTitle>Ressources</FooterBoxTitle>

            <a href={CV} download style={{ color: 'var(--onyx)' }}>
              Télécharger mon CV
            </a>
          </FooterBox>
        </FooterContent>

        <FooterCredits>
          <span>© 2022 Natchi</span>
          <div>
            <span>Website design by me</span>
            <br />
            <span>Coded by me</span>
            <br />
            <a
              href='https://github.com/Natchii59/website'
              target='_blank'
              rel='noreferrer'
              style={{ color: 'var(--onyx)' }}
            >
              Git Repository
            </a>
          </div>
        </FooterCredits>
      </FooterContainer>
    </FooterStyle>
  );
}
