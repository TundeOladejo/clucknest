<template>
    <div class="table-responsive">
        <table class="table table-striped">
            <thead v-if="isExepnse">
                <tr>
                    <th scope="col">S/N</th>
                    <th scope="col">Date</th>
                    <th scope="col">Material</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Cost</th>
                    <th scope="col">Date Updated</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody v-if="isExepnse">
                <tr v-for="(entry, i) in expenseList" :key="i">
                    <th scope="row">{{ ++i }}</th>
                    <td>{{ entry.date }}</td>
                    <td>{{ entry.material }}</td>
                    <td>{{ entry.quantity }}</td>
                    <td>{{ entry.cost }}</td>
                    <td>{{ dateTime(entry.dateUpdated) }}</td>
                    <td><action-component></action-component></td>
                </tr>
            </tbody>
            <thead v-if="isReceipts">
                <tr>
                    <th scope="col">S/N</th>
                    <th scope="col">Date</th>
                    <th scope="col">Product</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Unit Value</th>
                    <th scope="col">Total</th>
                    <th scope="col">Date Updated</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody v-if="isReceipts">
                <tr v-for="(entry, i) in receiptList" :key="i">
                    <th scope="row">{{ ++i }}</th>
                    <td>{{ entry.date }}</td>
                    <td>{{ entry.product }}</td>
                    <td>{{ entry.quantity }}</td>
                    <td>{{ entry.value }}</td>
                    <td>{{ entry.totalValue }}</td>
                    <td>{{ dateTime(entry.dateUpdated) }}</td>
                    <td> <action-component></action-component></td>
                </tr>
            </tbody>

            <thead v-if="isInventory">
                <tr>
                    <th scope="col">S/N</th>
                    <th scope="col">Stocks & Equipment</th>
                    <th scope="col">Number/Amount</th>
                    <th scope="col">Unit Value</th>
                    <th scope="col">Total Value</th>
                    <th scope="col">Date Updated</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody v-if="isInventory">
                <tr v-for="(entry, i) in inventoryList" :key="i">
                    <th scope="row">{{ ++i }} </th>
                    <td>{{ entry.stkEquip }} </td>
                    <td>{{ entry.number }} </td>
                    <td>{{ entry.unitValue }} </td>
                    <td>{{ entry.totalValue }} </td>
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
                    <th scope="col">Notes</th>
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
                    <td>{{ entry.notes }} </td>
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
        isExepnse: { type: Boolean },
        expenseList: { type: Array },
        isReceipts: { type: Boolean },
        receiptList: { type: Array },
        isInventory: { type: Boolean },
        inventoryList: { type: Array },
        isEggRecord: { type: Boolean },
        eggList: { type: Array }
    },
    methods: {
        dateTime(value) {
            return moment(value).format('YYYY-MM-DD hh:mm');
        },
    },
}
</script>