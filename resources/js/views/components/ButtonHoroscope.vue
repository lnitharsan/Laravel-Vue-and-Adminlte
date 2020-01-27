<template>
  <button class="btn btn-sm btn-outline-primary" @click="viewHoroscope()" title="View horoscope">
    <i class="fa fa-file"></i>
  </button>
</template>

<script>
export default {
  props: ["profile_id"],
  name: "ButtonHoroscope",
  data() {
    return {
      isActive: false
    };
  },
  methods: {
    viewHoroscope() {
      let loadingModal = this.loadingModal();

      axios
        .get(route("user.api.horoscope.view"), {
          params: { member_id: this.profile_id }
        })
        .then(response => {
          const { data } = response;
          loadingModal.close();
          $.dialog(data.body, data.title);
        })
        .catch(error => {
          const {
            response: { data }
          } = error;

          loadingModal.close();

          if (data.is_auth === false) {
            this.openRegisterOrLoginModal();
          } else if (data.auth_status == "pending") {
            $.dialog(data.body, data.title);
          } else if (data.is_already_requested === true) {
            $.dialog(data.body, data.title);
          } else if (data.no_horoscope === true) {
            this.messageModal(data);
          } else {
            this.messageModal(data);
          }
        });
    }
  }
};
</script>