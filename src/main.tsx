import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { TaskContextProvider } from './store/TasksContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
 // <React.StrictMode>
    <TaskContextProvider>
      <App />
    </TaskContextProvider>
 // </React.StrictMode>,
)
