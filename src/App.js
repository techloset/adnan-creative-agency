import logo from './logo.svg';
import './App.css';
import Header from './component/header/Header';
import OurServices from './component/ourServices/OurServices';
import Documentation from './component/documentation/Documentation';
import WorkSpace from './component/workSpace/WorkSpace';
import Customer from './component/customer /Customer ';
import Footer from './component/footer/Footer';

function App() {
  return (
    <div>
      <Header />
      <OurServices />
      <Documentation />
      <Customer />
      <WorkSpace />
      <Footer/>
    </div>
  );
}

export default App;
