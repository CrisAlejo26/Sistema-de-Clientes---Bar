import { createSlice } from '@reduxjs/toolkit';
import { datos } from './../../../db';

export const userSlice = createSlice({
    // nombre del state
    name: 'user',
    // como se inicializa el state
    initialState: {
        options: ['Mesa 1', 'Mesa 2', 'Mesa 3', 'Mesa 4', 'Mesa 5', 'Mesa 6', 'Mesa 7', 'Mesa 8'],
        table: '',
        validation: false,
        tableSelect: '',
        data: [],
        details: {}
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

        loadData: (state) => {
            for (let index = 0; index < datos.length; index++) {
                state.data.push(datos[index])
            }
        },

        setIdDetails: (state, action) => {
            state.id = action.payload
        },

        setDetailsDelivery: (state) => {
            state.details = state.data.filter(item => state.id === item.id)
            let det = state.details.filter((objeto, indice) => {
                return state.details.findIndex(obj => obj.id === objeto.id) === indice;
            });
            state.details = {}
            state.details = det
        },
    }
});


// Action creators are generated for each case reducer function
export const { selectTable, validationTable, ocupationTable, indexApp, loadData, setIdDetails, setDetailsDelivery } = userSlice.actions;