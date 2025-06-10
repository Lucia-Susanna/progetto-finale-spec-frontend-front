import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import DefaultLayout from "./layouts/DefaultLayout"
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path='/' element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
