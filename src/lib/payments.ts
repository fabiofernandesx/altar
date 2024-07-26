import { Payment } from '../pages/payments/components/types'
import { api } from './axios'

export const CallPaymentsAPI = async (): Promise<Payment[]> => {
  return (await api.get(`/payments`)).data.result
}
