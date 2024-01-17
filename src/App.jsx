import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <form className="font-mono h-screen w-screen bg-slate-950 py-5 px-4 flex flex-col content-center">
        <label className="ml-1 text-xs text-slate-700 font-bold ">Task</label>
        <div className="flex flex-col space-y-2">
        <input type="text" className='rounded bg-transparent border-slate-800 border-2'/>
        <button className='text-slate-300 font-black text-xs py-1 bg-slate-800 rounded opacity-40 border-slate-700 border-t border-l'>Add</button>
        </div>
      </form>
    </>
  )
}

export default App
