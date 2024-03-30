//import logo from './logo.svg';
import './App.css';
import { Student } from './Components/Student';
function App() {
  return (

    <div>
      <ul>
        <li>item 1</li>
        <li>item 2</li>
        <li>item 3</li>
      </ul>

      <img src="C:\REACT_FULLCOURSE\REACT_TRY\tutorjoes\sairam\public\logo512.png" height="300" width="300" align="center"/>
        
      <form className='form'>
        <div className='input'>
        <label>Name</label><br/>
        <input type="text" name="fname" placeholder='Enter your name' size="15" maxsize="20"/></div><br/><br/>
        
        <div className='input'>
        <label>Password</label><br/>
        <input type="password" name="password"/></div><br/><br/>
        
        <div className='input'>
        <label>Gender</label><br/>
        </div>
 



      </form>

      <h1>SAI RAM HELP ME</h1>
      <Student name="sairam" age={35} ismarried={true}/>
    </div>
    /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/
  );
}

export default App;
