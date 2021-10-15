import React from 'react';
import Card from './components/Card';

function App() {
  return (
    <div className="container">
      <div className="grid">
        <Card title="First Service Title" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi faucibus nunc at ligula ullamcorper aliquet. Mauris ullamcorper arcu in tortor."/>
        <Card title="Second Service Title" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi faucibus nunc at ligula ullamcorper aliquet. Mauris ullamcorper arcu in tortor."/>
        <Card title="Third Service Title" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi faucibus nunc at ligula ullamcorper aliquet. Mauris ullamcorper arcu in tortor."/>
      </div>
    </div>
  );
}

export default App;
