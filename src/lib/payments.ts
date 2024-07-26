import { Payment } from './types'
import { api } from './axios'

export const CallPaymentsAPI = async (): Promise<Payment[]> => {
  return (await api.get(`/payments`)).data.result
}
