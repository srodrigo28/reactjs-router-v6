import "./App.css"
import { Outlet } from "react-router-dom"
import { NavBar } from "./components/NavBar";
function App() {

  return (
    <div className="body-app">
      <NavBar />
      <Outlet />
      <p>by developement Seb App</p>
    </div>
  )
}

export default App;
