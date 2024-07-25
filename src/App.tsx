import { useEffect, useState } from 'react'
import { api } from './lib/axios'
import Header from './components/header'
import CommandBar from './components/command-bar'
import Grid from './components/grid'
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
        <Header />
        <CommandBar bias={bias} isBiasFrozen={isBiasFrozen} isRunning={isRunning} biasFiltering={biasFiltering} setIsRunning={setIsRunning} />
        <Grid array={array} code={code} />
      </div>
    </div>
  )
}

export default App
