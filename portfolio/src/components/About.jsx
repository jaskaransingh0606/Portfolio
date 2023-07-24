import React from 'react'
import {Tilt} from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../style';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard=({index,title,icon})=>{
  return(
    <div className='flex flex-row'>
    <Tilt className="xs:w-[250px] w-full ">
      <motion.div
      
      variants={fadeIn("right","spring",0.5*index,0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card jusify-evenly items-center'>
        <div 
        options={{
          max:45,
          scale:1,
          speed:450
        }}
        className='bg-tertiary py-5 px-12 rounded-[20px] min-h-[280px] flex flex-col justify-evenly items-center'
        >
          <img src={icon} alt={title}
          className='w-16 h-16 object-contain'/>
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>

        </div>

      </motion.div>

    </Tilt>
    </div>

  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <div flex mt-10>
        {/* <p className={styles.sectionSubText} >Introduction</p> */}
        <h2 className={styles.sectionHeadText} >Overview</h2>
        </div>
      </motion.div>

      <motion.p 
      variants={fadeIn("","",0.1,1)}
      className='mt-4  text-[20px] max-w-3xl leading-[30px] mx-auto text-center '
      >
       I'm a Frontend Developer based in India. I have a passion for web development and love to create for web and mobile devices. I have a good understanding of web technologies and have experience in building web applications with ReactJS. I also develop UI/UX designs for web and mobile applications.
      </motion.p>

      <div className='mt-20  flex justify-evenly '>
        {services.map((services,index)=>(
          <div  key={index} >   
          <ServiceCard key={services.title} index={index} {...services} />
          </div>
        ))}

      </div>


    </>
  )
}

export default SectionWrapper( About,"about");
