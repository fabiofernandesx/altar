import { useStore } from '../store'
import { api } from './axios'
import { GridData } from './types'

export const CallAPIAndUpdateGrid = async () => {
  const response = await api.get(`/gridncode`)
  UpdateGridNCode(response.data)
}

export const UpdateGridNCode = (data: GridData) => {
  const setGrid = useStore.getState().setGrid
  const setCode = useStore.getState().setCode
  setGrid(data.array)
  setCode(data.code)
}
