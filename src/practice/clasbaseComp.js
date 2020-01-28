// 1. Convert all 3 components to be class-based
// 2. Fix the small bug
// https://scrimba.com/p/p4Mrt9/cQnMDHD TO LEARN ABOUT CLASSES

import React from 'react';
 class App1 extends React.Component {
     constructor(){
         super()
         this.state ={
            isLoggedIn: true
        }
    }
    render(){
        
    return (
        <div>
            <h1>You are currently logged {this.state.isLoggedIn? "in" : "out"}</h1>
        </div>
    )
    }
    //          answer: "yes"
    //      }
    //  }
    //  render() { 
    //      return(
    //          <div>
    //             <h1>Is state important to know? {this.state.answer}</h1>
    //          </div>
    //      )

    //  }
 }

 
//  render(){
//      return(
//          <div>
//          <header username = "Parveen">

//              <h1>hello</h1>
//              <Greeting />
//          </header>
//          </div>
//      )
//  }
// }
// // passing props
// class Header extends React.Component {
//     render(){
//         return(
//             <header>
//                 <p> welcome, {this.props.username}</p>
//             </header>
//         )
//     }
// }
// // 3rd part of class
// class Greeting extends React.Component{
//     render(){
//          const date = new Date()
//         const hours = date.getHours()
//         let timeOfDay
        
//         if (hours < 12) {
//             timeOfDay = "morning"
//         } else if (hours >= 12 && hours < 17) {
//             timeOfDay = "afternoon"
//         } else {
//             timeOfDay = "night"
//         }
//         return(
//             <h1> good {timeOfDay} to you, madam !</h1>
//         )
//     }
// }

export default App1;