<template>
    <div v-if="isListEmpty == true" class="d-flex justify-content-center fs-1 gap-2">
        <i class="bi bi-exclamation-circle"></i>
        <span>No Record Yet</span>
    </div>
    <div v-else class="table-responsive">
        <table class="table table-striped">
            <thead v-if="isExepnse">
                <tr>
                    <th scope="col">S/N</th>
                    <th scope="col">Flock</th>
                    <th scope="col">Date</th>
                    <th scope="col">Item</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Cost</th>
                    <th scope="col">Method</th>
                    <th scope="col">Status</th>
                    <th scope="col">Date Updated</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody v-if="isExepnse">
                <tr v-for="(entry, i) in expenseList" :key="i">
                    <th scope="row">{{ ++i }}</th>
                    <td>{{ entry.flock }}</td>
                    <td>{{ entry.date }}</td>
                    <td>{{ entry.item }}</td>
                    <td>{{ entry.quantity }}</td>
                    <td>{{ entry.cost }}</td>
                    <td>{{ entry.paymentMethod }}</td>
                    <td>{{ entry.paymentStatus}}</td>
                    <td>{{ dateTime(entry.dateUpdated) }}</td>
                    <td><action-component></action-component></td>
                </tr>
            </tbody>
            <thead v-if="isSales">
                <tr>
                    <th scope="col">S/N</th>
                    <th scope="col">Flock</th>
                    <th scope="col">Date</th>
                    <th scope="col">Product</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Unit Value</th>
                    <th scope="col">Total</th>
                    <th scope="col">Method</th>
                    <th scope="col">Status</th>
                    <th scope="col">Date Updated</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody v-if="isSales">
                <tr v-for="(entry, i) in salesList" :key="i">
                    <th scope="row">{{ ++i }}</th>
                    <td>{{ entry.flock }}</td>
                    <td>{{ entry.date }}</td>
                    <td>{{ entry.product }}</td>
                    <td>{{ entry.quantity }}</td>
                    <td>{{ entry.value }}</td>
                    <td>{{ entry.totalValue }}</td>
                    <td>{{ entry.paymentMethod }}</td>
                    <td>{{ entry.paymentStatus}}</td>
                    <td>{{ dateTime(entry.dateUpdated) }}</td>
                    <td> <action-component></action-component></td>
                </tr>
            </tbody>

            <thead v-if="isFeeding">
                <tr>
                    <th scope="col">S/N</th>
                    <th scope="col">Flock</th>
                    <th scope="col">Feeding Date</th>
                    <th scope="col">Feed Type</th>
                    <th scope="col">Quantity Used</th>
                    <th scope="col">Date Updated</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody v-if="isFeeding">
                <tr v-for="(entry, i) in feedingList" :key="i">
                    <th scope="row">{{ ++i }} </th>
                    <td>{{ entry.flock }} </td>
                    <td>{{ entry.date }} </td>
                    <td>{{ entry.feedType }} </td>
                    <td>{{ entry.quantity }} </td>
                    <td>{{ dateTime(entry.dateUpdated) }} </td>
                    <td><action-component></action-component></td>
                </tr>
            </tbody>

            <thead v-if="isEggRecord">
                <tr>
                    <th scope="col">S/N</th>
                    <th scope="col">Flock</th>
                    <th scope="col">Date</th>
                    <th scope="col">Good Eggs</th>
                    <th scope="col">Bad Eggs</th>
                    <th scope="col">Total Eggs</th>
                    <th scope="col">Date Updated</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody v-if="isEggRecord">
                <tr v-for="(entry, i) in eggList" :key="i">
                    <th scope="row">{{ ++i }} </th>
                    <td>{{ entry.flock }} </td>
                    <td>{{ entry.date }} </td>
                    <td>{{ entry.goodEggs }} </td>
                    <td>{{ entry.badEggs }} </td>
                    <td>{{ entry.totalEggs }} </td>
                    <td>{{ dateTime(entry.dateUpdated) }} </td>
                    <td><action-component></action-component></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import moment from 'moment';
import ActionComponent from './ActionComponent.vue';

export default {
    name: "TablesComponent",
    components: { ActionComponent },
    props: {
        isListEmpty: Boolean,
        isExepnse: Boolean,
        expenseList: Array,
        isSales: Boolean,
        salesList: Array,
        isFeeding: Boolean,
        feedingList: Array,
        isEggRecord: Boolean,
        eggList: Array
    },
    methods: {
        dateTime(value) {
            return moment(value).format('YYYY-MM-DD hh:mm');
        },
    },
}
</script>