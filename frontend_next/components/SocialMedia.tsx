import { BsGithub, BsInstagram, BsFacebook } from 'react-icons/bs'
import { FaLinkedin } from 'react-icons/fa'
import { AiFillMediumSquare } from 'react-icons/ai'

const SocialMedia: React.FC = () => {
  return (
    <div className='app__social'>
      <div>
        <a
          href='https://github.com/nimsara66'
          target='_blank'
          rel='noopener noreferrer'
        >
          <BsGithub />
        </a>
      </div>
      <div>
        <a
          href='https://www.linkedin.com/in/nimsara66'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaLinkedin />
        </a>
      </div>
      <div>
        <a
          href='https://medium.com/@nimsara66'
          target='_blank'
          rel='noopener noreferrer'
        >
          <AiFillMediumSquare />
        </a>
      </div>
      <div>
        <a
          href='https://www.facebook.com/mihindukulasuria.fernando'
          target='_blank'
          rel='noopener noreferrer'
        >
          <BsFacebook />
        </a>
      </div>
      <div>
        <a
          href='https://www.instagram.com/nimsara_sudeepa'
          target='_blank'
          rel='noopener noreferrer'
        >
          <BsInstagram />
        </a>
      </div>
    </div>
  )
}

export default SocialMedia
