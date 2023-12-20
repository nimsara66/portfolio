'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Tooltip } from 'react-tooltip'

import { AppWrap, MotionWrap } from '@/wrapper';
import { urlFor, client } from '@/client';
import './Skills.scss';
import Image from 'next/image';

interface Skill {
  name: string;
  bgColor: string;
  icon: string;
}

interface Work {
  name: string;
  company: string;
  desc: string;
}

interface Experience {
  year: string;
  works: Work[];
}

const Skills: React.FC = () => {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [skills, setSkills] = useState<Skill[]>([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch<Experience[]>(query).then((data) => {
      setExperiences(data);
    });

    client.fetch<Skill[]>(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <>
      <h2 className='head-text'>Skills & Experiences</h2>

      <div className='app__skills-container'>
        <motion.div className='app__skills-list'>
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className='app__skills-item app__flex'
              key={skill.name}
            >
              <div
                className='app__flex'
                style={{ backgroundColor: skill.bgColor }}
              >
                <img
                  src={urlFor(skill.icon).url()}
                  alt={`nimsara fernando is fluent in ${skill.name} technology/tool`}
                />
              </div>
              <p className='p-text'>{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className='app__skills-exp'>
          {experiences.map((experience) => (
            <motion.div className='app__skills-exp-item' key={experience.year}>
              <div className='app__skills-exp-year'>
                <p className='bold-text'>{experience.year}</p>
              </div>
              <motion.div className='app__skills-exp-works'>
                {experience.works.map((work, index) => (
                  <React.Fragment key={`${experience.year}-${index}`}>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className='app__skills-exp-work'
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >
                      <h4 className='bold-text'>{work.name}</h4>
                      <p className='p-text'>{work.company}</p>
                    </motion.div>

                    <Tooltip
                      id={work.name}
                      // effect='solid'
                      arrowColor='#fff'
                      className='skills-tooltip'
                    >
                      {work.desc}
                    </Tooltip>
                  </React.Fragment>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg'
);
