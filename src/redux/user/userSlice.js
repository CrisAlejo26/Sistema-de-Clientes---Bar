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
        details: {},
        shop: [],
        shopTotal: 0,
        lengthCar: false,
        cant: 0,
        delivery: []
    },
    reducers: {

        selectTable: (state, action ) => {
            state.table = action.payload
        },

        validationTable: (state) => {
            state.validation = true
        },

        ocupationTable: (state) => {
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

        clearDetailsDelivery: (state) => {
            state.details = {}
        },

        setTable: (state) => {
            state.table = state.tableSelect
        },

        // ? Carrito de Compras
        addCarShop: (state, action) => {
            if (state.shop.length === 0) {
                state.shop = [...state.shop, action.payload]
                return
            }else if (state.shop.length >= 1){
                const index = state.shop.findIndex(item => item.id === action.payload.id);
                if (index !== -1) {
                    state.shop[index].cantidad += 1;
                }else {
                    state.shop = [...state.shop, action.payload]
                }
            }
        },

        cantProductCarShopAdd: (state, action ) => {
            state.cantidad = action.payload
        },

        cantidadProductForItem: (state, action ) => {
            const { id, cantidad } = action.payload;
            const item = state.shop.find(item => item.id === id);
            if (item) {
                item.cantidad = cantidad;
                item.totalProduct = cantidad * item.precio
            }
        },

        totalShopPrice: (state) => {
            state.shopTotal = state.shop.reduce((x, iterador) => {
                return x + iterador.totalProduct;
            }, 0)
        },

        deleteProductCarShop: (state, action) => {
            const item = state.shop.findIndex(x => x.id === action.payload)
            state.shop.splice(item, 1)
        },

        deleteAllProductsCarShop: (state, action) => {
            state.shop = []
            state.lengthCar = false
            state.cant = 0
        },

        //? Validacion de cantidad de datos en el carrito
        validationCantCarShop: (state, action) => {
            state.cant = state.shop.length === [] ? 0 : state.shop.length
            if (state.cant !== 0) {
                state.lengthCar = true
                return
            }
            state.lengthCar = false
        },

        // ? Compra
        buy: (state) => {
            let dat = state.options.filter(x => !x.includes(state.tableSelect))
            state.lengthCar = false
            state.shop.map(x => {
                state.delivery = [...state.delivery, {mesa: state.tableSelect, x}]
            })
            state.shop = []
            state.options = dat
            state.cant = 0
        }
    }
});


// Action creators are generated for each case reducer function
export const { selectTable, validationTable, ocupationTable, indexApp, loadData, setIdDetails, setDetailsDelivery,
    clearDetailsDelivery, setTable, addCarShop, cantProductCarShop, cantProductCarShopAdd, cantidadProductForItem, totalShopPrice, deleteProductCarShop, validationCantCarShop, deleteAllProductsCarShop, buy } = userSlice.actions;