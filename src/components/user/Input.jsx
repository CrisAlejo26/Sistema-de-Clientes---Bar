import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { indexApp, ocupationTable, selectTable, validationTable } from "../../redux/user/userSlice";
import { Alert } from "@mui/material";
import '../../styles/alert.css'
import { useEffect } from "react";

export const Input = () => {

    let navigate = useNavigate()
    const {options, table, validation} = useSelector(state => state.user)
    const dispatch = useDispatch()

    const onSubmit = async(e) => {
        e.preventDefault()
        if(!table.length > 0) {
            dispatch(validationTable())
            return
        }
        dispatch(ocupationTable())
        navigate('/pedidos')
        
    }

    return (
        <>
        <form onSubmit={onSubmit} className='form'>
            {validation ? 
                <Alert className="alert" sx={{ bgcolor: 'transparent' }} severity="error">Elige tu mesa para continuar</Alert>
            : null}
            <label className='label' htmlFor="Mesa">Mesa</label>
            <select onChange={(e) => dispatch(selectTable(e.target.value))} value = {table} className='select' name="select" id="select">
                <option value="">---Elige la mesa---</option>
                {options.map(x => {
                    return (
                        <option key={x} value={x}>{x}</option>
                    )
                })}
            </select>
            <button type="submit" className="button">Pedir Comida</button>
        </form>
        </>
    );
}