import email from '@/assets/email.png'
import mobile from '@/assets/mobile.png'
import node from '@/assets/node.png'
import react from '@/assets/react.png'
import mongodb from '@/assets/mongodb.png'
import expressjs from '@/assets/expressjs.png'

import profile from '@/assets/profile.webp'
import circle from '@/assets/circle.svg'
import logo from '@/assets/logo.png'
import logo2 from '@/assets/logo2.png'
import notfound from '@/assets/notfound.svg'
import { StaticImageData } from 'next/image'

interface Images {
  email: StaticImageData;
  mobile: StaticImageData;
  node: StaticImageData;
  react: StaticImageData;
  mongodb: StaticImageData;
  expressjs: StaticImageData;
  profile: StaticImageData;
  circle: StaticImageData;
  logo: StaticImageData;
  logo2: StaticImageData;
  notfound: StaticImageData;
}

const images: Images = {
  email,
  mobile,
  node,
  react,
  mongodb,
  expressjs,
  profile,
  circle,
  logo,
  logo2,
  notfound
};

export default images;