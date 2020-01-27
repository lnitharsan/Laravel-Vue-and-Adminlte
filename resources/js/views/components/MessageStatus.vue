<template>
    <div class="float-right" v-if="message.is_replied" v-html="message.status"></div>
    <div v-else>
                      <span
                              v-if="message.is_sent_message"
                              class="badge badge-dark float-left"
                      >Pending</span>
        <button
                v-else-if="message.subfolder === 'mail'"
                class="btn btn-sm btn-outline-primary float-right ml-1"
                @click="replyMail(message.send_msg_permission, message.name, message.party_id, message.subject, message.message_id, message.bypass_restriction)"
        >
            <i class="fa fa-ban" aria-hidden="true"></i> Reply
        </button>
        <div v-else>
            <button
                    class="btn btn-sm btn-outline-primary float-right ml-1"
                    @click="declineMessages(message.party_id, message.message_id, message.subfolder, message.bypass_restriction)"
            >
                <i class="fa fa-ban" aria-hidden="true"></i> DECLINE
            </button>
            <button
                    v-if="(message.msg_subject=='msg_photo_subject') ||( horoscope===false && message.msg_subject=='msg_horoscope_subject')"
                    class="btn btn-sm btn-warning float-right ml-1 is-accept-request"
                    @click="acceptMessagePhotoRequest(message.msg_subject)"
            >
                <i class="fa fa-check-circle-o" aria-hidden="true"></i>ACCEPT
            </button>
            <button
                    v-else
                    class="btn btn-sm btn-outline-primary float-right ml-1"
                    @click="acceptMessages(message.party_id, message.message_id, message.subfolder, message.bypass_restriction)"
            >
                <i class="fa fa-check-circle-o" aria-hidden="true"></i> ACCEPT
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MessageStatus",
        props: ["horoscope","message"],
    }
</script>

<style scoped>

</style>