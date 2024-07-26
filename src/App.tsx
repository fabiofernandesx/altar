import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { GridPage } from './pages/grid-page'
import { Payments } from './pages/payments'
import { io } from 'socket.io-client'

const socket = io('http://localhost:3000')

const router = createBrowserRouter([
  {
    path: '/',
    element: <GridPage socket={socket} />,
  },
  {
    path: '/payments',
    element: <Payments socket={socket} />,
  },
])
export function App() {
  return (
    <div className='h-screen flex flex-col items-center justify-center bg-zinc-800 text-zinc-100'>
      <div className='bg-zinc-900 p-8 rounded-xl flex flex-col items-center shadow-lg'>
        <RouterProvider router={router} />
      </div>
    </div>
  )
}
