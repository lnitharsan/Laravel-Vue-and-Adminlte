<template>
	<div class="alert alert-dismissible" :class="'alert-'+type" role="alert">
		<h4 class="alert-heading" v-if="heading">{{ heading }}</h4>
		<div v-if="messages">
			<ul>
			<li v-for="(message, key) in messages" :key="key" v-html="message"></li>
			</ul>
		</div>
		<slot v-else></slot>
	</div>
</template>

<script>
export default {
	props: ['type', 'heading', 'messages'],
}
</script>

<style scoped>
.alert {
	border-radius: 0;
}
</style>