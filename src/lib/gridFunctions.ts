import { useStore } from '../store'
import { api } from './axios'

export const CallAPIAndUpdateGrid = async (bias: string) => {
  const setGrid = useStore.getState().setGrid
  const setCode = useStore.getState().setCode
  const response = await api.get(`/gridncode/${bias}`)
  setGrid(response.data.array)
  setCode(response.data.code)
}
