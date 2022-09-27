import {
  FooterBox,
  FooterBoxTitle,
  FooterContainer,
  FooterContent,
  FooterCredits,
  FooterLink,
  FooterStyle,
} from './style';
import CV from '../../assets/CV-Nathan-Caron.png';
import { datas } from './datas';

export default function Footer() {
  return (
    <FooterStyle>
      <FooterContainer>
        <FooterContent>
          <FooterBox>
            <FooterBoxTitle>Mes réseaux</FooterBoxTitle>

            {datas.map((d, i) => (
              <FooterLink href={d.link} target='blank'>
                {d.logo}
                <span>{d.name}</span>
              </FooterLink>
            ))}
          </FooterBox>

          <FooterBox>
            <FooterBoxTitle>Me contacter</FooterBoxTitle>

            <a href='mailto:contact@natchi.fr' style={{ color: 'var(--onyx)' }}>
              contact@natchi.fr
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
