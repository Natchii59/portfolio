import {
  IoGitBranch,
  IoLogoCss3,
  IoLogoDocker,
  IoLogoHtml5,
  IoLogoJavascript,
  IoLogoNodejs,
  IoLogoReact,
  IoLogoVue,
} from 'react-icons/io5';
import {
  SiGraphql,
  SiJava,
  SiMysql,
  SiNestjs,
  SiPhp,
  SiPostgresql,
  SiSwift,
  SiTypescript,
} from 'react-icons/si';

enum Status {
  DEBUTANT = 'Débutant',
  MOYEN = 'Moyen',
  CONFIRME = 'Confirmé',
  MAITRISE = 'Maitrisé',
}

export const datasCompetences = [
  {
    icon: <IoLogoJavascript />,
    value: 95,
    title: 'Javascript',
    status: Status.MAITRISE,
  },
  {
    icon: <SiTypescript />,
    value: 98,
    title: 'Typescript',
    status: Status.MAITRISE,
  },
  {
    icon: <IoLogoNodejs />,
    value: 60,
    title: 'NodeJs',
    status: Status.MOYEN,
  },
  {
    icon: <SiPhp />,
    value: 20,
    title: 'PHP',
    status: Status.DEBUTANT,
  },
  {
    icon: <SiJava />,
    value: 20,
    title: 'Java',
    status: Status.DEBUTANT,
  },
  {
    icon: <IoLogoHtml5 />,
    value: 70,
    title: 'HTML',
    status: Status.CONFIRME,
  },
  {
    icon: <IoLogoCss3 />,
    value: 70,
    title: 'CSS',
    status: Status.CONFIRME,
  },
  {
    icon: <SiNestjs />,
    value: 75,
    title: 'Nestjs',
    status: Status.CONFIRME,
  },
  {
    icon: <IoLogoReact />,
    value: 70,
    title: 'React',
    status: Status.CONFIRME,
  },
  {
    icon: <IoLogoVue />,
    value: 60,
    title: 'Vuejs',
    status: Status.CONFIRME,
  },
  {
    icon: <SiGraphql />,
    value: 70,
    title: 'GraphQL',
    status: Status.CONFIRME,
  },
  {
    icon: <IoGitBranch />,
    value: 60,
    title: 'Git',
    status: Status.MOYEN,
  },
  {
    icon: <IoLogoDocker />,
    value: 15,
    title: 'Docker',
    status: Status.DEBUTANT,
  },
  {
    icon: <SiMysql />,
    value: 65,
    title: 'MySQL',
    status: Status.CONFIRME,
  },
  {
    icon: <SiPostgresql />,
    value: 65,
    title: 'PostgreSQL',
    status: Status.CONFIRME,
  },
  {
    icon: <SiSwift />,
    value: 10,
    title: 'SwiftUI',
    status: Status.DEBUTANT,
  },
];

enum LangName {
  TYPESCRIPT = 'Typescript',
  JAVASCRIPT = 'Javascript',
  GRAPHQL = 'GraphQL',
  NESTJS = 'NestJS',
}
enum LangColor {
  TYPESCRIPT = '#007acc',
  JAVASCRIPT = '#f0db4f',
  GRAPHQL = '#e535ab',
  NESTJS = '#ce3951',
}

export const datasRepositories = [
  {
    title: 'Nest-App',
    url: 'https://github.com/Natchii59/nest-app',
    description:
      "Application Backend avec système d'Authentification, Post, Like, Commantaires...",
    langs: [
      {
        name: LangName.TYPESCRIPT,
        color: LangColor.TYPESCRIPT,
      },
      {
        name: LangName.NESTJS,
        color: LangColor.NESTJS,
      },
      {
        name: LangName.GRAPHQL,
        color: LangColor.GRAPHQL,
      },
    ],
  },
  {
    title: 'TestProject',
    url: 'https://github.com/Natchii59',
    description: 'Ceci est un projet test',
    langs: [
      {
        name: LangName.TYPESCRIPT,
        color: LangColor.TYPESCRIPT,
      },
      {
        name: LangName.GRAPHQL,
        color: LangColor.GRAPHQL,
      },
    ],
  },
  {
    title: 'TestProject',
    url: 'https://github.com/Natchii59',
    description: 'Ceci est un projet test',
    langs: [
      {
        name: LangName.TYPESCRIPT,
        color: LangColor.TYPESCRIPT,
      },
      {
        name: LangName.GRAPHQL,
        color: LangColor.GRAPHQL,
      },
    ],
  },
  {
    title: 'TestProject',
    url: 'https://github.com/Natchii59',
    description: 'Ceci est un projet test',
    langs: [
      {
        name: LangName.TYPESCRIPT,
        color: LangColor.TYPESCRIPT,
      },
      {
        name: LangName.GRAPHQL,
        color: LangColor.GRAPHQL,
      },
    ],
  },
];
