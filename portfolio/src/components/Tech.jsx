import React from 'react'
import { SectionWrapper } from '../hoc';
import {BallCanvas} from './canvas';
import { motion } from 'framer-motion';
import { textVariant } from '../utils/motion';
import { technologies } from '../constants';

const Tech = () => {
  return (
    <div>
      <h1>Tech</h1>
    </div>
  )
}

export default SectionWrapper(Tech,"");
