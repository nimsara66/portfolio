'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

import { AppWrap, MotionWrap } from '@/wrapper';
import { urlFor, client } from '@/client';

import './Testimonials.scss';
import Image from 'next/image';

interface Testimonial {
  _id: string;
  imageurl: string;
  feedback: string;
  name: string;
  company: string;
}

interface Brand {
  _id: string;
  imgUrl: string;
  name: string;
}

const Testimonials: React.FC = () => {
  const [brands, setBrands] = useState<Brand[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const query = '*[_type == "testimonials"]';
    const brandsQuery = '*[_type == "brands"]';

    client.fetch<Testimonial[]>(query).then((data) => {
      setTestimonials(data);
    });

    client.fetch<Brand[]>(brandsQuery).then((data) => {
      setBrands(data);
    });
  }, []);

  const test: Testimonial | undefined = testimonials[currentIndex];

  const handleClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <>
      {test && (
        <>
          <div className='app__testimonials-item app__flex'>
            <img
              src={urlFor(test.imageurl).url()}
              alt={`a client of nimsara fernando has given this testimonial`}
            />
            <div className='app__testimonials-content'>
              <p className='p-text'>{test.feedback}</p>
              <div>
                <h4 className='bold-text'>{test.name}</h4>
                <h5 className='p-text'>{test.company}</h5>
              </div>
            </div>
          </div>

          <div className='app__testimonials-btns app__flex'>
            <div
              className='app__flex'
              onClick={() =>
                handleClick(
                  currentIndex === 0
                    ? testimonials.length - 1
                    : currentIndex - 1
                )
              }
            >
              <HiChevronLeft />
            </div>
            <div
              className='app__flex'
              onClick={() =>
                handleClick(
                  currentIndex === testimonials.length - 1
                    ? 0
                    : currentIndex + 1
                )
              }
            >
              <HiChevronRight />
            </div>
          </div>
        </>
      )}

      <div className='app__testimonials-brands app__flex'>
        {brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: 'tween' }}
            key={brand._id}
          >
            <img
              src={urlFor(brand.imgUrl).url()}
              alt={`nimsara fernando has worked for ${brand.name} company`}
            />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonials, 'app__testimonials'),
  'testimonials',
  'app__primarybg'
);
