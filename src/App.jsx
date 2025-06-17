import '@fortawesome/fontawesome-free/css/all.min.css';

import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Detail from "./pages/Detail"
import Comparatore from "./pages/Comparatore"
import Preferiti from './pages/Preferiti';
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
            <Route path='/compare' element={<Comparatore />} />
            <Route path='/favourites' element={<Preferiti />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  )
}

export default App
