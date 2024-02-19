import { statusFilters } from './constants';
import {createSlice, isAnyOf } from '@reduxjs/toolkit';
import { addTask, fetchTasks, deleteTask, toggleCompleted } from './operations';


const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    status: statusFilters.all,
  },
  reducers: {
    setStatusFilter(state, action) {
      state.status = action.payload;
    },
  },
});


    export const taskSlice = createSlice({
        name: 'tasks',
        initialState: {
          items: [],
          isLoading: false,
          error: null
        },
        extraReducers(builder){
            builder
            .addCase(fetchTasks.fulfilled, (state, action)=>{
              state.items = action.payload
            })
            .addCase(addTask.fulfilled, (state, action)=>{
              state.items.push(action.payload)
            })
            .addCase(deleteTask.fulfilled, (state, action) => {
              const idx = state.items.findIndex((item) => item.id === action.payload.id)
              state.items.splice(idx, 1)
            })          
            .addCase(toggleCompleted.fulfilled, (state, action) => {
              const idx = state.items.findIndex((item) => item.id === action.payload.id)
              state.items.splice(idx, 1, action.payload)
            })
            .addMatcher(isAnyOf(fetchTasks.pending, addTask.pending, deleteTask.pending, toggleCompleted.pending), (state)=>{
              state.isLoading = true
            })
            .addMatcher(isAnyOf(fetchTasks.rejected, addTask.rejected, deleteTask.rejected, toggleCompleted.rejected), (state, action)=>{
              state.error = action.payload
            })
            .addMatcher(isAnyOf(fetchTasks.fulfilled, addTask.fulfilled, deleteTask.fulfilled, toggleCompleted.fulfilled), (state, action)=>{
              state.isLoading = false
              state.error = null
            })            
          }       
      })
      
      // Експортуємо генератори екшенів та редюсер
export const { setStatusFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
      
export const tasksReducer = taskSlice.reducer;