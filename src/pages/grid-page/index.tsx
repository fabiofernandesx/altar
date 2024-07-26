import { useEffect } from 'react'
import { useStore } from '../../store'
import { Code, Grid, Header, Menu } from '../../global-components'
import { CommandBar } from './components'
import { GridData } from '../../lib/types'
import { UpdateGridNCode } from '../../lib/gridFunctions'
import { Socket } from 'socket.io-client'
import { DefaultEventsMap } from '@socket.io/component-emitter'
import { LiveLED } from '../../global-components/live'

interface Props {
  socket: Socket<DefaultEventsMap, DefaultEventsMap>
}

export const GridPage = ({ socket }: Props) => {
  const { isRunning } = useStore((state) => state)

  useEffect(() => {
    if (isRunning) {
      socket.on('grid', (data: GridData) => {
        UpdateGridNCode(data)
      })
    } else socket.removeAllListeners('grid')
  }, [socket, isRunning])

  return (
    <div className='flex flex-col gap-12 w-full'>
      <Header />
      <Menu />
      <CommandBar socket={socket} />
      <Grid />
      <LiveLED />
      <Code />
    </div>
  )
}
