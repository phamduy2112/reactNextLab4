import { addDataCate, deleteDataCate, getDataCate, putDataCate } from "@/app/api/fetchApi";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getCategoriesThunk = createAsyncThunk(
    "getAdminLocation",
    async () => {
      try {
        
        const resp = await getDataCate();
        
          return resp.content.reverse();
        } 
        
     
       catch (e) {
        console.log(e);
      }
    }
  );
export const addCategoriesThunk = createAsyncThunk(
    "addCategoriesThunk",
    async (data) => {
      try {
        
        const addresp = await addDataCate(data);
        console.log(data);
        
        const resp = await getDataCate();
        
          return resp.content.reverse();
        } 
        
     
       catch (e) {
        console.log(e);
      }
    }
  );
export const putCategoriesThunk = createAsyncThunk(
    "putCategoriesThunk",
    async (data:any) => {
      try {
        
        const addresp = await putDataCate(data,data._id);
        
        
        const resp = await getDataCate();
        
          return resp.content.reverse();
        } 
        
     
       catch (e) {
        console.log(e);
      }
    }
  );
export const deleteCategoriesThunk = createAsyncThunk(
    "deleteCategoriesThunk",
    async (id:any) => {
      try {
        
        const delCate = await deleteDataCate(id);
        
        
        const resp = await getDataCate();
        
          return resp.content.reverse();
        } 
        
     
       catch (e) {
        console.log(e);
      }
    }
  );
const initialState = {
    listLocation: [],
    modal: false,
  };

  const CategoriesSlice = createSlice({
    name: "getAdminLocation",
    initialState,
    reducers: {
    
      openModal : (state) => {
        state.modal = true
      },
      closeModal: (state) =>{
        state.modal = false
      },
      setLocation: (state, { payload }) => {
        state.listLocation = payload;
    
      },
    },
    extraReducers: (builder) => {
        builder.addCase(getCategoriesThunk.fulfilled, (state, { payload }) => {
            state.listLocation = payload;
          });
        builder.addCase(addCategoriesThunk.fulfilled, (state, { payload }) => {
            state.listLocation = payload;
          });
        builder.addCase(putCategoriesThunk.fulfilled, (state, { payload }) => {
            state.listLocation = payload;
          });
        builder.addCase(deleteCategoriesThunk.fulfilled, (state, { payload }) => {
            state.listLocation = payload;
          });
   
    },
  });
  export const {setLocation,openModal,closeModal} = CategoriesSlice.actions;
  
export const categoriesSlice = CategoriesSlice.reducer;