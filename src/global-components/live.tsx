import { useStore } from '../store'

export const LiveLED = () => {
  const isRunning = useStore((state) => state.isRunning)
  return (
    <>
      {isRunning && (
        <div className='flex items-center w-full justify-center gap-2 animate-pulse'>
          <div className='h-3 w-3 bg-red-700 rounded-full'></div>
          LIVE
        </div>
      )}
    </>
  )
}
