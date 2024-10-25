import './App.css'
import { Outlet } from 'react-router-dom'
function App() {

  return (
    <>
        <h1>React Axios</h1>
        <div className="container">
          <Outlet/>
        </div>
        
    </>
  )
}

export default App
