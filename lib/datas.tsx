import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'
import {
  SiGit,
  SiGraphql,
  SiJava,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiRuby,
  SiRubyonrails,
  SiTypescript,
  SiVuedotjs
} from 'react-icons/si'

export interface LinkType {
  name: string
  slug: string
}

export const links: LinkType[] = [
  {
    name: 'Professionnel',
    slug: 'professional'
  },
  {
    name: 'Workflow',
    slug: 'workflow'
  },
  {
    name: 'Projets',
    slug: 'projects'
  },
  {
    name: 'Matériels',
    slug: 'uses'
  }
]

export enum LANG_NAME {
  fr = 'Français',
  en = 'English'
}

export interface HomeExperienceType {
  name: string
  year: number
  today?: boolean
}

export const homeExperiences: HomeExperienceType[] = [
  {
    name: 'Obtention de mon Baccalauréat Général (Options NSI et Maths)',
    year: 2021
  },
  {
    name: 'Études en BTS SIO (Services Informatiques aux Organisation)',
    year: 2021,
    today: true
  },
  {
    name: 'Stage développeur Frontend chez PicwicToys',
    year: 2022
  },
  {
    name: 'Alternance chez Click2Buy',
    year: 2022,
    today: true
  }
]

export interface HomeSocialType {
  name: string
  url: string
  icon: JSX.Element
}

export const homeSocials: HomeSocialType[] = [
  {
    name: 'Github',
    url: 'https://github.com/Natchii59',
    icon: <FaGithub />
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/nathan-caron/',
    icon: <FaLinkedin />
  },
  {
    name: 'Mail',
    url: 'mailto:contact@natchi.fr',
    icon: <FaEnvelope />
  }
]

export interface UsesType {
  name: string
  url: string
  has: boolean
}

export const uses: UsesType[] = [
  {
    name: 'Macbook Pro M1 13"',
    url: 'https://support.apple.com/kb/SP824',
    has: true
  },
  {
    name: 'Souris Logitech MX Master 3',
    url: 'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwjOuLiUt9b6AhUC4RoKHdEiBQoQFnoECCUQAQ&url=https%3A%2F%2Fwww.amazon.fr%2FLogitech-R%25C3%25A9cepteur-D%25C3%25A9filement-Confortable-Rechargeable%2Fdp%2FB07W6JG6Z7&usg=AOvVaw1GMp6LYkyAfBE7cNJD1KjE',
    has: true
  },
  {
    name: 'Clavier Logitech K380',
    url: 'https://www.logitech.com/products/keyboards/k380-multi-device.html',
    has: true
  },
  {
    name: 'Tapis de souris Corsair MM100',
    url: 'https://www.corsair.com/Catégories/Produits/Tapis-de-souris-gaming/Tapis-de-souris-gaming-en-tissu-MM100/p/CH-9100020-WW',
    has: true
  },
  {
    name: 'Écran externe Samsung M5 32"',
    url: 'https://www.samsung.com/fr/monitors/smart/smart-m5-32-inch-ls32am500nrxen/',
    has: true
  },
  {
    name: 'Airpods Pro',
    url: 'https://www.amazon.fr/Apple-AirPods-avec-Chargeur-MagSafe/dp/B09JQZ5DYM',
    has: true
  },
  {
    name: 'Clavier Keychron Q1 Custom',
    url: 'https://www.keychron.com/products/keychron-q1',
    has: false
  }
]

export interface LevelType {
  name: string
  level: number
  icon: JSX.Element
}

export const workflowLevels: LevelType[] = [
  {
    name: 'Typescript',
    level: 95,
    icon: <SiTypescript />
  },
  {
    name: 'Node.js',
    level: 80,
    icon: <SiNodedotjs />
  },
  {
    name: 'React',
    level: 70,
    icon: <SiReact />
  },
  {
    name: 'Next.js',
    level: 40,
    icon: <SiNextdotjs />
  },
  {
    name: 'Nestjs',
    level: 80,
    icon: <SiNestjs />
  },
  {
    name: 'GraphQL',
    level: 80,
    icon: <SiGraphql />
  },
  {
    name: 'Vuejs',
    level: 50,
    icon: <SiVuedotjs />
  },
  {
    name: 'Ruby',
    level: 40,
    icon: <SiRuby />
  },
  {
    name: 'Ruby on Rails',
    level: 35,
    icon: <SiRubyonrails />
  },
  {
    name: 'Java',
    level: 20,
    icon: <SiJava />
  },
  {
    name: 'Git',
    level: 70,
    icon: <SiGit />
  }
]
