import { useStore } from '../store'

export const Grid = () => {
  const { grid } = useStore((state) => state)
  return (
    <>
      {grid && (
        <div className='grid grid-cols-10 gap-1'>
          {grid.map((letter, index) => (
            <div key={index} className='w-12 h-12 bg-zinc-700 flex items-center justify-center rounded-md text-xl font-bold text-green-300'>
              {letter}
            </div>
          ))}
        </div>
      )}

    </>
  )
}
