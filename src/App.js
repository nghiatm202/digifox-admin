import { BrowserRouter, Route, Routes } from "react-router-dom"
import { MainLayout } from "./layouts"
import { routes } from "./routes"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {routes}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
