import React from 'react'
import Donut from '../components/Donut';

export default function Budget() {
    // const colors = ['#00429d', '#4771b2', '#73a2c6', '#a5d5d8', '#ffffe0', '#ffbcaf', '#f4777f', '#cf3759', '#93003a'];
    const colors = ['#00429d', '#93003a', '#4771b2', '#cf3759', '#73a2c6', '#f4777f', '#a5d5d8', '#ffbcaf', '#ffffe0'];

    const pdata = [
        { title: 'One', value: 10, color: '#E38627' },
        { title: 'Two', value: 15, color: '#C13C37' },
        { title: 'Three', value: 20, color: '#6A2135' }
    ]

    const outgoingItem = (name) => {
        return (
            <div className="flex justify-between">
                <span className="text-xl">{name}</span>
                <div>
                    {"$ "}
                    <input type="text" placeholder="0" size="8" className="text-right px-2 border-2 border-t-0 border-gray-200"/>
                </div>
            </div>
        )
    }
    const outgoingItems = ['Rent', 'Insurances', 'Loans', 'Lolas'];

    return (
        <div>
            <h1 className="text-black text-3xl">Budget</h1>
            <div className="flex flex-row justify-between items-end pb-2 mb-6 border-b-2">
                <p>eventual filter here + add/remove card, option list</p>
                <p>temp</p>
            </div>
            <div className="flex flex-wrap justify-between gap-4">
                <div className="w-2/5 bg-white p-4 rounded-md shadow-sm" style={{minWidth: '300px'}}>
                    <p className="text-2xl pb-5">Outgoing</p>
                    <div className="flex flex-col space-y-2">
                        {outgoingItems.map( i => outgoingItem(i))}
                    </div>
                </div>
                <div className="">
                    <div className="w-72 h-72">
                        <Donut data={pdata} />
                    </div>
                </div>
            </div>
        </div>
    )
}
