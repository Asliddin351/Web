import React, {useState} from 'react';
import '../../Sceens/components/counter.css';
function Counter() {
    const [count, setCount] = useState(0);

  return (
    <div className='container'>
        <div className="wrapper">
        <button className="btn" onClick={()=>{
            if(count <= 0) setCount(count) 
            else setCount(count - 1)} }>-</button>
        <p>{count}</p>
        <button className="btn" onClick={()=>setCount(count + 1) }>+</button>
        </div>
    </div>
  );
}

export default Counter;

































// class Counter extends Component {

//     constructor(){
//         super();
//         this.state = {
//             count: 0
//         }
//     }
//     render(){
//         const {count} = this.state;
//         const increment=()=>{
//             this.setState({
//                 count: count + 1
//             });
//         }
//         const decrement=()=>{
//             if(count <= 0){
//                 this.setState({
//                     count
//                 })
//             }else{
//                 this.setState({
//                     count: count-1
//                 });
//             }
//         }

//         return(
//          <div className='container'>
//              <div className='wrapper'>
//                 <button className='btn' onClick={increment}>+</button>
//                 <p>{count}</p>
//                 <button className='btn' onClick={decrement}>-</button>
//              </div>
//          </div>   
//         );
//     }
// }

