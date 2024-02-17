import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  likeCounts: {},
  commentCounts: {},
  favoriteCounts: {},
  commentText: "", 
};

const newsSlice = createSlice({
  name: "newsSlice",
  initialState,
  reducers: {
    incrementLike(state, action) {
      const { articleTitle } = action.payload;
      state.likeCounts[articleTitle] =
        (state.likeCounts[articleTitle] || 0) + 1;
    },
    incrementComment(state, action) {
      const { articleTitle, comment } = action.
      payload;
      
      if (state.comments[articleTitle]) {
        state.comments[articleTitle].push(comment);
      } else {
        state.comments[articleTitle] = [comment];
      }
    },
    incrementFavorite(state, action) {
      const { articleTitle } = action.payload;
      state.favoriteCounts[articleTitle] =
        (state.favoriteCounts[articleTitle] || 0) + 1;
    },
    updateCommentText(state, action) {
      state.commentText = action.payload; 
    },
  },
});

export const { incrementLike, incrementComment, incrementFavorite, updateCommentText } =
  newsSlice.actions;

export default newsSlice.reducer;
