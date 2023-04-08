<template>
    <bread-crumb title="Company Staffs" />

    <custom-modal modalTitle="New Staff" :modalInputs="modalInputs" :saveModalForm="saveStaffList"></custom-modal>

    <div v-if="isListEmpty == true" class="d-flex justify-content-center fs-1 gap-2">
        <i class="bi bi-exclamation-circle"></i>
        <span>No Record Yet</span>
    </div>
    <div v-else class="row mt-3">
        <div v-for="(card, index) in cards" :key="index" class="col-md-6 col-lg-4 mb-3">
            <div class="card p-1 shadow">
                <div class="card-header bg-white d-flex justify-content-between flex-wrap">
                    <div class="d-flex">
                        <span class="fw-bold text-truncate" style="max-width: 180px;">{{ card.fullName }}</span>
                    </div>
                    <action-component></action-component>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col">
                            <div class="d-flex align-items-center gap-1 flex-wrap">
                                <span class="fw-bold">Address:</span>
                                <span class="d-inline-block text-truncate" style="max-width: 150px;">{{ card.address }}</span>
                            </div>
                            <div class="d-flex gap-1 flex-wrap">
                                <span class="fw-bold">Tel:</span>
                                <span>{{ card.phoneNum }}</span>
                            </div>
                            <div class="d-flex gap-1 flex-wrap">
                                <span class="fw-bold">Email:</span>
                                <span>{{ card.email }}</span>
                            </div>
                            <div class="d-flex gap-1 flex-wrap">
                                <span class="fw-bold">Job Title</span>
                                <span>{{ card.jobTitle }}</span>
                            </div>
                            <div class="d-flex gap-1 flex-wrap">
                                <span class="fw-bold">Category:</span>
                                <span class="d-flex gap-2">
                                    <span v-for="(rol, index) in card.role" :key="index"
                                        class="badge text-bg-primary">{{ rol }}</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import BreadCrumb from '../content/BreadCrumb.vue'
import ActionComponent from '../content/ActionComponent.vue';
import CustomModal from '../modals/CustomModal.vue'

export default {
    name: "CompanyStaffs",
    components: { BreadCrumb, CustomModal, ActionComponent },
    data: () => ({
        modalInputs: [
            { type: "text", label: "Full Name", id: "fullName", modalWrapperClass: "col-md-12" },
            { type: "text", label: "Address", id: "address", placeholder: "Address", modalWrapperClass: "col-md-12" },
            { type: "tel", label: "Phone Number", id: "phoneNum", placeholder: "+2340123456789", modalWrapperClass: "col-md-12" },
            { type: "email", label: "Email Address", id: "email", placeholder: "hello@email.com", modalWrapperClass: "col-md-12" },
            { type: "text", label: "Job Title", id: "jobTitle", placeholder: "Farm Attendant", modalWrapperClass: "col-md-12" },
            {
                isCheckBox: true, isInput: false, label: "Role", id: "role", selected: [],
                checkBoxes: [
                    { id: "admin", name: "Is Admin" },
                    { id: "supervisor", name: "Is Supervisor" },
                    { id: "worker", name: "Is Worker" }
                ],
                modalWrapperClass: "col-md-6"
            },
        ],
        cards: [],
        isListEmpty: true
    }),
    methods: {
        saveStaffList() {
            let inputValues = this.modalInputs.map((i) => i.value || i.selected)

            this.cards.push({
                fullName: inputValues[0],
                address: inputValues[1],
                phoneNum: inputValues[2],
                email: inputValues[3],
                jobTitle: inputValues[4],
                role: inputValues[5]
            })
            this.clearForm()
            this.isListEmpty = false
        },
        clearForm() {
            this.modalInputs.map((i) => i.value = null);
            this.modalInputs.map((i) => i.selected = [])
        }
    }
}
</script>