import React from 'react';

export default function About() {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  };

  const cuadroStyle = {
    border: '2px solid #000',
    backgroundColor: '#f0f0f0',
    padding: '20px',
    maxWidth: '500px',
    textAlign: 'center',
  };

  return (
    <div style={containerStyle}>
      <div style={cuadroStyle}>
        <h1>ABOUT</h1>
        <div>
          This webpage is my integration project corresponding to the Module 2 of the Web Full Stack course of Soy Henry.
          <br />
          App made by: Yanwalter Segundo.
        </div>
      </div>
    </div>
  );
}

// export default class About extends React.Component{
//     constructor(props){
//         super(props)
//     }

//     render(){
//         return
//     }
// }