import React from 'react';
import Footer from './footer';
import Header from './header';
import './header.css';
import TodoItem from './todoItem'
import Joke from './joke';
import jokeData from './jokeData';
import TodoItemClass from './todoItemClass';
import TodoList from "./lifrcycle";
import Form from "./form";
import Header1 from "./meme-project/header1";
import Meme from "./meme-project/memeGen";
import UseState from "./hooks/useState"

// render a unorderd list put this code in index.js under ReactDOM.render(
//     <ul>
//     <li>1</li>
//     <li>2</li>
//     <li>3</li>
//   </ul>,
// )

// write a seperate functional component
function MyApp() {
    const jokeComponents = jokeData.map(joke => <Joke key ={joke.id} question = {joke.question} punchLine ={joke.punchLine} />)
    return (
        <>
        <Header />
        <h1 style= {{color: "coral", textDecoration: 'italic'}}>My name is Parveen Kaur</h1>
        <p> I am a Full Stack Developer</p>
      <ul>
        <li>I know HTML</li>
        <li>I know CSS</li>
        <li>I know JS</li>
        <li>I am familiar with react</li>
      </ul>
      {/* i want to map throungh the jokeData to get my all jokes from another file for this i need to creat a fnctn JOKECOMPONENTS */}
      <div> {jokeComponents}</div>
      <TodoItem />
      <Footer />
      <Form />
      <div>
        <TodoItemClass />
        <TodoList />
        <Header1 />
        <Meme />
        <UseState />
      </div>
      </>
    )
  }


  export default MyApp;
