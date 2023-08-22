import { useEffect, useState } from "react";
import ToDo from "./components/ToDo";
import { addToDo, getAllToDo, updateToDo, deleteToDo } from "./utils/HandleApi";

export default function App() {

  const [toDo, setToDo] = useState([])
  const [text, setText] = useState("")
  const [isUpdating, setIsUpdating] = useState(false)
  const [toDoId, setToDoId] = useState("")

  useEffect(() => {
    getAllToDo(setToDo)
  }, [])

  const updateMode = (_id, text) => {
    setIsUpdating(true)
    setText(text)
    setToDoId(_id)
  }

  return (
    <div className="max-w-xl m-auto py-0 px-1">
      <div className="mx-4">{/*container*/}
        <h1 className="mt-8 text-center text-4xl text-[#34d399] mb-8"> To Do App</h1>
        <div className="mt-1 xl:flex lg:flex gap-8 justify-center mb-4 flex grid-cols-1 mx-4">
          <input
            type="text"
            placeholder="Digite Aqui..."
            className="border-0 outline-0 w-96 border-b border-black rounded px-2 md:h-16 h-12"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <div
            className="bg-[#34d399] text-white px-6 py-5 cursor-pointer rounded-xl fixed md:static xl:static bottom-0 md:w-32 w-10/12 z-10 mx-auto text-center mb-4 shadow-black shadow-lg"
            onClick={
              isUpdating ?
                () => updateToDo(toDoId, text, setToDo, setText, setIsUpdating) :
                () => addToDo(text, setText, setToDo)}
          >
            {isUpdating ? "Atualizar" : "Adicionar"}
          </div>
        </div>
        <div className="text">
          {toDo.map((item) =>
            <ToDo
              key={item._id}
              text={item.text}
              updateMode={() => updateMode(item._id, item.text)}
              deleteToDo={() => deleteToDo(item._id, setToDo)}
            />
          )}
        </div>
      </div>
    </div>
  );
};
