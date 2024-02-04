import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://61b8cec938f69a0017ce5d78.mockapi.io'

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async (_, thunkAPI)=>{
    try {
        const res = await axios.get('/tasks')
        return res.data
    } catch (error) {
        thunkAPI.rejectWithValue('Упс помилка')
    }
}) 

export const addTask = createAsyncThunk('tasks/addTask', async (text, thunkAPI)=>{
    try {
        const res = await axios.post('/tasks', {text})
        return res.data
    } catch (error) {
        thunkAPI.rejectWithValue('Упс помилка')
    }
}) 

export const deleteTask = createAsyncThunk(
    'tasks/deleteTask',
    async (task, thunkAPI) => {
      try {
        const res = await axios.delete(`/tasks/${task.id}`);
        return res.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );
  
  export const toggleCompleted = createAsyncThunk(
    'tasks/toggleCompleted',
    async (task, thunkAPI) => {
      try {
        const res = await axios.put(`/tasks/${task.id}`, {
          completed: !task.completed,
        });
        return res.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

// tasks/fetchTasks/pedning
// tasks/fetchTasks/fullfield
// tasks/fetchTasks/rejected