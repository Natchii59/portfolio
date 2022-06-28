import {
  FooterBox,
  FooterBoxTitle,
  FooterContainer,
  FooterCredits,
  FooterLink,
  FooterStyle,
} from './style';
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5';

export default function Footer() {
  return (
    <FooterStyle>
      <FooterContainer>
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
        </FooterBox>

        <FooterBox>
          <FooterBoxTitle>Me contacter</FooterBoxTitle>

          <a href='mailto:contact@natchi.fr' style={{ color: 'var(--onyx)' }}>
            contact@natchi.fr
          </a>
        </FooterBox>
      </FooterContainer>

      <FooterCredits>
        <span>© 2022 Natchi</span>
        <div>
          <span>Website design by me</span>
          <br />
          <span>Coded by me</span>
        </div>
      </FooterCredits>
    </FooterStyle>
  );
}
