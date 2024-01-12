import { useState, useMemo } from "react";
import Todo from "./Todo";
const Mytodos=()=>{
const [count, setCount] = useState(0);
const [text,setText]=useState("")
const [items,setItems]=useState([])
const [todos, setTodos] = useState([]);
const calculation = useMemo(() => expensiveCalculation(count), [count]);
const increment = () => {
  setCount((c) => c + 1);
};
const addTodo = () => {
  setTodos((t) => [...t, "New Todo"]);
};
const addItems=()=>{
    setItems((prev)=>[...prev,text])
    setText("")
}
return (
  <div>
    <div>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
      <button onClick={addTodo}>Add Todo</button>
    </div>
    <hr />
    <div>
      Count: {count}
      <button onClick={increment}>+</button>
      <h2>Expensive Calculation</h2>
      {calculation}
    </div>
    <hr/>
    <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
    <button onClick={addItems}>Add skills</button>
    <Todo items={items}/>
  </div>
)}


const expensiveCalculation = (num) => {
for (let i = 0; i < 1000000000; i++) {
  num += 1;
}
return num;
};
export default Mytodos;