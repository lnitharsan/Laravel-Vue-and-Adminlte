<template>
  <a @click="viewPhotos(profile.id)">
    <div
      class="profile-img border border-secondary shadow-sm"
      :style="{ backgroundImage: `url('${profile.profile_image}')` }"
    ></div>
  </a>
</template>

<script>
export default {
  props: ["profile"],
  name: "ProfileImageHolder",
  data() {
    return {};
  },
  methods: {

  }
};
</script>

<style scoped>
</style>