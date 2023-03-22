import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    // nombre del state
    name: 'user',
    // como se inicializa el state
    initialState: {
        options: ['Mesa 1', 'Mesa 2', 'Mesa 3', 'Mesa 4', 'Mesa 5', 'Mesa 6', 'Mesa 7', 'Mesa 8'],
        table: '',
        validation: false,
        tableSelect: ''
    },
    reducers: {

        selectTable: (state, action ) => {
            state.table = action.payload
        },

        validationTable: (state, action) => {
            state.validation = true
        },

        ocupationTable: (state, action) => {
            state.validation = false
            state.tableSelect = state.table
            state.table = ''
            localStorage.setItem('tableSelect', state.tableSelect)
        },
    }
});


// Action creators are generated for each case reducer function
export const { selectTable, validationTable, ocupationTable, indexApp } = userSlice.actions;