import { useInView, motion } from 'framer-motion'
import type { FC } from 'react'
import { useRef } from 'react'

import { LevelType } from '@utils/datas'

interface WorkflowLevelProps {
  level: LevelType
}

const WorkflowLevel: FC<WorkflowLevelProps> = ({ level }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div
      ref={ref}
      className='flex items-stretch gap-x-3 p-4 my-2 border rounded-md border-zinc-400 dark:border-zinc-700 transition-[border-color] duration-500'
    >
      <div className='text-5xl'>{level.icon}</div>

      <div className='flex-1 flex flex-col justify-between'>
        <h3 className='text-xl leading-none font-semibold'>{level.name}</h3>

        <div className='w-full h-3 rounded-full transition-colors duration-500 bg-orange-200 dark:bg-zinc-800'>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: isInView ? `${level.level}%` : 0 }}
            transition={{
              type: 'tween',
              duration: 1
            }}
            className='h-full rounded-full bg-orange-400'
          />
        </div>
      </div>
    </div>
  )
}

export default WorkflowLevel
