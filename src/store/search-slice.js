import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  query: "",
  results: [],
  loading: false,
  error: null,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchQuery(state, action) {
      state.query = action.payload;
    },
    setSearchResults(state, action) {
      state.results = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const { setSearchQuery, setSearchResults, setLoading, setError } = searchSlice.actions;

export default searchSlice.reducer;
