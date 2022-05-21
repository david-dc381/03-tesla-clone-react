import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cars: ["Model S", "Model 3", "Model X", "Model Y"]
}

const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {}
})

// primero accedemos al car que es el name de carSlice, luego a cars que es el array de initialState.
export const selectCars = state => state.car.cars;

export default carSlice.reducer