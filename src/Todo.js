import React, { Component } from 'react';

class Todo extends Component {
    constructor(props){
        super(props);

        this.state = {
            count: 0,
            text: [],
            readInput: '',
            
        }
        this.inputValue = this.inputValue.bind(this);
        this.onPushTodos = this.onPushTodos.bind(this);
        
    }
    inputValue(e){
        this.setState({
            readInput: e.target.value,
        });
        
        e.preventDefault();
    }
    onPushTodos(e){
        this.setState({
            count: this.state.count + 1,
            text: this.state.readInput
           
        })
    }

    render() {
        return (
            <div className="container">

                <input 
                 type="text"
                 className="todoInput"
                 onChange={this.inputValue}
                 
                 />

                <button
                 type='button'
                 onClick={this.onPushTodos}
                >add</button>

                <p>{this.state.text}</p>
                
 
            </div>
        );
    }
}

export default Todo;



























// import React, { Component } from 'react';
// import Header from './Header';
// import TodoList from './TodoList';

// class Todo extends Component {
//     state = {
//         tasks: ['task 1', 'task 2', 'task 3'],
//         delate: ()=>{
//             this.state.tasks = null
//         }
//     };
//     render() {
//         return (
//             <div className="card frame">
//                 <Header numTodos = {this.state.tasks.length}/>
//                 <TodoList tasks = {this.state.tasks} />
//             </div>
//         );
//     }
// }

// export default Todo;
