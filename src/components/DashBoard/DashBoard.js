import React from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const DashBoard = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ];
    const data01 = [
        { name: 'March', value: 100000 },
        { name: 'April', value: 200000 },
        { name: 'May', value: 400000 },
        { name: 'June', value: 500000 },
        { name: 'July', value: 600000 },
        { name: 'August', value: 700000 },
    ];
    const data02 = [
        { name: 'A1', value: 10401 },
        { name: 'A2', value: 24500 },
        { name: 'B1', value: 67010 },
        { name: 'B2', value: 40405 },
        { name: 'B3', value: 50900 },
        { name: 'B4', value: 61000 },

    ];
    return (
        <section className='grid grid-cols-2 gap-14 p-24'>
            <div>
                <h2 className='text-orange-700 text-center text-semibold text-xl mb-8'>Month Wise Sell</h2>
                <LineChart width={500} height={300} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="sell" stroke="#8884d8" strokeWidth={2} />

                </LineChart>
            </div>
            <div>
                <h2 className='text-orange-700 text-center text-semibold text-xl mb-8'>Investment Vs Revenue</h2>
                <AreaChart
                    width={530}
                    height={300}
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
                    <Legend />
                    <Area type="monotone" dataKey="investment" stackId="1" stroke="#8884d8" fill="#8884d8" />
                    <Area type="monotone" dataKey="revenue" stackId="1" stroke="#82ca9d" fill="#82ca9d" />

                </AreaChart>
            </div>
            <div>
                <h2 className='text-orange-700 text-center text-semibold text-xl mb-8'>Investment Vs Revenue</h2>
                <BarChart
                    width={530}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="investment" fill="#8884d8" />
                    <Bar dataKey="revenue" fill="#82ca9d" />
                </BarChart>
            </div>
            <div>
                <h2 className='text-orange-700 text-center text-semibold text-xl mb-8'>Investment Vs Revenue</h2>
                <PieChart width={530} height={300}>
                    <Pie data={data01} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
                    <Pie data={data02} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
                </PieChart>
            </div>
        </section>


    );
};

export default DashBoard;