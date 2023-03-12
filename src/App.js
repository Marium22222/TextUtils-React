import React,{ useState } from 'react';
import Alert from './Alert';
import './Appa.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm1 from './components/TextForm1';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";


function App() {

  const [color1,setColor1]=useState('green');
  const [color2,setColor2]=useState('red');
  const [color3,setColor3]=useState('yellow');
  const toggler1=()=>
  {
if(color1==='green'){
  setColor1('white');
   document.body.style.backgroundColor='green';
  }
  else{
    setColor1('green');
    document.body.style.backgroundColor='white';
  }
}
const toggler2=()=>
  {
if(color2==='red'){
  setColor2('white');
   document.body.style.backgroundColor='red';
  }
  else{

    setColor2('red');
    document.body.style.backgroundColor='white';
    
  }
}
const toggler3=()=>
  {
if(color3==='yellow'){
  setColor3('white');
   document.body.style.backgroundColor='yellow';
  }
  else{

    setColor3('yellow');
    document.body.style.backgroundColor='white';
    
  }
}
  const[mode,setMode]=useState('dark'); //whether dark mode is enabled or not.
  const[alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
     setAlert(null);
  },3000);
  }
  const toggleMode=()=>{
    if(mode==='light')
    {
    setMode('dark');
  document.body.style.backgroundColor='#042743';
  showAlert("Dark mode has been enabled","success");
document.title='TextUtils -DarkMode';
// setInterval(()=>{
//   document.title='TextUtils is amazing'
// },2000);
// setInterval(()=>{
// document.title='Install TextUtils now'
// },1500)
    }
  
  else{
    setMode('light');
    document.body.style.backgroundColor='white';
    showAlert("Light mode has been enabled","success");
    document.title='TextUtils -LightMode';
  }}
  return (
    <>
    {/* <Router> */}
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} aboutText={"About Us"} toggler1={toggler1}  toggler2={toggler2} toggler3={toggler3}/>
<Alert alert={alert}/>
<div className="container my-3">
{/* <Routes> */}
  {/* exact does full matching otherwise react router does partial matching.
  /users --> component1
      /users/Home --> component2 */}
{/* <Route exact path="/" element={<component />} /> */}
          {/* <Route exact path="/about" element={  <About />}/> */}
          {/* <Route  exact path="/" element={ />}/> */}
          <TextForm1 heading="Enter Text" mode={mode} showAlert={showAlert}/>
        {/* </Routes> */}

{/* <About/> */}
</div>
{/* </Router> */}

    </>
  );
}

export default App;
