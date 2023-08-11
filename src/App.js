import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import TopBar from './Components/TopBar';
import NavigationBar from './Components/NavigationBar';
import Hero from './Components/Hero';
import KnowMore from './Components/KnowMore';
import OurServices from './Components/OurServices';
import Footer from './Components/Footer';



function App() {
  return (
    <div className="App">
      <TopBar/>
      <NavigationBar/>
     <Hero/>
     <KnowMore/>
     <OurServices/>
     <Footer/>
      
    </div>
  );
}

export default App;
