<template>
  <div class="form-input__wrapper">
    <label :for="id" class="form-label">{{ label }}</label>
    <input
      :type="type"
      :id="id"
      class="form-control"
      :isNumber="isNumber"
      :class="extraClass"
      :placeholder="placeholder"
      :isAmount="isAmount"
      :isAccNumber="isAccNumber"
      @input="onInput"
      @blur="onBlur"
      @change="onChange"
      @focus="onFocus"
      v-model="value"
    />
    <span class="icon position-absolute">
      <i class="bi" :class="iconClass" />
    </span>
    <p v-if="showError" class="error-msg">{{ errorMsg }}</p>
  </div>
</template>

<script>
import misc from "../../utils/misc";

export default {
  name: "FormInput",
  props: {
    label: { type: String, default: "Label goes here" },
    type: { type: String, default: "text" },
    id: { type: String, required: true },
    placeholder: { type: String },
    isNumber: { type: Boolean },
    iconClass: { type: String },
    extraClass: { type: String },
    isAmount: { type: Boolean, default: false, required: false },
    isAccNumber: { type: Boolean, default: false, required: false },
    isOptional: { type: Boolean, default: false, required: false },
  },
  data() {
    return {
      value: "",
      maxLength: 11,
      showError: false,
      errorMsg: null,
    };
  },
  mounted() {
    if (this.defaultValue) {
      this.value = this.defaultValue;
      this.onInput();
    }
  },
  methods: {
    onChange: function () {
      this.$emit("change", this.value);
    },
    onFocus: function () {
      this.$emit("focus", this.value);
    },
    onBlur: function (e) {
      this.$emit("blur");
      this.showError = !!this.errorMsg;
      if (this.isAmount) {
        this.formatCurrency(e);
      }
    },
    validateEmail(email) {
      return misc.validateEmail(email);
    },
    formatCurrency: function (e) {
      this.value = this.value
        .replace(/(?!\.)\D/g, "") // Deletes all non-numeric characters except "."
        .replace(/^0+/, ""); // Deletes all leading zeros
      let decimalPosition = this.value.indexOf(".");
      let leftSide = this.value.substring(0, decimalPosition);
      let rightSide = this.value.substring(decimalPosition);
      if (this.value.indexOf(".") >= 0) {
        //If number has decimal
        leftSide = this.commaSeparateNumber(leftSide);
        rightSide = this.commaSeparateNumber(rightSide);
        if (e.type === "blur") {
          rightSide += "00";
        }
        rightSide = rightSide.substring(0, 2); //Restrict number to 2 dp
        this.value = leftSide + "." + rightSide;
      } else {
        this.value = this.commaSeparateNumber(this.value);
      }
    },
    commaSeparateNumber: function (number) {
      return number.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    onInput: function (e) {
      if (this.isAmount) {
        this.formatCurrency(e);
      }
      if (this.isNumber) {
        this.value = this.value.replace(/(?!\.)\D/g, "");
        if (this.value.length > this.maxLength)
          this.value = this.value.slice(0, this.maxLength);
      }
      if (this.type === "email") {
        if (this.validateEmail(this.value)) {
          this.errorMsg = null;
        } else {
          this.errorMsg = "Please enter a valid email address";
        }
      }
      if (this.isAccNumber) {
        if ((this.isOptional && this.value) || !this.isOptional) {
          if (this.value.length !== 10) {
            this.errorMsg = "This field should contain exactly 10 characters";
          } else {
            this.errorMsg = null;
          }
        } else {
          this.errorMsg = null;
        }
      }
      this.emitValue();
    },
    emitValue: function () {
      if (this.isAmount) {
        this.$emit("input", Number(this.value.replace(/,/g, "")));
      } else if (this.type === "email" || this.isAccNumber) {
        this.$emit("input", {
          value: this.value,
          isValid: !this.errorMsg,
        });
      } else {
        this.$emit("input", this.value);
      }
      this.$emit("change", this.value);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "src/assets/scss/components/form-input";
</style>