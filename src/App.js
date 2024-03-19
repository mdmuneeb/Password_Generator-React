import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { UC, LC, NC, SC } from './data/passchar'



function App() {

  const [upperCase, setUpperCase] = useState(false);
  const [lowerCase, setLowerCase] = useState(false);
  const [number, setNumber] = useState(false);
  const [symbol, setSymbol] = useState(false);
  const [passLength, setPassLength] = useState(10);
  const [showPass, setShowPass] = useState('');

  let createPass = () =>
  {
    let finalPAss = ''
    if (upperCase || lowerCase || number || symbol )
    {
      let char = ''
      if (upperCase) char+=UC; 
      if (lowerCase) char+=LC; 
      if (number) char+=NC; 
      if (symbol) char+=SC; 
      console.log(char);
      for(let i =0; i<passLength; i++)
      {
        finalPAss += char.charAt(Math.floor(Math.random()*char.length))
        console.log(finalPAss, finalPAss.length);
        setShowPass(finalPAss)
      }
    }
    else
    {
      toast.warn("Plz do check any one of them")
    }
  }

  let clear = () =>
  {
    setShowPass('');
    setUpperCase(false);
    setLowerCase(false);
    setNumber(false);
    setSymbol(false);
  }

  let copy = () =>
  {
    if (showPass)
    {
      navigator.clipboard.writeText(showPass);
      toast.success("Copied successfully")
    }
  }


  return (
    
    <>
    <div className='passwordBox'>
      <h3 className='header'>Password Generator</h3>
      <span className='Gsvg' onClick={clear}>
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
      </span>
      <div className='passwordBoxin'>
        <input type='text' readOnly value={showPass}/>  
        <button onClick={copy}>Copy</button>
      </div>

      <div className='passlength'>
        <label>Password Length</label>
        <input type='number' max={20} min={10} value={passLength} onChange={(event) => {setPassLength(event.target.value)}}/>
      </div>
      <div className='passlength'>
        <label>Including Upper Case Letters</label>
        <input type='checkbox' checked={upperCase} onChange={() => setUpperCase(!upperCase)}/>
      </div>
      <div className='passlength'>
        <label>Including Lower Case Letters</label>
        <input type='checkbox' checked={lowerCase} onChange={() => setLowerCase(!lowerCase)}/>
      </div>
      <div className='passlength'>
        <label>Including numbers</label>
        <input type='checkbox' checked={number} onChange={() => setNumber(!number)}/>
      </div>
      <div className='passlength'>
        <label>Including symbols</label>
        <input type='checkbox' checked={symbol} onChange={() => setSymbol(!symbol)}/>
      </div>
      <div className='Gbutton'>
        <button onClick={createPass}>
          Generate Password
        </button>
      </div>
        <ToastContainer />
    </div>
    </>
  );
}

export default App;
