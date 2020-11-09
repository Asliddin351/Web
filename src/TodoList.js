import React, { Component } from 'react';
import TodoItems from './TodoItems';
import './style.css'

class TodoList extends Component {
    constructor(props){
        super(props);

        this.state = {
            items: []
        };

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    addItem(e){
        let itemArray = this.state.items;

        if(this._inputElement.value !== ''){
            itemArray.unshift({
                text: this._inputElement.value,
                key: Date.now()
            });

            this.setState({
                items: itemArray
            });

            this._inputElement.value = '';
        }

        e.preventDefault();
    }

    deleteItem(key){
        let filteredItems = this.state.items.filter(function(item){
            return (item.key !== key);
        })

        this.setState({
            items : filteredItems
        })
    }
    render(){
        return (
            <>
                <div className="container">
                    <form onSubmit={this.addItem}>
                        <input 
                        type="text"
                        className="todoInput"
                        ref={(a)=>this._inputElement = a}
                        placeholder="Add task"
                        />
    
                        <button
                        type='submit'
                        className="btnTask"
                        >add</button> 
                    </form>           
                </div>
                <TodoItems entries={this.state.items}
                delate = {this.delateItem}
                />
            </>
        );
    }
}

export default TodoList;
