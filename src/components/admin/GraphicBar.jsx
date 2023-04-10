import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export const GraphicBar = () => {

    const data = [
        {
            name: 'Lunes',
            uv: 150,
            pv: 50,
            amt: 95,
        },
        {
            name: 'Martes',
            uv: 200,
            pv: 85,
            amt: 65,
        },
        {
            name: 'Miércoles',
            uv: 300,
            pv: 150,
            amt: 110,
        },
        {
            name: 'Jueves',
            uv: 50,
            pv: 25,
            amt: 45,
        },
        {
            name: 'Viernes',
            uv: 250,
            pv: 120,
            amt: 40,
        },
        {
            name: 'Sabado',
            uv: 170,
            pv: 50,
            amt: 110,
        },
        {
            name: 'Domingo',
            uv: 150,
            pv: 26,
            amt: 70,
        },
    ];

    return (
        <ResponsiveContainer width="100%" height="100%">
        <AreaChart
            width={500}
            height={400}
            data={data}
            margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
            }}
            >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="uv" stackId="1" stroke="#8884d8" fill="#8884d8" />
            <Area type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
            <Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658" />
            </AreaChart>
        </ResponsiveContainer>
    )
}
