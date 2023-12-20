'use client';

import { useState, ChangeEvent } from 'react';

import { images } from '@/constants';
import { AppWrap, MotionWrap } from '@/wrapper';
import { client } from '@/client';

import './Footer.scss';
import Image from 'next/image';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Footer: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message,
    };

    client.create(contact).then(() => {
      setLoading(false);
      setIsFormSubmitted(true);
    });
  };

  return (
    <>
      <h2 className='head-text'>Chat with me & Connect</h2>

      <div className='app__footer-cards'>
        <div className='app__footer-card'>
          <img src={images.email.src} alt='email of nimsara fernando' />
          <a href='mailto:nimsara66@gmail.com' className='p-text'>
            nimsara66@gmail.com
          </a>
        </div>

        {/* <div className='app__footer-card'>
          <img src={images.mobile.src} alt='mobile' />
          <a href='tel:+1 (123) 456-789' className='p-text'>
            +1 (123) 456-789
          </a>
        </div> */}
      </div>

      {!isFormSubmitted ? (
        <div className='app__footer-form app__flex'>
          <div className='app__flex'>
            <input
              type='text'
              className='p-text'
              placeholder='Your Name'
              name='name'
              value={name}
              onChange={handleChange}
            />
          </div>
          <div className='app__flex'>
            <input
              type='email'
              className='p-text'
              placeholder='Your Email'
              name='email'
              value={email}
              onChange={handleChange}
            />
          </div>
          <div>
            <textarea
              className='p-text'
              placeholder='Your Message'
              name='message'
              value={message}
              onChange={handleChange}
            ></textarea>
          </div>

          <button type='button' className='p-text' onClick={handleSubmit}>
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </div>
      ) : (
        <div>
          <h3 className='head-text'>Thank you for getting in touch!</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg'
);
