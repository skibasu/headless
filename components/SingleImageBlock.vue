<template>
	<section
		class="block page-single-image-block"
		:style="'backgroundImage: url(' + acfProps.bckground + ')'"
	>
		<div class="container">
			<h2 class="block-title">{{ acfProps.title }}</h2>
			<p class="block-description">{{ acfProps.decription }}</p>
			<figure class="block-image">
				<img
					class="block-image__image"
					:src="acfProps.picture"
					alt=""
				/>
			</figure>
			<ul class="block-list">
				<li
					class="block-list__elem"
					v-for="elem in acfProps.options"
					:key="elem.options_item"
				>
					{{ elem.options_item }}
				</li>
			</ul>
		</div>
	</section>
</template>

<script>
export default {
	props: {
		acfProps: {
			type: Object
		}
	}
};
</script>

<style lang="scss" scoped>
.page-single-image-block {
	color: $color-white;
	text-align: center;
	background: {
		size: cover;
		repeat: no-repeat;
		position: center center;
	}
}
</style>
