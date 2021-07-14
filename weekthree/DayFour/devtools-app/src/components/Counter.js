import React,{useState, useSelector, useDispatch} from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
    
    return (
        <div>
          <p>Clicks:{count}</p>
          <button onClick={()=> setCount(count+1)}>+</button>
          <button onClick={()=> setCount(count-1)}>-</button>
          <button onClick={()=> setCount(count)}>Reset</button>
          </div>
    )
}

export default Counter
