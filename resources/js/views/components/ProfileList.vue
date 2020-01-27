<template>
  <ul class="profile-lists list-group" v-if="profiles">
    <li v-for="(profile, index) in profiles" :key="index" class="list-group-item">
      <div class="row profile-list-body">
        <div class="col-4">
          <profile-image-holder :profile="profile"></profile-image-holder>
        </div>

        <div class="col-8 pl-0 profile-details">
          <h5 class="member-name" @click="openProfile(profile.id)">
            {{ profile.name }}
            <span class="member-id">({{ profile.profile_id }})</span>
          </h5>
          <p class="member-desc" v-html="profile.description"></p>
        </div>
      </div>
      <div class="row pt-3 profile-list-footer">
        <div class="col-12">
          <button-view-contact :profile_id="profile.id"></button-view-contact>

          <button-horoscope :profile_id="profile.id"></button-horoscope>

          <button-shortlist :is_shortlist.sync="profile.is_shortlist" :profile_id="profile.id"></button-shortlist>
            <button-interest
                    :interest_request.sync="profile.interest_request"
                    :profile_id="profile.id"
            ></button-interest>
<!--          <button-interest v-if="interest_requests" :interest_request.sync="interest_requests[0][profile.id]" :profile_id="profile.id"></button-interest>-->
        </div>
      </div>
      <div class="clearfix"></div>
    </li>
  </ul>
</template>

<script>
import ButtonInterest from "./ButtonInterest";
import ButtonViewContact from "./ButtonViewContact";
import ButtonHoroscope from "./ButtonHoroscope";
import ButtonShortlist from "./ButtonShortlist";
import ProfileImageHolder from "./ProfileImageHolder";

export default {
  props: ["profiles"],
  name: "ProfileList",
  components: {
    ButtonInterest,
    ButtonViewContact,
    ButtonHoroscope,
    ButtonShortlist, ProfileImageHolder
  },
  data() {
    return {
      isActive: false
    };
  },
  methods: {
    openProfile(profile_id) {
      this.$root.$emit('openProfileModal', profile_id);
    }
  }
};
</script>