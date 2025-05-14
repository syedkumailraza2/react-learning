import { useNavigate } from "react-router-dom";

const Page2 = ()=>{
    const navigate = useNavigate()
    const handleNavigation = ()=>{
        navigate('/page1')
    }
    return (
        <>
        <h1>Page 2</h1>
        <button onClick={handleNavigation}>Navigate to Page 1</button>
        </>
    );
}

export default Page2;