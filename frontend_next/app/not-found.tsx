import Link from 'next/link'
import { images } from '@/constants'
import './NotFound.scss'

const Error = () => {
  return (
    <div className='app app__container'>
      <div className='app__wrapper'>
        <div className='app__flex'>
          <img src={images.notfound.src} alt='not found' />
        </div>
        <div className='app__header-badge'>
          <h3 className='head-text'><span>Ohh! </span>page not found</h3>
          <p className='p-text'>
            We can&apos;t seem to find the page you&apos;re looking for
            <p className='bold-text'>
              <Link href='/'>back home</Link>
            </p>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Error
