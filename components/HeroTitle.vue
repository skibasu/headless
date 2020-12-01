<template>
	<section class="page-hero-title">
		<img
			class="page-hero-title__img"
			:src="acfProps.hero_title_background"
			alt=""
		/>
		<div class="page-hero-title__wrapper">
			<div class="page-hero-title__container">
				<h1 class="page-title">{{ wpProps.title }}</h1>
				<p class="page-text page-hero-title__text">
					{{ acfProps.hero_title_content }}
				</p>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	props: {
		wpProps: {
			type: Object
		},

		acfProps: {
			type: Object
		}
	}
};
</script>

<style lang="scss" scoped>
.page-hero-title {
	color: $color-white;
	position: relative;
	min-height: 610px;
	width: 100%;

	&__wrapper {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		right: 0;
	}
	&__container {
		margin: 0 auto;
		padding: 200px 40px 40px;
	}
	&__container,
	&__img {
		width: 100%;
		height: 100%;
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		z-index: 1;
		object-fit: cover;
	}
	&__img {
		z-index: 0;
	}
	&__text {
		max-width: 564px;
		color: #b1bac2;
	}
}
</style>
