import './App.css';
import Hero  from './components/Hero/Hero';
import Plans from './components/Plans/Plans';
import Programs from './components/Programs/Programs';
import Reason from './components/Reasons/Reason';
import Testimonials from './components/Testimonials/Testimonials';
import Join from './components/Join/Join';
import Footer from './components/Footer/Footer';

 

function App() {
  return (
    <div className="App">
      <Hero />
      <Programs />
      <Reason/>
      <Plans />
      <Testimonials /> 
      <Join />
      <Footer />
      
    </div>
  );
}

export default App;
