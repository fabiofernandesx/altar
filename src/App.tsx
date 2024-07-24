import { Clock2 } from 'lucide-react'
import { useEffect, useState } from 'react'
import { api } from './lib/axios'
function App() {
  const [bias, setBias] = useState('')
  const [isBiasFrozen, setIsBiasFrozen] = useState(false)
  const [array, setArray] = useState([])
  const [code, setCode] = useState(undefined)
  const [isRunning, setIsRunning] = useState(false)

  function biasFiltering(bias: string) {
    if (!bias.match(/[A-Z]/g) || bias.length > 1) {
      setBias('')
      return
    }
    setBias(bias)
    setIsBiasFrozen(true)
    setTimeout(() => {
      setIsBiasFrozen(false)
    }, 4000)
  }

  useEffect(() => {
    if (isRunning) {
      const intervalId = setInterval(async () => {
        const response = await api.get(`/${bias}`)
        setArray(response.data.array)
        setCode(response.data.code)
      }, 2000)
      return () => clearInterval(intervalId)
    }
  }, [isRunning, bias])

  return (
    <div className='h-screen flex flex-col items-center justify-center bg-zinc-800 text-zinc-100'>
      <div className='bg-zinc-900 w-[600px] p-4 rounded-xl flex flex-col items-center shadow-lg gap-12'>
        <div className='w-full p-2 text-center space-y-2 flex flex-col'>
          <h1 className='text-3xl'>Altar.io | Fabio Fernandes</h1>
          <h2>Full-Stack Exercise #1223</h2>
        </div>
        <div className='flex w-full px-8 justify-between items-center'>
          <div className='flex flex-col gap-2'>
            <div className='text-sm'>Character</div>
            <input type='text' value={bias} disabled={isBiasFrozen} onChange={(e) => biasFiltering(e.target.value.toUpperCase())} className=' disabled:bg-zinc-600 bg-zinc-300 text-xl text-center font-bold text-zinc-800 placeholder-zinc-500 outline-none p-1 rounded w-16 uppercase' />
          </div>
          {isRunning ? (
            <>
              <div className='flex gap-2 items-center animate-pulse'>
                <Clock2 className='w-10 h-10' />
                <span>Refreshing Grid</span>
              </div>
              <button className='p-3 text-ls font-semibold rounded-lg px-5 flex items-center  justify-center gap-2 bg-red-300 text-zinc-800 hover:bg-red-800 hover:text-zinc-200' onClick={() => setIsRunning(false)}>
                Stop
              </button>
            </>
          ) : (
            <button className='p-3 text-ls font-semibold rounded-lg px-5 flex items-center  justify-center gap-2 bg-green-600 text-zinc-800 hover:bg-green-800 hover:text-zinc-200' onClick={() => setIsRunning(true)}>
              Generate 2D Grid
            </button>
          )}
        </div>
        {array && (
          <div className='grid grid-cols-10 gap-1'>
            {array.map((letter, index) => (
              <div key={index} className='w-12 h-12 bg-zinc-700 flex items-center justify-center rounded-md text-xl font-bold text-green-300'>
                {letter}
              </div>
            ))}
          </div>
        )}
        {code && (
          <div className='text-zinc-300 text-xl p-4 border-zinc-700 border'>
            YOUR CODE: <strong className='text-xl font-bold'>{code}</strong>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
