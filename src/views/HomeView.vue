<script setup>
import DataService from "../services/dataservice";
import { ref, onMounted } from "vue";
import { useCarStore } from "../stores/store";

const car = useCarStore()
const gyartok = ref([]);
// const telefonok = ref([]);
const valasztas = ref();
const valasztottId = ref();
const joAutok = ref([]);
// const szinek = ref([])

onMounted(async () => {
  gyartok.value = await DataService.getAllGyartok()
})

const mentes = (id) => {
    console.log(id)
}


// DataService.getAllTelefonok()
//   .then((resp) => {
//     telefonok.value = resp;
//     console.log(telefonok.value);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const valaszto = async () => {
  joAutok.value = await DataService.getCarById(valasztas.value)
};
</script>

<template>
  <div class="container">
        <h1 class="text-center">Car of the year 2023</h1>

        <div class="col-8 offset-2 col-md-6 offset-md-3 col-lg-4 offset-lg-4 my-4">
            <label class="form-label">Manufacturer:</label>
            <select class="form-select" v-model="valasztas" @change="valaszto">
                <option v-for="gyarto in gyartok" :value="gyarto.id" >{{ gyarto.name }}</option>
            </select>
            {{ valasztas }}
        </div>

        <div class="row">
            <div class="col-12 col-md-6 col-xl-4" v-for="auto in joAutok">
                <div class="card w-100">
                    <img :src="auto.pictureUrl" class="card-img-top p-3">
                    <div class="card-body">
                        <h5 class="card-title">{{ auto.model }}</h5>
                        <p class="card-text">
                          {{ auto.description }}
                        </p>
                        <p class="text-center mb-0">
                            <!-- <a href="vote.html" class="btn btn-primary">Vote</a> -->
                            <!-- <router-link class="btn btn-primary" :to="`/voting/${auto.id}`">Vote</router-link> -->
                            <router-link class="btn btn-primary" to="/voting" @click="car.setCarId(auto.id)">Vote</router-link>
                        </p>
                    </div>
                </div>
            </div>
        </div>

    </div>

  
</template>
