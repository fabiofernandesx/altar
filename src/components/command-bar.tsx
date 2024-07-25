import { Clock2 } from 'lucide-react'

interface CommandBarProps {
  bias: string
  isBiasFrozen: boolean
  isRunning: boolean
  biasFiltering: (bias: string) => void
  setIsRunning: React.Dispatch<React.SetStateAction<boolean>>
}
const CommandBar = ({ bias, isBiasFrozen, isRunning, biasFiltering, setIsRunning }: CommandBarProps) => {
  return (
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
  )
}
export default CommandBar
