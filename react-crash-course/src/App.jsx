import './App.css'
import Todo from './components/Todo'
import Title from './components/Title';
import Modal from './components/Modal';
import React, { useState } from 'react';

function App ()
{
  // in useState we provide the default value that we want to set
  // using array destructuring we are taking the first value of useState, that is the 'state' itself
  const [showModal, setShowModal] = useState(false)
  return (
    <div className="App">
      <Title></Title>
      <div>
        <input
          className='py-2 px-10 mx-4 border-2 border-blue-600 rounded-full' type="text"
          onChange={ ( event ) => {
            console.log(event.target.value)
          }}
        />
        <button
          className='px-6 py-2 border-2 border-blue-600 rounded-full'
          onClick={()=>setShowModal(true)}
        >Add Todo</button>
      </div>
      <div className='box-border flex flex-wrap justify-center items-center'>
        <Todo
          title="Complete Frontend Simplified"
          paragraph="Code along with Frontend Simplified step by step"
        ></Todo>
        <Todo
          title="Finish Interview Section"
          paragraph="Finish every interview question in the next 6 months"
        ></Todo>
        <Todo
          title="Land a $100K Job"
          paragraph="Apply to atleast 100 Jobs"
        ></Todo>
      </div>
      {showModal && <Modal title="Are you sure about that buddy???"></Modal>}
    </div>
  );
}

export default App;