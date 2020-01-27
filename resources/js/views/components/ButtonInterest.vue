<template>
  <span
    class="badge badge-success float-right ml-1 p-2"
    v-if="interest_request && interest_request.request_status=='accepted'"
    v-html="Laravel.lang.general.interest_accepted"
  >Accepted</span>

  <span
    class="badge badge-danger float-right ml-1 p-2"
    v-else-if="interest_request && interest_request.request_status =='declined'"
    v-html="Laravel.lang.general.interest_declined"
  >Declined</span>

  <span
    class="badge badge-warning float-right ml-1 p-2 text-red"
    v-else-if="interest_request && interest_request.request_status == 'pending'"
    v-html="Laravel.lang.general.interest_pending"
  >Pending</span>

  <button class="btn btn-sm btn-outline-primary float-right ml-1" v-else @click="requestInterest()">
    <i class="fa fa-heart"></i>
  </button>
</template>

<script>
export default {
  props: ["interest_request", "profile_id"],
  name: "ButtonInterest",
  data() {
    return {
      isActive: false
    };
  },
  methods: {
    requestInterest() {
      let loadingModal = this.loadingModal();
      let $this = this;
      axios
        .get(route("user.api.interest.request"), {
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
          } else {
            this.messageModal(data, this.sendRequest);
          }
        });
    },

    sendRequest(response) {
      this.$emit("update:interest_request", response.data.request_counter);
    }
  }
};
</script>