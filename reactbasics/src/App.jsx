import PropDrilling from "./basics/PropDrilling"
import { ReactEvent } from "./basics/ReactEvents"
import UseEffectHook from "./hooks/UseEffect"
import UserStatehook from "./hooks/UseState"
import BasicForm from "./mini_projects/BasicForm"
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Page1 from "./navigation/Page1"
import Page2 from "./navigation/Page2"
const App = (props) => {

  return (
    // <PropDrilling course="BCOM"/>
    //<ReactEvent/>
    //<UserStatehook/>
    //<UseEffectHook/>
    //<BasicForm/>
    <BrowserRouter>
      <Routes>
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
