import React, { useEffect } from 'react'
import { useGlobalContext } from './context'


const Alert = () => {
    const {alert,showAlert,list} = useGlobalContext();
    useEffect(()=>{
        const timeout = setTimeout(()=>{
            showAlert();

        },3000)
        return ()=> clearTimeout(timeout)
    },[list])
    
   
    
    

    
  return (

    <p className='text-indigo-500 mt-4'>{alert.msg}</p>
  )
}

export default Alert