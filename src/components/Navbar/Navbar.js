import { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';


function Navbar() {
  const naviagte = useNavigate();
  const [inputValue, setInputValue] = useState('');

  const changeHandler = (value) => {
    setInputValue(value);
  }
  const submitHandler = (e) => {
    e.preventDefault();
    setInputValue("");
    naviagte(`/search/${inputValue}?`);
  }

  return (
    <div className='navbar'>
      <Link to={'/'} className='logo'><h1 style={{"color":"red"}}>tube</h1></Link>
      <form className='search-feild' onSubmit={(e)=>submitHandler(e)}>
        <input type="text" placeholder='Seach here...' className='search' onChange={(e)=>{changeHandler(e.target.value)}} value={inputValue}/>
        <button className='btn-search' type='submit'><span><i className="fi fi-bs-search"></i></span></button>
      </form>
      
    </div>
  )
}

export default Navbar
