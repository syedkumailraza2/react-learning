import { useEffect, useState } from "react"

const UseEffectHook = () =>{
    const [time, setTime] = useState(0);

    useEffect(()=>{
        setTimeout(()=>{
            setTime(time + 1);
        },1000)
    })

    const reset = ()=>{
        setTime(0)
    }
    return (
        <>
        <h1>Time: {time}</h1>
        <button onClick={reset}>Reset</button>
        </>
    )
}

export default UseEffectHook;