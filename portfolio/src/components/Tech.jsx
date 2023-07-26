import React from 'react'
import { SectionWrapper } from '../hoc';
import {BallCanvas} from './canvas';
import { motion } from 'framer-motion';
import { textVariant } from '../utils/motion';
import { technologies } from '../constants';
import { styles } from '../style';


const Tech = () => {
  return (
    <div className='flex flex-col mt-[50px]'>
      <h1 className={styles.sectionHeadText}>Technologies I Worked on..</h1>
    <div className='flex flex-row flex-wrap justify-center gap-5 mt-[50px]'>
      {technologies.map((technology) => (
        <div className='w-[28] h-[28] key={technology.name}'>
           <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
    </div>
  )
}

export default SectionWrapper(Tech,"");
