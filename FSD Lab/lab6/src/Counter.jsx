import React,{useState,useEffect} from "react";

const Counter=()=>{
    const [count,setCount] = useState(0);

    useEffect(()=>{
        const fetchInitialCount = ()=>{
            setTimeout(()=>{
                const initialCount = 5;
                setCount(initialCount);
            },2000);
        };
        fetchInitialCount();
    },[]);


    return(
        <div>
            <h2>Counter: {count}</h2>
            <button onClick={()=> setCount(count+1)}>Increment</button>{''}
            <button onClick={()=> setCount(count-1)}>Decrement</button>{''}
            <button onClick={()=> setCount(count*2)}>Double</button>{''}
            <button onClick={()=> setCount(0)}>Reset</button>
        </div>
    );
};

export default Counter;