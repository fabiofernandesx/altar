import { useEffect, useState } from 'react'
import { useStore } from '../../store'
import { Code, Header, Menu } from '../../global-components'
import { PaymentsForm } from './components/payments-form'
import { FieldValues } from 'react-hook-form'
import { PaymentsTable } from './components/payments-table'
import { CallPaymentsAPI } from '../../lib/payments'
import { Payment } from '../../lib/types'
import { LiveLED } from '../../global-components/live'
import { Socket } from 'socket.io-client'
import { DefaultEventsMap } from '@socket.io/component-emitter'

interface Props {
  socket: Socket<DefaultEventsMap, DefaultEventsMap>
}

export const Payments = ({ socket }: Props) => {
  const [paymentList, setPaymentList] = useState<Payment[]>([])
  const isRunning = useStore((state) => state.isRunning)
  useEffect(() => {
    CallPaymentsAPI().then((data) => {
      setPaymentList(data)
    })
  }, [])

  useEffect(() => {
    if (isRunning) {
      socket.on('payment-update', (data: Payment[]) => {
        setPaymentList(data)
      })
    } else socket.removeAllListeners('payment-update')
  }, [socket, isRunning])

  const handleSubmit = async (data: FieldValues) => {
    const newData = {
      name: data.payment,
      amount: data.amount,
      code: useStore.getState().code,
      grid: useStore.getState().grid.join(''),
    }
    socket.emit('create-payment', newData)
    setPaymentList([...paymentList, newData])
  }
  return (
    <div className='flex flex-col gap-12 w-full'>
      <Header />
      <Menu />
      <LiveLED />
      <Code />
      <PaymentsForm onSubmit={handleSubmit} />
      <PaymentsTable paymentList={paymentList} />
    </div>
  )
}
