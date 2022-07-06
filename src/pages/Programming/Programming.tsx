import {
  CardsContainer,
  ProgrammingBox,
  ProgrammingContainer,
  ProgrammingStyle,
  ProgrammingSubTitle,
  ProgrammingTitle,
  ProgressBar,
  RepositoriesContainer,
  RepositoryCard,
  RepositoryLang,
  RepositoryLangsContainer,
  SkillCard,
} from './style';
import { MdWavingHand } from 'react-icons/md';
import { RiGitRepositoryLine } from 'react-icons/ri';
import { datasCompetences, datasRepositories } from './datas';

export default function Programming() {
  return (
    <ProgrammingStyle>
      <ProgrammingTitle>
        <MdWavingHand /> Bienvenue dans le côté programmation
      </ProgrammingTitle>

      <ProgrammingContainer>
        <ProgrammingSubTitle>Mon expérience</ProgrammingSubTitle>

        <ProgrammingBox>
          <p>
            J'ai réellement commencé le développement informatique depuis mars
            2020. Avec comme premier language le JavaScript en codant des
            applications grâce au module{' '}
            <a
              href='https://github.com/discordjs/discord.js/'
              style={{ color: 'var(--onyx)' }}
            >
              discord.js
            </a>{' '}
            avec NodeJS.
            <br />
            Puis avec le temps je me suis finalement intéressé à la création de
            site web, côté backend et frontend, grâce à des frameworks et des
            librairies, avec l'apprentissage en même temps de Typescript.
            <br />
            Aujourd'hui je fais pratiquement tous mes projets en Typescript.
            Mais je m'exerce quand même dans d'autres langages pour en découvrir
            leur technologie. Je suis plus spécialisé dans le web côté backend
            et frontend.
          </p>
        </ProgrammingBox>
      </ProgrammingContainer>

      <ProgrammingContainer>
        <ProgrammingSubTitle>Mes cartes de compétences</ProgrammingSubTitle>

        <CardsContainer>
          {datasCompetences.map((d, i) => (
            <SkillCard key={'programming-' + i}>
              <ProgressBar value={d.value}>{d.icon}</ProgressBar>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <h4>{d.title}</h4>
                <span>{d.status}</span>
              </div>
            </SkillCard>
          ))}
        </CardsContainer>
      </ProgrammingContainer>

      <ProgrammingContainer>
        <ProgrammingSubTitle>Mes projets</ProgrammingSubTitle>

        <RepositoriesContainer>
          {datasRepositories.map((d, i) => (
            <RepositoryCard key={'repository-' + i}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <RiGitRepositoryLine style={{ fontSize: '1.3rem' }} />
                <a href={d.url}>{d.title}</a>
              </div>

              <p>{d.description}</p>

              <RepositoryLangsContainer>
                {d.langs.map((l, i) => (
                  <RepositoryLang key={'lang-' + i} color={l.color}>
                    {l.name}
                  </RepositoryLang>
                ))}
              </RepositoryLangsContainer>
            </RepositoryCard>
          ))}
        </RepositoriesContainer>
      </ProgrammingContainer>
    </ProgrammingStyle>
  );
}
