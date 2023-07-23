import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Hotel from './pages/detailHotel/DetailHotel'
import List from './pages/list/List'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotels" element={<List />} />
          <Route path="/hotels/:id" element={<Hotel />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
