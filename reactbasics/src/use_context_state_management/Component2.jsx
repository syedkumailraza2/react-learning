import { useContext } from "react";
import { userContext } from "./context";

const Component2 = () => {
  const user = useContext(userContext);
  return <h1>Hello {user} from Component2</h1>;
};

export default Component2;
