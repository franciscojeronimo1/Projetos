import { BrowserRouter, Route, Routes, Navigate  } from "react-router-dom"
import Cadastro from "./pages/cadastro"
import Login from "./pages/login/index"

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Cadastro />}/>
        <Route path="/" element={<Login />}/>
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
