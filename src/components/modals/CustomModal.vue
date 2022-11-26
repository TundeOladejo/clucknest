<template>
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">{{ modalTitle }}</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form action="" method="post">
                        <div class="mb-2">
                            <div class="form-group contact-form">
                                <div class="row">
                                    <div class="form-input__wrapper" v-for="(input, index) in modalInputs" :key="index" :class="input.modalWrapperClass">
                                        <input v-if="input.isInput == true" :type="input.type" :id="input.id" class="form-control"
                                            :placeholder="input.placeholder" v-model="eggModel[index]" />

                                        <select v-else v-model="eggModel[index]" class="form-select form-select-md mb-4"
                                            :id="input.id">
                                            <option selected value="NOT SELECTED" disabled>{{ input.selectTitle}}</option>
                                            <option v-for="(opt, index) in input.selectOptions" :key="index"
                                                v-bind:value="index">
                                                {{ opt.name }}
                                            </option>
                                        </select>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" @click="saveModalForm">Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "CustomModal",
    props: {
        modalTitle: { type: String },
        modalInputs: { type: Array },
        saveModalForm: { type: Function }
    },
    data() {
        return {
            eggModel: [],
        }
    }
}
</script>