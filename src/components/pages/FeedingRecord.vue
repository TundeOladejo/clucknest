<template>
    <bread-crumb title="Feeding Record" />

    <custom-modal modalTitle="Daily Feed Record" :modalInputs="modalInputs" :saveModalForm="saveFeedingList"></custom-modal>

    <div class="row">
        <div class="col">
            <tables-component :feedingList="allFeeds" :isFeeding="true" :isListEmpty="isListEmpty" />
        </div>
    </div>
</template>

<script>
import TablesComponent from '../content/TablesComponent.vue'
import BreadCrumb from '../content/BreadCrumb.vue'
import CustomModal from '../modals/CustomModal.vue'

export default {
    name: "FeedingRecord",
    components: { BreadCrumb, TablesComponent, CustomModal },
    data: () => ({
        modalInputs: [
            {   
                isInput: false, id: "flock", label:"Flock Name", selectTitle: "Pick a flock",
                selectOptions: [
                    { name: "Flock A" },
                    { name: "Flock B" },
                    { name: "Flock C" }
                ],
                modalWrapperClass: "col-md-6"
            },
            { type: "date", label: "Feeding Date", id: "date", modalWrapperClass: "col-md-6" },
            {   
                isInput: false, id: "feedType", label:"Feed Type", selectTitle: "Select Feed Type",
                selectOptions: [
                    { name: "Chick Mash" },
                    { name: "Growers Mash" },
                    { name: "Layers Mash" },
                    { name: "Broiler Starter" },
                    { name: "Broiler Finisher" }
                ],
                modalWrapperClass: "col-md-6"
            },
            { type: "number", label: "Quantity", id: "quantity", placeholder: "Quantity(kgs)", modalWrapperClass: "col-md-6" },
            { type: "text", label: "Additional Notes", id: "addnotes", placeholder: "Additional Notes", modalWrapperClass: "col-md-12" },
        ],
        allFeeds: [],
        isListEmpty: true
    }),
    methods: {
        saveFeedingList() {
            let inputValues = this.modalInputs.map((i) => i.value)

            this.allFeeds.push({ 
                flock: inputValues[0],
                date: inputValues[1], 
                feedType: inputValues[2], 
                quantity: inputValues[3], 
                addNotes: inputValues[4]
            })
            this.clearForm()
            this.isListEmpty = false
        },
        clearForm() {
            this.modalInputs.map((i) => i.value = null)
        }
    }
}
</script>