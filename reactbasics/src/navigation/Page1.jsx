import { useNavigate } from "react-router-dom";
import Component1 from "../use_context_state_management/component1";

const Page1 = ()=>{
    const navigate = useNavigate()
    const handleNavigation = ()=>{
        navigate('/page2')
    }
    return (
        <>
        <h1>Page 1</h1>
        <button onClick={handleNavigation}>Navigate to Page 2</button>
        <Component1/>
        </>
    );
}

export default Page1;