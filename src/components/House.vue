<template>
  <div class="component">
    <h1></h1>
  </div>
  <!-- <img class="house-img rounded-top w-100" :src="house.imgUrl" />
  <div class="p-1 text-center">
    <p class="m-0">
      <b>{{ house.bedrooms }} bed - {{ house.bathrooms }} bath</b>
    </p>
    <p>
      <b>${{ house.price }}</b>
    </p>
    <p>
      <b>Year built: {{ house.year }}</b>
    </p>
  </div> -->

  <div class="bg-light elevation-1 rounded">
    <img
      class="house-img rounded-top w-100"
      :src="house.imgUrl"
      alt="house image"
    />
    <div class="p-3">
      <p>
        <b
          >Bedrooms: {{ house.bathrooms }} - Bathrooms: {{ house.bathrooms }} -
          Levels: {{ house.levels }}</b
        >
      </p>
      <p>{{ house.description }}</p>
      <div class="d-flex align-items-center">
        <div class="mx-2">
          <p>
            <b>{{ house.year }}</b>
          </p>
        </div>
        <p class="m-0">
          <em>${{ house.price }}</em>
        </p>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    house: {
      type: Object,
      required: true,
    },
  },
  setup() {
    return {};
  },
};
</script>


<style lang="scss" scoped>
</style>