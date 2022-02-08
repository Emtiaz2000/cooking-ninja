
import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';

import './SearchBar.css'

export default function SearchBar() {
    const redirect = useNavigate()
    const [term,setTerm] = useState('');

    const handleSubmit = (e)=>{
        e.preventDefault()
        setTerm('')
        redirect(`/search?q=${term}`)
        
    }
  return <div className='searchbar'> 
      <form onSubmit={(e)=>handleSubmit(e)}>
          <label htmlFor='searchBar'>Search</label>
          <input type='text' onChange={(e)=> setTerm(e.target.value)} value={term} />
      </form>
  </div>;
}
