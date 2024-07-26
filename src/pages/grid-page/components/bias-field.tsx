import { useStore } from '../../../store'

export const BiasField = () => {
  const { bias, isBiasFrozen, setBias, setIsBiasFrozen } = useStore((state) => state)
  const Filter = (bias: string) => {
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
  return (
    <div className='flex flex-col gap-2'>
      <div className='text-sm'>Character</div>
      <input name='bias' type='text' value={bias} disabled={isBiasFrozen} onChange={(e) => Filter(e.target.value.toUpperCase())} className=' disabled:bg-zinc-600 bg-zinc-300 text-xl text-center font-bold text-zinc-800 placeholder-zinc-500 outline-none p-1 rounded w-16 uppercase' />
    </div>
  )
}
