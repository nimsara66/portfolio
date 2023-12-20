import './App.scss';
import { Navbar } from '@/components';
import { About, Footer, Header, Skills, Testimonials, Work } from '@/container';

const App: React.FC = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;