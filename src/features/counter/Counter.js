import { useSelector,useDispatch } from "react-redux";
import { increment,decrement, incrementBy, reset } from "./counterSlice";
import { useState } from "react";

const Counter=()=>{

    const count = useSelector((state)=>state.counter.count);
    const dispatch = useDispatch();

    const [amount,setAmount] = useState(0);

    const addValue = Number(amount)|| 0;

    const resetAll = () =>{
        setAmount(0);
        dispatch(reset());
    }

    return (
        <div>
            <p>{count}</p>
            <button onClick={()=>dispatch(increment())}>+</button>
            <button onClick={()=>dispatch(decrement())}>-</button>
            <div>
                <input type="text" value={amount} onChange={(event)=>{setAmount(event.target.value)}}></input>
                <button onClick={()=>dispatch(incrementBy(addValue))}>Add Amount</button>
            </div>
            <button onClick={resetAll}>Reset</button>
        </div>
    );
}

export default Counter;