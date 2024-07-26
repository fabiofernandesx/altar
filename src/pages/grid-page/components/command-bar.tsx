import { Clock2 } from 'lucide-react'
import { useStore } from '../../../store'
import { CallAPIAndUpdateGrid } from '../../../lib/gridFunctions'
import { BiasField } from './bias-field'
import { Socket } from 'socket.io-client'
import { DefaultEventsMap } from '@socket.io/component-emitter'

interface Props {
  socket: Socket<DefaultEventsMap, DefaultEventsMap>
}
export const CommandBar = ({ socket }: Props) => {
  const { isRunning, setIsRunning } = useStore((state) => state)
  return (
    <div className='flex w-full px-8 justify-between items-center'>
      <BiasField socket={socket} />
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
        <button
          className='p-3 text-ls font-semibold rounded-lg px-5 flex items-center  justify-center gap-2 bg-green-600 text-zinc-800 hover:bg-green-800 hover:text-zinc-200'
          onClick={() => {
            CallAPIAndUpdateGrid()
            setIsRunning(true)
          }}
        >
          Generate 2D Grid
        </button>
      )}
    </div>
  )
}
