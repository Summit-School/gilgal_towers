import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const base_url = `${process.env.REACT_APP_BASE_URL}/api/${process.env.REACT_APP_API_VERSION}`;

const initialState = {};

export const getRooms = createAsyncThunk(
    "app/getRooms",
    async (thunkAPI) => {
        try {
            const response = await axios.get(`${base_url}/rooms/`);
            return response.data;
        } catch (error) {
            const message =
                (error.message && error.response.data && error.response.data.message) ||
                error.message ||
                error.toString();

            return thunkAPI.rejectWithValue(message);
        }
    }
);

export const getRoom = createAsyncThunk(
    "app/getRoom",
    async (id, thunkAPI) => {
        try {
            const response = await axios.get(`${base_url}/rooms/${id}`);
            return response.data;
        } catch (error) {
            const message =
                (error.message && error.response.data && error.response.data.message) ||
                error.message ||
                error.toString();

            return thunkAPI.rejectWithValue(message);
        }
    }
);

export const bookRoom = createAsyncThunk(
    "app/bookRoom",
    async (data, thunkAPI) => {
        try {
            const response = await axios.post(`${base_url}/booking/create/`, data, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            return response.data;
        } catch (error) {
            const message =
                (error.message && error.response.data && error.response.data.message) ||
                error.message ||
                error.toString();

            return thunkAPI.rejectWithValue(message);
        }
    }
);

// 
export const getEvents = createAsyncThunk(
    "app/getEvents",
    async (thunkAPI) => {
        try {
            const response = await axios.get(`${base_url}/events/`);
            return response.data;
        } catch (error) {
            const message =
                (error.message && error.response.data && error.response.data.message) ||
                error.message ||
                error.toString();

            return thunkAPI.rejectWithValue(message);
        }
    }
);

export const getEvent = createAsyncThunk(
    "app/getEvent",
    async (id, thunkAPI) => {
        try {
            const response = await axios.get(`${base_url}/events/${id}`);
            return response.data;
        } catch (error) {
            const message =
                (error.message && error.response.data && error.response.data.message) ||
                error.message ||
                error.toString();

            return thunkAPI.rejectWithValue(message);
        }
    }
);

// 
export const getCategories = createAsyncThunk(
    "app/getCategories",
    async (thunkAPI) => {
        try {
            const response = await axios.get(`${base_url}/categories/`);
            return response.data;
        } catch (error) {
            const message =
                (error.message && error.response.data && error.response.data.message) ||
                error.message ||
                error.toString();

            return thunkAPI.rejectWithValue(message);
        }
    }
);

// 
export const getGalleryImages = createAsyncThunk(
    "app/getGalleryImages",
    async (thunkAPI) => {
        try {
            const response = await axios.get(`${base_url}/gallery/`);
            return response.data;
        } catch (error) {
            const message =
                (error.message && error.response.data && error.response.data.message) ||
                error.message ||
                error.toString();

            return thunkAPI.rejectWithValue(message);
        }
    }
);

// 
export const getRoomReviews = createAsyncThunk(
    "app/getRoomReviews",
    async (id, thunkAPI) => {
        try {
            const response = await axios.get(`${base_url}/rating/${id}`);
            return response.data;
        } catch (error) {
            const message =
                (error.message && error.response.data && error.response.data.message) ||
                error.message ||
                error.toString();

            return thunkAPI.rejectWithValue(message);
        }
    }
);

export const addRoomReview = createAsyncThunk(
    "app/addRoomReview",
    async (data, thunkAPI) => {
        try {
            const response = await axios.post(`${base_url}/rating/create/`, data, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            return response.data;
        } catch (error) {
            const message =
                (error.message && error.response.data && error.response.data.message) ||
                error.message ||
                error.toString();

            return thunkAPI.rejectWithValue(message);
        }
    }
);

// 
export const sendEmail = createAsyncThunk(
    "app/sendEmail",
    async (data, thunkAPI) => {
        try {
            const response = await axios.post(`${base_url}/message/send/`, data, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            return response.data;
        } catch (error) {
            const message =
                (error.message && error.response.data && error.response.data.message) ||
                error.message ||
                error.toString();

            return thunkAPI.rejectWithValue(message);
        }
    }
);




export const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {},

});

// export const {  } = appSlice.actions;

export default appSlice.reducer;
