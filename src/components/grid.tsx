interface GridProps {
  array: string[]
  code: string | undefined
}
const Grid = ({ array, code }: GridProps) => {
  return (
    <>
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
    </>
  )
}
export default Grid
