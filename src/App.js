import logo from './logo.svg';
import './App.css';
import Header from './component/header/Header';
import OurServices from './component/ourServices/OurServices';
import Documentation from './component/documentation/Documentation';
import WorkSpace from './component/workSpace/WorkSpace';
import Customer from './component/customer /Customer ';
import Footer from './component/footer/Footer';
import Project from './component/project/Project';
import Testimonials from './component/testimonials/Testimonials';
import Slider from './component/slider/Slider';
import Frequently from './component/ frequently / Frequently';
import FirstSection from './component/firstSection/FirstSection';
import Login from './pages/signin/Signin';
import Counter from './component/counter/Counter';
import Signup from './pages/signup/Signup';




function App() {
  return (
    <div className=''>
      <Header />
      <FirstSection />
      <OurServices />
      <Documentation />
      <Customer />
      <WorkSpace />
      <Slider />
      <Frequently />
      <Testimonials />
      <Project />
      <Footer />
      {/* <Counter /> */}
      {/* <Login />
      <Signup /> */}

    </div>
  );
}

export default App;
