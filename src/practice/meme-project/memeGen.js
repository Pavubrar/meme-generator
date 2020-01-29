import React, { Component } from 'react'

class MemeGenerator  extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            topText:"",
            bottomText:"",
            randomImg:"http://i.imgflip.com/1bij.jpg",
            allMemeImgs: []
         }
    }
    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
        .then(Response => Response.json())
        .then(Response => {
            const {memes} =Response.data
            this.setState({allMemeImgs: memes})
        })
    }
    handleChange = () =>{
        const {name, value} = event.target
        this.setState({[name]: value})
    }
    
    render() { 
        return ( 
            <form className ="meme-form">
                <input type ="text" name= "topText" placeholder ="Top-Text" value={this.state.topText}
                onChange ={this.handleChange} />
                <input type ="text" name= "bottomText" placeholder ="Bottom-Text" value={this.state.bottomText}
                onChange ={this.handleChange} />
                <button>Gen</button>
            </form>
            <div className="meme">
                <img src ={this.state.randomImg} alt=""/>
                <h2 className="top">{this.topText}</h2>
                <h2 className="bottom">{this.bottomText}</h2>
            </div>
         );
    }
}
 
export default MemeGenerator ;