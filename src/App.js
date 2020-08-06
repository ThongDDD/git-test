import React, { useState } from 'react';
import './App.css';

function App() {
  const [people, setPeople] = useState([
    {id: 1, name: 'David', age: '25', job: 'dev'},
    {id: 2, name: 'Jack', age: '30', job: 'architecture'},
    {id: 3, name: 'John', age: '27', job: 'musician'},
  ])

  return (
    <div className="App">
      <h3>This is my first line of codes in this project</h3>
      <table>
        <thead>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>Job</th>
        </thead>
        <tbody>
          
        </tbody>
      </table>
    </div>
  );
}

export default App;
