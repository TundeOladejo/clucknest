<template>
    <bread-crumb title="Vets Record" />

    <custom-modal modalTitle="New Vet Record" :modalInputs="modalInputs" :saveModalForm="saveEggList"></custom-modal>
    
    <tables-component :isEggRecord="true" :eggList="eggList" :isListEmpty="isListEmpty"></tables-component>
</template>

<script>
import BreadCrumb from '../content/BreadCrumb.vue'
import TablesComponent from '../content/TablesComponent.vue'
import CustomModal from '../modals/CustomModal.vue';

export default {
    name: "VetRecord",
    components: { BreadCrumb, CustomModal, TablesComponent },
}
</script>