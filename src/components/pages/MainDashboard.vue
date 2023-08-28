<template>
    <div class="container">
        <div class="row dashboard mt-3">
            <div class="col-12 col-md-6 mb-5">
                <h4 class="mb-3">Feeding Overview</h4>
                <div class="row justify-content-center gap-3">
                    <div v-for="(item, index) in feedings" :key="index" class="col-5 col-md-5 rounded shadow p-3 mb-2">
                        <span class="fw-bold pb-1">{{ item.name }}</span> <br>
                        {{ item.value + `kg` }}
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-6 mb-5">
                <h4 class="mb-3">Eggs Collection Overview</h4>
                <div class="row justify-content-center gap-3">
                    <div v-for="(item, index) in eggs" :key="index" class="col-5 col-md-5 rounded shadow p-3 mb-2">
                        <span class="fw-bold pb-1">{{ item.name }}</span> <br>
                        {{ item.value }}
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-6 mb-5">
                <h4 class="mb-3">Birds Overview</h4>
                <div class="d-flex justify-content-between mb-2 fw-bold">
                    <span>Total Flocks: 2 </span>
                    <span>Birds In Total: 2,473</span>
                </div>
                <BarChart :data="[881, 596, 996]" :bgColor="'#ed9994'" :dataLabels="['Chicks', 'Hen', 'Cockrels']">
                </BarChart>
            </div>
            <div class="col-12 mb-5">
                <h3 class="mb-3">Financial Summary</h3>
                <div class="row align-items-center">
                    <div class="col-12 col-md-6 mb-5">
                        <div class="row justify-content-center gap-3">
                            <div v-for="(item, index) in financials" :key="index"
                                class="col-5 col-md-5 rounded shadow p-3 mb-2">
                                <span class="fw-bold pb-1">{{ item.name }}</span> <br>
                                {{ item.value }}
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 mb-5">
                        <DoughnutChart></DoughnutChart>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BarChart from '../elements/BarChart.vue';
import DoughnutChart from '../elements/DoughnutChart.vue';
export default {
    name: "MainDashboard",
    components: { BarChart, DoughnutChart },
    data() {
        return {
            feedings: [
                { name: "Today", value: 19 },
                { name: "This Week", value: 387 },
                { name: "This Month", value: 2347 },
                { name: "This Year", value: 27978 },
            ],
            eggs: [
                { name: "Today", value: 500 },
                { name: "This Week", value: 1995 },
                { name: "This Month", value: 7875 },
                { name: "This Year", value: 98500 },
            ],
            financials: [
                { name: "Today", value: 500 },
                { name: "This Week", value: 1995 },
                { name: "This Month", value: 7875 },
                { name: "This Year", value: 98500 },
            ]
        }
    },
    computed: {
        currentUser() {
            return this.$store.state.auth.user;
        }
    },
}
</script>
