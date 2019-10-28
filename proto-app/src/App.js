import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/Card.jsx';
import CardList from './components/CardList.jsx'

function App() {
  return (
    <div className="App">
      <CardList
        title="Todo"
        cards={
          [
            <Card title="Style the layout" />,
          ]
        }
      />
      <CardList
        title="Done"
        cards={
          [
            <Card title="Test on Linux" />,
            <Card title="Get VS Code up and runnning" />,
            <Card title="Get basic component structure" />,
            <Card title="Publish the codebase" />, 
          ]
        }
      />
    </div>
  );
}

export default App;
