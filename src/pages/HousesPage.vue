<template>
  <h1>Welcome to the Houses page!</h1>
  <span
    ><button
      class="btn btn-success"
      data-bs-toggle="modal"
      data-bs-target="#houseFormModal"
    >
      Create
    </button></span
  >
  <div class="row">
    <div class="col-md-4" v-for="h in houses" :key="h.id">
      <House :house="h" />
    </div>
  </div>

  <Modal id="houseFormModal">
    <template #modal-title>
      <h1>Whatcha Sellin?</h1>
    </template>
    <template #modal-body>
      <HouseForm />
    </template>
  </Modal>
</template>


<script>
import { housesService } from "../services/HousesService";
import { AppState } from "../AppState";
import { computed, onMounted } from "@vue/runtime-core";
import Pop from "../utils/Pop";
import { logger } from "../utils/Logger";
import { Modal } from "bootstrap";
export default {
  setup() {
    onMounted(async () => {
      try {
        await housesService.getAll();
      } catch (error) {
        logger.log(error);
        Pop.toast("Something went wrong", "error");
      }
    });
    return {
      houses: computed(() => AppState.houses),
    };
  },
};
</script>


<style lang="scss" scoped>
</style>