import { Payment } from './types'

interface PaymentsTableProps {
  paymentList: Payment[]
}
export const PaymentsTable = ({ paymentList }: PaymentsTableProps) => {
  return (
    <div>
      <div className='w-[750px] grid grid-cols-[450px_1fr_1fr_1fr] bg-zinc-700'>
        <div className='py-2 px-1'>NAME</div>
        <div className='py-2 px-1'>AMOUNT</div>
        <div className='py-2 px-1'>CODE</div>
        <div className='py-2 px-1'>GRID</div>
      </div>
      {paymentList.map((payment, index) => (
        <div className='w-[750px] grid grid-cols-[450px_1fr_1fr_1fr] border border-zinc-700' key={index}>
          <div className='p-1'>{payment.name}</div>
          <div className='p-1'>{payment.amount}</div>
          <div className='p-1'>{payment.code}</div>
          <div className='p-1 truncate'>{payment.grid}</div>
        </div>
      ))}
    </div>
  )
}
