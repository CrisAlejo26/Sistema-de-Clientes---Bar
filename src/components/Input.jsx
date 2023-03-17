import { useNavigate } from "react-router-dom";

const options = ['Mesa 1', 'Mesa 2', 'Mesa 3', 'Mesa 4', 'Mesa 5', 'Mesa 6', 'Mesa 7', 'Mesa 8']

export const Input = () => {

    let navigate = useNavigate()

    const onSubmit = (e) => {
        e.preventDefault()
        navigate('/pedidos')
    }

    return (
        <form onSubmit={onSubmit} className='form'>
            <label className='label' htmlFor="Mesa">Mesa</label>
            <select className='select' name="select" id="select">
                <option value="">---Elige la mesa---</option>
                {options.map(x => {
                    return (
                        <option value={x}>{x}</option>
                    )
                })}
            </select>
            <button type="submit" className="button">Pedir Comida</button>
        </form>
    );
}