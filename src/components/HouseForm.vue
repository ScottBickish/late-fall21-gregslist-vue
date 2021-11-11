<template>
  <form @submit.prevent="create()">
    <div class="mb-3 d-flex justify-content-between">
      <div>
        <label for="bedrooms" class="form-label">Bedrooms</label>
        <input
          type="number"
          class="form-control"
          name="bedrooms"
          id="bedrooms"
          aria-describedby="bedrooms"
          placeholder="Bedrooms..."
          required
          v-model="house.bedrooms"
        />
      </div>
      <div>
        <label for="bathrooms" class="form-label">bathrooms</label>
        <input
          type="number"
          class="form-control"
          name="bathrooms"
          id="bathrooms"
          aria-describedby="bathrooms"
          placeholder="bathrooms..."
          required
          v-model="house.bathrooms"
        />
      </div>
    </div>
    <div class="mb-3 d-flex justify-content-between">
      <div>
        <label for="levels" class="form-label">Levels</label>
        <input
          type="number"
          class="form-control"
          name="levels"
          id="levels"
          aria-describedby="levels"
          placeholder="Levels..."
          min="1"
          required
          v-model="house.levels"
        />
      </div>
      <div>
        <label for="imgUrl" class="form-label">Image Url</label>
        <input
          type="url"
          class="form-control"
          name="imgUrl"
          id="imgUrl"
          aria-describedby="imgUrl"
          placeholder="Image Url..."
          required
          v-model="house.imgUrl"
        />
      </div>
      <div>
        <label for="year" class="form-label">Year</label>
        <input
          type="text"
          class="form-control"
          name="year"
          id="year"
          aria-describedby="year"
          placeholder="Year..."
          required
          v-model="house.year"
        />
      </div>
      <div>
        <label for="price" class="form-label">Price</label>
        <input
          type="number"
          class="form-control"
          name="price"
          id="price"
          aria-describedby="price"
          placeholder="Price..."
          min="1"
          required
          v-model="house.price"
        />
      </div>
    </div>
    <div class="mb-3"></div>
    <div class="mb-3">
      <div>
        <label for="description" class="form-label">Description</label>
        <textarea
          type="text"
          class="form-control"
          name="description"
          id="description"
          aria-describedby="description"
          placeholder="Description..."
          min="5"
          max="250"
          required
          v-model="house.description"
        >
        </textarea>
      </div>
    </div>

    <button type="submit" class="btn btn-primary">Create</button>
  </form>
</template>


<script>
import { ref } from "@vue/reactivity";
import { housesService } from "../services/HousesService";
import { logger } from "../utils/Logger";
import { Modal } from "bootstrap";
export default {
  setup() {
    const house = ref({});
    return {
      house,
      async create() {
        try {
          logger.log(house);
          await housesService.create(house.value);
          Modal.getOrCreateInstance(
            document.getElementById("houseFormModal")
          ).hide();
        } catch (error) {
          logger.error(error);
        }
      },
    };
  },
};
</script>


<style lang="scss" scoped>
</style>