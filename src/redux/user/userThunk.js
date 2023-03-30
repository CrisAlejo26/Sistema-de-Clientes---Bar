import { loadData, setIdDetails, setDetailsDelivery, clearDetailsDelivery, setTable, addCarShop, cantProductCarShop, cantProductCarShopAdd, cantidadProductForItem, totalShopPrice, deleteProductCarShop, validationCantCarShop, deleteAllProductsCarShop } from "./userSlice"

export const userThunk = () => {
    return async(dispatch) => {
        dispatch(loadData())
        
    } 
}

export const setIddetailsDeliveryThunk = (id) => {
    return async(dispatch) => {
        dispatch(setIdDetails(id))
        
    } 
}

export const detailsDeliveryThunk = () => {
    return async(dispatch) => {
        dispatch(setDetailsDelivery())
        
    } 
}

export const clearDetailsDeliveryThunk = () => {
    return async(dispatch) => {
        dispatch(clearDetailsDelivery())
        
    } 
}

export const setTableSelect = () => {
    return async(dispatch) => {
        dispatch(setTable())
    }
}

export const addSetCarShop = (action) => {
    return async(dispatch) => {
        dispatch(addCarShop(action))
    }
}

export const ProductCarShop = (action) => {
    return async(dispatch) => {
        dispatch(cantProductCarShop(action))
    }
}

export const setCantidadCarShop = (action) => {
    return async(dispatch) => {
        dispatch(cantProductCarShopAdd(action))
    }
}

export const cantidadProductForItemThunk = (action) => {
    return async(dispatch) => {
        dispatch(cantidadProductForItem(action))
    }
}

export const totalShopPriceThunk = () => {
    return async(dispatch) => {
        dispatch(totalShopPrice())
    }
}

export const deleteProductCarShopThunk = (id) => {
    return async(dispatch) => {
        dispatch(deleteProductCarShop(id))
    }
}

export const validationCantCarShopThunk = () => {
    return async(dispatch) => {
        dispatch(validationCantCarShop())
    }
}

export const deleteAllProductsCarShopThunk = () => {
    return async(dispatch) => {
        dispatch(deleteAllProductsCarShop())
    }
}