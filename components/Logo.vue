<template>
	<nuxt-link to="/">
		<div class="page-logo">
			<img :src="logoImg" alt="logo" />
		</div>
	</nuxt-link>
</template>
<script>
export default {
	computed: {
		logoImg() {
			return this.$store.state.options.logoImg;
		}
	}
};
</script>
<style lang="scss" scoped>
.page-logo {
	width: 164px;
	img {
		display: block;
		width: 100%;
		height: auto;
	}
}
</style>
