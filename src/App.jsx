import { useState } from 'react'
import Home from './pages/Home/Home'
import { RouterProvider } from "react-router-dom";

import router from './routes/root'
function App() {

  return (
   

        <RouterProvider router={router} />
  

  )
}

export default App
