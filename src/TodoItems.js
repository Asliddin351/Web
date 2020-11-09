import React, { Component } from 'react';
import './style.css'

class TodoItems extends Component {
    constructor(props){
        super(props);

        this.createTasks = this.createTasks.bind(this);
    }

    createTasks(item){

    return <li className="item" key={item.key}>{item.text}</li>
 
    }
    delate(key){
        this.props.delate(key);
    }

    render() {
        let todoEnteries = this.props.entries;
        let listItem = todoEnteries.map(this.createTasks);
        return (
            <ul className="list">
                {listItem}
        
            </ul>
        );
    }
}

export default TodoItems;
