import styles from './styles.module.css';
import Header from '@components/header';
import Hero from '@components/sections/hero';
import Gallery from '@components/sections/gallery';
import Footer from '@components/footer';
import About from '@components/sections/about';
import Testimonials from '@components/sections/testimonials';

function App() {
  return (
    <div className='bg-stone-50 h-full w-full flex'>
      <Header />
      <main className={`h-screen flex-1 overflow-auto ${styles.main}`}>
        <Hero />
        <About/>
        <Gallery/>
        <Testimonials/>
        <Footer />
      </main>
    </div>
  )
}

export default App
