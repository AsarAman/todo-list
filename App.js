import React from "react";

import Alert from "./Alert";
import List from "./List";
import { useGlobalContext } from "./context";

function App() {
  const {name,setName,handleSubmit,editing} = useGlobalContext();
  
 
 
  return (
    <div className="mt-8 p-3 sm:p-6">
      <h1 className="text-indigo-500 font-bold  text-2xl">Todo List</h1>
      <form className="mt-8 flex  " onSubmit={handleSubmit} >
        <input  className="border border-indigo-400 outline-none rounded-xl px-2 " placeholder="Enter Todo" value={name} onChange={(e)=> setName(e.target.value)}>
        </input>
        <button className="bg-indigo-600 text-white px-3 py-1 rounded-xl ml-3 " type="submit">{editing?'Edit':'Submit'}</button>
      </form>
      <div>
      <Alert/>
      <List/>
      </div>
    </div>
  
  );
}

export default App;
