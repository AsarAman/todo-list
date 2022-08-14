import React, { useState,useContext } from "react";



const AppContext = React.createContext();




const AppProvider = ({children}) =>{
const [name, setName] = useState('')
const [list, setList] = useState([])
const [editing,setEditing] = useState(false)
const [editId, setEditId] = useState(null)
const [alert, setAlert] = useState({show:false, msg:''})

const handleSubmit = (e) =>{
    e.preventDefault()
    if(!name){
        showAlert(true, 'Please Enter Todo')

    }else if(name && editing){
        
      setList(
        list.map((item) => {
          if (item.id === editId) {
            return {  title: name };
          }
          return item;
        })
      );
      setName('');
      setEditId(null);
      setEditing(false);
      showAlert(true, 'value changed');
      


    }
    else{
    showAlert(true, 'Todo Added')
    const newTodo = {id: new Date().getTime().toString(), title:name}
    setList([...list, newTodo]) 
    setName('')
    }
}
const clearTodos = () =>{
    showAlert(true, 'Empty List')
    setList([])

}
const deleteTodo = (id) =>{
    showAlert(true, 'Todo Deleted')
    setList(list.filter((item)=> item.id !== id))
}
const editTodo = (id) =>{
    const specificItem = list.find((item)=> item.id === id)
    setEditing(true);
    setEditId(id);
    setName(specificItem.title)
}
const showAlert = (show=false, msg= '')=>{
    setAlert({show,msg})
}





    return <AppContext.Provider value={{name,setName,handleSubmit,list, clearTodos, deleteTodo,alert,showAlert,editTodo,editing}}>{children}</AppContext.Provider>

}

export const useGlobalContext = () =>{
   return useContext(AppContext)
}
export {AppContext,AppProvider}