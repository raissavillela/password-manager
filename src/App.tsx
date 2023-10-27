import React, { useState } from 'react';
import './App.css';
import Title from './components/Title';
import Form from './components/Form';

function App() {
  const [showForm, setFormVisible] = useState(false);

  const changeForm = () => {
    setFormVisible(!showForm);
  };

  return (
    <div>
      <Title />
      {showForm ? (
        <Form onCancel={ changeForm } />
      ) : (
        <button onClick={ changeForm }>Cadastrar nova senha</button>
      )}
    </div>
  );
}

export default App;
