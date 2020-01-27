<template>
  <button
    class="btn btn-sm btn-outline-primary"
    @click="viewContact(profile_id)"
    title="View contact"
  >
    <i class="fas fa-mobile-alt"></i>
  </button>
</template>

<script>
export default {
  props: ["profile_id"],
  name: "ButtonViewContact",
  data() {
    return {
      isActive: false
    };
  },
  methods: {
    viewContact(profile_id) {
      let loadingModal = this.loadingModal();

      axios
        .get(route("user.api.contact.view"), {
          params: { member_id: profile_id }
        })
        .then(response => {
          loadingModal.close();
          $.dialog(response.data.body, response.data.title);
        })
        .catch(error => {
          const {
            response: { data }
          } = error;

          if (data.check_user === false) {
            this.openRegisterOrLoginModal();
          } else if (data.is_pending_user === true) {
            $.dialog(data.body, false);
          } else if (data.is_member === false) {
            $.dialog(data.body, data.title);
          } else if (data.is_upgrate === false) {
            this.openUpgrateModal(data.body, data.title);
          } else {
            Vue.prototype.$awn.warning(data.body);
          }

          loadingModal.close();
        });
    },

    viewContactDetails() {
      let $this = this;
      let dialog = bootbox.dialog({
        title: "Contact Details",
        message: '<p><i class="fa fa-spin fa-spinner"></i> Loading...</p>'
      });
      dialog.init(function() {
        axios
          .get(route("user.api.contact.view"), {
            params: {
              profile_id: $this.profile_id
            }
          })
          .then(response => {
            dialog.find(".modal-header .modal-title").html(response.data.title);
            dialog.find(".modal-body .bootbox-body").html(response.data.body);
          })
          .catch(error => {
            bootbox.alert(error.response.data.error);
          });
      });
    }
  }
};
</script>