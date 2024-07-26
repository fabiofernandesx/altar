import { useEffect, useState } from 'react'
import { useStore } from '../../store'
import { CallAPIAndUpdateGrid } from '../../lib/gridFunctions'
import { Code, Header, Menu } from '../../global-components'
import { PaymentsForm } from './components/payments-form'
import { api } from '../../lib/axios'
import { FieldValues } from 'react-hook-form'
import { Payment } from './components/types'
import { PaymentsTable } from './components/payments-table'
import { CallPaymentsAPI } from '../../lib/payments'

export const Payments = () => {
  const { isRunning, bias } = useStore((state) => state)
  const [paymentList, setPaymentList] = useState<Payment[]>([])

  useEffect(() => {
    CallPaymentsAPI().then((data) => {
      setPaymentList(data)
    })
  }, [])

  useEffect(() => {
    if (isRunning) {
      const intervalId = setInterval(async () => {
        CallAPIAndUpdateGrid(bias)
      }, 2000)
      return () => clearInterval(intervalId)
    }
  }, [isRunning, bias])

  const handleSubmit = async (data: FieldValues) => {
    const response = await api.post(`/payments`, {
      name: data.payment,
      amount: data.amount,
      code: useStore.getState().code,
      grid: useStore.getState().grid.join(''),
    })
    setPaymentList([...paymentList, response.data.result])
    console.log(response)
  }
  return (
    <div className='flex flex-col gap-12 w-full'>
      <Header />
      <Menu />
      <Code />
      <PaymentsForm onSubmit={handleSubmit} />
      <PaymentsTable paymentList={paymentList} />
    </div>
  )
}
