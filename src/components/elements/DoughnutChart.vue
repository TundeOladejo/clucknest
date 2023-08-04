<template>
    <Doughnut id="doughnut-chart" :options="chartOptions" :data="chartData" />
</template>

<script>
import { Doughnut } from 'vue-chartjs'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

export default {
    name: "DoughnutChart",
    components: { Doughnut },
    data() {
        return {
            chartData: {
                labels: ['Sales', 'Expenses'],
                datasets: [
                    {
                        label: 'Financial Summary',
                        backgroundColor: ['#4DAA57', '#f13030'],
                        data: [150000, 60000],
                    }
                ]
            },
            chartOptions: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'bottom',
                    },
                    title: {
                        display: false,
                    }
                }
            }
        }
    }

}
</script>

<style>
#doughnut-chart {
    width: 300px !important;
    height: 300px !important;
}
</style>
