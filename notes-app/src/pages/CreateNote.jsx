import React, { useState } from 'react';
import {BsFillArrowLeftCircleFill} from 'react-icons/bs'
import {v4 as uuid} from 'uuid';
import useCreateDate from '../commponents/useCreateDate';
import { useNavigate } from 'react-router-dom';




function CreateNote({setNotes}) {
  const [title,setTitle] = useState('');
  const [details,setDetails] = useState('');
  const date = useCreateDate();
  const navigate = useNavigate(); 

  const handleSubmit = (e) =>{
    e.preventDefault();

    if(title && details)
    {
      const note = {id:uuid(),title,details,date}
      // console.log(note);
      setNotes(prevNotes => [note,...prevNotes]);
      navigate('/');
    }
  }
  return (
    <section>
      <header className="create-note__header">
        <a href="/" className="btn">
          <BsFillArrowLeftCircleFill/>
        </a>
        <button className="btn lg primary" onClick={handleSubmit}>Save</button>
      </header>
      <form className="create-note__form" onSubmit={handleSubmit}>
        <input type="text" placeholder='Title' value={title} onChange={(e)=>setTitle(e.target.value)} autoFocus/>
        <textarea name="" id="" rows="28" placeholder='Note details...' value={details} 
        onChange={(e)=>setDetails(e.target.value)}></textarea>
      </form>
    </section>
  );
}

export default CreateNote;
