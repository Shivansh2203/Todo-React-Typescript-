import { FaCheckCircle, FaTrash } from "react-icons/fa";
type TodoProp = {
  todos: {
    id: number;
    text: string;
    completed: boolean;
  };

  completeTodo: (id: number)=> void;
  deleteTodo: (id: number) => void;
};

const Todo = ({ todos,completeTodo,deleteTodo}:TodoProp) => {
  return (
    <div className=" p-2 m-2 rounded-md flex justify-between items-center" style={{ backgroundColor: '#A28089' }}>
      <p className={`${todos.completed ===true ?"line-through  decoration-white" : ""}`}>{todos.text}</p>
      <div className="flex items-center gap-2 cursor-pointer">
        <FaCheckCircle className="hover:text-gray-400" onClick={() => 
            completeTodo(todos.id)
          }/>
        <FaTrash className="hover:text-gray-400" onClick={() => deleteTodo(todos.id)}/>
      </div>
    </div>
  );
};

export default Todo;
