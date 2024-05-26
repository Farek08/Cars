<template>
    <div class="container">
        <h1 class="text-center">Voting</h1>


        <div class="form col-10 offset-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3 my-4">

            <div class="mb-3">
                <label for="car" class="form-label">Selected car:</label>
                <select id="car" class="form-select" v-model="selectedCarId">
                    <option v-for="auto in autok" :value="auto.id">{{ auto.model }}</option>
                </select>
            </div>

            <div class="mb-3">
                <label for="email" class="form-label">Your e-mail address:</label>
                <input v-model="email" type="text" class="form-control" id="email">
            </div>

            <div class="mb-3">
                <label for="comment" class="form-label">Comment:</label>
                <textarea v-model="comment" id="comment" class="form-control" rows="3"></textarea>
            </div>

            <div class="mb-3">
                <input type="checkbox" id="acceptedConditions" class="form-check-input">
                <label for="acceptedConditions" class="form-check-label">Accept terms of use</label>
            </div>

            <div class="mb-3 text-center">
                <input @click="szavazo" type="button" value="Vote" class="btn btn-primary" data-bs-toggle="modal"
                    data-bs-target="#successfullVoteModal">
            </div>


            <div class="alert alert-danger alert-dismissible fade show" role="alert">
                Please accept the terms of use!
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        </div>

        <div class="modal fade" id="successfullVoteModal" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header mx-auto">
                        <h5 class="modal-title text-center">Your vote has been successfully registered</h5>
                    </div>
                    <div class="modal-footer mx-auto">
                        <a class="btn btn-secondary" href="car-list.html">Back to list</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import DataService from "../services/dataservice";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router"
import { useCarStore } from "../stores/store";

const route = useRoute()
const autok = ref([])
const selectedCarId = ref()
const email = ref("")
const comment = ref("")

const car = useCarStore()

onMounted(async () => {
    selectedCarId.value = route.params.id
    autok.value = await DataService.getCarById("")
    console.log(autok.value);
    console.log(car.selectedCarId)
})

const szavazo = async () => {
    const akt_szavazat = {
        carId: selectedCarId.value,
        email: email.value,
        comment: comment.value
    }

    try {
        const res = await DataService.saveVote(akt_szavazat)
        alert("Sikeresen elkülted a szavazatodat.")
    } catch (error) {
        console.log(error.message);
    }

    console.log(res);
}
</script>