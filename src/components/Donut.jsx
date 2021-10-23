import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';

export default function Donut({ data }) {
    const lineWidth = 50;

    return (
        <PieChart
            style={{
                fontFamily:
                '"Nunito Sans", -apple-system, Helvetica, Arial, sans-serif',
                fontSize: '8px'
            }}
            data={data}
            label={({ dataEntry }) => `${Math.round(dataEntry.percentage)} %`}
            rounded={false}
            /* segmentsShift={(index) => (index === 0 ? 7 : 0.5)} */
            lineWidth={lineWidth}
            labelPosition={100 - lineWidth / 2}
            labelStyle={{
                fill: '#fff',
                opacity: 0.75,
                pointerEvents: 'none',
            }}
        />
    );
}
