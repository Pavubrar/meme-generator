import React from 'react';
import ContactCard from './contactCard';
import schoolData from './schoolData';

class TodoItemClass extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: schoolData
        }
    }
    handleChange = (id) =>{
this.setState(prevState => {
    const updatedTodos = prevState.todos.map(todo => {
        if(todo.id === id){
            //todo.completed = !todo.completed (it will change the prev state) so we can modify it like ...
            return {
                ...todo, // spread notation will get all the properties from todo.
                completed: !todo.completed
            }
        }
        return  todo
    })
    return{
        todos: updatedTodos
    }
})
    }
    render() {
        const dataItems = this.state.todos.map(item => <ContactCard key={item.id} item={item}
        handleChange = {this.handleChange}
        />)
        return (
            <div>
                <label style={{ textDecoration: "underline" }}>To do list</label>
                {dataItems}
            </div>
        )
    }
}
export default TodoItemClass;