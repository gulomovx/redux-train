import { BrowserRouter, Route, Routes } from "react-router-dom"
import BasketProduct from "./components/BasketProduct"
import Navbar from "./components/Navbar"
import Home from "./crud/Home"
import Edit from "./crud/Edit"
import Create from './crud/Create'
const App = () => {
  return (
    <div>
      <h1 className="text-center text-5xl font-medium my-4  text-orange-700">Store Crud</h1>
      <hr />
      {/* <Navbar /> */}
      {/* <BasketProduct/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home/>} />
          <Route path="/create" element={ <Create/>} />
          <Route path="/edit/:id" element={ <Edit/>} />
        </Routes>
      </BrowserRouter>
      {/* <Home/> */}


    </div>
  )
}

export default App