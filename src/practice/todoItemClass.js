import React from 'react';
import ContactCard from './contactCard';
//import ContactCard from './contactCard';
import schoolData from './schoolData';

class TodoItemClass extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: schoolData
        }
    }
    render() {
        const dataItems = this.state.todos.map(item => <ContactCard key={item.id} item={item} />)
        return (
            <div>
                <label style={{ textDecoration: "underline" }}>To do list</label>
                {dataItems}
            </div>
        )
    }
}
export default TodoItemClass;