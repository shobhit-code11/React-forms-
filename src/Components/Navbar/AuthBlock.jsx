import React from 'react'

const AuthBlock = () => {
  return (
    <div className='authblock flex  items-center justify-end basis-[80%] px-8 gap-5  '>
       <button className='px-4 border-none bg-sky-400 h-9 rounded-sm text-slate-200 '>Register</button>
      <button className='px-4  border-none bg-green-600 h-9 rounded-sm text-slate-200 '>Login</button>
     
    </div>
  )
}

export default AuthBlock