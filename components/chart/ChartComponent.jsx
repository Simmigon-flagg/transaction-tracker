import { TransactionContext } from '@/app/context/TransactionContext'
import React, { useContext } from 'react'
import ReactApexChart from 'react-apexcharts'

const ChartComponent = () => {
    const { total } = useContext(TransactionContext)

    const options = {
        labels: ["Income", "Expense"],
        colors: ["#28a745", "#dc3545"], // Example colors
        chart: {
            type: 'pie',
        },
        legend: {
            show: true,
        },
        dataLabels: {
            enabled: true,
        },
        tooltip: {
            enabled: true,
            theme: 'dark',
        },
    }

    // 100           /   100             +          (-1)             
    // const series = [total?.netIncome / (total?.netIncome + (-1 * total?.expenses)) || 0, (-1 * total?.expenses) / (total?.netIncome + (-1 * total?.expenses)) || 0]
    const series = [total?.netIncome || 0, (-1 * total?.expenses) || 0]

    return (
        <ReactApexChart
            options={options}
            series={series}
            type='pie'
            width={'150%'}
            height={'150%'}
        />
    )
}

export default ChartComponent
