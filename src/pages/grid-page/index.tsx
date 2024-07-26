import { useEffect } from 'react'
import { useStore } from '../../store'
import { Code, Grid, Header, Menu } from '../../global-components'
import { CallAPIAndUpdateGrid } from '../../lib/gridFunctions'
import { CommandBar } from './components'

export const GridPage = () => {
  const { bias, isRunning } = useStore((state) => state)

  useEffect(() => {
    if (isRunning) {
      const intervalId = setInterval(async () => {
        CallAPIAndUpdateGrid(bias)
      }, 2000)
      return () => clearInterval(intervalId)
    }
  }, [isRunning, bias])
  return (
    <div className='flex flex-col gap-12 w-full'>
      <Header />
      <Menu />
      <CommandBar />
      <Grid />
      <Code />
    </div>
  )
}
