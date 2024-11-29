import { Route, Routes } from 'react-router-dom';
import './App.css';
import icon from './assets/logo.svg'
import Form from './Components/Form';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import FormsTable from './Components/FormsTable';

function App() {

  const theme = createTheme({
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "gray", // Default border color
              },
              "&.Mui-focused fieldset": {
                borderColor: "purple", // Focus border color
              },
            },
            "& .MuiInputLabel-root": {
              color: "gray", // Default label color
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "purple", // Focus label color
            },
          },
        },
      },
      MuiCheckbox: {
        styleOverrides: {
          root: {
            color: "gray", // Default checkbox color
            "&.Mui-checked": {
              color: "purple", // Purple color when checked
            },
          },
        },
      },
    },
  });
  
  
  return (  
    <ThemeProvider theme={theme}>
    <div className="App">   
  <Routes> 
    <Route path='/' element={<Home/>}/>    
    <Route path='/entries' element={<FormsTable/>}/>
  </Routes>
  </div>
  </ThemeProvider>
  );
}

function Home(){
  return(
<div>
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
