import { lazy, StrictMode,Suspense } from 'react'
import { createRoot } from 'react-dom/client'

import './styles/index.css'
const App = lazy(()=>import('./App'))
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense fallback={'Loading'}>
      <App />
    </Suspense>
   
  </StrictMode>,
)
