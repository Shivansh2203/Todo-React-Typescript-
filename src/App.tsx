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
      <div className="bg-purple-900 p-2 min-h-screen flex justify-center items-center">
        <div className="max-w-[500px] w-[90%] bg-slate-900 p-4 rounded-2xl shadow-md">
          <h1 className="text-center text-white text-2xl">Todos for the day</h1>
          <div className="flex gap-2 justify-center my-8">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Add Todo"
              className="flex-[3] border-2 outline-none border-gray-500 p-2 text-white placeholder-gray-500 rounded-3xl focus:border-white"
            />
            <button
              onClick={addTodo}
              className="flex-[0.5] bg-purple-800 cursor-pointer border-gray-500 border-2 rounded-3xl p-1 hover:bg-purple-900 text-white"
            >
              Add
            </button>
          </div>
          <h1 className="text-center text-white text-xl font-bold">Todos</h1>
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
