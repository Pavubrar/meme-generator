import React, {Component} from "react"

// https://engineering.musefind.com/react-lifecycle-methods-how-and-when-to-use-them-2111a1b692b1
// https://reactjs.org/blog/2018/03/29/react-v-16-3.html#component-lifecycle-changes
// https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch FETCH FUNCTION, https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261

class TodoList extends Component {
    constructor() {
        super()
        this.state = {
            loading: false,
            character: {}
        }
    }
    
    componentDidMount() {         // GET the data I need to correctly display
        this.setState({loading: true})    
        fetch("https://swapi.co/api/people/1")
        .then(response => response.json())
        .then( data => {
            this.setState({
                loading: false,
                character: data
            })
        })
    }
    
    // componentWillReceiveProps(nextProps) {
    //     if (nextProps.whatever !== this.props.whatever) {
    //         // do something important here
    //     }
    // }
    
    // shouldComponentUpdate(nextProps, nextState) {
    //     // return true if want it to update
    //     // return false if not
    // }
    
    // componentWillUnmount() {
    //     // teardown or cleanup your code before your component disappears
    //     // (E.g. remove event listeners)
    // }
    
    render() {
        const text = this.state.loading ? "loading ...." : this.state.character.name 
        return (
            <div>
             <p>{text}</p>
            </div>
        )
    }
}
 export default TodoList;