import { useState } from "react";

const BasicForm = ()=>{

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");

    const handleForm = (e)=>{
        e.preventDefault();
        console.log("Form submitted");
        console.log("Name: ", name);
        console.log("Email: ", email);
        console.log("Age: ", age);
    }
    return (
        <>
        <form onSubmit={handleForm}>
            <label>Name</label><br />
            <input type="text" value={name} onChange={(e)=> setName(e.target.value)}/><br /><br />
            <label>Email</label><br />
            <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)}/><br /><br />
            <label>Age</label><br />
            <input type="text" value={age} onChange={(e)=> setAge(e.target.value)}/><br /><br /><br />
            <button type="submit">Submit Form</button>
        </form>
        </>
    );
}

export default BasicForm;