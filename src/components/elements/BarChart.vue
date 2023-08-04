<template>
    <Bar id="bar-chart" :options="chartOptions" :data="chartData" />
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export default {
    name: "BarChart",
    components: { Bar },
    props: {
        dataLabels: Array,
        data: Array,
        bgColor: String
    },
    data() {
        return {
            chartData: {
                labels: this.dataLabels,
                datasets: [
                    {
                        label: 'Birds Statistics',
                        barThickness: 35,
                        maxBarThickness: 40,
                        backgroundColor: this.bgColor,
                        data: this.data,
                        borderRadius: 5
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
