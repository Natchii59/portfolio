import { ProjectType } from '@/lib/datas'
import { FC } from 'react'

interface ProjectProps {
  project: ProjectType
}

const Project: FC<ProjectProps> = ({ project }) => {
  return (
    <a
      href={project.github}
      target='_blank'
      rel='noreferrer'
      className='p-4 border rounded-md border-zinc-400 dark:border-zinc-700 transition-[border-color] duration-500 group'
    >
      <h3 className='text-xl font-semibold group-hover:text-orange-400'>
        {project.name}
      </h3>

      <p className='py-2'>{project.description}</p>

      <div className='flex items-center gap-2 flex-wrap'>
        {project.languages.map((language, i) => (
          <div key={i} className='flex items-center gap-1'>
            <div
              className='w-3 h-3 rounded-full border border-zinc-400 dark:border-zinc-700 transition-[border-color] duration-500'
              style={{ backgroundColor: language.color }}
            />
            <p>{language.name}</p>
          </div>
        ))}
      </div>
    </a>
  )
}

export default Project
