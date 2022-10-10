import React from 'react'
import { motion } from 'framer-motion'

import { images } from '../../constants'
import { AppWrap } from '../../wrapper'

import './Header.scss'

const scaleVarients = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: { duration: 1, ease: 'easeInOut' },
  },
}

const Header = () => {
  return (
    <div id='home' className='app__header app__flex'>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.8 }}
        className='app__header-info'
      >
        <div className='app__header-badge'>
          <div className='badge-cmp app__flex'>
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className='p-text'>Hi, I am</p>
              <h1 className='head-text'>Nimsara</h1>
            </div>
          </div>
          <div className='tag-cmp app__flex'>
            <p className='p-text'>Full-Stack Developer</p>
            <p className='p-text'>Beginner Cloud Practitioner</p>
            <p className='p-text'>Freelancer</p>
            <p className='p-text'>
              <strong>BSc.CSE Undergraduate, UoM</strong>
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className='app__header-img'
      >
        <img src={images.profile} alt='nimsara fernando profile banner' />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          src={images.circle}
          alt='nimsara fernando profile background circle'
          className='overlay_circle'
        />
      </motion.div>
      <motion.div
        variants={scaleVarients}
        whileInView={scaleVarients.whileInView}
        className='app__header-circles'
      >
        {[images.react, images.node, images.expressjs, images.mongodb].map(
          (circle, index) => (
            <div className='circle-cmp app__flex' key={`circle-${index}`}>
              <img src={circle} alt='nimsara fernando skill circle' />
            </div>
          )
        )}
      </motion.div>
    </div>
  )
}

export default AppWrap(Header, 'home')
