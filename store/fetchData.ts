import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export interface fetchState {
  leagues: any[];
  loading: Boolean;
  error: string | null | undefined;
}

const initialState: fetchState = {
  leagues: [],
  loading: false,
  error: null,
};

export const fetchLeagues = createAsyncThunk('fetch/fetchCars', async () => {


  try {
    const response = await axios.get("https://api-football-v1.p.rapidapi.com/v3/leagues", {
      headers: {
        'X-RapidAPI-Key': '6961202620mshe98a0cfebf849ecp1ced23jsnaf07667bdac2',
        'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
      }
    });
    return response.data;
  }
  catch (error) {
    throw error;
  }
})

export const fetchSlice = createSlice({
  name: "fetch",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchLeagues.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchLeagues.fulfilled, (state, action) => {
      state.loading = false;
      state.leagues = action.payload;
      console.log(state.leagues);
    });
    builder.addCase(fetchLeagues.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  }
});

export const fetchReducer = fetchSlice.reducer;