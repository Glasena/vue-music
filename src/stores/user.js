import { defineStore } from "pinia";


export default defineStore("user", {
    state: () => ({
        userLoggedIn: false,
    }),
    getters: {
        hiddenClass(state) {
            return !state.isOpen ? "hidden" : ""
        }
    }
});