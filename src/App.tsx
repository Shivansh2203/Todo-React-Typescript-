import { useState } from "react";
import Todo from "./Components/Todo";

type Todos = {
  id: number;
  text: string;
  completed: boolean;
};

function App() {
  const [input, setInput] = useState<string>("");
  const [todo, setTodo] = useState<Todos[]>([]);

  const addTodo = () => {
    if (!input.trim()) return;
    const newTodo = {
      id: Date.now(),
      text: input,
      completed: false,
    };
    setTodo((prevTodo) => [...prevTodo, newTodo]);
    setInput("");
  };

  const completeTodo = (id: number) => {
    setTodo(
      todo.map((todos) =>
        todos.id === id ? { ...todos, completed: true } : todos
      )
    );
  };

  const deleteTodo = (id: number) => {
  setTodo((prev) => prev.filter((t) => t.id !== id));
};


  return (
    <>
      <div className="p-2 min-h-screen flex justify-center items-center" style={{ backgroundColor: '#A28089' }}>

        <div className="max-w-[500px] w-[90%] p-4 rounded-2xl shadow-md" style={{ backgroundColor: '#51e2f5' }}>
          <h1 className="text-center text-2xl  hover:text-white">Todos for the day</h1>
          <div className="flex gap-2 justify-center my-8">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Add Todo"
              className="flex-[3] border-2 outline-none border-gray-600 p-2  placeholder-gray-500 rounded-3xl focus:border-white"
            />
            <button
              onClick={addTodo}
              className="flex-[0.5] cursor-pointer border-gray-600 border-2 rounded-3xl p-1 bg-[#A28089] hover:bg-[#9df9ef] text-white hover:text-black" 
            >
              Add
            </button>
          </div>
          <h1 className="text-center text-xl font-bold hover:text-white">Todos</h1>
          {todo.map((todos) => {
            return (
             <Todo key={todos.id} todos={todos} completeTodo={completeTodo} deleteTodo={deleteTodo} />

            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
