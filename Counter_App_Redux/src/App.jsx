import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount } from './redux/features/counterSlice';

function App() {

  const dispatch = useDispatch();
  const count = useSelector((state)=>state.counter.value);
  const [num, setNum] = useState(0)

  return (
    <div>

      <div className='h-100 flex items-center justify-center gap-5 text-2xl'>
      
      <button className='h-6 w-6 flex items-center justify-center border rounded-sm cursor-pointer'
        onClick={()=>{dispatch(decrement())}}
      >-</button>

      <h1>{count}</h1>
      
      <button className='h-6 w-6 flex items-center justify-center border rounded-sm cursor-pointer'
        onClick={()=>{dispatch(increment())}}
      >+</button>

    </div>

    <div className='h-50 bg-amber-100 flex items-center justify-center '>
      <input 
        className='flex flex-col justify-center border rounded-sm cursor-pointer'
        value={num}
        type="text" 
        onChange={(e)=>setNum(Number(e.target.value))}
      />
      <button className='h-6 w-6 border rounded-sm cursor-pointer'
        onClick={()=>{dispatch(incrementByAmount(num))}}
      >+</button>
    </div>

    </div>
  )
}

export default App