import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Detail from "./pages/Detail"
import DefaultLayout from "./layouts/DefaultLayout"
import { GlobalProvider } from "./context/GlobalContext"
const App = () => {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path='/' element={<Home />} />
            <Route path='/:id' element={<Detail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  )
}

export default App
