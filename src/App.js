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
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Job</th>
          </tr>
        </thead>
        <tbody>
          {people.map(function (person) {
            return (
              <tr>
                <td>{person.id}</td>
                <td>{person.name}</td>
                <td>{person.age}</td>
                <td>{person.job}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
