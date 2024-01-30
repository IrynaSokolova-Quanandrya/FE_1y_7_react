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

// tasks/fetchTasks/pedning
// tasks/fetchTasks/fullfield
// tasks/fetchTasks/rejected