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
                                    <div class="form-input__wrapper" ref="modalInputs"
                                        v-for="(input, index) in modalInputs" :key="index"
                                        :class="input.modalWrapperClass">
                                        <label :for="input.id" class="form-label">{{ input.label }}</label>
                                        <input v-if="input.isInput != false" :type="input.type" :id="input.id"
                                            class="form-control" :placeholder="input.placeholder"
                                            v-model="input.value" />

                                            <div v-else-if="input.isNumber == true">
                                                <input type="number" :id="input.id"
                                                class="form-control" :placeholder="input.placeholder" min="0"
                                                v-model="input.value" />
                                            </div>
                                        <div v-else-if="input.isCheckBox == true" class="form-check" :id="input.id">
                                            <div class="d-flex align-items-end gap-2" v-for="(checkbox, index) in input.checkBoxes" :key="index">
                                                <input class="form-check-input" type="checkbox" :value="checkbox.id"
                                                    v-model="input.selected">
                                                <label class="form-check-label" for="flexCheckDefault">
                                                    {{ checkbox.name }}
                                                </label>
                                            </div>
                                        </div>

                                        <select v-else v-model="input.value" class="form-select form-select-md"
                                            :id="input.id">
                                            <option :value="input.selectTitle" selected disabled>{{ input.selectTitle }}
                                            </option>
                                            <option v-for="(opt, index) in input.selectOptions" :key="index"
                                                :value="opt.name">
                                                {{ opt.name }}
                                            </option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal"
                                @click.prevent="saveModalForm">Save</button>
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
}
</script>