import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Title from './components/Title';
import Formulario from './components/Formulario';

const App = () => {
  return (
    <div className="container">
      <Title />
      <Formulario />
    </div>
  );
};

export default App;
