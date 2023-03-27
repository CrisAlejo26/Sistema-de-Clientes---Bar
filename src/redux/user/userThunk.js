import { loadData, setIdDetails, setDetailsDelivery } from "./userSlice"

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