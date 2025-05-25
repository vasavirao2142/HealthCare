import { BrowserRouter,Routes,Route } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Layout from "./components/Layout"
import Users from "./pages/Users"


function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route element={<Layout/>}>
      <Route path="/" element={<Dashboard/>}/>
      <Route path="/users" element={<Users/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
   
  )
}

export default App
