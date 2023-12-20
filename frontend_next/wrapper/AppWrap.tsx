import { NavigationDots, SocialMedia } from '@/components';

const AppWrap = <P extends object>(Component: React.ComponentType<P>, idName: string, classNames: string) => {
  const WrappedComponent: React.FC<P> = (props) => {
    return (
      <div id={idName} className={`app__container ${classNames}`}>
        <SocialMedia />
        <div className='app__wrapper app__flex'>
          <Component {...props} />

          <div className='copyright'>
            <p className='p-text'>@2024 Nimsara</p>
            <p className='p-text'>All rights reserved</p>
          </div>
        </div>
        <NavigationDots active={idName} />
      </div>
    );
  };

  return WrappedComponent;
};

export default AppWrap;
