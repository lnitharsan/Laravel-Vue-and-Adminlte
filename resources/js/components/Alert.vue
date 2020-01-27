<template>
	<div class="alert alert-dismissible fade show" :class="'alert-'+type" role="alert">
		<p v-if="message">{{ message }}</p>
		<slot v-else></slot>
	</div>
</template>

<script>
export default {
	props: ['type', 'message'],
}
</script>

<style scoped>
.alert {
	border-radius: 0;
}
</style>