<template>
    <div>
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
                    <td>
                        <custom-button type="dropdown" btnText="edit" btnClass="btn-brand-tertiary" />
                    </td>
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
                    <td>
                        <custom-button type="dropdown" btnText="edit" btnClass="btn-brand-tertiary" />
                    </td>
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
                    <td>
                        <custom-button type="dropdown" btnText="edit" btnClass="btn-brand-tertiary" />
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import moment from 'moment';
import CustomButton from '../CustomButton.vue'

export default {
    name: "TablesComponent",
    components: { CustomButton },
    props: {
        isExepnse: { type: Boolean },
        expenseList: { type: Array },
        isReceipts: { type: Boolean },
        receiptList: { type: Array },
        isInventory: { type: Boolean },
        inventoryList: { type: Array },
        isFlockBird: { type: Boolean },
        birdsList: { type: Array }
    },
    methods: {
        dateTime(value) {
            return moment(value).format('YYYY-MM-DD hh:mm');
        },
    },
}
</script>