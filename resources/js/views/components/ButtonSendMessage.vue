<template>
  <button
    class="btn btn-sm btn-outline-primary"
    @click="openSendMessageForm()"
    title="Send message"
  >
    <i class="fa fa-envelope"></i>
  </button>
</template>

<script>
export default {
  props: ["profile_id"],
  name: "ButtonSendMessage",
  data() {
    return {
      sendMessageModal: null
    };
  },
  methods: {
    openSendMessageForm() {
      let loadingModal = this.loadingModal();
      let $this = this;
      axios
        .get(route("user.api.message.mail.get"), {
          params: {
            member_id: $this.profile_id
          }
        })
        .then(response => {
          const { data } = response;
          loadingModal.close();
          this.sendMessageForm(data);
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
          } else if (data.is_upgrate === false) {
            this.openUpgrateModal(data.body, data.title);
          } else {
            this.messageModal(data, this.sendRequest);
          }
        });
    },

    sendMessageForm(data) {
      let $this = this;
      this.sendMessageModal = $.confirm({
        title: data.title,
        content: data.body,
        buttons: {
          send_message: {
            text: "Send Message",
            action: function() {
              $this.sendMessage();

              return false;
            }
          },
          cancel: function() {
            return true;
          }
        },
        onContentReady: function() {
          // bind to events
          var jc = this;
          this.$content.find("form").on("submit", function(e) {
            // if the user submits the form by pressing enter in the field.
            e.preventDefault();
            jc.$$send_message.trigger("click"); // reference the button and click it
          });
        }
      });
    },

    sendMessage() {
      let $this = this;
      let $form = this.sendMessageModal.$content.find("form");
      let formData = $form.serializeObject();

      axios
        .post(route("user.api.message.mail.post"), formData)
        .then(response => {
          if (response.data) {
            $.confirm({
              title: "Successfully!",
              content: response.data.message,
              type: "green",
              typeAnimated: true,
              buttons: {
                close: function() {}
              }
            });

            $this.sendMessageModal.close();
          }
        })
        .catch(error => {
          $.alert(error.response.data.message);
          $this.sendMessageModal.close();
        });
    }
  }
};
</script>