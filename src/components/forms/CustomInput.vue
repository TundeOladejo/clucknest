<template>
    <div>
        <div class="form-group form-input" :class="hasContent">
            <input 
                :id="id" 
                :inputmode="inputMode" 
                :placeholder="placeholder" 
                :pattern="pattern" 
                :isNumber="isNumber"
                :type="type === 'password' ? passwordType : type" 
                :maxlength="maxlength"
                @blur="onBlur" 
                @focus="onFocus" 
                @input="onInput" 
                autocomplete="off" 
                ref="formInput" 
                v-model="value" />
        </div>
        <p class="error-msg" v-if="showError">{{ errorMsg }}</p>
    </div>
    </template>
    
    <script>
    
    export default {
        name: "CustomInput",
        props: {
            type: {
                type: String,
                default: "text",
            },
            label: {
                type: String,
                default: "",
            },
            id: {
                type: String,
                required: true,
            },
            placeholder: {
                type: String,
                default: "",
            },
            isNumber: {
                type: Boolean,
                default: false,
                required: false
            },
            maxlength: {
                type: Number
            },
        },
    
        data() {
            return {
                value: "",
                hasContent: null,
                pattern: null,
                inputMode: null,
                showError: false,
                errorMsg: null,
                hidePassword: true,
                max: null,
            };
        },
        methods: {
            updateClass: function (event) {
                if ((event.type === "focus") || (event.type === "blur" && this.value)) {
                    this.hasContent = "has-content";
                } else {
                    this.hasContent = "";
                }
            },
            onFocus: function (e) {
                this.$emit("focus");
                this.updateClass(e);
            },
            onBlur: function (e) {
                this.$emit("blur");
                this.showError = !!this.errorMsg;
                this.updateClass(e);
            },
            onInput: function () {
                if (this.isNumber) {
                    this.value = this.value.replace(/(?!\.)\D/g, "");
                }
                this.emitValue();
            },
    
            emitValue: function () {
                let value = this.$refs.formInput.value;
                if (this.type === "email") {
                    this.$emit("input", {
                        value: value,
                        isValid: !this.errorMsg,
                    });
                }
                if (this.type === "url") {
                    this.$emit("input", {
                        value: value,
                        isValid: !this.errorMsg,
                    });
                } else {
                    this.$emit("input", value);
                }
                this.$emit("change");
            },
        },
        created() {
            if (this.inputValue) this.value = this.inputValue.toString();
            if (this.value) {
                this.hasContent = "has-content";
            }
        },
    
        updated() {
            if (this.value) {
                this.hasContent = "has-content";
            }
        },
        computed: {
            passwordType() {
                return this.hidePassword ? 'password' : 'text'
            },
        }
    };
    </script>
    
    <style lang="scss" scoped>
    @import "src/assets/scss/components/form-input";
    </style>
    