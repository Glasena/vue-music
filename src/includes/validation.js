import { Form as VeeForm, Field as VeeField } from "vee-validate"

export default {
    //esse install ai é coisa do vue, pra registrar plugin
    install(app) {
        app.component("VeeForm", VeeForm),
        app.component("VeeField", VeeField)
    }
}