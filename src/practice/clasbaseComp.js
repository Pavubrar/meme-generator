// 1. Convert all 3 components to be class-based
// 2. Fix the small bug
// https://scrimba.com/p/p4Mrt9/cQnMDHD TO LEARN ABOUT CLASSES
// https://scrimba.com/g/greacthooks HOOKS
import React from 'react';
import randomcolor from "randomcolor"
import Conditional from "./conditionalRen"
 class App1 extends React.Component {
     constructor(){
         super()
         this.state ={
            isLoggedIn: true,
            color:"",
            isLoading: true
        }
        this.handleClick= this.handleClick.bind(this)
    }
    handleClick () {
//this.setState({isLoggedIn: false, color: randomcolor()} 
this.setState(prevState => {
    return{
        isLoggedIn: !prevState.isLoggedIn,
        color: randomcolor()
    }
})

    }
    componentDidMount(){
setTimeout(() => {
    this.setState({
        isLoading : false
    })
}, 3000);
    }
    // componentDidUpdate(prevProps, prevState){
    //     if(prevState.isLoggedIn !== this.state.isLoggedIn)
    //         const newColor = randomcolor()
    //         this.setState({color:newColor})
    // }
    render(){
    return (
        <div>
            <h1 style= {{color: this.state.color}}>You are currently logged {this.state.isLoggedIn? "in" : "out"}</h1>
            <button onClick={this.handleClick}>Change!</button>
            <div>
            {this.state.isLoading ? <h1>Loading....</h1> : 
            <Conditional />}
        </div>
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

// https://reactjs.org/docs/events.html#supported-events EVENT HANDLER
export default App1;