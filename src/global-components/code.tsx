import { useStore } from '../store'

export const Code = () => {
  const { code } = useStore((state) => state)
  return (
    <div className='flex justify-center'>
      <div className='w-52 text-center'>
        {code && (
          <div className='text-zinc-300 text-xl p-4 border-zinc-700 border'>
            YOUR CODE: <strong className='text-xl font-bold'>{code}</strong>
          </div>
        )}
      </div>
    </div>
  )
}
