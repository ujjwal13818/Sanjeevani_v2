import {createAsyncThunk} from "@reduxjs/toolkit"
import API from "../../../Services/API"
 import { toast } from "react-toastify";

export const userLogin = createAsyncThunk(
    '/auth/login',
    async({role,email,password},{rejectWithValue}) => {
        try {
            console.log(role + " " + email + " " + password);
            const { data } = await API.post("/auth/login", {
              role,
              email,
              password,
            });
            //storring the token
            if(data.success){
                localStorage.setItem('token' , data.token)
                toast.success(data.message)
            }
            return data;
        } catch (error) {
            if(error.response && error.response.data.message){
                return rejectWithValue(error.response.data.message)
            }
            else{
                console.log("here");
                return rejectWithValue(error.message)
            }
        }
    }
)