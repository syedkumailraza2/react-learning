import { createContext, useState } from "react";
import { userContext } from "./context";
import Component2 from "./Component2.jsx";

const Component1 = ()=>{
    const [user, setUser] = useState('Raza')
return (
    <userContext.Provider value={user}>
        <h1>Hello {user}! from Component1</h1>
        <Component2/>
    </userContext.Provider>
);
}

export default Component1;