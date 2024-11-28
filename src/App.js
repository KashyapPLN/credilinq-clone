import './App.css';
import icon from './assets/logo.svg'
import Form from './Components/Form';

function App() {
  return (
    <div className="App">
     <div className='header'>
      <img src = {icon} />
      <p className='sme-health'>SME HealthCheck - Get Started</p>
     </div>
  <Form/>
  <div className='footer'></div>
    </div>
  );
}

export default App;
