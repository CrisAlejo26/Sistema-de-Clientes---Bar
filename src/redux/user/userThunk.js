import { loadData, setIdDetails, setDetailsDelivery, clearDetailsDelivery, setTable, addCarShop } from "./userSlice"

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