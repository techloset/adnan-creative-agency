import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, reset } from '../../redux/slice/CounterSlicer'

function Counter() {

    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()




    return (
        <div className='bg-red-700 flex items-center gap-8 '>
            <div className='bg-blue-500 w-11 h-11 flex justify-center items-center' onClick={() => dispatch(decrement())}>-</div>
            <h1>{count}</h1>
            <div className='bg-blue-500 w-11 h-11 flex justify-center items-center' onClick={() => dispatch(increment())}>+</div>
            <div className='bg-blue-500 w-24 h-14 flex justify-center items-center' onClick={() => dispatch(reset(0))}>Reset</div>
        </div>
    )
}

export default Counter

