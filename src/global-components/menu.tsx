import { Link } from 'react-router-dom'

export const Menu = () => {
  return (
    <div className='flex gap-4 bg-zinc-800 p-4'>
      <Link to='/' className='hover:underline'>
        Home
      </Link>
      <Link to='/payments' className='hover:underline'>
        Payments
      </Link>
    </div>
  )
}
