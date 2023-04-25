import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement ,reset} from '../../redux/slice/CounterSlicer'

export function Counter() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <div>
            <div>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment(5))}
                >
                    Increment
                </button>
                <span>{count}</span>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(reset(0))}
                >
                    reset
                </button>
            </div>
        </div>
    )
}


