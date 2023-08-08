//  import React from "react";
//  import ReactDom from "react-dom";

//  const name= "Sjit";
//  const currdate= new Date().toLocaleDateString();
//  const time= new Date().toLocaleTimeString();

//  ReactDom.render(
//  <> <h1>This is {name}</h1>
//  <p>Current date is {currdate}</p>
//  <p>Current time is {time}</p>

//  </>
//     ,document.getElementById("root")
// // // );

// import React from "react";
// import ReactDom from "react-dom";
// import './index.css'

// ReactDom.render(
//     <>
//     <h1 contentEditable="true">Hii this is sjit</h1>
    
//   <img src="" alt="" className="img" />
//     </>
//   ,document.getElementById("root")
// );

// import React from 'react'
// import ReactDom from"react-dom";
// import './index.css';

// let Time= new Date();
// Time = Time.getHours();
// var greet = "";

// if(Time < 12 && Time>= 1){
//   var greet = "Good Morning";
// }
// else if(Time>= 1 && Time< 19){
//     var greet= "Good Afternoon";
// }
// else{
//     var greet ="Good Night"
// }

// ReactDom.render
// ( 
//      <>
//     <h1 className="heading">Hii , {greet}</h1>
//     </>,
//     document.getElementById("root")

// );



 import React from 'react';
 import ReactDom from 'react-dom';
 import Todo from './todo';
 import './index.css';


 ReactDom.render
 (
   <>

     <Todo/>
     </>, document.getElementById('root')
 );