import { FC } from 'react'
import { FaGithub } from 'react-icons/fa'

const Footer: FC = () => {
  return (
    <footer className='flex flex-col items-center gap-1 font-medium py-6'>
      <div>© 2022 Natchi. Tous droits réservés.</div>
      <a
        href='https://github.com/Natchii59/website/tree/develop'
        target='_blank'
        rel='noreferrer'
        className='flex items-center justify-center gap-1 focus-visible:outline-none group underline-offset-2'
      >
        <FaGithub />
        <p className='group-hover:underline group-focus-visible:underline'>
          Code source
        </p>
      </a>
    </footer>
  )
}

export default Footer
