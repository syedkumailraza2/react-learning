const ReactEvent = ()=>{
    let ispressed = false
    let shoot = () =>{
        alert("Dhishkyao !!!") 
    }
    return (
        <>
        <button onClick={shoot}>Shoot</button>
        </>
    )
}
export { ReactEvent };