import { Form as VeeForm, Field as VeeField, defineRule, ErrorMessage } from "vee-validate"
import {required } from '@vee-validate/rules';

export default {
    //esse install ai é coisa do vue, pra registrar plugin
    install(app) {
        app.component("VeeForm", VeeForm);
        app.component("VeeField", VeeField);
        app.component("ErrorMessage", ErrorMessage);
        defineRule('required', required);
    }
}