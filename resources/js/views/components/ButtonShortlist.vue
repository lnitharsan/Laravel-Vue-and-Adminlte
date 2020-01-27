<template>
  <button
    class="btn btn-sm btn-primary float-right ml-1"
    v-on:click="unshortlist()"
    v-if="is_shortlist"
  >
    <i class="fa fa-star"></i>
  </button>

  <button class="btn btn-sm btn-outline-primary float-right ml-1" v-on:click="addShortlist()" v-else>
    <i class="fa fa-star"></i>
  </button>
</template>

<script>
export default {
  props: ["profile_id", "is_shortlist"],
  name: "ButtonShortlist",
  data() {
    return {};
  },
  methods: {
    addShortlist: function() {
      let $this = this;

      axios
        .post(route("user.api.shortlist.add"), {
          member_id: $this.profile_id
        })
        .then(response => {
          $this.$emit('update:is_shortlist', response.data.deleted != 1);
        });
    },

    unshortlist: function() {
      let $this = this;

      axios
        .post(route("user.api.shortlist.delete"), {
          member_id: $this.profile_id
        })
        .then(response => {
          $this.$emit('update:is_shortlist', false);
        })
        .catch(error => {
          $this.$emit('update:is_shortlist', false);

          bootbox.alert(error.response.data.message);
        });
    }
  }
};
</script>