import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Card from './components/Card.jsx';
import CardList from './components/CardList.jsx'

function App() {
  return (
    <div className="App">
      <CardList
        title="Todo"
        cards={
          [
            <Card title="Lay out columns horizontally" />
          ]
        }
      />
      <CardList
        title="Done"
        cards={
          [
            <Card title="Basic layout styling" />,
            <Card title="Configure Sass" />,
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
