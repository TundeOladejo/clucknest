<template>
  <div>
    <div class="form-input__wrapper" :class="hasContent">
        <input :class="this.type === 'password' ? 'password-input' : ''" :id="id" :inputmode="inputMode"
            :placeholder="placeholder" :pattern="pattern" :isNumber="isNumber"
            :type="type === 'password' ? passwordType : type" :maxlength="maxlength" @blur="onBlur" @focus="onFocus"
            @input="onInput" autocomplete="off" ref="formInput" v-model="value" :readonly="readonly"
            :disabled="disabled" />
        <i @click.prevent="hidePassword = !hidePassword" class="form-input__show-password"
            v-if="type === 'password'">
            <icon-base :view-box="[0, 0, 24, 24]" height="100%" icon-name="show/hide" width="24px">
                <IconHide v-show="!hidePassword" />
                <IconShow v-show="hidePassword" />
            </icon-base>
        </i>
    </div>
    <p class="error-msg" v-if="showError">{{ errorMsg }}</p>
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
      let value = this.$refs.formInput.value;
      if (this.type === "email") {
        this.$emit("input", {
          value: value,
          isValid: !this.errorMsg,
        });
      }
      else {
        this.$emit("input", value);
      }
      this.$emit("change", this.value);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "src/assets/scss/components/form-input";
</style>
