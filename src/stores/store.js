import { defineStore } from "pinia"

export const useCarStore = defineStore({
    id: "car",
    state: () => ({
        selectedCarId: 0
    }),
    actions: {
        setCarId(id) {
            this.selectedCarId = id
        }
    }
})