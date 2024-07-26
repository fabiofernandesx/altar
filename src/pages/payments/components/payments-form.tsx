import { zodResolver } from '@hookform/resolvers/zod'
import { Plus } from 'lucide-react'
import { FieldValues, useForm } from 'react-hook-form'
import { z } from 'zod'
interface PaymentsFormProps {
  onSubmit: (data: FieldValues) => void
}
const schema = z.object({
  payment: z.string().min(1, { message: 'Payment name is required' }),
  amount: z.coerce.number().min(1, { message: 'Amount is required and must be a number' }),
})
export const PaymentsForm = ({ onSubmit }: PaymentsFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  })
  const handleSubmitForm = (data: FieldValues) => {
    onSubmit({ payment: data.payment, amount: data.amount })
    reset()
  }
  return (
    <div>
      <form onSubmit={handleSubmit(handleSubmitForm)} className='flex gap-4  justify-start'>
        <div className='flex flex-col gap-1 h-16 w-26'>
          <label>Payment</label>
          <input {...register('payment')} type='text' name='payment' placeholder='Payment' className={`${errors.payment ? 'border-2 border-red-600 bg-red-200' : ''} w-full py-1 px-2 h-10 text-zinc-900`} />
        </div>
        <div className='flex flex-col gap-1 h-16 w-20'>
          <label>Amount</label>
          <input {...register('amount')} type='text' name='amount' placeholder='Amount' className={`${errors.amount ? 'border-2 border-red-600 bg-red-200' : ''} w-full py-1 px-2 h-10 text-zinc-900`} />
        </div>
        <button type='submit' className='flex gap-2 mt-6 bg-green-600 py-1 px-4 items-center justify-center text-sm  h-10 text-zinc-100 hover:bg-green-700'>
          <Plus className='w-4 h-4' /> ADD
        </button>
      </form>
    </div>
  )
}
