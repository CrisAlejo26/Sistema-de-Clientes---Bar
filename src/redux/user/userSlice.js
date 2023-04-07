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
        delivery: {},
    },
    reducers: {

        selectTable: (state, action ) => {
            state.table = action.payload
        },

        loadTableLocalStorage: (state) => {
            localStorage.setItem("optionsCant", JSON.stringify(state.options))
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
            state.cantDeliveryAdmin = JSON.parse(localStorage.getItem("optionsCant")).length - dat.length
            localStorage.setItem("cantDeliveryAdmin", JSON.stringify(state.cantDeliveryAdmin))
            localStorage.setItem("options", JSON.stringify(dat))
            state.delivery = {...state.delivery, [state.tableSelect]: state.shop}
            
            let claves = Object.keys(state.delivery); // claves = ["nombre", "color", "macho", "edad"]
            if(claves !== null) {
                let clave;
                for(let i=0; i< claves.length; i++){
                    clave = claves[i];
                    // Identificar en que posicion esta time
                    let u = state.delivery[clave].findIndex(ele => ele.time)
                    if (u < 0) {
                        state.delivery[clave].push({time: 20 * 60})
                    }
                    console.log(u);
                }

            }
            localStorage.setItem("delivery", JSON.stringify(state.delivery))
            state.shop = []
            state.options = dat
            state.cant = 0
            state.lengthCar = false
        },

        times: (state) => {
            let claves = Object.keys(state.delivery); // claves = ["nombre", "color", "macho", "edad"]
            if(claves !== null) {
                for(let i=0; i< claves.length; i++){
                    let clave = claves[i];
                    state.delivery[clave].map(x => {
                        if (x.time !== undefined) {
                            x.time --
                        }
                    })
                }
                
            }
        },

        loadDataLocalStorage: (state) => {
            if(JSON.parse(localStorage.getItem('options')) !== null) {
                state.options = JSON.parse(localStorage.getItem('options'))
            }
            if(JSON.parse(localStorage.getItem('delivery')) !== null) {
                state.delivery = JSON.parse(localStorage.getItem('delivery'))
            }
            if(JSON.parse(localStorage.getItem('cantDeliveryAdmin')) !== null) {
                state.cantDeliveryAdmin = JSON.parse(localStorage.getItem('cantDeliveryAdmin')) || 0
            }
            localStorage.setItem("optionsCant", JSON.stringify(state.options))
        } 

    },

    extraReducers: (builder) => {
        builder.addCase('buy', (state, action) => {
            setInterval(() => {
                // Do something here
            }, 1000);
        });
    }
});

// ? User
export const { selectTable, startCountDown, loadTableLocalStorage, validationTable, ocupationTable, indexApp, loadData, setIdDetails, setDetailsDelivery, clearDetailsDelivery, setTable, addCarShop, cantProductCarShop, cantProductCarShopAdd, cantidadProductForItem, totalShopPrice, deleteProductCarShop, validationCantCarShop, deleteAllProductsCarShop, buy, loadDataLocalStorage, times } = userSlice.actions;