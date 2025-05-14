import { useState } from "react"

const UserStatehook = ()=>{
    const [state, setState] = useState("Initial State");
    return (
        <>
        <h1>The of this component is {state}</h1>
        <button onClick={()=> setState("Updated State")}>Change State</button>
        </>
    )
}

export default UserStatehook;