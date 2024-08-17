import React, { lazy, Suspense } from "react"
import './styles/App.css'
import First from "./pages/First"
const Second = lazy(()=>import('./pages/Second'))
import Third from "./pages/Third"
import Forth from "./pages/Forth"
const App = ():React.ReactNode => {
  return (
    <div className="main min-h-screen">
        <First />
        <Suspense fallback={<p>loading</p>}>
        <Second/>
        </Suspense>
        
        <Third />
        <Forth/>
    </div>
  )
}

export default App