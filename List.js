import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa';
import { useGlobalContext } from './context'

const List = () => {
    const {list,clearTodos,deleteTodo,editTodo} = useGlobalContext();
    
  return (
    <main>
        {list?.length >0 &&(
        list.map((item)=>{
            const {id, title} =item
            return (
                
            <article key={id} className='mt-5'>
                <div className='flex items-center justify-between bg-gray-200 py-1 px-1 rounded-xl w-72'>
                    <p>{title}</p>
                    <div>
                        <button className='mr-4' onClick={()=> editTodo(id)}>
                            <FaEdit/>
                        </button>
                        <button onClick={()=> deleteTodo(id)}>
                        <FaTrash/>
                        </button>
                    </div>
                </div>
                
            
            

            </article>
            
            
            
            
            
            
            )
        
            
            
        })
        )
        
        
        
        
    }
    {list?.length>0 &&(
        <button onClick={clearTodos} className='bg-indigo-500 text-white rounded-xl px-3 py-1 mt-5 ml-24'>Clear All</button>
    )}
        
        
    </main>
  )
}

export default List